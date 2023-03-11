# Enable TLSv1.2 for compatibility with older clients
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor [System.Net.SecurityProtocolType]::Tls12

$DownloadURL = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_AIO.cmd'
$DownloadURL2 = 'https://gitlab.com/massgrave/microsoft-activation-scripts/-/raw/master/MAS/All-In-One-Version/MAS_AIO.cmd'

$rand = Get-Random -Maximum 1000
$isAdmin = [bool]([Security.Principal.WindowsIdentity]::GetCurrent().Groups -match 'S-1-5-32-544')
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MAS_$rand.cmd" } else { "$env:TEMP\MAS_$rand.cmd" }

try {
    $response = Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -ErrorAction Stop
} catch {
    try {
        $response = Invoke-WebRequest -Uri $DownloadURL2 -UseBasicParsing -ErrorAction Stop
    } catch {
        Write-Error $_
        Return
    }
}

$ScriptArgs = "$args "
$prefix = "REM $rand `r`n"
$content = $prefix + $response
Set-Content -Path $FilePath -Value $content

if (Test-Path $FilePath) {
    Start-Process $FilePath $ScriptArgs -Wait
    $item = Get-Item -LiteralPath $FilePath
    $item.Delete()
}