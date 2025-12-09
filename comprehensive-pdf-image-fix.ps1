# Comprehensive fix for all PDFs and images
# Uses iframe for PDFs (best for Next.js) and fixes all image paths

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$pdfCount = 0
$imageCount = 0
$scriptCount = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Fix 1: Replace canvas PDF divs with iframe (in HTML content)
    # Match pattern: <div id="pdf-view-XXX">...<canvas>...</canvas></div><script>...renderPDF('URL', ...)...</script>
    $canvasMatches = [regex]::Matches($content, '<div id="pdf-view-([^"]+)"[^>]*>.*?<canvas[^>]*>.*?</canvas>.*?</div>')
    foreach ($match in $canvasMatches) {
        $pdfId = $match.Groups[1].Value
        # Find the renderPDF call for this ID
        $renderMatch = [regex]::Match($content, "renderPDF\('([^']+)',\s*document\.getElementById\('pdf-view-$([regex]::Escape($pdfId))'\)\)")
        if ($renderMatch.Success) {
            $pdfUrl = $renderMatch.Groups[1].Value
            $oldDiv = $match.Value
            $newDiv = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
            $content = $content -replace [regex]::Escape($oldDiv), $newDiv
            $pdfCount++
        }
    }
    
    # Fix 2: Remove renderPDF scripts from HTML (after canvas div)
    $content = $content -replace '<script>\s*\$\s*\(function\s*\(\)\s*\{.*?renderPDF\(''([^'']+)''[^)]+\);.*?\}\s*\);\s*</script>', ''
    
    # Fix 3: Remove PDF.js script tags
    $content = $content -replace '<Script[^>]*src="/assets/js/pdf\.js"[^>]*/>\s*', ''
    $content = $content -replace '<Script[^>]*id="pdfjs-init"[^>]*>.*?</Script>\s*', ''
    
    # Fix 4: Remove renderPDF Script blocks (dangerouslySetInnerHTML)
    # Match Script tags containing waitForPDFJS and renderPDF
    $scriptPattern = '<Script[^>]*dangerouslySetInnerHTML[^>]*>.*?waitForPDFJS.*?renderPDF.*?</Script>'
    if ($content -match $scriptPattern) {
        $content = $content -replace $scriptPattern, ''
        $scriptCount++
    }
    
    # Fix 5: Replace embed with iframe for PDFs
    $content = $content -replace '<embed\s+src="([^"]+\.pdf)"([^>]*)>', '<iframe src="$1" type="application/pdf" style="width: 100%; height: 100%; border: none;" title="PDF Viewer"></iframe>'
    
    # Fix 6: Fix image paths - lw_ls_accredited_logo_hor.png
    if ($content -match 'src="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'src="/images/lw_ls_accredited_logo_hor\.png"', 'src="/images/media/lw_ls_accredited_logo_hor.png"'
        $imageCount++
    }
    if ($content -match 'href="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'href="/images/lw_ls_accredited_logo_hor\.png"', 'href="/images/media/lw_ls_accredited_logo_hor.png"'
        $imageCount++
    }
    
    if ($content -ne $original) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.Name)"
    }
}

Write-Host "`nSummary:"
Write-Host "PDFs converted to iframe: $pdfCount"
Write-Host "PDF.js scripts removed: $scriptCount"
Write-Host "Image paths fixed: $imageCount"

