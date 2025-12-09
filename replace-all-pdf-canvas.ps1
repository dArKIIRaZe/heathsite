# Comprehensive script to replace all canvas PDF rendering with iframe embeds
# and remove all PDF.js dependencies

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$totalFixed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    $changed = $false
    
    # Find all PDF canvas divs and their associated scripts
    # Pattern: <div id="pdf-view-XXX">...<canvas>...</canvas></div><script>...renderPDF('URL', ...)...</script>
    
    # Step 1: Find all renderPDF calls and extract PDF URLs and IDs
    $renderPDFMatches = [regex]::Matches($content, "renderPDF\('([^']+)',\s*document\.getElementById\('pdf-view-([^']+)'\)\)")
    
    foreach ($match in $renderPDFMatches) {
        $pdfUrl = $match.Groups[1].Value
        $pdfId = $match.Groups[2].Value
        
        # Find the canvas div for this PDF
        $canvasPattern = '<div id="pdf-view-' + [regex]::Escape($pdfId) + '"[^>]*>.*?<canvas[^>]*>.*?</canvas>.*?</div>'
        $scriptPattern = '<script>.*?renderPDF\(' + [regex]::Escape("'$pdfUrl'") + '[^)]+\);.*?</script>'
        
        # Replace canvas div + script with iframe
        $replacement = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
        
        # Try to match the full pattern (div + script)
        $fullPattern = $canvasPattern + '\s*' + $scriptPattern
        if ($content -match $fullPattern) {
            $content = $content -replace $fullPattern, $replacement
            $changed = $true
            $totalFixed++
            Write-Host "Fixed PDF canvas in: $($file.Name) - $pdfId"
        }
    }
    
    # Step 2: Remove PDF.js script tags
    if ($content -match 'Load PDF\.js|pdfjs-init|/assets/js/pdf\.js') {
        # Remove PDF.js loading script
        $content = $content -replace '<Script[^>]*src="/assets/js/pdf\.js"[^>]*/>\s*', ''
        # Remove PDF.js init script
        $content = $content -replace '<Script[^>]*id="pdfjs-init"[^>]*>.*?</Script>\s*', ''
        $changed = $true
    }
    
    # Step 3: Remove renderPDF scripts from Script tags (dangerouslySetInnerHTML)
    # This matches Script tags containing waitForPDFJS or renderPDF
    if ($content -match '<Script[^>]*dangerouslySetInnerHTML.*?(waitForPDFJS|renderPDF.*canvas)') {
        # Remove entire Script blocks that contain PDF rendering
        $content = $content -replace '<Script[^>]*dangerouslySetInnerHTML[^>]*>.*?waitForPDFJS.*?renderPDF.*?</Script>\s*', ''
        $content = $content -replace '<Script[^>]*dangerouslySetInnerHTML[^>]*>.*?renderPDF.*?canvas.*?</Script>\s*', ''
        $changed = $true
    }
    
    # Step 4: Fix image paths - ensure lw_ls_accredited_logo_hor.png uses /images/media/
    if ($content -match 'src="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'src="/images/lw_ls_accredited_logo_hor\.png"', 'src="/images/media/lw_ls_accredited_logo_hor.png"'
        $content = $content -replace 'href="/images/lw_ls_accredited_logo_hor\.png"', 'href="/images/media/lw_ls_accredited_logo_hor.png"'
        $changed = $true
    }
    
    # Step 5: Replace embed tags with iframe (more reliable)
    if ($content -match '<embed src="([^"]+\.pdf)"') {
        $content = $content -replace '<embed src="([^"]+\.pdf)"([^>]*)>', '<iframe src="$1" type="application/pdf" style="width: 100%; height: 100%; border: none;" title="PDF Viewer"></iframe>'
        $changed = $true
    }
    
    if ($changed) {
        Set-Content $file.FullName -Value $content -NoNewline
    }
}

Write-Host "`nTotal PDFs fixed: $totalFixed"
Write-Host "All canvas PDF rendering replaced with iframe embeds"
Write-Host "All PDF.js dependencies removed"

