# **Licensing Servers Issue**

------------------------------------------------------------------------

-   In some cases, HWID activation may fail because system couldn't connect to HWID licensing servers.

-   Activation script will inform you about this if that is the case.

-   This may happen mostly either due to DNS or Issues in MS licensing servers itself or Firewall rules in the system. Below you can find listed fixes for it.

-   **Which method to choose for the fix?\
    \
    **If you are located in China then choose **Modify Host File** option.\
    If you are not in China then first try **Fix DNS** option, and if that doesn't work then try **VPN** method.

-   If you are facing issues then reach out to us on our [Discord](https://discord.gg/gjJEfq7ux8).

------------------------------------------------------------------------

## Fix DNS

-   Download the `Fix_DNS.zip` file from [here](http://www.box.com/index.php?rm=box_download_shared_file&shared_name=4c66hw8ezuijy5j0trwczy860sf825i7&file_id=f_1146300205040).

-   Extract the zip file and right click on `Fix_DNS.cmd` file and run it as admin.

-   Follow onscreen instructions.

-   Once done, try HWID Activation.

------------------------------------------------------------------------

## VPN

-   You can install either of the below VPN to fix issue if script is showing failed to connect licensing servers.

-   Cloudflare WARP - <https://1.1.1.1/>

-   Psiphon - <https://psiphon.ca/>

-   Once done, try HWID Activation.

------------------------------------------------------------------------

## Modify Host File

Around 8 Feb 2023 in China, MS licensing servers failed to properly connect and it disrupted many Windows services including activation. Solution to this issue is to simply hardcode another country's MS licensing servers IP in hosts file and Windows will use that for activation. This method can also be used if for any reason DNS is failing to resolve MS licensing servers.

-   Open Powershell or Terminal as admin (don't open CMD).

-   Copy paste below lines and press enter,

<!-- -->

    $filePath = "C:\Windows\System32\drivers\etc\hosts"

    Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

    Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })

    Add-Content -Path $filePath -Value "124.108.22.138 licensing.mp.microsoft.com"

    Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $true

-   Done. Now try HWID Activation.

To restore it, run below commands.

    $filePath = "C:\Windows\System32\drivers\etc\hosts"

    Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $false

    Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace "124.108.22.138 licensing.mp.microsoft.com", "" })

    Set-ItemProperty -Path $filePath -Name IsReadOnly -Value $true

------------------------------------------------------------------------
