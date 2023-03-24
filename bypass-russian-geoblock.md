---
pagetitle: Bypass Russian Geoblock
---

# Bypass Russian Geoblock

------------------------------------------------------------------------

In this page, methods to bypass Russian geoblock imposed by **Microsoft** will be discussed. We will start with Office download restrictions and later will try to cover techbench and insider preview download link generation if a free and reliable method can be found.

------------------------------------------------------------------------

## Office Download

Russian users face an error when they try to [download](genuine-installation-media.html) Office C2R with online installer or ODT.

### Error

    Command not supported
    We're sorry, we can't continue because we weren't able to download a required file. Please make sure you're connected to the internet or connect to a different network, then try again.

![](https://lookimg.com/images/2023/03/24/QTAO3s.png)

#### How Microsoft is blocking it?

It's primarily checking Russian IP address and basis on that above error is shown to users. However that's not the end of it. Once it find out that Russian IP is used then installer creates a below registry key to remember it. After that if you even use a VPN then installer will still keep showing the error.

    [HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs]
    "CountryCode"="std::wstring|RU"

### Solution

Open command prompt as admin and enter,

    reg add "HKCU\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs" /v "CountryCode" /t REG_SZ /d "std::wstring|US" /f

After that office installer won't show any such errors. You can apply this before or after running the Office installer and you can download Office without any VPN and with your Russian IP address.

------------------------------------------------------------------------

Please let us [know](contactus.html) if you face any issues. Thanks to [Paul Mercer](https://forums.mydigitallife.net/members/paul-mercer.1051689/) for help in getting Russian IP and co-testing.
