---
pagetitle: In-place Repair Upgrade
---

# In-place Repair Upgrade

(Keeping files and apps)

------------------------------------------------------------------------

In-place repair upgrade using Windows ISO file is a good way to fix system errors. Here's how you can perform it.

## Steps

-   Download the Windows ISO, preferably from [MSDL](https://msdl.gravesoft.dev/) in the same Windows language, and architecture.
    -   To check the installed Windows architecture, open Powershell as admin and enter,\
        `Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture`

        x64 means 64 Bit, x86 means 32 Bit

    -   To check the installed Windows Language, open Powershell as admin and enter,\
        `dism /english /online /get-intl | find /i "Default system UI language"`

    -   Note: If you are running the Enterprise LTSC edition, you will need to download that edition's ISO file from [here](genuine-installation-media.html).
-   Double-click on the ISO file once it is downloaded.
-   If it opens in another program like 7-Zip, close it, right-click on the ISO, Open With \> Windows Explorer
-   A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
-   Go into that DVD drive and run setup.exe, just continue until you reach the final confirmation screen.
-   Make sure it says "**Keep all files and apps**" on the final screen. Then you can continue the process and wait until it is done.

------------------------------------------------------------------------

## Troubleshoot

-   If you are not getting the option to keep files and apps, or the setup is showing any error, you can [connect with us](troubleshoot.html) for help.
