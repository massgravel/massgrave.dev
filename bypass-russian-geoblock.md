---
pagetitle: Bypass Russian Geoblock
---

# Bypass Russian Geoblock

------------------------------------------------------------------------

In this page, methods to bypass Russian geoblock imposed by **Microsoft** will be discussed.

------------------------------------------------------------------------

## Windows Download

Russian users face an error when they try to download Windows ISO's from [Official Microsoft page](https://www.microsoft.com/software-download).

### Error

```         
We are unable to complete your request at this time. Some users, entities and locations are banned from using this service. For this reason, leveraging anonymous or location hiding technologies when connecting to this service is not generally allowed. If you believe that you encountered this problem in error, please try again. If the problem persists you may contact Microsoft Support – Contact Us page for assistance. Refer to message code 715-123130 and d37047d7-7ce8-4a29-a5a2-2c882e106817.
```

### Solution

[MSDL](/msdl/)

It uses shared sessions/proxy to generate official download links in Russia and in all other blocked places.

------------------------------------------------------------------------

## Office Download

Russian users face an error when they try to [download](genuine-installation-media.html) Office C2R with online installer or ODT.

### Error

```         
Command not supported
We're sorry, we can't continue because we weren't able to download a required file. Please make sure you're connected to the internet or connect to a different network, then try again.
```

![](https://lookimg.com/images/2023/03/24/QTAO3s.png)

#### How Microsoft is blocking it?

It's primarily checking Russian IP address and basis on that above error is shown to users. However that's not the end of it. Once it find out that Russian IP is used then installer creates a below registry key to remember it. After that if you even use a VPN then installer will still keep showing the error.

```         
[HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs]
"CountryCode"="std::wstring|RU"
```

### Solution

**1-** Open command prompt as admin and enter,

```         
reg add "HKCU\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs" /v "CountryCode" /t REG_SZ /d "std::wstring|US" /f
```

After that office installer won't show any such errors. You can apply this before or after running the Office installer and you can download Office without any VPN and with your Russian IP address.

**2-** Use [Offline installer file](office_c2r_links.html) to install Office.

------------------------------------------------------------------------

Please let us [know](contactus.html) if you face any issues or have any suggestions.
