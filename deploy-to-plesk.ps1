# PowerShell script to prepare and deploy to Plesk
# Usage: .\deploy-to-plesk.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Heath Site - Plesk Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Building static site..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✓ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Check if out directory exists
if (-not (Test-Path "out")) {
    Write-Host "✗ out/ directory not found. Build may have failed." -ForegroundColor Red
    exit 1
}

# Copy .htaccess to out directory
Write-Host "Copying .htaccess to out directory..." -ForegroundColor Yellow
if (Test-Path ".htaccess") {
    Copy-Item ".htaccess" -Destination "out\.htaccess" -Force
    Write-Host "✓ .htaccess copied" -ForegroundColor Green
} else {
    Write-Host "⚠ .htaccess not found in root. Creating default one..." -ForegroundColor Yellow
    Copy-Item "out\.htaccess" -Destination "out\.htaccess" -Force -ErrorAction SilentlyContinue
}

# Calculate size
Write-Host ""
Write-Host "Calculating deployment size..." -ForegroundColor Yellow
$totalSize = (Get-ChildItem -Path "out" -Recurse -File | Measure-Object -Property Length -Sum).Sum
$sizeMB = [math]::Round($totalSize / 1MB, 2)
$fileCount = (Get-ChildItem -Path "out" -Recurse -File).Count
$dirCount = (Get-ChildItem -Path "out" -Recurse -Directory).Count

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deployment Package Ready!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Location: out/" -ForegroundColor White
Write-Host "Total Size: $sizeMB MB" -ForegroundColor White
Write-Host "Files: $fileCount" -ForegroundColor White
Write-Host "Directories: $dirCount" -ForegroundColor White
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Upload ALL contents of the 'out' directory to your Plesk document root" -ForegroundColor White
Write-Host "2. Document root is usually: httpdocs/ or public_html/" -ForegroundColor White
Write-Host "3. Make sure .htaccess is in the root directory" -ForegroundColor White
Write-Host "4. Verify file permissions (644 for files, 755 for directories)" -ForegroundColor White
Write-Host ""
Write-Host "For detailed instructions, see DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host ""

