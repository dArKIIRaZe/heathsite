const https = require('https');
const http = require('http');
const fs = require('fs-extra');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '..', 'public', 'assets', 'fonts');

// Ensure fonts directory exists
fs.ensureDirSync(FONTS_DIR);

// Font Awesome 4.2.0 font files from CDN
const fontFiles = [
  {
    name: 'fontawesome-webfont.eot',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.eot'
  },
  {
    name: 'fontawesome-webfont.woff',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.woff'
  },
  {
    name: 'fontawesome-webfont.ttf',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf'
  },
  {
    name: 'fontawesome-webfont.svg',
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.svg'
  }
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
async function downloadFontAwesome() {
  console.log('Downloading Font Awesome 4.2.0 font files...');
  
  for (const fontFile of fontFiles) {
    const filePath = path.join(FONTS_DIR, fontFile.name);
    
    try {
      console.log(`Downloading: ${fontFile.name}`);
      await downloadFile(fontFile.url, filePath);
      console.log(`✓ Downloaded: ${fontFile.name}`);
    } catch (error) {
      console.error(`✗ Failed to download ${fontFile.name}:`, error.message);
    }
  }
  
  console.log('\nFont Awesome download complete!');
}

downloadFontAwesome().catch(console.error);

