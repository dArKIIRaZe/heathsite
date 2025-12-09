const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Removing cookie banner from ${pageFiles.length} files...\n`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;
  
  // Remove cookie banner HTML
  const cookieBannerPattern = /<div[^>]*cc-window[^>]*>[\s\S]*?<\/div>\s*(?=<script|$)/g;
  if (content.match(cookieBannerPattern)) {
    content = content.replace(cookieBannerPattern, '');
    modified = true;
  }
  
  // Remove cookie consent script tags
  const cookieScriptPattern = /<script[^>]*cookieconsent[^>]*>[\s\S]*?<\/script>/gi;
  if (content.match(cookieScriptPattern)) {
    content = content.replace(cookieScriptPattern, '');
    modified = true;
  }
  
  // Remove cookieconsent.initialise calls
  const cookieInitPattern = /window\.cookieconsent\.initialise\([\s\S]*?\}\);/g;
  if (content.match(cookieInitPattern)) {
    content = content.replace(cookieInitPattern, '');
    modified = true;
  }
  
  // Remove Script tags for cookieconsent
  const cookieScriptTagPattern = /<Script[^>]*cookieconsent[^>]*\/>/gi;
  if (content.match(cookieScriptTagPattern)) {
    content = content.replace(cookieScriptTagPattern, '');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✓ Removed from: ${path.relative(APP_DIR, pageFile)}`);
  }
});

console.log('\nDone removing cookie banners!');

