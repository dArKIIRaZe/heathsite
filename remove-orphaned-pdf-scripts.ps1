# Remove orphaned renderPDF script blocks that are no longer needed

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$removed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Remove script blocks that contain renderPDF but don't have a matching canvas div
    # Pattern: <script>...renderPDF(...)...</script> that appears after an iframe div
    $scriptPattern = '<script>\s*\$\s*\(function\s*\(\)\s*\{.*?renderPDF\(''[^'']+''[^)]+\);.*?\}\s*\);\s*</script>'
    if ($content -match $scriptPattern) {
        $content = $content -replace $scriptPattern, ''
        $removed++
    }
    
    # Also remove script blocks that reference PDF IDs that now have iframes
    $content = $content -replace '<script>.*?waitForPDFJS.*?renderPDF.*?</script>', ''
    
    if ($content -ne $original) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Cleaned: $($file.Name)"
    }
}

Write-Host "`nRemoved $removed orphaned script blocks"

