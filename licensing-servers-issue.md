---
pagetitle: Licensing Servers Issue
---

# Licensing Servers Issue

------------------------------------------------------------------------

-   In some cases, **HWID activation** may fail because the system couldn't connect to HWID licensing servers.

-   The activation script will inform you about this if that is the case. We suggest to following the below guide only when the script tells you to do so. If you are unsure, you can get help from [here](troubleshoot.html).

-   This may happen mostly due to DNS issues, issues in MS licensing servers themselves or firewall rules in the system. Below you can find fixes for it.

-   **Which method should you choose for the fix?\
    \
    **If you are located in China, then choose the **Modify Host File** option.\
    If you are not in China, then first try the **Network Reset** option. If that doesn't work, try the **Fix DNS** option. If that doesn't work, then try the **VPN** method or try another internet connection.

-   If you are still facing issues, check [here](troubleshoot.html).

------------------------------------------------------------------------

## Network Reset

-   In Windows 10/11, go to settings and search for Network Reset, then apply this option.

-   Restart your system and try HWID Activation.

-   If it's showing the same Internet error then apply the Fix DNS option.

------------------------------------------------------------------------

## Fix DNS

-   Download the `Fix_DNS.zip` file from [here](https://www.box.com/index.php?rm=box_download_shared_file&shared_name=4c66hw8ezuijy5j0trwczy860sf825i7&file_id=f_1146300205040).

-   Extract the zip file and right-click on `Fix_DNS.cmd` file and run it as administrator.

-   Follow the on-screen instructions.

-   Once done, try HWID Activation.

-   If it shows the same internet error, try the VPN option.

------------------------------------------------------------------------

## VPN

-   Install Freedome VPN\
    <https://download.sp.f-secure.com/freedome/installer/2/Freedome.exe>

-   Once done, connect to USA servers and then try HWID Activation.

-   If it's showing the same internet error, check [here](troubleshoot.html).

------------------------------------------------------------------------

## Modify Host File

Around February 8, 2023, in China, MS licensing servers failed to properly connect, disrupting many Windows services, including activation. The solution to this issue is to simply hardcode another country's MS licensing servers IP in hosts file, and Windows will use that for activation. This method can also be used if, for any reason, DNS is failing to resolve MS licensing servers.

-   Open PowerShell or Terminal as admin (don't open CMD).

-   Copy and paste the lines below and press enter:

<!-- -->

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

Add-Content -Path $filePath -Value "124.108.22.138 licensing.mp.microsoft.com"
```

-   Done. Now try HWID Activation.

To restore it, run the commands below.

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })
```

------------------------------------------------------------------------
