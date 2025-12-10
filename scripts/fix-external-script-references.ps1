# Script to replace external script references with local paths
# This script updates all page.tsx files to use local assets instead of external URLs

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse

$replacements = @{
    # TinyMCE scripts
    'https://www\.heath\.derbyshire\.sch\.uk/app/js/tinymce/js/tinymce/tinymce\.min\.js' = '/assets/js/tinymce.min.js'
    'https://www\.heath\.derbyshire\.sch\.uk/theme/_blueprint/js/tinymcefunctions\.js' = '/assets/js/tinymcefunctions.js'
    'https://www\.heath\.derbyshire\.sch\.uk/theme/_blueprint/js/canvas/plugins\.js' = '/assets/js/plugins.js'
    'https://www\.heath\.derbyshire\.sch\.uk/theme/_blueprint/js/canvas/components/bs-switches\.js' = '/assets/js/bs-switches.js'
    
    # Fix malformed paths (with double slash)
    '/https://www\.heath\.derbyshire\.sch\.uk' = 'https://www.heath.derbyshire.sch.uk'
}

$totalFiles = 0
$totalReplacements = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileReplacements = 0
    
    foreach ($pattern in $replacements.Keys) {
        $replacement = $replacements[$pattern]
        $newContent = $content -replace $pattern, $replacement
        if ($newContent -ne $content) {
            $matches = ([regex]::Matches($content, $pattern)).Count
            $fileReplacements += $matches
            $content = $newContent
        }
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName) - $fileReplacements replacements"
        $totalFiles++
        $totalReplacements += $fileReplacements
    }
}

Write-Host "`nTotal files updated: $totalFiles"
Write-Host "Total replacements: $totalReplacements"

