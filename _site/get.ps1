function Exit-Script {

    [CmdletBinding()]
    param(
        [Parameter(Position = 0)]
        [int]
        $ExitCode = 0
    )

    process {
        if (Test-Path -Path "$env:TEMP\MAS.cmd") {
            Remove-Item -Path "$env:TEMP\MAS.cmd" -Force
        }

        exit $ExitCode
    }

}

# Enable TLSv1.2 for compatibility with older clients
$Tls12 = [Enum]::ToObject([System.Net.SecurityProtocolType], 3072); [System.Net.ServicePointManager]::SecurityProtocol = $Tls12;

$DownloadURL = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_AIO.cmd'

try {
    Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -OutFile "$env:TEMP\MAS.cmd"
} catch {
    Write-Error $_
    Exit-Script -ExitCode 1
}

Start-Process -FilePath "$env:TEMP\MAS.cmd" -Wait
Exit-Script