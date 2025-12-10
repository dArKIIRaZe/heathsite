# Deploy Without Server Restart

Since this is a **static site** (Next.js static export), you don't need to restart the server. You just need to copy the built files to the `httpdocs` directory.

## Solution: Manual Deployment Script

I've created `manual-deploy.bat` which will:
1. Build the site using Node.js 20
2. Copy all files from `out/` to `httpdocs/`
3. **No server restart required** - changes go live immediately

## How to Use

### Step 1: Run the Deployment Script

1. **Connect to your server** (via RDP, SSH, or Plesk File Manager terminal)
2. **Navigate to your repository directory**:
   ```
   cd W:\Inetpub\heath.leaditservices.co.uk\[repository-folder]
   ```
   (Replace with your actual repository path)

3. **Run the script**:
   ```
   manual-deploy.bat
   ```

### Step 2: The Script Will

- Install dependencies (`npm install`)
- Build the static site (`npm run build`)
- Find your `httpdocs` directory automatically
- Copy all files from `out/` to `httpdocs/`
- **No restart needed** - files are live immediately!

## Alternative: Manual File Copy

If you prefer to do it manually or the script doesn't work:

### Option A: Using Plesk File Manager

1. **Build locally** (on your computer):
   ```powershell
   npm run build
   ```

2. **Upload via Plesk File Manager**:
   - Go to Plesk → File Manager
   - Navigate to `httpdocs/`
   - Delete old files (or backup first)
   - Upload all contents of `out/` directory
   - Upload `.htaccess` to root

3. **No restart needed** - changes are live!

### Option B: Using FTP/SFTP

1. **Build locally**:
   ```powershell
   npm run build
   ```

2. **Connect via FTP** (FileZilla, WinSCP, etc.)

3. **Upload files**:
   - Navigate to `httpdocs/` on server
   - Upload all contents of `out/` directory
   - Upload `.htaccess` to root

4. **No restart needed** - changes are live!

### Option C: Using Command Line (if you have access)

1. **SSH/RDP into server**

2. **Navigate to repository**:
   ```
   cd [repository-path]
   ```

3. **Build**:
   ```
   npm install
   npm run build
   ```

4. **Copy files** (replace paths as needed):
   ```
   xcopy /E /I /Y out\*.* W:\Inetpub\heath.leaditservices.co.uk\httpdocs\
   copy .htaccess W:\Inetpub\heath.leaditservices.co.uk\httpdocs\
   ```

## Why No Restart is Needed

- **Static HTML files**: Just HTML, CSS, JavaScript files
- **No server-side code**: No Node.js process running
- **Apache serves files directly**: Just copies new files over old ones
- **Instant updates**: Browser requests get the new files immediately

## Setting Up Automatic Deployment (Future)

If you want automatic deployment without manual steps:

### Option 1: Git Webhook

1. Set up a webhook in your Git repository (GitHub, GitLab, etc.)
2. Point it to a script on your server
3. Script pulls, builds, and copies files automatically

### Option 2: Scheduled Task

1. Create a Windows Scheduled Task
2. Runs `manual-deploy.bat` periodically
3. Or runs on Git push (if you can detect it)

### Option 3: Plesk Git Auto-Deploy

If Plesk Git gets an "Update" button later:
- Configure it to use `plesk-deploy-node20.bat`
- Set deployment path to `out/`
- It will auto-deploy on Git push

## Troubleshooting

### Script can't find httpdocs

The script will prompt you for the path. Common locations:
- `W:\Inetpub\heath.leaditservices.co.uk\httpdocs`
- `C:\inetpub\vhosts\heath.leaditservices.co.uk\httpdocs`
- Check in Plesk → File Manager to see the exact path

### Permission errors

- Make sure the user running the script has write access to `httpdocs/`
- You may need to run as administrator
- Or adjust file permissions in Plesk

### Files not updating

- Clear browser cache (Ctrl+F5)
- Check that files were actually copied
- Verify `.htaccess` is in `httpdocs/` root
- Check Apache error logs if pages don't load

## Quick Reference

**To deploy manually:**
1. Build: `npm run build` (locally or on server)
2. Copy: Upload `out/` contents to `httpdocs/`
3. Done! No restart needed.

**To deploy automatically:**
- Run `manual-deploy.bat` on the server
- Or set up a webhook/script for Git pushes

