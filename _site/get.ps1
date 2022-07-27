# Enable TLSv1.2 for compatibility with older clients
$Tls12 = [Enum]::ToObject([System.Net.SecurityProtocolType], 3072); [System.Net.ServicePointManager]::SecurityProtocol = $Tls12;

$DownloadURL = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_AIO.cmd'

try {
    Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -OutFile "$env:TEMP\MAS.cmd"
} catch {
    Write-Error $_
	Return
}

if (Test-Path -Path "$env:TEMP\MAS.cmd") {
    Start-Process -FilePath "$env:TEMP\MAS.cmd" -Wait
    Remove-Item -Path "$env:TEMP\MAS.cmd" -Force
}

