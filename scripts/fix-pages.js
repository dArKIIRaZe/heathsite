const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Remove head tags - they don't work in Next.js app directory
  content = content.replace(/<head>[\s\S]*?<\/head>/g, '');
  
  // Move link tags outside of component - they need to be in metadata or layout
  // For now, we'll keep scripts but fix the structure
  content = content.replace(/import Script from 'next\/script';/g, '');
  content = content.replace(/<Script[^>]*\/>/g, '');
  
  // Simplify to just the body content
  const newContent = content.replace(
    /export default function Page\(\) \{[\s\S]*?return \([\s\S]*?<>\s*([\s\S]*?)\s*<\/>\s*\);[\s\S]*?\}/,
    `export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`$1\` }} />
  );
}`
  );
  
  fs.writeFileSync(pageFile, newContent);
});

console.log(`Fixed ${pageFiles.length} pages`);

