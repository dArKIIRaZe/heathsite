# Script to download all PDFs and update links
$ErrorActionPreference = "Continue"

# Create PDFs directory
$pdfDir = "public\pdfs"
if (-not (Test-Path $pdfDir)) {
    New-Item -ItemType Directory -Path $pdfDir | Out-Null
}

# Read all PDF URLs
$pdfUrls = Get-Content "pdf-urls.txt" | Where-Object { $_ -match '^https?://' }

$downloadCount = 0
$skipCount = 0
$errorCount = 0
$urlMapping = @{}

Write-Host "Starting download of $($pdfUrls.Count) PDFs..."

foreach ($url in $pdfUrls) {
    try {
        # Extract filename from URL
        $uri = [System.Uri]$url
        $filename = Split-Path -Leaf $uri.LocalPath
        
        # Handle URL-encoded filenames (simple decode)
        $filename = $filename -replace '%20', ' ' -replace '%21', '!' -replace '%22', '"' -replace '%23', '#' -replace '%24', '$' -replace '%25', '%' -replace '%26', '&' -replace '%27', "'" -replace '%28', '(' -replace '%29', ')' -replace '%2B', '+' -replace '%2C', ',' -replace '%2F', '/' -replace '%3A', ':' -replace '%3B', ';' -replace '%3D', '=' -replace '%3F', '?' -replace '%40', '@' -replace '%5B', '[' -replace '%5D', ']'
        
        # Sanitize filename (remove invalid characters)
        $filename = $filename -replace '[<>:"|?*]', '_'
        
        # If no filename or extension, create one from URL
        if (-not $filename -or -not ($filename -match '\.pdf$')) {
            $filename = ($url -split '/')[-1]
            if (-not ($filename -match '\.pdf$')) {
                $filename = "pdf_$($downloadCount).pdf"
            }
        }
        
        $localPath = Join-Path $pdfDir $filename
        
        # Skip if already downloaded
        if (Test-Path $localPath) {
            Write-Host "Skipping (already exists): $filename"
            $skipCount++
            $urlMapping[$url] = "/pdfs/$filename"
            continue
        }
        
        # Download the PDF
        Write-Host "Downloading: $filename"
        try {
            # Use Invoke-WebRequest for better error handling
            $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 30 -ErrorAction Stop
            [System.IO.File]::WriteAllBytes($localPath, $response.Content)
            
            # Verify it's actually a PDF
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            $fileSizeKB = [math]::Round($bytes.Length / 1024, 2)
            if ($bytes.Length -gt 0 -and $bytes[0] -eq 0x25 -and $bytes[1] -eq 0x50 -and $bytes[2] -eq 0x44 -and $bytes[3] -eq 0x46) {
                Write-Host "  Downloaded successfully ($fileSizeKB KB)"
                $downloadCount++
                $urlMapping[$url] = "/pdfs/$filename"
            } else {
                Write-Host "  ⚠ Warning: File may not be a valid PDF, but saving anyway"
                $urlMapping[$url] = "/pdfs/$filename"
                $downloadCount++
            }
        } catch {
            Write-Host "  ✗ Error downloading: $($_.Exception.Message)"
            $errorCount++
            # Still create mapping so we can update links even if download fails
            $urlMapping[$url] = "/pdfs/$filename"
        }
        
        # Small delay to avoid overwhelming the server
        Start-Sleep -Milliseconds 200
        
    } catch {
        Write-Host "Error processing URL $url : $_"
        $errorCount++
    }
}

# Save URL mapping
$urlMapping | ConvertTo-Json | Out-File -FilePath "pdf-url-mapping.json" -Encoding UTF8

Write-Host "`nDownload complete!"
Write-Host "  Downloaded: $downloadCount"
Write-Host "  Skipped (already exists): $skipCount"
Write-Host "  Errors: $errorCount"
Write-Host "`nURL mapping saved to pdf-url-mapping.json"

