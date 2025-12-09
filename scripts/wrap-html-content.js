const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Wrapping HTML content in ${pageFiles.length} files...\n`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Check if it has HTML written directly (has <script> or raw HTML tags after return)
  if (!content.match(/return \(\s*<>\s*<(script|div|header)/i)) {
    return; // Skip if already wrapped
  }
  
  // Find the return statement
  const returnMatch = content.match(/(export default function Page\(\) \{[^}]*return \(\s*<>)([\s\S]*?)(<\/>\s*\);\s*\})/);
  
  if (!returnMatch) {
    console.log(`⚠ Could not parse: ${path.relative(APP_DIR, pageFile)}`);
    return;
  }
  
  const beforeReturn = returnMatch[1];
  const innerContent = returnMatch[2];
  const afterReturn = returnMatch[3];
  
  // Extract Script components (keep them as JSX)
  const scriptPattern = /<Script[^>]*>[\s\S]*?<\/Script>/g;
  const scripts = [];
  let match;
  let htmlContent = innerContent;
  
  while ((match = scriptPattern.exec(innerContent)) !== null) {
    scripts.push(match[0]);
    htmlContent = htmlContent.replace(match[0], '');
  }
  
  // Clean up HTML content
  htmlContent = htmlContent.trim();
  
  // Escape for template literal
  const escapedHtml = htmlContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  
  // Rebuild the component
  const newContent = content.replace(
    /(export default function Page\(\) \{[^}]*return \(\s*<>)([\s\S]*?)(<\/>\s*\);\s*\})/,
    `${beforeReturn}
      <div dangerouslySetInnerHTML={{ __html: \`${escapedHtml}\` }} />
${scripts.map(s => `      ${s}`).join('\n')}
    ${afterReturn}`
  );
  
  fs.writeFileSync(pageFile, newContent);
  console.log(`✓ Fixed: ${path.relative(APP_DIR, pageFile)}`);
});

console.log('\nDone!');

