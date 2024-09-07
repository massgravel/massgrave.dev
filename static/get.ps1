# Check massgrave.dev for more details

$ErrorActionPreference = "Stop"

write-host
Write-Host "The current command (irm https://massgrave.dev/get | iex) will be retired on Dec 31, 2024."
Write-Host -ForegroundColor Green "Use the new command (irm https://get.activated.win | iex) moving forward."
write-host

# Enable TLSv1.2 for compatibility with older clients for current session
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$DownloadURL1 = 'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/b1b5299c4725d97349b18b59061647198f7cc59b/MAS/All-In-One-Version-KL/MAS_AIO.cmd'
$DownloadURL2 = 'https://bitbucket.org/WindowsAddict/microsoft-activation-scripts/raw/b1b5299c4725d97349b18b59061647198f7cc59b/MAS/All-In-One-Version-KL/MAS_AIO.cmd'
$DownloadURL3 = 'https://codeberg.org/massgravel/Microsoft-Activation-Scripts/raw/commit/b1b5299c4725d97349b18b59061647198f7cc59b/MAS/All-In-One-Version-KL/MAS_AIO.cmd'

$URLs = @($DownloadURL1, $DownloadURL2, $DownloadURL3)
$ShuffledURLs = $URLs | Sort-Object { Get-Random }

try {
    $response = Invoke-WebRequest -Uri $ShuffledURLs[0] -UseBasicParsing
}
catch {
    try {
        $response = Invoke-WebRequest -Uri $ShuffledURLs[1] -UseBasicParsing
    }
    catch {
        $response = Invoke-WebRequest -Uri $ShuffledURLs[2] -UseBasicParsing
    }
}

# Verify script integrity
$releaseHash = 'E84076DA0AF0DEE161FAFEBA9739362B9C422AC3456C6054045DA6519A669BC4'
$stream = New-Object IO.MemoryStream
$writer = New-Object IO.StreamWriter $stream
$writer.Write($response)
$writer.Flush()
$stream.Position = 0
$hash = [BitConverter]::ToString([Security.Cryptography.SHA256]::Create().ComputeHash($stream)) -replace '-'
if ($hash -ne $releaseHash) {
    Write-Warning "Hash ($hash) mismatch, aborting!`nReport this issue at https://massgrave.dev/troubleshoot"
    $response = $null
    return
}

# Check for AutoRun registry which may create issues with CMD
$paths = "HKCU:\SOFTWARE\Microsoft\Command Processor", "HKLM:\SOFTWARE\Microsoft\Command Processor"
foreach ($path in $paths) { 
    if (Get-ItemProperty -Path $path -Name "Autorun" -ErrorAction SilentlyContinue) { 
        Write-Warning "Autorun registry found, CMD may crash! `nManually copy-paste the below command to fix...`nRemove-ItemProperty -Path '$path' -Name 'Autorun'"
    } 
}

$rand = [Guid]::NewGuid().Guid
$isAdmin = [bool]([Security.Principal.WindowsIdentity]::GetCurrent().Groups -match 'S-1-5-32-544')
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MAS_$rand.cmd" } else { "$env:TEMP\MAS_$rand.cmd" }

$ScriptArgs = "$args "
$prefix = "@::: $rand `r`n"
$content = $prefix + $response
Set-Content -Path $FilePath -Value $content

# Set ComSpec variable for current session in case its corrupt in the system
$env:ComSpec = "$env:SystemRoot\system32\cmd.exe"
Start-Process cmd.exe "/c """"$FilePath"" $ScriptArgs""" -Wait

$FilePaths = @("$env:TEMP\MAS*.cmd", "$env:SystemRoot\Temp\MAS*.cmd")
foreach ($FilePath in $FilePaths) { Get-Item $FilePath | Remove-Item }
