const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const path = require('path');

const BASE_URL = 'https://www.heath.derbyshire.sch.uk';
const FONTS_DIR = path.join(__dirname, '..', 'public', 'assets', 'fonts');

// Ensure fonts directory exists
fs.ensureDirSync(FONTS_DIR);

// Font files to download
const fontFiles = [
  'font-icons.eot',
  'font-icons.woff',
  'font-icons.ttf',
  'font-icons.svg',
  'lined-icons.eot',
  'lined-icons.woff',
  'lined-icons.ttf',
  'lined-icons.svg',
  'Simple-Line-Icons.eot',
  'Simple-Line-Icons.woff',
  'Simple-Line-Icons.ttf',
  'Simple-Line-Icons.svg',
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
        return reject(new Error(`Failed: ${url} - Status: ${response.statusCode}`));
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
async function downloadFonts() {
  console.log('Downloading font files...');
  
  // Try multiple possible paths
  const possiblePaths = [
    '/theme/_blueprint/css/fonts/',
    '/theme/_blueprint/fonts/',
    '/theme/fonts/',
  ];
  
  for (const fontFile of fontFiles) {
    let downloaded = false;
    
    for (const fontPath of possiblePaths) {
      const url = `${BASE_URL}${fontPath}${fontFile}`;
      const filePath = path.join(FONTS_DIR, fontFile);
      
      try {
        console.log(`Trying: ${url}`);
        await downloadFile(url, filePath);
        console.log(`✓ Downloaded: ${fontFile}`);
        downloaded = true;
        break;
      } catch (error) {
        // Try next path
        continue;
      }
    }
    
    if (!downloaded) {
      console.error(`✗ Could not download ${fontFile} from any path`);
    }
  }
  
  console.log('\nFont download complete!');
}

downloadFonts().catch(console.error);

