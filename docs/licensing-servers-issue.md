# Licensing Servers Issue

In some cases, HWID activation may fail because the system can't connect to the HWID licensing servers. The activation script will inform you if that is the case.
We suggest following the guide below only when the script tells you to do so.

------------------------------------------------------------------------

## Network Reset

-   In Windows 10/11, go to Settings and search for Network Reset, then apply this option.
-   Restart your system and try HWID activation.
-   If it shows the same internet error, follow the option below.

------------------------------------------------------------------------

## Firewall / Proxy Reset

- Open PowerShell as admin and enter the commands below:

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

-   Restart your system and try HWID activation.
-   If it still shows the same internet error, follow the option below.

------------------------------------------------------------------------

## VPN / Another Internet Connection

- Install Cloudflare WARP VPN - https://1.1.1.1/  
  Connect the VPN and try HWID activation.

- If that doesn't work, try a different internet connection or use your phone's internet via USB tethering.

------------------------------------------------------------------------

:::tip

If HWID activation is still not working then check [here](troubleshoot.md) for help.

:::
