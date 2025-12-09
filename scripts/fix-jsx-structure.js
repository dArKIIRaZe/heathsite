const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Fixing JSX structure in ${pageFiles.length} files...\n`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;
  
  // Check if HTML is written directly as JSX (has <script> or <div> right after return)
  const hasDirectHtml = /return \(\s*<>\s*<(script|div|header|footer|section)/i.test(content);
  const hasDangerouslySetInnerHTML = content.includes('dangerouslySetInnerHTML');
  
  if (!hasDirectHtml || hasDangerouslySetInnerHTML) {
    return; // Skip if already correct or doesn't need fixing
  }
  
  // Find the content between return (<> and </>);
  const match = content.match(/return \(\s*<>\s*([\s\S]*?)\s*<\/>\s*\);/);
  
  if (!match) {
    return;
  }
  
  const innerContent = match[1];
  
  // Extract Script components (they should stay as JSX)
  const scriptMatches = innerContent.matchAll(/<Script[^>]*>[\s\S]*?<\/Script>/g);
  const scripts = Array.from(scriptMatches).map(m => m[0]);
  
  // Get everything that's not a Script component
  let htmlContent = innerContent;
  scripts.forEach(script => {
    htmlContent = htmlContent.replace(script, '');
  });
  
  htmlContent = htmlContent.trim();
  
  // Escape for template literal
  const escapedHtml = htmlContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/\n/g, '\\n');
  
  // Rebuild
  const newReturn = `return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${escapedHtml}\` }} />
${scripts.length > 0 ? scripts.map(s => `      ${s}`).join('\n') : ''}
    </>
  );`;
  
  content = content.replace(/return \(\s*<>\s*[\s\S]*?\s*<\/>\s*\);/s, newReturn);
  modified = true;
  
  if (modified) {
    fs.writeFileSync(pageFile, content);
    console.log(`✓ Fixed: ${path.relative(APP_DIR, pageFile)}`);
  }
});

console.log('\nDone!');

