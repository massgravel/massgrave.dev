# Bypass Microsoft Geoblocking

Microsoft blocks services in certain countries due to U.S. laws and local legal regulations.

Countries with broad restrictions:  
`Belarus, Cuba, Iran, North Korea, Russia, Syria, Venezuela`

Countries with limited Microsoft Store app functionality:  
`CU, IR, KP, SS, SD, SY`  
`MR, VE, EH, AS, BQ, FK, TF, GG, IM, JE, LB, CW, ME, YT, BL, SH, MF, PM, ST, SX, UM, AX`

*These lists are not exhaustive.*

------------------------------------------------------------------------

## Office Download

Users from blocked countries may encounter an error when trying to [download](office_c2r_links.md) Office C2R with the online installer or ODT.

### Error

`Command not supported`  
`We're sorry, we can't continue because we weren't able to download a required file. Please make sure you're connected to the internet or connect to a different network, then try again.`

![](./assets/office_download_error_geoblock.png)

#### How is Microsoft blocking it?

Primarily, it checks the current IP address, and based on that, the above error is shown to users. However that's not the end of it. Once it find out that an IP from a blocked country is used, the installer creates the registry key below to remember it. After that, even if you use a VPN, the installer will still keep showing the error.

```         
[HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs]
"CountryCode"="std::wstring|RU"
```

### Solution 1

-   Open command prompt as admin and enter,

```         
reg add "HKCU\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs" /v "CountryCode" /t REG_SZ /d "std::wstring|US" /f
```

After that, the office installer won't show any related errors. You can apply this before or after running the Office installer and you can download Office without any VPN with your original IP address.

**Or**

### Solution 2

-   Use the [Offline installer file](office_c2r_links.md) to install Office.

-------------------------------------------------------------------------

## Microsoft Store App

If the Microsoft Store app isn’t working in your region, you can try changing your region in Windows settings to access it.

-------------------------------------------------------------------------