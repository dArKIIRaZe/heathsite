const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Fixing HTML comments in ${pageFiles.length} files...\n`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;
  
  // Convert HTML comments to JSX comments in the dangerouslySetInnerHTML content
  // HTML comments in JSX need to be escaped or removed
  // We'll remove them since they're not needed in the rendered output
  
  // Pattern to match HTML comments in the template string
  const htmlCommentPattern = /<!--[\s\S]*?-->/g;
  
  // Replace HTML comments with empty string (or we could convert to JSX comments, but they're in a string)
  // Since these are inside dangerouslySetInnerHTML, we can just remove them
  if (content.match(htmlCommentPattern)) {
    content = content.replace(htmlCommentPattern, '');
    modified = true;
  }
  
  // Also handle single-line comments that might be malformed
  const singleLineCommentPattern = /<!--[^>]*$/gm;
  if (content.match(singleLineCommentPattern)) {
    content = content.replace(singleLineCommentPattern, '');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✓ Fixed: ${path.relative(APP_DIR, pageFile)}`);
  }
});

console.log('\nDone fixing HTML comments!');

