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
  const url = 'https://heathprimary.plus.co.uk/_file/media/354/sar_request_form_2021_.docx';
  const filesDir = path.join(__dirname, '..', 'public', 'files');
  const filepath = path.join(filesDir, 'sar_request_form_2021_.docx');
  
  // Create files directory if it doesn't exist
  if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir, { recursive: true });
  }
  
  // Skip if file already exists
  if (fs.existsSync(filepath)) {
    console.log(`File already exists: ${path.basename(filepath)}`);
    return;
  }
  
  try {
    console.log(`Downloading ${url}...`);
    await downloadFile(url, filepath);
    console.log('Download complete!');
  } catch (error) {
    console.error('Error downloading file:', error.message);
    process.exit(1);
  }
}

downloadSarForm().catch(console.error);

