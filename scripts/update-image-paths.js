const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');
const MAPPING_FILE = path.join(__dirname, '..', 'image-mapping.json');

// Read image mapping
let imageMapping = {};
if (fs.existsSync(MAPPING_FILE)) {
  imageMapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
}

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Updating image paths in ${pageFiles.length} files...\n`);

let totalReplacements = 0;

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;
  let fileReplacements = 0;
  
  // Replace external image URLs with local paths
  Object.entries(imageMapping).forEach(([originalUrl, localPath]) => {
    // Replace in img src attributes
    const imgPattern = new RegExp(`src=["']${originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'gi');
    if (content.match(imgPattern)) {
      content = content.replace(imgPattern, `src="${localPath}"`);
      modified = true;
      fileReplacements++;
    }
    
    // Replace in background-image URLs
    const bgPattern = new RegExp(`url\\(&quot;${originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}&quot;\\)`, 'gi');
    if (content.match(bgPattern)) {
      content = content.replace(bgPattern, `url(&quot;${localPath}&quot;)`);
      modified = true;
      fileReplacements++;
    }
    
    // Also try with different quote styles
    const bgPattern2 = new RegExp(`url\\(['"]${originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\)`, 'gi');
    if (content.match(bgPattern2)) {
      content = content.replace(bgPattern2, `url('${localPath}')`);
      modified = true;
      fileReplacements++;
    }
  });
  
  // Also replace common CDN URLs
  const cdnReplacements = [
    {
      from: /https:\/\/uk\.sz-cdn\.net\/heathprimary\/setting\/48\/180716093753547\/500x500\/large-logo\.png/gi,
      to: '/images/large-logo.png'
    },
    {
      from: /https:\/\/uk\.sz-cdn\.net\/heathprimary\/media\/14\/200219043424372\/475x360\/contact_tile\.jpg/gi,
      to: '/images/contact_tile.jpg'
    },
    {
      from: /https:\/\/uk\.sz-cdn\.net\/heathprimary\/media\/13\/200219043423834\/475x360\/twitter_tile\.jpg/gi,
      to: '/images/twitter_tile.jpg'
    },
    {
      from: /https:\/\/uk\.sz-cdn\.net\/heathprimary\/media\/81\/200618051711212\/[^"']*\/ceop\.png/gi,
      to: '/images/ceop.png'
    },
  ];
  
  cdnReplacements.forEach(({ from, to }) => {
    if (content.match(from)) {
      content = content.replace(from, to);
      modified = true;
      fileReplacements++;
    }
  });
  
  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✓ Updated ${fileReplacements} images in: ${path.relative(APP_DIR, pageFile)}`);
    totalReplacements += fileReplacements;
  }
});

console.log(`\n✓ Total: ${totalReplacements} image path replacements`);

