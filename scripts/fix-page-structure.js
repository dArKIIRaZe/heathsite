const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const APP_DIR = path.join(__dirname, '..', 'app');

// Find all page.tsx files
const pageFiles = glob.sync('**/page.tsx', { cwd: APP_DIR, absolute: true });

console.log(`Fixing page structure in ${pageFiles.length} files...\n`);

pageFiles.forEach(pageFile => {
  let content = fs.readFileSync(pageFile, 'utf8');
  
  // Check if the page already has dangerouslySetInnerHTML
  if (content.includes('dangerouslySetInnerHTML')) {
    return; // Skip if already correct
  }
  
  // Find the return statement and the content after it
  const returnMatch = content.match(/return \(\s*<>\s*(.*)\s*<\/>\s*\);/s);
  
  if (!returnMatch) {
    console.log(`⚠ Skipping ${path.relative(APP_DIR, pageFile)} - couldn't find return statement`);
    return;
  }
  
  const bodyContent = returnMatch[1];
  
  // Extract Script tags (they should stay outside)
  const scriptMatches = bodyContent.matchAll(/<Script[^>]*>[\s\S]*?<\/Script>/g);
  const scripts = Array.from(scriptMatches).map(m => m[0]);
  
  // Remove Script tags from body content
  let htmlContent = bodyContent;
  scripts.forEach(script => {
    htmlContent = htmlContent.replace(script, '');
  });
  
  // Clean up the HTML content
  htmlContent = htmlContent.trim();
  
  // Escape the HTML for template literal
  const escapedHtml = htmlContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  
  // Rebuild the component
  const newContent = content.replace(
    /return \(\s*<>\s*[\s\S]*?\s*<\/>\s*\);/s,
    `return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${escapedHtml}\` }} />
${scripts.map(script => `      ${script}`).join('\n')}
    </>
  );`
  );
  
  fs.writeFileSync(pageFile, newContent);
  console.log(`✓ Fixed: ${path.relative(APP_DIR, pageFile)}`);
});

console.log('\nDone fixing page structure!');

