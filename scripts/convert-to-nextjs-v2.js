const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const SCRAPED_DIR = path.join(__dirname, '..', 'scraped');
const APP_DIR = path.join(__dirname, '..', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Read metadata
const metadata = JSON.parse(fs.readFileSync(path.join(SCRAPED_DIR, 'metadata.json'), 'utf8'));

// Filter out hash fragments and duplicates
const uniquePages = [];
const seenPaths = new Set();

metadata.pages.forEach(page => {
  if (page.url.includes('#') || page.path.includes('.pdf')) {
    return;
  }
  
  const cleanPath = page.path === '/' ? '/' : page.path.replace(/\/$/, '');
  
  if (!seenPaths.has(cleanPath)) {
    seenPaths.add(cleanPath);
    uniquePages.push({ ...page, cleanPath });
  }
});

console.log(`Processing ${uniquePages.length} unique pages...`);

// Extract global head content from index page
const indexHtml = fs.readFileSync(path.join(SCRAPED_DIR, 'index.html'), 'utf8');
const $index = cheerio.load(indexHtml);

// Get all head styles and scripts
const headStyles = [];
$index('head link[rel="stylesheet"]').each((i, elem) => {
  const href = $index(elem).attr('href');
  if (href) {
    headStyles.push(href);
  }
});

// Function to convert HTML to Next.js page
function convertToNextPage(html, pagePath) {
  const $ = cheerio.load(html);
  const title = $('title').text() || 'Heath Primary School';
  
  // Get body content
  const bodyContent = $('body').html() || '';
  
  // Escape for template literal
  const escapedBody = bodyContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  
  // Extract scripts from body
  const scripts = [];
  $('body script[src]').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src) {
      scripts.push(src);
    }
  });
  
  // Extract inline scripts
  const inlineScripts = [];
  $('body script:not([src])').each((i, elem) => {
    const scriptContent = $(elem).html();
    if (scriptContent) {
      inlineScripts.push(scriptContent);
    }
  });
  
  return {
    title,
    body: escapedBody,
    scripts,
    inlineScripts
  };
}

// Create pages
uniquePages.forEach(page => {
  const htmlFile = path.join(SCRAPED_DIR, page.filePath.replace(/^\//, '').replace(/\//g, '_'));
  
  if (!fs.existsSync(htmlFile)) {
    console.warn(`File not found: ${htmlFile}`);
    return;
  }
  
  const htmlContent = fs.readFileSync(htmlFile, 'utf8');
  const pageData = convertToNextPage(htmlContent, page.cleanPath);
  
  // Create route path
  let routePath = page.cleanPath === '/' ? 'page.tsx' : 
                  page.cleanPath.replace(/^\//, '').replace(/\//g, '/') + '/page.tsx';
  
  // Handle special characters
  routePath = routePath.replace(/&/g, 'and').replace(/\s+/g, '-');
  
  const fullRoutePath = path.join(APP_DIR, routePath);
  const routeDir = path.dirname(fullRoutePath);
  
  fs.ensureDirSync(routeDir);
  
  // Generate component
  const componentCode = `import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: ${JSON.stringify(pageData.title)},
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${pageData.body}\` }} />
      ${pageData.scripts.map(src => {
        const scriptSrc = src.startsWith('http') ? src : 
                         src.startsWith('/') ? src : `/${src}`;
        return `<Script src="${scriptSrc}" strategy="afterInteractive" key="${scriptSrc}" />`;
      }).join('\n      ')}
      ${pageData.inlineScripts.map((script, i) => 
        `<Script id="inline-${i}" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: \`${script.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\` }} />`
      ).join('\n      ')}
    </>
  );
}
`;
  
  fs.writeFileSync(fullRoutePath, componentCode);
  console.log(`Created: ${routePath}`);
});

// Update layout to include global styles
const layoutPath = path.join(APP_DIR, 'layout.tsx');
const layoutCode = `import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Heath Primary School',
  description: 'Heath Primary School, Slack Lane, Chesterfield, S44 5RH',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${headStyles.map(href => {
          const styleHref = href.startsWith('http') ? href :
                           href.startsWith('/') ? href : `/${href}`;
          // Try to map to local assets
          if (href.includes('heath.derbyshire.sch.uk/theme') || href.includes('heath.derbyshire.sch.uk/app')) {
            const filename = path.basename(href.split('?')[0]);
            if (href.includes('/css/')) {
              return `<link rel="stylesheet" href="/assets/css/${filename}" />`;
            } else if (href.includes('/js/')) {
              return '';
            }
          }
          return `<link rel="stylesheet" href="${styleHref}" />`;
        }).filter(Boolean).join('\n        ')}
      </head>
      <body>{children}</body>
    </html>
  );
}
`;

fs.writeFileSync(layoutPath, layoutCode);

console.log('\nConversion complete!');

