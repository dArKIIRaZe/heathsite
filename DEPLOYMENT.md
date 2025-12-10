# Deployment Guide for Plesk

This guide will help you deploy the Heath Primary School website to your Plesk server.

## Prerequisites

- Node.js installed locally (for building)
- Access to your Plesk control panel
- FTP/SFTP access or file manager access to your Plesk hosting

## Build Process

### 1. Build the Static Site

Run the build command to generate the static files:

```bash
npm run build
```

This will create an `out/` directory containing all the static files ready for deployment.

### 2. Verify the Build

Check that the `out/` directory contains:
- `index.html` (homepage)
- `_next/` directory (Next.js static assets)
- All page directories (e.g., `curriculum/`, `contact/`, etc.)
- `images/`, `pdfs/`, `assets/` directories

## Deployment to Plesk

### Option 1: Using Plesk File Manager

1. **Log into Plesk**
   - Access your Plesk control panel
   - Navigate to your domain/subdomain

2. **Locate Document Root**
   - Usually located at: `httpdocs/` or `public_html/`
   - This is where your website files should be uploaded

3. **Upload Files**
   - Upload ALL contents of the `out/` directory to your document root
   - Make sure to preserve the directory structure
   - Upload the `.htaccess` file to the document root (from the root of the project)

4. **Set Permissions**
   - Ensure `.htaccess` has read permissions (644)
   - Ensure directories have execute permissions (755)
   - Ensure files have read permissions (644)

### Option 2: Using FTP/SFTP

1. **Connect via FTP/SFTP**
   - Use an FTP client (FileZilla, WinSCP, etc.)
   - Connect to your Plesk server

2. **Navigate to Document Root**
   - Usually: `/var/www/vhosts/yourdomain.com/httpdocs/` or similar
   - Or: `/httpdocs/` or `/public_html/`

3. **Upload Files**
   - Upload all contents of the `out/` directory
   - Upload the `.htaccess` file to the root

4. **Verify Upload**
   - Check that all files and directories were uploaded correctly
   - Verify `.htaccess` is in the root directory

### Option 3: Using Git (if available)

If your Plesk hosting supports Git:

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   ```

2. **Push to Plesk**
   - Set up Git repository in Plesk
   - Configure deployment settings
   - **Set build command**: `plesk-deploy.bat` (or see PLESK-GIT-SETUP.md for alternatives)
   - **Set deployment directory**: `out/`
   - See `PLESK-GIT-SETUP.md` for detailed configuration instructions

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Check that all pages are accessible
- [ ] Verify images are loading
- [ ] Test PDF links
- [ ] Check that CSS and JavaScript are loading
- [ ] Test navigation menu
- [ ] Verify mobile responsiveness
- [ ] Check browser console for errors

## Troubleshooting

### 404 Errors on Pages

If you're getting 404 errors:
1. Ensure `.htaccess` is uploaded to the document root
2. Check that `mod_rewrite` is enabled in Apache
3. Verify file permissions are correct

### Images Not Loading

1. Check that the `images/` directory was uploaded
2. Verify image paths are correct (should be `/images/...`)
3. Check file permissions on image files

### CSS/JavaScript Not Loading

1. Verify `_next/` directory was uploaded
2. Check browser console for 404 errors
3. Ensure `.htaccess` rewrite rules are working

### PDFs Not Loading

1. Verify `pdfs/` directory was uploaded
2. Check PDF file permissions
3. Verify PDF links in the HTML

## Updating the Site

When you need to update the site:

1. Make your changes locally
2. Run `npm run build` again
3. Upload only the changed files (or re-upload everything)
4. Clear browser cache if needed

## File Structure on Server

Your Plesk document root should look like this:

```
httpdocs/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── curriculum/
│   ├── english/
│   │   └── index.html
│   └── ...
├── images/
├── pdfs/
├── assets/
└── ... (other directories)
```

## Support

If you encounter issues:
1. Check Plesk error logs
2. Check Apache error logs
3. Verify all files were uploaded correctly
4. Test with a simple HTML file first to ensure server is working

