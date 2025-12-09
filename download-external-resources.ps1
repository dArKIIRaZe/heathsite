# Script to download all external CSS/JS resources and update links
$ErrorActionPreference = "Continue"

# Create directories
$cssDir = "public\assets\css\external"
$jsDir = "public\assets\js\external"
if (-not (Test-Path $cssDir)) { New-Item -ItemType Directory -Path $cssDir -Force | Out-Null }
if (-not (Test-Path $jsDir)) { New-Item -ItemType Directory -Path $jsDir -Force | Out-Null }

# Read all external resource URLs
if (Test-Path "external-resources.txt") {
    $resourceUrls = Get-Content "external-resources.txt" | Where-Object { $_ -match '^https?://' }
} else {
    Write-Host "Error: external-resources.txt not found"
    exit 1
}

$downloadCount = 0
$skipCount = 0
$errorCount = 0
$urlMapping = @{}

Write-Host "Starting download of $($resourceUrls.Count) external resources..."

foreach ($url in $resourceUrls) {
    try {
        # Extract filename from URL
        $uri = [System.Uri]$url
        $filename = Split-Path -Leaf $uri.LocalPath
        
        # Handle URL-encoded filenames
        $filename = $filename -replace '%20', ' ' -replace '%21', '!' -replace '%22', '"' -replace '%23', '#' -replace '%24', '$' -replace '%25', '%' -replace '%26', '&' -replace '%27', "'" -replace '%28', '(' -replace '%29', ')' -replace '%2B', '+' -replace '%2C', ',' -replace '%2F', '/' -replace '%3A', ':' -replace '%3B', ';' -replace '%3D', '=' -replace '%3F', '?' -replace '%40', '@' -replace '%5B', '[' -replace '%5D', ']'
        
        # Sanitize filename
        $filename = $filename -replace '[<>:"|?*]', '_'
        
        # Determine directory based on file type
        if ($url -match '\.css$') {
            $localPath = Join-Path $cssDir $filename
        } elseif ($url -match '\.js$') {
            $localPath = Join-Path $jsDir $filename
        } else {
            $localPath = Join-Path $jsDir $filename
        }
        
        # Skip if already downloaded
        if (Test-Path $localPath) {
            Write-Host "Skipping (already exists): $filename"
            $skipCount++
            if ($url -match '\.css$') {
                $urlMapping[$url] = "/assets/css/external/$filename"
            } else {
                $urlMapping[$url] = "/assets/js/external/$filename"
            }
            continue
        }
        
        # Download the resource
        Write-Host "Downloading: $filename"
        try {
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
            [System.IO.File]::WriteAllBytes($localPath, $response.Content)
            
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            if ($bytes.Length -gt 0) {
                $fileSizeKB = [math]::Round($bytes.Length / 1024, 2)
                Write-Host "  Downloaded successfully ($fileSizeKB KB)"
                $downloadCount++
                if ($url -match '\.css$') {
                    $urlMapping[$url] = "/assets/css/external/$filename"
                } else {
                    $urlMapping[$url] = "/assets/js/external/$filename"
                }
            } else {
                Write-Host "  Warning: File is empty"
                $errorCount++
            }
        } catch {
            Write-Host "  Error downloading: $($_.Exception.Message)"
            $errorCount++
            # Still create mapping
            if ($url -match '\.css$') {
                $urlMapping[$url] = "/assets/css/external/$filename"
            } else {
                $urlMapping[$url] = "/assets/js/external/$filename"
            }
        }
        
        Start-Sleep -Milliseconds 200
        
    } catch {
        Write-Host "Error processing URL $url : $_"
        $errorCount++
    }
}

# Save URL mapping
$urlMapping | ConvertTo-Json | Out-File -FilePath "external-resources-mapping.json" -Encoding UTF8

Write-Host "`nDownload complete!"
Write-Host "  Downloaded: $downloadCount"
Write-Host "  Skipped (already exists): $skipCount"
Write-Host "  Errors: $errorCount"
Write-Host "`nURL mapping saved to external-resources-mapping.json"

