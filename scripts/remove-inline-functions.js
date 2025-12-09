const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files
const files = glob.sync('app/**/page.tsx', { cwd: __dirname + '/..' });

let count = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the external canvas/functions.js script tag from HTML content
  const pattern = /<\/script>\s*<script src="https:\/\/www\.heath\.derbyshire\.sch\.uk\/theme\/_blueprint\/js\/canvas\/functions\.js"><\/script>/g;
  const replacement = '</script><!-- External canvas/functions.js removed - using local /assets/js/functions.js instead -->';
  
  if (pattern.test(content)) {
    content = content.replace(pattern, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`\nRemoved inline canvas/functions.js from ${count} files.`);

