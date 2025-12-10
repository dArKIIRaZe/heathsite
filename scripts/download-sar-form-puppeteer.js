const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        return downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`Failed to download: ${url} - Status: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadSarForm() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to GDPR page...');
    await page.goto('https://www.heath.derbyshire.sch.uk/GDPR', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    console.log('Page loaded, finding download link...');
    
    // Find the download link
    const downloadUrl = await page.evaluate(() => {
      const link = document.querySelector('a[title*="subject access request"]');
      if (link) {
        return link.href;
      }
      return null;
    });
    
    if (!downloadUrl) {
      throw new Error('Could not find download link on page');
    }
    
    console.log(`Found download URL: ${downloadUrl}`);
    
    const filesDir = path.join(__dirname, '..', 'public', 'files');
    const filepath = path.join(filesDir, 'sar_request_form_2021_.docx');
    
    // Create files directory if it doesn't exist
    if (!fs.existsSync(filesDir)) {
      fs.mkdirSync(filesDir, { recursive: true });
    }
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`File already exists: ${path.basename(filepath)}`);
      await browser.close();
      return;
    }
    
    // Download the file
    console.log(`Downloading file...`);
    await downloadFile(downloadUrl, filepath);
    console.log('Download complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

downloadSarForm().catch(console.error);

