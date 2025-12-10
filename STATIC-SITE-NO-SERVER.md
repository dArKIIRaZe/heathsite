# Static Site - No Server to Start!

## Important: This is a Static Site

Your Next.js site is configured with `output: 'export'`, which means:
- ✅ **No Node.js server needed**
- ✅ **No server restart needed**
- ✅ **Apache already running** - it serves files from `httpdocs/`
- ✅ **Just copy files** - they go live immediately

## What You Need to Do

### Step 1: Build the Site

**On your local computer:**
```powershell
npm run build
```

This creates the `out/` directory with all static files.

### Step 2: Copy Files to httpdocs

**Option A: Via Plesk File Manager**
1. Go to Plesk → File Manager
2. Navigate to `httpdocs/`
3. Upload all contents of `out/` directory
4. Upload `.htaccess` to root
5. **Done!** Site is live immediately

**Option B: Via FTP**
1. Connect with FileZilla/WinSCP
2. Navigate to `httpdocs/` on server
3. Upload all contents of `out/` directory
4. Upload `.htaccess` to root
5. **Done!** Site is live immediately

**Option C: Via Command Line (if you have server access)**
```cmd
xcopy /E /I /Y out\*.* W:\Inetpub\heath.leaditservices.co.uk\httpdocs\
copy .htaccess W:\Inetpub\heath.leaditservices.co.uk\httpdocs\
```
**Done!** Site is live immediately

## No Server to Start!

- ❌ **Don't start Node.js** - there's no Node.js server
- ❌ **Don't restart Apache** - not needed for static files
- ❌ **Don't restart IIS** - not needed
- ✅ **Just copy files** - Apache serves them automatically

## How It Works

1. **Apache is already running** on your Plesk server
2. **Apache serves files** from the `httpdocs/` directory
3. **When you copy new files**, Apache serves them immediately
4. **No restart needed** - static files are served instantly

## Verifying It's Working

1. **Visit your website**: `https://heath.leaditservices.co.uk`
2. **Check if pages load** - they should work immediately
3. **Clear browser cache** (Ctrl+F5) if you see old content
4. **Check browser console** for any errors

## If Pages Don't Load

### Check 1: Files are in the right place
- Files should be in `httpdocs/` (not a subdirectory)
- `.htaccess` should be in `httpdocs/` root
- `index.html` should be in `httpdocs/` root

### Check 2: File permissions
- Files: 644 (readable)
- Directories: 755 (readable + executable)
- `.htaccess`: 644

### Check 3: Apache is running
- In Plesk, go to **Services Management**
- Check that **Apache** or **IIS** is running
- If stopped, start it (but it should already be running)

### Check 4: Document root is correct
- In Plesk, go to **Hosting Settings**
- Verify **Document root** is set to `httpdocs/`

## Common Misconceptions

### ❌ "I need to start a Node.js server"
**No!** This is a static site. No Node.js server needed.

### ❌ "I need to restart Apache"
**No!** Apache serves static files immediately. No restart needed.

### ❌ "I need to run `npm start`"
**No!** That's for development. Production uses static files only.

### ✅ "I just copy files to httpdocs/"
**Yes!** That's all you need to do.

## What About the Build Process?

The build process (`npm run build`) only happens:
- **On your local computer** (before uploading)
- **OR on the server** (if using Git deployment)

But the **resulting files** are just static HTML/CSS/JS that Apache serves directly.

## Summary

1. Build: `npm run build` (creates `out/` directory)
2. Copy: Upload `out/` contents to `httpdocs/`
3. Done: Site is live immediately - no server to start!

Apache is already running and serving your files. You just need to put the files in the right place.

