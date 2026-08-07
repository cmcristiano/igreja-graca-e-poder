Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Cristiano\.gemini\antigravity\brain\1566f0d4-4048-4430-830b-3a9481d84340\.user_uploaded\media_1786095894313.jpg"
$destLogo = "C:\Users\Cristiano\.gemini\antigravity\scratch\igreja-site\public\images\logo\logo-graca-e-poder.png"
$destCulto = "C:\Users\Cristiano\.gemini\antigravity\scratch\igreja-site\public\images\cultos\culto-da-familia.jpg"

$img = [System.Drawing.Image]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

Write-Host "Dimension: $w x $h"

# Crop GP monogram + MINISTÉRIO INTERNACIONAL GRAÇA E PODER text
# The logo is located around x: 46% to 72%, y: 67% to 77%
$x = [int]($w * 0.46)
$y = [int]($h * 0.66)
$width = [int]($w * 0.25)
$height = [int]($h * 0.11)

$rect = New-Object System.Drawing.Rectangle $x, $y, $width, $height
$cropBmp = New-Object System.Drawing.Bitmap $rect.Width, $rect.Height

$g = [System.Drawing.Graphics]::FromImage($cropBmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $rect.Width, $rect.Height), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$cropBmp.Save($destLogo, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$cropBmp.Dispose()
$img.Dispose()

Copy-Item $srcPath $destCulto -Force
Write-Host "Logo cropped and saved successfully!"
