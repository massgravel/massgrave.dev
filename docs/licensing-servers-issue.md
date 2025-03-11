# Licensing Servers Issue

In some cases, **HWID activation** may fail because the system couldn't connect to HWID licensing servers. The activation script will inform you about this if that is the case.
We suggest following the below guide only when the script tells you to do so.

------------------------------------------------------------------------

## Network Reset

-   In Windows 10/11, go to settings and search for Network Reset, then apply this option.
-   Restart your system and try HWID Activation.
-   If it's showing the same Internet error then follow the below option.

------------------------------------------------------------------------

## Firewall / Proxy Reset

- Open Powershell as admin and enter below commands,

```
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -Name ProxyEnable -Type DWord -Value 0
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -Name ProxyServer -Type String -Value ""

$filePath = "$env:SystemRoot\System32\drivers\etc\hosts"
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*licensing.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*purchase.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*login.live.com.*', ''}) -force

netsh int ip reset
netsh winsock reset
netsh advfirewall reset
netsh winhttp reset proxy
bitsadmin /util /setieproxy localsystem NO_PROXY RESET
ipconfig /flushdns
```

-   Restart your system and try HWID Activation.

------------------------------------------------------------------------

-   If HWID activation is still not working then check [here](troubleshoot.md) for help.
