# Script to download all images and update links
$ErrorActionPreference = "Continue"

# Create images directory
$imageDir = "public\images\media"
if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir -Force | Out-Null
}

# Read all image URLs
if (Test-Path "image-urls.txt") {
    $imageUrls = Get-Content "image-urls.txt" | Where-Object { $_ -match '^https?://' }
} else {
    Write-Host "Error: image-urls.txt not found"
    exit 1
}

$downloadCount = 0
$skipCount = 0
$errorCount = 0
$urlMapping = @{}

Write-Host "Starting download of $($imageUrls.Count) images..."

foreach ($url in $imageUrls) {
    try {
        # Extract filename from URL
        $uri = [System.Uri]$url
        $filename = Split-Path -Leaf $uri.LocalPath
        
        # Handle URL-encoded filenames (simple decode)
        $filename = $filename -replace '%20', ' ' -replace '%21', '!' -replace '%22', '"' -replace '%23', '#' -replace '%24', '$' -replace '%25', '%' -replace '%26', '&' -replace '%27', "'" -replace '%28', '(' -replace '%29', ')' -replace '%2B', '+' -replace '%2C', ',' -replace '%2F', '/' -replace '%3A', ':' -replace '%3B', ';' -replace '%3D', '=' -replace '%3F', '?' -replace '%40', '@' -replace '%5B', '[' -replace '%5D', ']'
        
        # Sanitize filename (remove invalid characters)
        $filename = $filename -replace '[<>:"|?*]', '_'
        
        # If no filename or extension, create one from URL
        if (-not $filename -or -not ($filename -match '\.(jpg|png|gif|svg|webp|JPG|PNG|GIF|SVG|WEBP)$')) {
            $filename = ($url -split '/')[-1]
            if (-not ($filename -match '\.(jpg|png|gif|svg|webp|JPG|PNG|GIF|SVG|WEBP)$')) {
                $ext = if ($url -match '\.jpg') { 'jpg' } elseif ($url -match '\.png') { 'png' } elseif ($url -match '\.gif') { 'gif' } elseif ($url -match '\.svg') { 'svg' } elseif ($url -match '\.webp') { 'webp' } else { 'jpg' }
                $filename = "image_$($downloadCount).$ext"
            }
        }
        
        $localPath = Join-Path $imageDir $filename
        
        # Skip if already downloaded
        if (Test-Path $localPath) {
            Write-Host "Skipping (already exists): $filename"
            $skipCount++
            $urlMapping[$url] = "/images/media/$filename"
            continue
        }
        
        # Download the image
        Write-Host "Downloading: $filename"
        try {
            # Use Invoke-WebRequest for better error handling
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
            [System.IO.File]::WriteAllBytes($localPath, $response.Content)
            
            # Verify it's actually an image
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            if ($bytes.Length -gt 0) {
                $fileSizeKB = [math]::Round($bytes.Length / 1024, 2)
                Write-Host "  Downloaded successfully ($fileSizeKB KB)"
                $downloadCount++
                $urlMapping[$url] = "/images/media/$filename"
            } else {
                Write-Host "  Warning: File is empty"
                $errorCount++
            }
        } catch {
            Write-Host "  Error downloading: $($_.Exception.Message)"
            $errorCount++
            # Still create mapping so we can update links even if download fails
            $urlMapping[$url] = "/images/media/$filename"
        }
        
        # Small delay to avoid overwhelming the server
        Start-Sleep -Milliseconds 200
        
    } catch {
        Write-Host "Error processing URL $url : $_"
        $errorCount++
    }
}

# Save URL mapping
$urlMapping | ConvertTo-Json | Out-File -FilePath "image-url-mapping.json" -Encoding UTF8

Write-Host "`nDownload complete!"
Write-Host "  Downloaded: $downloadCount"
Write-Host "  Skipped (already exists): $skipCount"
Write-Host "  Errors: $errorCount"
Write-Host "`nURL mapping saved to image-url-mapping.json"

