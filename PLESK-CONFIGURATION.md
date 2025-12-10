# Plesk Git Deployment Configuration

Since you've pulled the repository to the root, here's exactly what to configure in Plesk:

## Step-by-Step Plesk Configuration

### 1. Go to Git Settings in Plesk

1. Log into Plesk
2. Navigate to your domain (`heath.leaditservices.co.uk`)
3. Go to **Git** (usually under "Dev Tools" or "Websites & Domains")
4. Find your repository (`heathsite`)
5. Click **Settings** or **Edit**

### 2. Configure These Settings

**Repository URL**: [Your Git repository URL]  
**Branch**: `main` (or `master` if that's your default branch)

**Deployment Path**: `out/`
- This tells Plesk to copy files from the `out/` directory to your `httpdocs/` folder

**Build Command**: Choose ONE of these options:

#### Option 1: Use the batch script (Recommended - tries multiple Node.js locations)
```
plesk-deploy.bat
```

#### Option 2: Direct npm command (if Node.js is in system PATH)
```
npm install && npm run build
```

#### Option 3: Full path to npm (if you know where Node.js is installed)
```
"C:\Program Files\nodejs\npm.cmd" install && "C:\Program Files\nodejs\npm.cmd" run build
```

#### Option 4: If Node.js is installed via Plesk Node.js extension
Check the Node.js path in Plesk's Node.js settings and use:
```
"C:\Program Files\Plesk\NodeJS\[version]\npm.cmd" install && "C:\Program Files\Plesk\NodeJS\[version]\npm.cmd" run build
```

**Additional Deployment Actions**: Leave this **empty**

### 3. Save and Test

1. Click **Save** or **OK**
2. Click **Update** or **Deploy** to trigger a deployment
3. Check the deployment logs for any errors

## What Happens During Deployment

1. **Git Pull**: Plesk pulls the latest code from your repository
2. **Build Command Runs**: Executes the build command you configured
   - Installs dependencies (`npm install`)
   - Builds the static site (`npm run build`)
   - Creates the `out/` directory with all static files
   - Copies `.htaccess` to `out/`
3. **File Deployment**: Plesk copies all files from `out/` to `httpdocs/`

## Troubleshooting

### If you get "nodenv is not recognized"

**Solution**: Replace the build command with one of the options above (NOT `nodenv exec npm run build`)

### If you get "Node.js not found" or "npm is not recognized"

**Solutions**:
1. Install Node.js on the Windows server
2. Or use the full path to npm (Option 3 or 4 above)
3. Check if Plesk has a Node.js extension you can use

### If build succeeds but files don't appear in httpdocs

**Check**:
- Deployment path is set to `out/` (not empty, not `./out`, just `out/`)
- Files exist in the `out/` directory after build
- Check Plesk deployment logs for copy errors

### If the build command doesn't run at all

**Check**:
- The build command is saved correctly in Plesk
- There are no syntax errors in the command
- The repository was pulled successfully

## Quick Test

After configuring, make a small change and push to Git:

```bash
git add .
git commit -m "Test deployment"
git push
```

Then check Plesk's deployment status to see if it builds successfully.

## File Structure After Successful Deployment

```
W:\Inetpub\heath.leaditservices.co.uk\
├── httpdocs\              (Your live website - files from out/)
│   ├── .htaccess
│   ├── index.html
│   ├── _next/
│   ├── curriculum/
│   ├── images/
│   └── ...
└── [repository folder]\   (Git repository - where build happens)
    ├── out\               (Built files - gets copied to httpdocs/)
    ├── node_modules\
    ├── plesk-deploy.bat
    └── ...
```

## Need Help?

If you're still having issues:
1. Check the Plesk deployment logs for specific error messages
2. Try Option 2 first (simple `npm install && npm run build`)
3. If that doesn't work, try Option 3 with the full path to npm
4. Make sure Node.js is actually installed on the server

