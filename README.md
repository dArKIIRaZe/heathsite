# Heath Primary School Website Backup

This is a complete backup of the Heath Primary School website (https://www.heath.derbyshire.sch.uk/) converted to a Next.js static site for easy reupload.

## Project Structure

- `app/` - Next.js app directory with all converted pages
- `public/` - Static assets (CSS, JS, images)
- `scraped/` - Original scraped HTML files and assets
- `scripts/` - Scraping and conversion scripts

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

To run the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to see the site.

### Build for Production

To create a static export:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Deploy

The `out/` directory contains all static files that can be uploaded to any static hosting service:

- **Netlify**: Drag and drop the `out` folder
- **Vercel**: Connect your repository or use Vercel CLI
- **GitHub Pages**: Upload the `out` folder contents
- **Any web server**: Upload the `out` folder contents to your web root

## What Was Scraped

- 60+ unique pages from the original website
- All CSS stylesheets
- All JavaScript files
- Navigation structure preserved
- All content and formatting maintained

## Notes

- External resources (CDN assets, third-party scripts) are still referenced from their original sources
- Some dynamic functionality may require the original backend services
- Images hosted on external CDNs (uk.sz-cdn.net) are still referenced externally
- The site is configured for static export and should work as a standalone static site

## Original Website

Original website: https://www.heath.derbyshire.sch.uk/

## Support

For questions about deployment or issues with the converted site, refer to the Next.js documentation: https://nextjs.org/docs
