# Office C2R 2019/2021 VL

------------------------------------------------------------------------

## Notes

-   If the below guide is confusing to you then the simplest option for you is to use [Office C2R Retail](office_c2r_links.html).

-   Please note that in the official C2R VL office installation method, there is no ISO or any one-click solution available. Below is the simplest guide to installing VL office.

------------------------------------------------------------------------

## Installation Guide

First clear previous installation of Office,

-   Uninstall the office with App and Features option in Windows settings.

-   Run `OfficeScrubber.cmd` file from [Office Scrubber](https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_9.7z) by abbodi1406 and select `[R] Remove all Licenses` option. You can skip this step if Office was never installed on the system.

Once done,

-   Download [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)

-   Copy the downloaded `setup.exe` file to the root of the C drive, i.e. `C:\setup.exe`

-   Goto [config.office.com](https://config.office.com/deploymentsettings)

-   Select `Office LTSC Professional Plus 2021 - Volume License` (Don't select SPLA version) in the office suites section. You can add Visio and Project apps if you need them. Customize other things and leave them as default where you don't understand something. Don't select language which is [not available for Project/Visio](office_c2r_links.html) if you are installing these apps.

-   Once you go through all the options, click on the export button and it will download a file named `Configuration.xml`

-   Copy the downloaded `Configuration.xml` file to the root of the C drive, i.e. `C:\Configuration.xml`

-   Open the command prompt as admin and run the below commands

        cd /d C:\
        setup.exe /configure Configuration.xml

It will now download and install Office. You can activate it with your preferred method.

------------------------------------------------------------------------

## Alternative Methods

-   [YAOCTRU](https://forums.mydigitallife.net/posts/1505755/) (Office Downloader) & [YAOCTR](https://forums.mydigitallife.net/posts/1479890/)I (Office Installer)

-   [Office Tool Plus](http://otp.landian.vip/)

------------------------------------------------------------------------

## Need help?

-   Reach out on our [Discord](https://discord.gg/gjJEfq7ux8) (signup not required).
