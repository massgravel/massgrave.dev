# Enable TLSv1.2 for compatibility with older clients
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12

$DownloadURL = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_AIO.cmd'
$DownloadURL2 = 'https://gitlab.com/massgrave/microsoft-activation-scripts/-/raw/master/MAS/All-In-One-Version/MAS_AIO.cmd'

$FilePath = "$env:TEMP\MAS.cmd"
$ScriptArgs = "$args "

try {
    Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -OutFile $FilePath -ErrorAction Stop
} catch {
    try {
        Invoke-WebRequest -Uri $DownloadURL2 -UseBasicParsing -OutFile $FilePath -ErrorAction Stop
    } catch {
    Write-Error $_
  Return
}
}

if (Test-Path $FilePath) {
    Start-Process $FilePath $ScriptArgs -Wait
    $item = Get-Item -LiteralPath $FilePath
    $item.Delete()
}