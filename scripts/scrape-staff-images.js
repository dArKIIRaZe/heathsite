const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
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

async function scrapeStaffImages() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to meet-our-staff page...');
    await page.goto('https://www.heath.derbyshire.sch.uk/meet-our-staff', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    console.log('Page loaded, extracting image URLs...');
    
    // Get all image sources from the page
    const imageUrls = await page.evaluate(() => {
      const images = [];
      const imgElements = document.querySelectorAll('img');
      
      imgElements.forEach(img => {
        let src = img.src || img.getAttribute('data-src') || img.getAttribute('data-original');
        if (src && !src.startsWith('data:')) {
          // Convert relative URLs to absolute
          if (src.startsWith('/')) {
            src = 'https://www.heath.derbyshire.sch.uk' + src;
          } else if (!src.startsWith('http')) {
            src = 'https://www.heath.derbyshire.sch.uk/' + src;
          }
          images.push({
            src: src,
            alt: img.alt || '',
            filename: src.split('/').pop().split('?')[0] // Get filename, remove query params
          });
        }
      });
      
      // Also check for images in lightbox links
      const links = document.querySelectorAll('a[data-lightbox]');
      links.forEach(link => {
        const href = link.href || link.getAttribute('data-href');
        if (href && !href.startsWith('data:') && !href.startsWith('javascript:')) {
          let fullUrl = href;
          if (fullUrl.startsWith('/')) {
            fullUrl = 'https://www.heath.derbyshire.sch.uk' + fullUrl;
          } else if (!fullUrl.startsWith('http')) {
            fullUrl = 'https://www.heath.derbyshire.sch.uk/' + fullUrl;
          }
          const filename = fullUrl.split('/').pop().split('?')[0];
          if (filename.match(/\.(jpg|jpeg|png|gif)$/i)) {
            images.push({
              src: fullUrl,
              alt: link.getAttribute('data-title') || link.getAttribute('data-lightbox') || '',
              filename: filename
            });
          }
        }
      });
      
      return images;
    });
    
    console.log(`Found ${imageUrls.length} images`);
    
    // Filter for staff images we need (especially the missing ones)
    const targetImages = imageUrls.filter(img => {
      const filename = img.filename.toLowerCase();
      return filename.includes('rashid') || 
             filename.includes('shardlow') ||
             filename.includes('staff') ||
             filename.includes('teacher') ||
             filename.includes('assistant') ||
             filename.match(/^(mr_|mrs_|miss_|ms_)/i) ||
             filename.match(/^[a-z]_[a-z]/i); // Pattern like s_shardlow.jpg
    });
    
    console.log(`Found ${targetImages.length} staff-related images`);
    
    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, '..', 'public', 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    // Download each image
    const downloaded = new Set();
    for (const img of targetImages) {
      const filename = img.filename;
      if (downloaded.has(filename)) continue;
      
      const filepath = path.join(imagesDir, filename);
      
      // Skip if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`Skipping (already exists): ${filename}`);
        continue;
      }
      
      try {
        await downloadImage(img.src, filepath);
        downloaded.add(filename);
      } catch (error) {
        console.error(`Failed to download ${filename}:`, error.message);
      }
    }
    
    // Specifically look for the missing images
    console.log('\nChecking for specific missing images...');
    const missingImages = [
      'mrs_i_rashid_teaching_assistant_1_.jpg',
      's_shardlow.jpg',
      'Mrs_I_Rashid_Teaching_Assistant_1_.jpg',
      'S_Shardlow.jpg'
    ];
    
    for (const missingImg of missingImages) {
      const filepath = path.join(imagesDir, missingImg);
      if (fs.existsSync(filepath)) {
        console.log(`✓ Found: ${missingImg}`);
      } else {
        // Try to find it in the scraped images
        const found = imageUrls.find(img => 
          img.filename.toLowerCase() === missingImg.toLowerCase()
        );
        if (found) {
          try {
            await downloadImage(found.src, filepath);
            console.log(`✓ Downloaded: ${missingImg}`);
          } catch (error) {
            console.error(`✗ Failed to download ${missingImg}:`, error.message);
          }
        } else {
          console.log(`✗ Not found: ${missingImg}`);
        }
      }
    }
    
    console.log('\nScraping complete!');
    
  } catch (error) {
    console.error('Error scraping images:', error);
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeStaffImages().catch(console.error);

