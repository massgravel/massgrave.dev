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

- Open PowerShell as admin and enter below commands,

```
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /t REG_SZ /d "" /f
reg add "HKLM\SYSTEM\CurrentControlSet\Services\NlaSvc\Parameters\Internet" /v EnableActiveProbing /t REG_DWORD /d 1 /f

$filePath = "$env:SystemRoot\System32\drivers\etc\hosts"
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*licensing.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*purchase.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*login.live.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*msftconnecttest.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*msftncsi.*', ''}) -force

netsh int ip reset
netsh winsock reset
netsh advfirewall reset
netsh winhttp reset proxy
bitsadmin /util /setieproxy localsystem NO_PROXY RESET
ipconfig /flushdns
```

-   Restart your system and try HWID Activation.
-   If it's showing the same Internet error then follow the below option.

------------------------------------------------------------------------

## VPN / Another Internet Connection

- Install Cloudflare WARP VPN - https://1.1.1.1/  
  Connect the VPN and try HWID activation.

- If it's not working, try a different internet connection or use your phone's internet through USB tethering.

------------------------------------------------------------------------

:::tip

If HWID activation is still not working then check [here](troubleshoot.md) for help.

:::
