# Check massgrave.dev for more details

write-host
Write-Host "The current command (irm https://massgrave.dev/get | iex) will be retired in the future."
Write-Host -ForegroundColor Green "Use the new command (irm https://get.activated.win | iex) moving forward."
write-host

$psv = (Get-Host).Version.Major
$troubleshoot = 'https://massgrave.dev/troubleshoot'

if ($ExecutionContext.SessionState.LanguageMode.value__ -ne 0) {
    $ExecutionContext.SessionState.LanguageMode
    Write-Host "PowerShell is not running in Full Language Mode."
    Write-Host "Help - https://gravesoft.dev/fix_powershell" -ForegroundColor White -BackgroundColor Blue
    return
}

try {
    [System.AppDomain]::CurrentDomain.GetAssemblies(); [System.Math]::Sqrt(144)
}
catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Powershell failed to load .NET command."
    Write-Host "Help - https://gravesoft.dev/in-place_repair_upgrade" -ForegroundColor White -BackgroundColor Blue
    return
}

function Check3rdAV {
    $cmd = if ($psv -ge 3) { 'Get-CimInstance' } else { 'Get-WmiObject' }
    $avList = & $cmd -Namespace root\SecurityCenter2 -Class AntiVirusProduct | Where-Object { $_.displayName -notlike '*windows*' } | Select-Object -ExpandProperty displayName

    if ($avList) {
        Write-Host '3rd party Antivirus might be blocking the script - ' -ForegroundColor White -BackgroundColor Blue -NoNewline
        Write-Host " $($avList -join ', ')" -ForegroundColor DarkRed -BackgroundColor White
    }
}

function CheckFile {
    param ([string]$FilePath)
    if (-not (Test-Path $FilePath)) {
        Check3rdAV
        Write-Host "Failed to create MAS file in temp folder, aborting!"
        Write-Host "Help - $troubleshoot" -ForegroundColor White -BackgroundColor Blue
        throw
    }
}

try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}

$URLs = @(
    'https://raw.githubusercontent.com/massgravel/Microsoft-Activation-Scripts/67abcd0c8925832fcf4365b9cf3706ab6fbf8571/MAS/All-In-One-Version-KL/MAS_AIO.cmd',
    'https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?path=/MAS/All-In-One-Version-KL/MAS_AIO.cmd&versionType=Commit&version=67abcd0c8925832fcf4365b9cf3706ab6fbf8571',
    'https://git.activated.win/massgrave/Microsoft-Activation-Scripts/raw/commit/67abcd0c8925832fcf4365b9cf3706ab6fbf8571/MAS/All-In-One-Version-KL/MAS_AIO.cmd'
)

$errors = @()
foreach ($URL in $URLs | Sort-Object { Get-Random }) {
    try {
        if ($psv -ge 3) {
            $response = Invoke-WebRequest -Uri $URL -UseBasicParsing
        }
        else {
            $w = New-Object Net.WebClient
            $response = $w.DownloadString($URL)
        }
        break
    }
    catch {
        $errors += $_
    }
}

if (-not $response) {
    Check3rdAV
    foreach ($err in $errors) {
        Write-Host "Error: $($err.Exception.Message)" -ForegroundColor Red
    }
    Write-Host "Failed to retrieve MAS from any of the available repositories, aborting!"
    Write-Host "Check if antivirus or firewall is blocking the connection."
    Write-Host "Help - $troubleshoot" -ForegroundColor White -BackgroundColor Blue
    return
}

# Verify script integrity
$releaseHash = 'EF2F705B9E8BE2816598E2E8B70BADB200733F2287B917D6C9666D95C63AFBF9'
$stream = New-Object IO.MemoryStream
$writer = New-Object IO.StreamWriter $stream
$writer.Write($response)
$writer.Flush()
$stream.Position = 0
$hash = [BitConverter]::ToString([Security.Cryptography.SHA256]::Create().ComputeHash($stream)) -replace '-'
if ($hash -ne $releaseHash) {
    Write-Warning "Hash ($hash) mismatch, aborting!`nReport this issue at $troubleshoot"
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
$FilePath = if ($isAdmin) { "$env:SystemRoot\Temp\MAS_$rand.cmd" } else { "$env:USERPROFILE\AppData\Local\Temp\MAS_$rand.cmd" }
Set-Content -Path $FilePath -Value "@::: $rand `r`n$response"
CheckFile $FilePath

$env:ComSpec = "$env:SystemRoot\system32\cmd.exe"
$chkcmd = & $env:ComSpec /c "echo CMD is working"
if ($chkcmd -notcontains "CMD is working") {
    Write-Warning "cmd.exe is not working.`nReport this issue at $troubleshoot"
}
saps -FilePath $env:ComSpec -ArgumentList "/c """"$FilePath"" $args""" -Wait
CheckFile $FilePath

if ($psv -lt 3) {
    write-host ""
    write-host "Press any key to exit when process is done..."
    [void][System.Console]::ReadKey($true)
}

$FilePaths = @("$env:SystemRoot\Temp\MAS*.cmd", "$env:USERPROFILE\AppData\Local\Temp\MAS*.cmd")
foreach ($FilePath in $FilePaths) { Get-Item $FilePath -ErrorAction SilentlyContinue | Remove-Item }
