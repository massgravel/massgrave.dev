---
pagetitle: Licensing Servers Issue
---

# Licensing Servers Issue

📌 Update: UTC 10.00 Friday, 28 July, 2023\
Microsoft licensing servers are down at the moment. Please wait...

------------------------------------------------------------------------

-   In some cases, **HWID activation** may fail because system couldn't connect to HWID licensing servers.

-   Activation script will inform you about this if that is the case. We suggest to follow the below guide only when the script tells you to do it. If you are unsure, you can take the help from [here](troubleshoot.html).

-   This may happen mostly either due to DNS or Issues in MS licensing servers itself or Firewall rules in the system. Below you can find listed fixes for it.

-   **Which method to choose for the fix?\
    \
    **If you are located in China then choose **Modify Host File** option.\
    If you are not in China then first try **Fix DNS** option, and if that doesn't work then try **VPN** method or try another Internet connection.

-   If you are still facing issues then check [here](troubleshoot.html).

------------------------------------------------------------------------

## Fix DNS

-   Download the `Fix_DNS.zip` file from [here](https://www.box.com/index.php?rm=box_download_shared_file&shared_name=4c66hw8ezuijy5j0trwczy860sf825i7&file_id=f_1146300205040).

-   Extract the zip file and right click on `Fix_DNS.cmd` file and run it as admin.

-   Follow onscreen instructions.

-   Once done, try HWID Activation.

------------------------------------------------------------------------

## VPN

-   You can install below VPN to fix issue if script is showing failed to connect licensing servers.

-   Freedome VPN\
    <https://download.sp.f-secure.com/freedome/installer/2/Freedome.exe>

-   Once done, try HWID Activation.

------------------------------------------------------------------------

## Modify Host File

Around 8 Feb 2023 in China, MS licensing servers failed to properly connect and it disrupted many Windows services including activation. Solution to this issue is to simply hardcode another country's MS licensing servers IP in hosts file and Windows will use that for activation. This method can also be used if for any reason DNS is failing to resolve MS licensing servers.

-   Open Powershell or Terminal as admin (don't open CMD).

-   Copy paste below lines and press enter,

<!-- -->

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })

Add-Content -Path $filePath -Value "124.108.22.138 licensing.mp.microsoft.com"

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $true
```

-   Done. Now try HWID Activation.

To restore it, run below commands.

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $true
```

------------------------------------------------------------------------
