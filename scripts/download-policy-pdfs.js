const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const http = require('http');

const POLICIES_PAGE = path.join(__dirname, '..', 'app', 'policies-copy', 'page.tsx');
const PDFS_DIR = path.join(__dirname, '..', 'public', 'policies');

// Ensure PDFs directory exists
fs.ensureDirSync(PDFS_DIR);

// Read the policies page
const content = fs.readFileSync(POLICIES_PAGE, 'utf8');

// Extract all PDF and DOCX URLs
const urlPattern = /href="(https:\/\/heathprimary\.schoolzineplus\.co\.uk\/_file\/media\/[^"]+\.(pdf|docx))"/gi;
const urls = [];
let match;

while ((match = urlPattern.exec(content)) !== null) {
  const url = match[1];
  const extension = match[2];
  if (!urls.find(u => u.url === url)) {
    urls.push({ url, extension });
  }
}

console.log(`Found ${urls.length} PDF/DOCX files to download\n`);

// Download function
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        return downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

// Download all files
async function downloadAll() {
  const results = [];
  
  for (let i = 0; i < urls.length; i++) {
    const { url, extension } = urls[i];
    
    // Extract filename from URL
    const urlParts = url.split('/');
    const filename = urlParts[urlParts.length - 1];
    const safeFilename = filename.replace(/[^a-zA-Z0-9._-]/g, '_');
    const filePath = path.join(PDFS_DIR, safeFilename);
    
    console.log(`[${i + 1}/${urls.length}] Downloading: ${filename}`);
    
    try {
      await downloadFile(url, filePath);
      results.push({ url, localPath: `/policies/${safeFilename}`, originalFilename: filename });
      console.log(`  ✓ Saved to: ${safeFilename}\n`);
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}\n`);
      results.push({ url, localPath: null, error: error.message });
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
}

// Update the page with local paths
function updatePage(results) {
  let updatedContent = content;
  
  results.forEach(({ url, localPath, originalFilename }) => {
    if (localPath) {
      // Escape special regex characters in URL
      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`href="${escapedUrl}"`, 'g');
      updatedContent = updatedContent.replace(regex, `href="${localPath}"`);
      console.log(`Updated: ${originalFilename} -> ${localPath}`);
    }
  });
  
  fs.writeFileSync(POLICIES_PAGE, updatedContent);
  console.log('\n✓ Updated policies page with local paths');
}

// Main execution
downloadAll()
  .then((results) => {
    console.log('\n=== Download Summary ===');
    const successful = results.filter(r => r.localPath).length;
    const failed = results.filter(r => !r.localPath).length;
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);
    
    if (successful > 0) {
      updatePage(results);
    }
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });

