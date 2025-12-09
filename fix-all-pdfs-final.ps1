# Final comprehensive fix for all PDF canvas rendering
# Replaces canvas with iframe and removes PDF.js scripts

$files = @(
    "app\curriculum\opal\page.tsx",
    "app\curriculum\maths\page.tsx",
    "app\curriculum\forest-school\page.tsx",
    "app\curriculum\eyfs\page.tsx",
    "app\curriculum\art-andDesign\page.tsx",
    "app\travel-\page.tsx",
    "app\Term-dates\page.tsx",
    "app\SEND\Inclusion\page.tsx",
    "app\school-meals\page.tsx",
    "app\pe\page.tsx",
    "app\parent-area\newsletters\page.tsx",
    "app\parent-area\home-learning\-embark-award\page.tsx",
    "app\ofsted-performance-tables\page.tsx",
    "app\events-and-celebrations\page.tsx",
    "app\clubs\page.tsx",
    "app\curriculum\teaching-learning-\page.tsx"
)

$totalFixed = 0

foreach ($filePath in $files) {
    if (-not (Test-Path $filePath)) {
        Write-Host "Skipping (not found): $filePath"
        continue
    }
    
    $content = Get-Content $filePath -Raw
    $original = $content
    $fileFixed = $false
    
    # Find all renderPDF calls and extract PDF URLs and IDs
    $renderMatches = [regex]::Matches($content, "renderPDF\('([^']+)',\s*document\.getElementById\('pdf-view-([^']+)'\)\)")
    
    foreach ($match in $renderMatches) {
        $pdfUrl = $match.Groups[1].Value
        $pdfId = $match.Groups[2].Value
        
        # Find the canvas div for this PDF ID
        $canvasPattern = '<div id="pdf-view-' + [regex]::Escape($pdfId) + '"[^>]*>.*?<canvas[^>]*>.*?</canvas>.*?</div>'
        $canvasMatch = [regex]::Match($content, $canvasPattern)
        
        if ($canvasMatch.Success) {
            # Replace canvas div with iframe
            $newDiv = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
            $content = $content -replace [regex]::Escape($canvasMatch.Value), $newDiv
            $fileFixed = $true
            $totalFixed++
        }
        
        # Remove the renderPDF script block
        $scriptPattern = '<script>.*?renderPDF\(' + [regex]::Escape("'$pdfUrl'") + '[^)]+\);.*?</script>'
        $content = $content -replace $scriptPattern, ''
    }
    
    # Remove PDF.js script tags
    $content = $content -replace '<Script[^>]*src="/assets/js/pdf\.js"[^>]*/>\s*', ''
    $content = $content -replace '<Script[^>]*id="pdfjs-init"[^>]*>.*?</Script>\s*', ''
    
    # Remove renderPDF Script blocks (dangerouslySetInnerHTML)
    $content = $content -replace '<Script[^>]*dangerouslySetInnerHTML[^>]*>.*?waitForPDFJS.*?renderPDF.*?</Script>\s*', ''
    
    if ($fileFixed) {
        Set-Content $filePath -Value $content -NoNewline
        Write-Host "Fixed: $filePath"
    }
}

Write-Host "`nTotal PDFs fixed: $totalFixed"

