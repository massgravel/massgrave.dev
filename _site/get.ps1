# Check the instructions here on how to use it mass grave[.]dev

$ErrorActionPreference = "Stop"
# Enable TLSv1.2 for compatibility with older clients
[Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12

$CommonURLPart = 'MAS/All-In-One-Version/MAS_AIO-CRC32_60BA35A8.cmd'
$DownloadURL1 = 'https://bitbucket.org/WindowsAddict/microsoft-activation-scripts/raw/master/' + $CommonURLPart
$DownloadURL2 = 'https://codeberg.org/massgravel/Microsoft-Activation-Scripts/raw/branch/master/' + $CommonURLPart
$DownloadURL3 = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/' + $CommonURLPart

$rand = Get-Random -Maximum 99999999
$isAdmin = [bool]([Security.Principal.WindowsIdentity]::GetCurrent().Groups -match 'S-1-5-32-544')
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MAS_$rand.cmd" } else { "$env:TEMP\MAS_$rand.cmd" }

$RandomURL = Get-Random -InputObject $DownloadURL1, $DownloadURL2

try {
    $response = Invoke-WebRequest -Uri $RandomURL -UseBasicParsing
}
catch {
    $response = Invoke-WebRequest -Uri $DownloadURL3 -UseBasicParsing
}

$ScriptArgs = "$args "
$prefix = "@:: $rand `r`n"
$content = $prefix + $response
Set-Content -Path $FilePath -Value $content

Start-Process $FilePath $ScriptArgs -Wait

$FilePaths = @("$env:TEMP\MAS*.cmd", "$env:SystemRoot\Temp\MAS*.cmd")
foreach ($FilePath in $FilePaths) { Get-Item $FilePath | Remove-Item }
