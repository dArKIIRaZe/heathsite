# Plesk Git Deployment - Server Build Setup

This guide will help you configure Plesk to build your Next.js site on the server using Git.

## Current Issue

Plesk is trying to use `nodenv exec npm run build` but `nodenv` is not available. We need to configure Plesk to use the correct Node.js command.

## Solution: Configure Build Command

### Step 1: Install Node.js on Plesk Server (if not already installed)

1. **Check if Node.js is installed**:
   - In Plesk, go to **Node.js** (under "Dev Tools")
   - If Node.js is available, you can install it there
   - Or install it manually on the Windows server

2. **Find Node.js Path**:
   - Common locations on Windows:
     - `C:\Program Files\nodejs\node.exe`
     - `C:\Program Files (x86)\nodejs\node.exe`
   - Or check if `node` is in the system PATH

### Step 2: Configure Plesk Git Deployment

1. **Go to Git Settings**:
   - In Plesk, navigate to your domain
   - Go to **Git** (under "Dev Tools" or "Websites & Domains")
   - Find your repository (heathsite)
   - Click **Settings** or **Edit**

2. **Configure Build Command**:
   
   **Option A: Use the provided batch script** (Recommended)
   ```
   plesk-deploy.bat
   ```
   This script will automatically find Node.js and build the site.

   **Option B: Direct npm command** (if Node.js is in PATH)
   ```
   npm install && npm run build
   ```

   **Option C: Full path to npm** (if you know the exact path)
   ```
   "C:\Program Files\nodejs\npm.cmd" install && "C:\Program Files\nodejs\npm.cmd" run build
   ```

3. **Set Deployment Directory**:
   - **Deployment path**: `out/`
   - This tells Plesk to deploy the built files from the `out/` directory to your document root

4. **Save Settings**

### Step 3: Test Deployment

1. **Make a small change** and push to Git:
   ```powershell
   git add .
   git commit -m "Test deployment"
   git push
   ```

2. **Check Plesk Deployment Logs**:
   - In Plesk Git settings, check the deployment status
   - Look for any errors in the build process

3. **Verify Files**:
   - Check that files in `httpdocs/` match the `out/` directory
   - Verify `.htaccess` is present

## Alternative: Use Plesk Node.js Extension

If Plesk has a Node.js extension:

1. **Enable Node.js in Plesk**:
   - Go to **Node.js** in Plesk
   - Install Node.js for your domain
   - Note the Node.js version and path

2. **Update Build Command**:
   - Use the Node.js path provided by Plesk
   - Example: `C:\Program Files\Plesk\NodeJS\18.17.0\node.exe npm install && npm run build`

## Troubleshooting

### Error: 'nodenv' is not recognized

**Solution**: Replace the build command with one of the options above. The `plesk-deploy.bat` script should handle this automatically.

### Error: Node.js not found

**Solutions**:
1. Install Node.js on the Windows server
2. Add Node.js to the system PATH
3. Use the full path to Node.js in the build command

### Error: npm install fails

**Possible causes**:
- Network issues on server
- Insufficient permissions
- Missing build tools (for native modules)

**Solutions**:
- Check server internet connection
- Run as administrator if needed
- Install Windows Build Tools if required

### Build succeeds but files not deployed

**Check**:
1. Deployment path is set to `out/`
2. Files exist in `out/` directory after build
3. Plesk has permission to copy files to `httpdocs/`

## Recommended Plesk Git Settings

```
Repository: [Your Git repo URL]
Branch: main (or master)
Deployment path: out/
Build command: plesk-deploy.bat
Additional deployment actions: (leave empty)
```

## File Structure After Build

After successful build on server:
```
W:\Inetpub\heath.leaditservices.co.uk\
├── httpdocs\          (deployed files from out/)
│   ├── .htaccess
│   ├── index.html
│   ├── _next/
│   └── ...
└── [repository]\      (Git repository)
    ├── out\           (built files)
    ├── node_modules\
    └── ...
```

## Next Steps

1. Configure the build command in Plesk (use `plesk-deploy.bat`)
2. Test with a small change
3. Monitor deployment logs
4. Verify website is working

If you continue to have issues, you can always build locally and upload the `out/` directory manually via FTP or File Manager.

