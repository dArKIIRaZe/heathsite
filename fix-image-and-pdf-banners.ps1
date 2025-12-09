# Fix image paths and ensure PDF banners display correctly

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$imageFixed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    $changed = $false
    
    # Fix 1: Remove data_reference attributes that might be causing path issues
    # Or ensure they use absolute paths
    if ($content -match 'data_reference="media/') {
        # Replace relative media paths with absolute paths
        $content = $content -replace 'data_reference="media/([^"]+)"', 'data_reference="/images/media/$1"'
        $changed = $true
        $imageFixed++
    }
    
    # Fix 2: Ensure all image src paths are absolute and correct
    if ($content -match 'src="/images/media/lw_ls_accredited_logo_hor\.png"') {
        # Already correct, but ensure data_reference matches
        $content = $content -replace 'data_reference="[^"]*lw_ls_accredited_logo_hor\.png"', 'data_reference="/images/media/lw_ls_accredited_logo_hor.png"'
        $changed = $true
    }
    
    if ($changed) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)"
    }
}

Write-Host "`nFixed $imageFixed image reference issues"


