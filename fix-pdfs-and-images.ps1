# Script to replace all canvas PDF rendering with iframe embeds and fix image paths
# This uses iframe which is the most reliable method for PDFs in Next.js

$files = Get-ChildItem -Path "app" -Filter "page.tsx" -Recurse
$pdfFixed = 0
$imageFixed = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $original = $content
    $changed = $false
    
    # Pattern 1: Replace canvas PDF divs with iframe (in HTML content)
    # Match: <div id="pdf-view-XXX" ...><canvas...></canvas></div><script>...renderPDF('URL', ...)...</script>
    if ($content -match '<div id="pdf-view-([^"]+)"[^>]*class="pdf-view[^"]*"[^>]*>.*?<canvas[^>]*>.*?</canvas>.*?</div>\s*<script>.*?renderPDF\(''([^'']+)''[^)]+\);.*?</script>') {
        $pdfId = $matches[1]
        $pdfUrl = $matches[2]
        $replacement = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
        $content = $content -replace [regex]::Escape($matches[0]), $replacement
        $changed = $true
        $pdfFixed++
    }
    
    # Pattern 2: Replace canvas PDF in Script tags (dangerouslySetInnerHTML)
    # This is more complex - we need to find the div and script separately
    if ($content -match 'id="pdf-view-([^"]+)"[^>]*>.*?<canvas') {
        # Find the PDF URL from renderPDF call
        if ($content -match "renderPDF\('([^']+)',\s*document\.getElementById\('pdf-view-$($matches[1])'\)\)") {
            $pdfId = $matches[1]
            $pdfUrl = $matches[2]
            
            # Replace the entire div + script block
            $pattern = '<div id="pdf-view-' + [regex]::Escape($pdfId) + '"[^>]*>.*?</div>\s*<script>.*?renderPDF\(' + [regex]::Escape("'$pdfUrl'") + '[^)]+\);.*?</script>'
            $replacement = "<div id=`"pdf-view-$pdfId`" class=`"pdf-view HTML-only`" style=`"height: 800px; width: 100%;`">`n        <iframe src=`"$pdfUrl`" type=`"application/pdf`" style=`"width: 100%; height: 100%; border: none;`" title=`"PDF Viewer`"></iframe>`n        </div>"
            $content = $content -replace $pattern, $replacement
            $changed = $true
            $pdfFixed++
        }
    }
    
    # Pattern 3: Remove PDF.js scripts
    if ($content -match 'Load PDF\.js before renderPDF|pdfjs-init|waitForPDFJS|renderPDF.*canvas') {
        # Remove PDF.js script tags
        $content = $content -replace '<Script[^>]*src="/assets/js/pdf\.js"[^>]*/>\s*', ''
        $content = $content -replace '<Script[^>]*id="pdfjs-init"[^>]*>.*?</Script>\s*', ''
        
        # Remove renderPDF scripts from Script tags
        $content = $content -replace '<Script[^>]*dangerouslySetInnerHTML.*?waitForPDFJS.*?renderPDF.*?</Script>\s*', ''
        $changed = $true
    }
    
    # Fix image paths: /images/lw_ls_accredited_logo_hor.png -> /images/media/lw_ls_accredited_logo_hor.png
    if ($content -match 'src="/images/lw_ls_accredited_logo_hor\.png"') {
        $content = $content -replace 'src="/images/lw_ls_accredited_logo_hor\.png"', 'src="/images/media/lw_ls_accredited_logo_hor.png"'
        $content = $content -replace 'href="/images/lw_ls_accredited_logo_hor\.png"', 'href="/images/media/lw_ls_accredited_logo_hor.png"'
        $changed = $true
        $imageFixed++
    }
    
    if ($changed) {
        Set-Content $file.FullName -Value $content -NoNewline
        Write-Host "Fixed: $($file.FullName)"
    }
}

Write-Host "`nSummary:"
Write-Host "PDFs fixed: $pdfFixed"
Write-Host "Images fixed: $imageFixed"

