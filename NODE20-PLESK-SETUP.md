# Using Node.js 20+ on Plesk

Your project requires Node.js 20+, but Plesk currently has Node.js 18.20.6. Here are several solutions:

## Solution 1: Use Plesk Node.js Extension (Recommended)

If Plesk has a Node.js extension installed:

1. **Go to Node.js in Plesk**:
   - Navigate to your domain in Plesk
   - Look for **Node.js** under "Dev Tools" or "Websites & Domains"
   - If available, you can install Node.js 20 there

2. **Install Node.js 20**:
   - Click "Add Node.js"
   - Select version 20.x (latest LTS)
   - Note the installation path (usually something like `C:\Program Files\Plesk\NodeJS\20.x.x\`)

3. **Update Build Command**:
   - In Git settings, use the full path to Node.js 20:
   ```
   "C:\Program Files\Plesk\NodeJS\20.x.x\npm.cmd" install && "C:\Program Files\Plesk\NodeJS\20.x.x\npm.cmd" run build
   ```
   - Replace `20.x.x` with the actual version number

## Solution 2: Install Node.js 20 Manually on Server

1. **Download Node.js 20**:
   - Go to https://nodejs.org/
   - Download Node.js 20.x LTS for Windows
   - Install it to a custom location like `C:\nodejs20\`

2. **Update Build Command**:
   ```
   "C:\nodejs20\npm.cmd" install && "C:\nodejs20\npm.cmd" run build
   ```

## Solution 3: Use nvm-windows (Node Version Manager)

1. **Install nvm-windows**:
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Install on the server
   - Usually installs to: `C:\Users\[username]\AppData\Roaming\nvm\`

2. **Install Node.js 20**:
   ```cmd
   nvm install 20
   nvm use 20
   ```

3. **Update Build Command**:
   Use the provided script:
   ```
   plesk-deploy-node20.bat
   ```
   Or manually:
   ```
   call "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" use 20 && npm install && npm run build
   ```

## Solution 4: Use nodist (Alternative Version Manager)

1. **Install nodist**:
   - Download from: https://github.com/marcelklehr/nodist/releases
   - Install on the server

2. **Install Node.js 20**:
   ```cmd
   nodist add 20
   nodist 20
   ```

3. **Update Build Command**:
   ```
   plesk-deploy-node20.bat
   ```

## Solution 5: Use the Smart Build Script

I've created `plesk-deploy-node20.bat` which automatically tries to find Node.js 20 in multiple locations.

**In Plesk Git settings, set Build Command to:**
```
plesk-deploy-node20.bat
```

This script will:
1. Check Plesk Node.js extension locations
2. Check nvm-windows
3. Check nodist
4. Check common installation paths
5. Fall back to current Node.js if 20+ not found (with warning)

## Recommended Approach

**Best Option**: Use Plesk's Node.js extension if available (Solution 1)

**If Plesk extension not available**: Install Node.js 20 manually to a custom location (Solution 2)

**For flexibility**: Use nvm-windows (Solution 3) - allows multiple Node.js versions

## Quick Configuration

Once Node.js 20 is installed, update Plesk Git settings:

**Deployment Path**: `out/`

**Build Command**: Choose based on your installation method:

- **Plesk Extension**: `"C:\Program Files\Plesk\NodeJS\20.x.x\npm.cmd" install && "C:\Program Files\Plesk\NodeJS\20.x.x\npm.cmd" run build`
- **Manual Install**: `"C:\nodejs20\npm.cmd" install && "C:\nodejs20\npm.cmd" run build`
- **nvm-windows**: `call "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" use 20 && npm install && npm run build`
- **Smart Script**: `plesk-deploy-node20.bat`

## Verify Node.js Version

After setting up, you can verify by adding this to your build command temporarily:
```
node --version && npm install && npm run build
```

This will show the Node.js version being used in the deployment logs.

## Troubleshooting

### "Node.js 20 not found" error

- Check the installation path
- Verify Node.js 20 is actually installed
- Try using the full path to npm in the build command

### Build still uses Node.js 18

- Make sure the build command uses the correct path to Node.js 20
- Check Plesk deployment logs to see which Node.js version is being used
- The smart script (`plesk-deploy-node20.bat`) will show which version it found

### Permission errors

- Make sure the Plesk user has permission to access Node.js 20
- If using nvm-windows, make sure it's installed for the correct user

## Next Steps

1. Choose one of the solutions above
2. Install Node.js 20 on the server
3. Update the build command in Plesk Git settings
4. Test deployment and check logs to verify Node.js 20 is being used

