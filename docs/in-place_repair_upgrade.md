# In-place Repair Upgrade

(Keeping files and apps)

---

In-place repair upgrade using Windows ISO file is a good way to fix system errors. Here's how you can perform it.

-   Download the Windows ISO, preferably from [MSDL](https://msdl.gravesoft.dev/) (Select the version marked with a ❤️ icon). Make sure you choose the ISO that matches your system’s **language and architecture**.
    -   To check the installed Windows architecture, open Powershell as admin and enter,  
        ```
		(Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment").PROCESSOR_ARCHITECTURE
		```
        AMD64/x64 means 64 Bit, x86 means 32 Bit
    -   To check the installed Windows Language, enter this command,  
        ```
		dism /english /online /get-intl | find /i "Default system UI language"
		```
		Alternatively, you can use this command,  
		```
		[Globalization.CultureInfo]::GetCultureInfo([Convert]::ToInt32((Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Nls\Language").InstallLanguage, 16)).Name
		```
    -   Note: If you are running the Enterprise LTSC edition, you will need to download that edition's ISO file. Don't download Evaluation version, that can't be activated.
-   Right-click on the downloaded ISO file, Open With > Windows Explorer
-   A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
<details>
  <summary>Click here for info: Windows 11 on Unsupported Hardware</summary>
- If you're using Windows 11 or upgrading from Windows 10, you may encounter errors due to unsupported hardware.
- To resolve this, you need to install IoT Enterprise edition which is [officially supported](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) on unsupported hardware. 
  - To do that, open the command prompt as admin and,
  - Enter the below command if you are using normal Windows 11 24H2 (or newer) ISO  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f`
  - Enter the below command if you are using Windows 11 LTSC 2024 ISO  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`
- Now quickly run setup.exe as described below.
</details>
-   Go into that DVD drive and run setup.exe, just continue until you reach the final confirmation screen.
-   Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

---

:::info

- If **Windows 11 LTSC 2024** is already up to date, performing an in-place repair upgrade requires the latest monthly updated ISO.  
- Since Microsoft does not provide updated ISO files for LTSC, you will need to [manually update the ISO file](update-windows-iso.md).

:::

:::tip

-   If you are not getting the option to keep files and apps, or the setup is showing any error, you can [connect with us](troubleshoot.md) for help.

:::
