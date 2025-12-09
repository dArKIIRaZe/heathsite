const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.heath.derbyshire.sch.uk';
const CDN_URL = 'https://uk.sz-cdn.net';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Ensure images directory exists
fs.ensureDirSync(IMAGES_DIR);

// Track downloaded images
const downloadedImages = new Set();
const imageMap = new Map(); // Maps original URL to local path

// Download function
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        return downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        try { fs.unlinkSync(filePath); } catch (e) {}
        return reject(new Error(`Status: ${response.statusCode}`));
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      try { fs.unlinkSync(filePath); } catch (e) {}
      reject(err);
    });
  });
}

// Extract image URLs from HTML
function extractImageUrls(html) {
  const $ = cheerio.load(html);
  const imageUrls = new Set();
  
  // Find all img tags
  $('img[src]').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src && !src.startsWith('data:') && !src.startsWith('/')) {
      imageUrls.add(src);
    }
  });
  
  // Find background images in style attributes
  $('[style*="background-image"]').each((i, elem) => {
    const style = $(elem).attr('style');
    const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
    if (match && match[1] && !match[1].startsWith('data:')) {
      imageUrls.add(match[1]);
    }
  });
  
  return Array.from(imageUrls);
}

// Download an image
async function downloadImage(imageUrl) {
  if (downloadedImages.has(imageUrl)) {
    return imageMap.get(imageUrl);
  }
  
  try {
    let url = imageUrl;
    if (!url.startsWith('http')) {
      if (url.startsWith('//')) {
        url = 'https:' + url;
      } else if (url.includes('sz-cdn.net')) {
        url = 'https://' + url.replace(/^\/\//, '');
      } else {
        url = BASE_URL + (url.startsWith('/') ? url : '/' + url);
      }
    }
    
    // Extract filename
    const urlPath = new URL(url).pathname;
    const filename = path.basename(urlPath) || 'image.jpg';
    const ext = path.extname(filename) || '.jpg';
    const baseName = path.basename(filename, ext);
    
    // Create safe filename
    const safeFilename = `${baseName}${ext}`;
    const localPath = path.join(IMAGES_DIR, safeFilename);
    
    console.log(`Downloading: ${url}`);
    await downloadFile(url, localPath);
    
    const publicPath = `/images/${safeFilename}`;
    downloadedImages.add(imageUrl);
    imageMap.set(imageUrl, publicPath);
    imageMap.set(url, publicPath);
    
    console.log(`✓ Downloaded: ${safeFilename}`);
    return publicPath;
  } catch (error) {
    console.error(`✗ Failed to download ${imageUrl}:`, error.message);
    return null;
  }
}

// Main function
async function downloadAllImages() {
  console.log('Finding and downloading all images...\n');
  
  // Find all page.tsx files
  const APP_DIR = path.join(__dirname, '..', 'app');
  const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });
  
  const allImageUrls = new Set();
  
  // Extract image URLs from all pages
  for (const pageFile of pageFiles) {
    const content = fs.readFileSync(pageFile, 'utf8');
    
    // Extract from HTML content in dangerouslySetInnerHTML
    const htmlMatch = content.match(/dangerouslySetInnerHTML=\{\{ __html: `([^`]+)`/);
    if (htmlMatch) {
      const html = htmlMatch[1].replace(/\\n/g, '\n').replace(/\\`/g, '`');
      const urls = extractImageUrls(html);
      urls.forEach(url => allImageUrls.add(url));
    }
    
    // Also check for direct image URLs in the file
    const urlMatches = content.matchAll(/https?:\/\/[^\s"'`<>]+\.(jpg|jpeg|png|gif|svg|webp)/gi);
    for (const match of urlMatches) {
      allImageUrls.add(match[0]);
    }
  }
  
  console.log(`Found ${allImageUrls.size} unique image URLs\n`);
  
  // Download all images
  for (const imageUrl of allImageUrls) {
    await downloadImage(imageUrl);
  }
  
  // Save image mapping
  const mappingPath = path.join(__dirname, '..', 'image-mapping.json');
  const mapping = Object.fromEntries(imageMap);
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  
  console.log(`\n✓ Downloaded ${downloadedImages.size} images`);
  console.log(`Images saved to: ${IMAGES_DIR}`);
  console.log(`Mapping saved to: ${mappingPath}`);
}

downloadAllImages().catch(console.error);

