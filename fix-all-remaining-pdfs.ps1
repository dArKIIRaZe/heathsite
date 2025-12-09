# Comprehensive script to fix ALL remaining PDFs and verify image paths
# This will replace all canvas PDF rendering with iframe embeds

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$totalFixed = 0
$imageFixed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    $changed = $false
    
    # Find all renderPDF calls and their associated canvas divs
    $renderMatches = [regex]::Matches($content, "renderPDF\('([^']+)',\s*document\.getElementById\('pdf-view-([^']+)'\)\)")
    
    foreach ($match in $renderMatches) {
        $pdfUrl = $match.Groups[1].Value
        $pdfId = $match.Groups[2].Value
        
        # Find the canvas div for this PDF ID - match any number of canvas elements
        $canvasPattern = '<div id="pdf-view-' + [regex]::Escape($pdfId) + '"[^>]*>.*?<canvas[^>]*>.*?</canvas>(.*?</canvas>)*.*?</div>'
        $canvasMatch = [regex]::Match($content, $canvasPattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
        
        if ($canvasMatch.Success) {
            # Replace canvas div with iframe
            $newDiv = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
            $content = $content -replace [regex]::Escape($canvasMatch.Value), $newDiv
            $changed = $true
            $totalFixed++
            Write-Host "Fixed PDF: $pdfId -> $pdfUrl"
        }
        
        # Remove the renderPDF script block (the entire <script>...</script>)
        $scriptPattern = '<script>.*?renderPDF\(' + [regex]::Escape("'$pdfUrl'") + '[^)]+\);.*?</script>'
        $scriptMatch = [regex]::Match($content, $scriptPattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
        if ($scriptMatch.Success) {
            $content = $content -replace [regex]::Escape($scriptMatch.Value), ''
            $changed = $true
        }
    }
    
    # Remove PDF.js script tags
    $content = $content -replace '<Script[^>]*src="/assets/js/pdf\.js"[^>]*/>\s*', ''
    $content = $content -replace '<Script[^>]*id="pdfjs-init"[^>]*>.*?</Script>\s*', ''
    
    # Remove renderPDF Script blocks (dangerouslySetInnerHTML) - these are in Script components
    $content = $content -replace '<Script[^>]*dangerouslySetInnerHTML[^>]*>.*?waitForPDFJS.*?renderPDF.*?</Script>\s*', ''
    
    # Fix image paths - ensure lw_ls_accredited_logo_hor.png uses /images/media/
    if ($content -match 'src="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'src="/images/lw_ls_accredited_logo_hor\.png"', 'src="/images/media/lw_ls_accredited_logo_hor.png"'
        $imageFixed++
        $changed = $true
    }
    if ($content -match 'href="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'href="/images/lw_ls_accredited_logo_hor\.png"', 'href="/images/media/lw_ls_accredited_logo_hor.png"'
        $imageFixed++
        $changed = $true
    }
    
    if ($changed) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "`nSummary:"
Write-Host "PDFs fixed: $totalFixed"
Write-Host "Image paths fixed: $imageFixed"

