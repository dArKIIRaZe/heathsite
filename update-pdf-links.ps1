# Script to update all PDF links in page files to use local paths
$ErrorActionPreference = "Continue"

# Load URL mapping
if (Test-Path "pdf-url-mapping.json") {
    $jsonContent = Get-Content "pdf-url-mapping.json" -Raw
    $urlMappingObj = $jsonContent | ConvertFrom-Json
    $urlMapping = @{}
    $urlMappingObj.PSObject.Properties | ForEach-Object {
        $urlMapping[$_.Name] = $_.Value
    }
} else {
    Write-Host "Error: pdf-url-mapping.json not found. Run download-pdfs.ps1 first."
    exit 1
}

Write-Host "Updating PDF links in all page files..."
Write-Host "Found $($urlMapping.Count) URL mappings"

$updatedFiles = 0
$totalReplacements = 0

# Get all page.tsx files
$pageFiles = Get-ChildItem -Path "app" -Recurse -Filter "page.tsx"

foreach ($file in $pageFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    # Replace each URL in the mapping
    foreach ($oldUrl in $urlMapping.Keys) {
        $newUrl = $urlMapping[$oldUrl]
        
        # Replace in href attributes, renderPDF calls, and anywhere else
        $content = $content -replace [regex]::Escape($oldUrl), $newUrl
        
        # Count replacements
        $count = ([regex]::Matches($originalContent, [regex]::Escape($oldUrl))).Count
        if ($count -gt 0) {
            $fileReplacements += $count
            $totalReplacements += $count
        }
    }
    
    # Also handle www.heath.derbyshire.sch.uk URLs (alternative domain) - replace in renderPDF and href
    $content = $content -replace 'https://www\.heath\.derbyshire\.sch\.uk/_file/media/(\d+)/([^"''\s\)]+\.pdf)', {
        param($match)
        $mediaId = $matches[1]
        $filename = $matches[2]
        # Try to find matching URL in mapping
        $matchingKey = $urlMapping.Keys | Where-Object { $_ -match "/media/$mediaId/" } | Select-Object -First 1
        if ($matchingKey) {
            $urlMapping[$matchingKey]
        } else {
            "/pdfs/$filename"
        }
    }
    
    # Handle heathprimary.schoolzineplus.co.uk URLs in renderPDF
    $content = $content -replace 'https://heathprimary\.schoolzineplus\.co\.uk/_file/media/(\d+)/([^"''\s\)]+\.pdf)', {
        param($match)
        $mediaId = $matches[1]
        $filename = $matches[2]
        # Try to find matching URL in mapping
        $matchingKey = $urlMapping.Keys | Where-Object { $_ -match "/media/$mediaId/" } | Select-Object -First 1
        if ($matchingKey) {
            $urlMapping[$matchingKey]
        } else {
            "/pdfs/$filename"
        }
    }
    
    # Save if changed
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) ($fileReplacements replacements)"
        $updatedFiles++
    }
}

Write-Host "`nUpdate complete!"
Write-Host "  Files updated: $updatedFiles"
Write-Host "  Total replacements: $totalReplacements"

