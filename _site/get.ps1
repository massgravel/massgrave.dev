$Tls12 = [Enum]::ToObject([System.Net.SecurityProtocolType], 3072); [System.Net.ServicePointManager]::SecurityProtocol = $Tls12;

$DownloadUrl = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_1.5_AIO_CRC32_21D20776.cmd'
$FilePath = "$env:USERPROFILE\Desktop\MAS_1.5_AIO_CRC32_21D20776.cmd"
 
if($PSVersionTable.PSVersion.Major -lt 3){
(New-Object System.Net.WebClient).DownloadFile($DownloadUrl, $FilePath)
}else {
Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -OutFile $FilePath
}
    
Start-Process -FilePath $FilePath
