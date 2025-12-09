# Redownload corrupt images from the original site

$ErrorActionPreference = "Continue"

# Images to redownload
$imagesToDownload = @(
    @{
        url = "https://www.heath.derbyshire.sch.uk/_file/media/667/lw_ls_accredited_logo_hor.png"
        localPath = "public\images\media\lw_ls_accredited_logo_hor.png"
    },
    @{
        url = "https://heathprimary.schoolzineplus.co.uk/_file/media/667/lw_ls_accredited_logo_hor.png"
        localPath = "public\images\media\lw_ls_accredited_logo_hor.png"
    },
    @{
        url = "https://uk.sz-cdn.net/heathprimary/media/666/221026011127480/529x251/lw_ls_accredited_logo_hor.png"
        localPath = "public\images\media\lw_ls_accredited_logo_hor.png"
    },
    @{
        url = "https://uk.sz-cdn.net/heathprimary/media/1199/250123115050915/210x210/we_re_a_literacy_partner_programme_school_.jpg"
        localPath = "public\images\we_re_a_literacy_partner_programme_school_.jpg"
    }
)

Write-Host "Redownloading corrupt images..."
Write-Host ""

$downloaded = 0
$failed = 0

foreach ($image in $imagesToDownload) {
    $url = $image.url
    $localPath = $image.localPath
    
    # Ensure directory exists
    $dir = Split-Path -Parent $localPath
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    
    Write-Host "Downloading: $url"
    Write-Host "  To: $localPath"
    
    try {
        # Try to download with Invoke-WebRequest
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop
        
        if ($response.StatusCode -eq 200) {
            $fullPath = Join-Path $PWD $localPath
            [System.IO.File]::WriteAllBytes($fullPath, $response.Content)
            $fileInfo = Get-Item $fullPath -ErrorAction SilentlyContinue
            if ($fileInfo) {
                Write-Host "  ✓ Success: $($fileInfo.Length) bytes" -ForegroundColor Green
                $downloaded++
            } else {
                Write-Host "  ✗ Failed: File not created" -ForegroundColor Red
                $failed++
            }
        } else {
            Write-Host "  ✗ Failed: HTTP $($response.StatusCode)" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host "  ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
        $imageFailed = $true
        
        # Try alternative URL if this one fails
        if ($url -like "*heath.derbyshire.sch.uk*") {
            Write-Host "  Trying alternative URL..." -ForegroundColor Yellow
            $altUrl = $url -replace "www\.heath\.derbyshire\.sch\.uk", "heathprimary.schoolzineplus.co.uk"
            try {
                $altResponse = Invoke-WebRequest -Uri $altUrl -UseBasicParsing -ErrorAction Stop
                if ($altResponse.StatusCode -eq 200) {
                    $fullPath = Join-Path $PWD $localPath
                    [System.IO.File]::WriteAllBytes($fullPath, $altResponse.Content)
                    $fileInfo = Get-Item $fullPath -ErrorAction SilentlyContinue
                    if ($fileInfo) {
                        Write-Host "  ✓ Success with alternative URL: $($fileInfo.Length) bytes" -ForegroundColor Green
                        $downloaded++
                        $imageFailed = $false
                    }
                }
            } catch {
                Write-Host "  ✗ Alternative URL also failed" -ForegroundColor Red
            }
        }
        
        if ($imageFailed) {
            $failed++
        }
    }
    
    Write-Host ""
}

Write-Host "Summary:"
Write-Host "  Downloaded: $downloaded"
Write-Host "  Failed: $failed"
