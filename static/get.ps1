# Check massgrave.dev for more details

Write-Host ""
Write-Host "The command 'irm https://massgrave.dev/get | iex' is retired."
Write-Host ""
Write-Host "Visit the site below for the new command:" -ForegroundColor Green
Write-Host ""
Write-Host "https://massgrave.dev/" -ForegroundColor Cyan
Write-Host ""

if (-not $args) {
    Write-Host "Press any key to open the website..."
    [void][System.Console]::ReadKey($true)

    Start-Process "https://massgrave.dev/"
}
