const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const SCRAPED_DIR = path.join(__dirname, '..', 'scraped');
const APP_DIR = path.join(__dirname, '..', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const STYLES_DIR = path.join(__dirname, '..', 'styles');

// Ensure directories exist
fs.ensureDirSync(APP_DIR);
fs.ensureDirSync(PUBLIC_DIR);
fs.ensureDirSync(STYLES_DIR);

// Read metadata
const metadata = JSON.parse(fs.readFileSync(path.join(SCRAPED_DIR, 'metadata.json'), 'utf8'));

// Filter out hash fragments and duplicates
const uniquePages = [];
const seenPaths = new Set();

metadata.pages.forEach(page => {
  // Skip hash fragments
  if (page.url.includes('#')) {
    return;
  }
  
  // Skip PDF files (they're not HTML pages)
  if (page.path.includes('.pdf')) {
    return;
  }
  
  // Get clean path
  const cleanPath = page.path === '/' ? '/' : page.path.replace(/\/$/, '');
  
  if (!seenPaths.has(cleanPath)) {
    seenPaths.add(cleanPath);
    uniquePages.push({
      ...page,
      cleanPath
    });
  }
});

console.log(`Processing ${uniquePages.length} unique pages...`);

// Copy assets to public directory
console.log('Copying assets to public directory...');
if (fs.existsSync(path.join(SCRAPED_DIR, 'assets'))) {
  fs.copySync(path.join(SCRAPED_DIR, 'assets'), path.join(PUBLIC_DIR, 'assets'));
}

// Function to convert HTML to Next.js page component
function convertHtmlToNextPage(html, pagePath) {
  const $ = cheerio.load(html);
  
  // Extract title
  const title = $('title').text() || 'Heath Primary School';
  
  // Extract meta tags
  const metaTags = [];
  $('meta').each((i, elem) => {
    const meta = {};
    Object.keys(elem.attribs).forEach(key => {
      meta[key] = elem.attribs[key];
    });
    if (Object.keys(meta).length > 0) {
      metaTags.push(meta);
    }
  });
  
  // Extract head content (styles, scripts that should be in head)
  const headStyles = [];
  const headScripts = [];
  
  $('head link[rel="stylesheet"]').each((i, elem) => {
    const href = $(elem).attr('href');
    if (href) {
      // Convert to relative path if it's a local asset
      let newHref = href;
      if (href.includes('heath.derbyshire.sch.uk/theme') || href.includes('heath.derbyshire.sch.uk/app')) {
        // Extract filename and point to public assets
        const filename = path.basename(href.split('?')[0]);
        newHref = `/assets/css/${filename}`;
      } else if (href.startsWith('/')) {
        newHref = href;
      } else if (!href.startsWith('http')) {
        newHref = href;
      }
      headStyles.push({ href: newHref, original: href });
    }
  });
  
  // Extract body content
  const bodyContent = $('body').html() || '';
  
  // Update asset paths in body
  const body$ = cheerio.load(bodyContent);
  
  // Update image sources
  body$('img[src]').each((i, elem) => {
    const src = body$(elem).attr('src');
    if (src && !src.startsWith('data:') && !src.startsWith('http')) {
      // Local image
      body$(elem).attr('src', src.startsWith('/') ? src : `/${src}`);
    } else if (src && src.includes('heath.derbyshire.sch.uk')) {
      // Extract and use local path
      const urlPath = new URL(src).pathname;
      body$(elem).attr('src', urlPath);
    }
  });
  
  // Update script sources
  body$('script[src]').each((i, elem) => {
    const src = body$(elem).attr('src');
    if (src && src.includes('heath.derbyshire.sch.uk/theme') || src.includes('heath.derbyshire.sch.uk/app')) {
      const filename = path.basename(src.split('?')[0]);
      body$(elem).attr('src', `/assets/js/${filename}`);
    } else if (src && !src.startsWith('http') && !src.startsWith('//')) {
      body$(elem).attr('src', src.startsWith('/') ? src : `/${src}`);
    }
  });
  
  // Update link hrefs
  body$('a[href]').each((i, elem) => {
    const href = body$(elem).attr('href');
    if (href && href.startsWith('https://www.heath.derbyshire.sch.uk')) {
      const urlPath = new URL(href).pathname;
      body$(elem).attr('href', urlPath || '/');
    }
  });
  
  // Generate Next.js page component
  const bodyHtml = body$('body').html() || '';
  const escapedBody = bodyHtml
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')
    .replace(/\n/g, '\\n')
    .replace(/'/g, "\\'");
  
  // Separate external and local styles
  const externalStyles = headStyles.filter(s => s.href.startsWith('http'));
  const localStyles = headStyles.filter(s => !s.href.startsWith('http'));
  
  const componentCode = `import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
};

export default function Page() {
  return (
    <>
      ${externalStyles.map(style => 
        `<link rel="stylesheet" href="${style.href}" />`
      ).join('\n      ')}
      ${localStyles.map(style => 
        `<link rel="stylesheet" href="${style.href}" />`
      ).join('\n      ')}
      <div dangerouslySetInnerHTML={{ __html: \`${escapedBody}\` }} />
      ${body$('script[src]').map((i, elem) => {
        const src = body$(elem).attr('src');
        if (src && !src.startsWith('http') && !src.startsWith('//')) {
          return `<Script src="${src.startsWith('/') ? src : '/' + src}" strategy="afterInteractive" />`;
        } else if (src && src.startsWith('http')) {
          return `<Script src="${src}" strategy="afterInteractive" />`;
        }
        return '';
      }).get().join('\n      ')}
    </>
  );
}
`;

  return componentCode;
}

// Function to create Next.js route structure
function createNextRoute(pagePath, htmlContent) {
  // Convert path to Next.js app directory structure
  let routePath = pagePath === '/' ? 'page.tsx' : pagePath.replace(/^\//, '').replace(/\//g, '/') + '/page.tsx';
  
  // Handle special characters
  routePath = routePath.replace(/&/g, 'and').replace(/\s+/g, '-');
  
  const fullRoutePath = path.join(APP_DIR, routePath);
  const routeDir = path.dirname(fullRoutePath);
  
  fs.ensureDirSync(routeDir);
  
  // Convert HTML to Next.js component
  const componentCode = convertHtmlToNextPage(htmlContent, pagePath);
  
  fs.writeFileSync(fullRoutePath, componentCode);
  
  console.log(`Created: ${routePath}`);
}

// Process each page
uniquePages.forEach(page => {
  const htmlFile = path.join(SCRAPED_DIR, page.filePath.replace(/^\//, '').replace(/\//g, '_'));
  
  if (fs.existsSync(htmlFile)) {
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    createNextRoute(page.cleanPath, htmlContent);
  } else {
    console.warn(`File not found: ${htmlFile}`);
  }
});

// Create a layout file that includes global styles
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
      </head>
      <body>{children}</body>
    </html>
  );
}
`;

// Update the existing layout or create if needed
const layoutPath = path.join(APP_DIR, 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  const existingLayout = fs.readFileSync(layoutPath, 'utf8');
  // Merge with existing layout if needed
  fs.writeFileSync(layoutPath, layoutCode);
}

console.log('\nConversion complete!');
console.log(`Created ${uniquePages.length} pages in ${APP_DIR}`);

