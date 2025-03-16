# Ohook

This page is intended for users who do not want to use the script for any reason and would rather perform the Ohook activation process themselves. If you'd like to use a tool for this instead, please check [here](intro.md#download--how-to-use-it).

:::info
The steps below only apply to Office 2016, 2019, 2021 and 365 C2R x64 bit versions running on an x64 bit Windows 8+ machine.  
For older Office versions, please follow [this](intro.md#download--how-to-use-it) instead.
:::

## Manually Activate Office

To manually activate Office, follow these steps:

-   Download the Ohook sppc.dll files from [here](https://github.com/asdcorp/ohook/releases/download/0.5/ohook_0.5.zip) or compile the sppc.dll files yourself using [this guide](ohook#custom-sppcdll-info).
-   Create a new folder called `ohook` in the root of your C: drive and extract the zip file to it. The path to the folder should be `C:\ohook`.
-   Open Command Prompt as Administrator and enter the following command to create a symlink of the system's sppc.dll as sppcs.dll in the Office C2R System directory:  
    `mklink "%ProgramFiles%\Microsoft Office\root\vfs\System\sppcs.dll" "%windir%\System32\sppc.dll"`
-   Now, enter the following commands to copy the hook library `sppc64.dll` to the Office C2R system directory, naming it `sppc.dll`:    
    `cd /d C:\ohook`  
    `copy /y sppc64.dll "%ProgramFiles%\Microsoft Office\root\vfs\System\sppc.dll"`
-   Some Office 365 editions check the license status and display the banner "There was a problem checking this device's license status". To prevent this, enter the following command:  
    `reg add HKCU\Software\Microsoft\Office\16.0\Common\Licensing\Resiliency /v "TimeOfLastHeartbeatFailure" /t REG_SZ /d "2040-01-01T00:00:00Z" /f`
-   Install the generic key which matches your Office edition and version:  
    `slmgr /ipk <key>`  
    *(Refer to the table below for the appropriate key.)*
-   Done.

## Troubleshooting

Check [here](troubleshoot.md) for links to our support channels.