# Check massgrave.dev for the instructions

$ErrorActionPreference = "Stop"
# Enable TLSv1.2 for compatibility with older clients
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

$CommonURLPart = '71e575e7b6aae844d6367cf27271863358a6bec4/MAS/All-In-One-Version/MAS_AIO-CRC32_E6A92062.cmd'
$DownloadURL1 = 'https://bitbucket.org/WindowsAddict/microsoft-activation-scripts/raw/' + $CommonURLPart
$DownloadURL2 = 'https://codeberg.org/massgravel/Microsoft-Activation-Scripts/raw/commit/' + $CommonURLPart
$DownloadURL3 = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/' + $CommonURLPart

$URLs = @($DownloadURL1, $DownloadURL2)
$RandomURL1 = Get-Random -InputObject $URLs
$RandomURL2 = $URLs -notmatch $RandomURL1 | Get-Random

try {
    $response = Invoke-WebRequest -Uri $RandomURL1 -UseBasicParsing
}
catch {
    try {
        $response = Invoke-WebRequest -Uri $RandomURL2 -UseBasicParsing
    }
    catch {
        $response = Invoke-WebRequest -Uri $DownloadURL3 -UseBasicParsing
    }
}

$rand = Get-Random -Maximum 99999999
$isAdmin = [bool]([Security.Principal.WindowsIdentity]::GetCurrent().Groups -match 'S-1-5-32-544')
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MAS_$rand.cmd" } else { "$env:TEMP\MAS_$rand.cmd" }

$ScriptArgs = "$args "
$prefix = "@::: $rand `r`n"
$content = $prefix + $response
Set-Content -Path $FilePath -Value $content

Start-Process $FilePath $ScriptArgs -Wait

$FilePaths = @("$env:TEMP\MAS*.cmd", "$env:SystemRoot\Temp\MAS*.cmd")
foreach ($FilePath in $FilePaths) { Get-Item $FilePath | Remove-Item }
