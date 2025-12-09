const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BASE_URL = 'https://www.heath.derbyshire.sch.uk';
const OUTPUT_DIR = path.join(__dirname, '..', 'scraped');
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

let visitedUrls = new Set();
let pagesToVisit = [BASE_URL];
let allPages = [];

// Ensure directories exist
fs.ensureDirSync(OUTPUT_DIR);
fs.ensureDirSync(ASSETS_DIR);

// Download file function
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath).catch(() => {});
        return reject(new Error(`Failed to download: ${url} - Status: ${response.statusCode}`));
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filePath).catch(() => {});
      reject(err);
    });
  });
}

// Extract and download assets
async function extractAndDownloadAssets(html, pageUrl) {
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);
  const baseUrlObj = new URL(pageUrl);
  
  // Find and download CSS
  $('link[rel="stylesheet"]').each((i, elem) => {
    const href = $(elem).attr('href');
    if (href) {
      try {
        const cssUrl = new URL(href, pageUrl).href;
        if (cssUrl.startsWith(BASE_URL) || cssUrl.includes('heath.derbyshire.sch.uk')) {
          const cssPath = path.join(ASSETS_DIR, 'css', path.basename(new URL(cssUrl).pathname) || 'style.css');
          fs.ensureDirSync(path.dirname(cssPath));
          downloadFile(cssUrl, cssPath).catch(console.error);
        }
      } catch (e) {
        console.error('Error processing CSS:', href, e.message);
      }
    }
  });
  
  // Find and download JS
  $('script[src]').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src) {
      try {
        const jsUrl = new URL(src, pageUrl).href;
        if (jsUrl.startsWith(BASE_URL) || jsUrl.includes('heath.derbyshire.sch.uk')) {
          const jsPath = path.join(ASSETS_DIR, 'js', path.basename(new URL(jsUrl).pathname) || 'script.js');
          fs.ensureDirSync(path.dirname(jsPath));
          downloadFile(jsUrl, jsPath).catch(console.error);
        }
      } catch (e) {
        console.error('Error processing JS:', src, e.message);
      }
    }
  });
  
  // Find and download images
  $('img[src]').each((i, elem) => {
    const src = $(elem).attr('src');
    if (src && !src.startsWith('data:')) {
      try {
        const imgUrl = new URL(src, pageUrl).href;
        if (imgUrl.startsWith(BASE_URL) || imgUrl.includes('heath.derbyshire.sch.uk')) {
          const imgPath = path.join(ASSETS_DIR, 'images', path.basename(new URL(imgUrl).pathname) || 'image.png');
          fs.ensureDirSync(path.dirname(imgPath));
          downloadFile(imgUrl, imgPath).catch(console.error);
        }
      } catch (e) {
        console.error('Error processing image:', src, e.message);
      }
    }
  });
  
  // Find and download fonts
  $('link[rel*="font"], link[href*="font"]').each((i, elem) => {
    const href = $(elem).attr('href');
    if (href) {
      try {
        const fontUrl = new URL(href, pageUrl).href;
        if (fontUrl.startsWith(BASE_URL) || fontUrl.includes('heath.derbyshire.sch.uk')) {
          const fontPath = path.join(ASSETS_DIR, 'fonts', path.basename(new URL(fontUrl).pathname) || 'font.woff');
          fs.ensureDirSync(path.dirname(fontPath));
          downloadFile(fontUrl, fontPath).catch(console.error);
        }
      } catch (e) {
        console.error('Error processing font:', href, e.message);
      }
    }
  });
  
  return $.html();
}

// Scrape a single page
async function scrapePage(browser, url) {
  if (visitedUrls.has(url)) {
    return null;
  }
  
  visitedUrls.add(url);
  console.log(`Scraping: ${url}`);
  
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait a bit for dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get page content
    const html = await page.content();
    
    // Extract links for further scraping
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href]'));
      return anchors.map(a => a.href).filter(href => 
        href && (
          href.startsWith('https://www.heath.derbyshire.sch.uk') ||
          href.startsWith('/')
        )
      );
    });
    
    // Add new links to queue
    links.forEach(link => {
      const fullUrl = link.startsWith('http') ? link : new URL(link, BASE_URL).href;
      if (fullUrl.startsWith(BASE_URL) && !visitedUrls.has(fullUrl)) {
        pagesToVisit.push(fullUrl);
      }
    });
    
    // Process and save HTML
    const processedHtml = await extractAndDownloadAssets(html, url);
    
    // Save HTML file
    const urlPath = new URL(url).pathname || '/';
    const fileName = urlPath === '/' || urlPath === '' ? 'index.html' : 
                     urlPath.endsWith('/') ? urlPath.slice(0, -1) + '.html' : 
                     urlPath + '.html';
    const filePath = path.join(OUTPUT_DIR, fileName.replace(/^\//, '').replace(/\//g, '_'));
    
    fs.writeFileSync(filePath, processedHtml);
    
    allPages.push({
      url,
      path: urlPath,
      filePath: fileName
    });
    
    await page.close();
    
    return { url, html: processedHtml, filePath };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return null;
  }
}

// Main scraping function
async function scrapeWebsite() {
  console.log('Starting website scrape...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Scrape all pages
    while (pagesToVisit.length > 0) {
      const url = pagesToVisit.shift();
      await scrapePage(browser, url);
      
      // Limit to prevent infinite loops
      if (visitedUrls.size > 100) {
        console.log('Reached page limit, stopping...');
        break;
      }
    }
    
    // Save metadata
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'metadata.json'),
      JSON.stringify({ pages: allPages, totalPages: allPages.length }, null, 2)
    );
    
    console.log(`\nScraping complete!`);
    console.log(`Total pages scraped: ${allPages.length}`);
    console.log(`Output directory: ${OUTPUT_DIR}`);
    
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeWebsite().catch(console.error);

