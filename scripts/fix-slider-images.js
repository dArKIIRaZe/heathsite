const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Fixing slider images in ${pageFiles.length} files...`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;
  
  // Fix slider image paths
  // Replace /s1, /s2.jpg, etc. with /heath/s1.jpg, /heath/s2.jpg, etc.
  const imageReplacements = [
    { from: /url\(&quot;\/s1&quot;\)/g, to: 'url(&quot;/heath/s1.jpg&quot;)' },
    { from: /url\(&quot;\/s1\.jpg&quot;\)/g, to: 'url(&quot;/heath/s1.jpg&quot;)' },
    { from: /url\(&quot;\/s2\.jpg&quot;\)/g, to: 'url(&quot;/heath/s2.jpg&quot;)' },
    { from: /url\(&quot;\/s3\.jpg&quot;\)/g, to: 'url(&quot;/heath/s3.jpg&quot;)' },
    { from: /url\(&quot;\/s4\.jpg&quot;\)/g, to: 'url(&quot;/heath/s4.jpg&quot;)' },
    { from: /url\(&quot;\/s5\.jpg&quot;\)/g, to: 'url(&quot;/heath/s5.jpg&quot;)' },
  ];
  
  imageReplacements.forEach(({ from, to }) => {
    if (content.match(from)) {
      content = content.replace(from, to);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✓ Fixed: ${path.relative(APP_DIR, pageFile)}`);
  }
});

console.log('\nDone fixing slider images!');

