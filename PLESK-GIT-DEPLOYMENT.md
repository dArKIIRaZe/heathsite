# Plesk Git Deployment Configuration

## Problem: Build Error on Server

If you're seeing this error:
```
'nodenv' is not recognized as an internal or external command
```

This means Plesk is trying to build your site on the server, but your site is **already built** (static export) and doesn't need Node.js on the server.

## Solution: Configure Plesk to Skip Build

### Step 1: Disable Build Command in Plesk

1. **Log into Plesk**
   - Go to your domain/subdomain
   - Navigate to **Git** (under "Dev Tools" or "Websites & Domains")

2. **Edit Deployment Settings**
   - Find your repository (heathsite)
   - Click **Settings** or **Edit**
   - Look for **"Additional deployment actions"** or **"Build command"**

3. **Remove/Disable Build Command**
   - **Option A**: Clear the build command field (leave it empty)
   - **Option B**: Use a simple command that does nothing:
     ```
     echo "Static site - no build needed"
     ```
   - **Option C**: Use the provided `plesk-deploy.bat`:
     ```
     plesk-deploy.bat
     ```

4. **Set Deployment Directory**
   - **Deployment path**: `out/` (or leave as default if it's already set to document root)
   - This tells Plesk to deploy from the `out/` directory

5. **Save Settings**

### Step 2: Ensure Files Are Built Locally

Before pushing to Git, always build locally:

```powershell
npm run build
```

Then commit and push:
```powershell
git add .
git commit -m "Update site"
git push
```

### Step 3: Verify Deployment

After deployment:
- Check that files in `httpdocs/` match the `out/` directory
- Verify `.htaccess` is present
- Test the website

## Alternative: Manual File Copy

If Git deployment continues to cause issues:

1. **Build locally**:
   ```powershell
   npm run build
   ```

2. **Upload via Plesk File Manager or FTP**:
   - Upload all contents of `out/` directory to `httpdocs/`
   - Upload `.htaccess` to `httpdocs/`

## Plesk Git Settings Summary

**Repository**: Your Git repo URL  
**Branch**: `main` or `master`  
**Deployment path**: `out/` (or leave empty if deploying to document root)  
**Build command**: *(Leave empty or use `plesk-deploy.bat`)*  
**Additional deployment actions**: *(Leave empty)*

## Why This Works

- Your `next.config.ts` has `output: 'export'` which creates static HTML files
- These files are in the `out/` directory after `npm run build`
- No Node.js runtime is needed on the server - just static file hosting
- Apache (via `.htaccess`) handles routing

## Troubleshooting

### Still Getting Build Errors?

1. **Check Plesk Git Settings**:
   - Make sure build command is empty or points to `plesk-deploy.bat`
   - Verify deployment path is set correctly

2. **Check File Structure**:
   - Ensure `out/` directory exists in your Git repository
   - Verify `.htaccess` is in the repository root

3. **Manual Override**:
   - If Git deployment won't work, use FTP/File Manager to upload `out/` contents directly

### Files Not Deploying?

- Check that `out/` directory is committed to Git (not in `.gitignore`)
- Verify Plesk has permission to read the repository
- Check Plesk deployment logs for errors

