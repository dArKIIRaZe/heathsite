const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const path = require('path');

const BASE_URL = 'https://www.heath.derbyshire.sch.uk';
const FONTS_DIR = path.join(__dirname, '..', 'public', 'assets', 'fonts');

// Ensure fonts directory exists
fs.ensureDirSync(FONTS_DIR);

// Try to download custom font files from various possible locations
const fontFiles = [
  'font-icons.eot',
  'font-icons.woff',
  'font-icons.ttf',
  'font-icons.svg',
  'lined-icons.eot',
  'lined-icons.woff',
  'lined-icons.ttf',
  'lined-icons.svg',
];

// Possible base paths to try
const basePaths = [
  '/theme/_blueprint/css/fonts/',
  '/theme/_blueprint/fonts/',
  '/theme/fonts/',
  '/css/fonts/',
  '/fonts/',
];

// Download function
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
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

// Download fonts
async function downloadCustomFonts() {
  console.log('Attempting to download custom font files...');
  
  for (const fontFile of fontFiles) {
    let downloaded = false;
    
    for (const basePath of basePaths) {
      const url = `${BASE_URL}${basePath}${fontFile}`;
      const filePath = path.join(FONTS_DIR, fontFile);
      
      try {
        await downloadFile(url, filePath);
        console.log(`✓ Downloaded: ${fontFile} from ${basePath}`);
        downloaded = true;
        break;
      } catch (error) {
        // Try next path
        continue;
      }
    }
    
    if (!downloaded) {
      console.log(`✗ Could not download ${fontFile}`);
    }
  }
  
  console.log('\nCustom font download attempt complete!');
  console.log('Note: If fonts could not be downloaded, icons may use fallback styling.');
}

downloadCustomFonts().catch(console.error);

