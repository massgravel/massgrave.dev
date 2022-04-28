function Exit-Script {

    [CmdletBinding()]
    param(
        [Parameter(Position = 0)]
        [int]
        $ExitCode = 0
    )

    process {
        if (Test-Path -Path "$env:USERPROFILE\Desktop\MAS.cmd") {
            Remove-Item -Path "$env:USERPROFILE\Desktop\MAS.cmd" -Force
        }

        exit $ExitCode
    }

}

# Enable TLSv1.2 and TLSv1.3 for compatibility with older clients
$TLS12Protocol = [System.Net.SecurityProtocolType] 'Tls12', 'Tls13'
[System.Net.ServicePointManager]::SecurityProtocol = $TLS12Protocol

$DownloadURL = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/master/MAS/All-In-One-Version/MAS_1.5_AIO_CRC32_21D20776.cmd'

try {
    Invoke-WebRequest -Uri $DownloadURL -UseBasicParsing -OutFile "$env:TEMP\MAS.cmd"
} catch {
    Write-Error $_
    Exit-Script -ExitCode 1
}

Start-Process -FilePath "$env:TEMP\MAS.cmd" -Wait
Exit-Script
