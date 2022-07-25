# 'Get genuine Office' banner

![](office-license-is-not-genuine.png)

**TL;DR** To solve it, use the latest abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/) or [MAS](https://massgrave.dev/) to activate Office.

------------------------------------------------------------------------

## Reasons

-   Office Click-to-Run builds (since February 2021) that are activated with KMS checks the existence of the KMS server name in the registry. If KMS server is not present, a banner is shown in Office programs notifying that "Office isn't licensed properly"

-   In case of 32-bit Office installed on 64-bit Windows, Office checks the KMS server existence in corresponding WOW6432Node registry key as well.

-   Apart from this, they also detect if registered KMS server is in their blacklist or not. As far as I know, they blacklisted below 3 addresses.

    `km-s8.MSG-uides.com` `km-s9.MSG-uides.com` `0.0.0.0`(Remove hyphen)\
    First two are public KMS servers and last one in simple words is neither a public or private IP.

-   Please note that these checks are not performed by Office if proper installation of Volume version of Office is done with Perpetual2019 / 2021 VL channel.

------------------------------------------------------------------------

## Solutions:

Please find below various ways you can avoid this banner. Simplest option for you is to just use a Office activation tool mentioned here.

------------------------------------------------------------------------

### 1- Activation Tools

-   Use the latest abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/) or [MAS](https://massgrave.dev/) to activate Office.

------------------------------------------------------------------------

### 2- Manual Activation

In this section I'm only going to mention how to setup KMS server in registry properly.

-   **If using Public KMS server:**\
    Since they can put any public KMS server in blacklist, as a permanent solution, we can instead use server IP instead of hostname.

-   **If using private KMS server IP:\
    **Make sure to use a valid private IP address.

Please find below how to set the KMS server address in registry. Example with a private IP `10.0.0.10`

    reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\0ff1ce15-a989-479d-af46-f275c6370663" /f

    reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\0ff1ce15-a989-479d-af46-f275c6370663" /f /reg:32

    reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /f /v KeyManagementServiceName /t REG_SZ /d "10.0.0.10"

    reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /f /v KeyManagementServiceName /t REG_SZ /d "10.0.0.10" /reg:32

------------------------------------------------------------------------

### 3- Install VL Office

As mentioned in reasons section, these checks are performed only if Retail Office is installed and later converted to VL. Office doesn't perform any such checks if proper installation of VL office is done.

Please find below guide on how to properly install Volume C2R Office.

**Clear previous installation of Office:**

-   Uninstall the office with App and Features option in Windows settings.

-   Run `Full_Scrub.cmd` file from [Office Scrubber](https://forums.mydigitallife.net/posts/1466365/) ([Mirror](https://github.com/abbodi1406/WHD/tree/master/scripts)) by abbodi1406 and reboot the system.\
    Full Scrub is optional, you can skip this step if you want to save outlook related data.\
    It's recommended to at-least run `Remove_Licenses.cmd` file from this package.

**Install Office 2021 VL with Official method:**

Please note that in the official VL office installation method, there is no ISO or any one click solution available. Below is the simplest guide to install VL office.

-   Download [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)

-   Copy the downloaded `setup.exe` file to the root of the C drive, i.e. `C:\setup.exe`

-   Goto [config.office.com](https://config.office.com/deploymentsettings)

-   Select `Office LTSC Professional Plus 2021 - Volume License` in the office suites section. You can add Visio and Project apps if you need. Customize other things and leave as default where you don't understand something.

-   Once you go through all the options, click on the export button and it will download a file named `Configuration.xml`

-   Copy the downloaded `Configuration.xml` file to the root of the C drive, i.e. `C:\Configuration.xml`

-   Open the command prompt as admin and run the below commands

        cd /d C:\
        setup.exe /configure Configuration.xml

It will now download and install Office. You can activate it with your preferred method.

------------------------------------------------------------------------

### 4- Change Update Channel

-   If we change the Insider or Current update channel **to** Monthly Enterprise or Semi-Annual channel then such non-genuine banners won't appear by default.

-   Before doing this, make sure your Office update channel is either Insider or Current.

-   Make sure Internet is connected

-   Open command prompt as admin and enter below lines and press enter,

<!-- -->

    reg add HKLM\SOFTWARE\Microsoft\Office\ClickToRun\Configuration /v CDNBaseUrl /t REG_SZ /d "http://officecdn.microsoft.com/pr/55336B82-A18D-4DD6-B5F6-9E5095C314A6" /f

    reg delete HKLM\SOFTWARE\Microsoft\Office\ClickToRun\Configuration /v UpdateUrl /f

    reg delete HKLM\SOFTWARE\Microsoft\Office\ClickToRun\Configuration /v UpdateToVersion /f

    reg delete HKLM\SOFTWARE\Microsoft\Office\ClickToRun\Updates /v UpdateToVersion /f

    reg delete HKLM\SOFTWARE\Policies\Microsoft\Office\16.0\Common\OfficeUpdate\ /f

    "%CommonProgramFiles%\microsoft shared\ClickToRun\OfficeC2RClient.exe" /update user

-   It will change the update channel to Production::MEC \| MonthlyEnterprise

-   Make sure Office starts updating with the last command.

------------------------------------------------------------------------

## Report an issue

-   If you have any conflicting info or any other useful info regarding this then please reach out to us on [Discord](https://discord.gg/gjJEfq7ux8) (signup not required).
