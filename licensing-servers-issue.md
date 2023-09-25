---
pagetitle: Licensing Servers Issue
---

# Licensing Servers Issue

------------------------------------------------------------------------

-   In some cases, **HWID activation** may fail because system couldn't connect to HWID licensing servers.

-   Activation script will inform you about this if that is the case. We suggest to follow the below guide only when the script tells you to do it. If you are unsure, you can take the help from [here](troubleshoot.html).

-   This may happen mostly either due to DNS or Issues in MS licensing servers itself or Firewall rules in the system. Below you can find fixes for it.

-   **Which method to choose for the fix?\
    \
    **If you are located in China then choose **Modify Host File** option.\
    If you are not in China then first try **Network Reset** option and if that doesn't work then **Fix DNS** option, and if that doesn't work then try **VPN** method or try another Internet connection.

-   If you are still facing issues then check [here](troubleshoot.html).

------------------------------------------------------------------------

## Network Reset

-   In Windows 10/11, goto settings and search for Network Reset and apply this option.

-   Restart your system and try HWID Activation.

-   If it's showing same Internet error then apply the Fix DNS option.

------------------------------------------------------------------------

## Fix DNS

-   Download the `Fix_DNS.zip` file from [here](https://www.box.com/index.php?rm=box_download_shared_file&shared_name=4c66hw8ezuijy5j0trwczy860sf825i7&file_id=f_1146300205040).

-   Extract the zip file and right click on `Fix_DNS.cmd` file and run it as admin.

-   Follow onscreen instructions.

-   Once done, try HWID Activation.

-   If it's showing same Internet error then try VPN option.

------------------------------------------------------------------------

## VPN

-   Install Freedome VPN\
    <https://download.sp.f-secure.com/freedome/installer/2/Freedome.exe>

-   Once done connect to USA servers and then try HWID Activation.

-   If it's showing same Internet error then check [here](troubleshoot.html).

------------------------------------------------------------------------

## Modify Host File

Around 8 Feb 2023 in China, MS licensing servers failed to properly connect and it disrupted many Windows services including activation. Solution to this issue is to simply hardcode another country's MS licensing servers IP in hosts file and Windows will use that for activation. This method can also be used if for any reason DNS is failing to resolve MS licensing servers.

-   Open Powershell or Terminal as admin (don't open CMD).

-   Copy paste below lines and press enter,

<!-- -->

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

Add-Content -Path $filePath -Value "124.108.22.138 licensing.mp.microsoft.com"
```

-   Done. Now try HWID Activation.

To restore it, run below commands.

```         
$filePath = "C:\Windows\System32\drivers\etc\hosts"

Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })
```

------------------------------------------------------------------------
