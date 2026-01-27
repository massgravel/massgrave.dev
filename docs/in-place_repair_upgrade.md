# In-place Repair Upgrade

(Keeping Files and Apps)

---

Performing an in-place repair upgrade using a Windows ISO file is a good way to fix system errors. Here is how to do it.

-   [Download the Windows ISO](https://massgrave.dev/genuine-installation-media) that matches your desired version, language, and architecture.
    -   To check the installed Windows architecture, open PowerShell as administrator and enter:
        ```powershell
        (Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment").PROCESSOR_ARCHITECTURE
        ```
        AMD64/x64 indicates 64-bit; x86 indicates 32-bit.
    -   To check the installed Windows language, enter this command:
        ```cmd
        dism /english /online /get-intl | find /i "Default system UI language"
        ```
        Alternatively, use this command:
        ```powershell
        [Globalization.CultureInfo]::GetCultureInfo([Convert]::ToInt32((Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Nls\Language").InstallLanguage, 16)).Name
        ```
    -   **Note:** If you are running the Enterprise LTSC edition, you must download that specific edition's ISO file. Do not download the Evaluation version, as it cannot be activated.
-   Right-click the downloaded ISO file and select **Open with > Windows Explorer**.
-   A new virtual DVD drive will appear in Windows Explorer, which means that the installation image has been mounted successfully.

<details>
  <summary>Click here for info: Windows 11 on Unsupported Hardware</summary>

- If you are using Windows 11 or upgrading from Windows 10, you may encounter errors due to unsupported hardware.
- To resolve this, you can switch the edition to IoT Enterprise, which is [officially supported](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) on unsupported hardware. 
  - To do this, open Command Prompt as administrator and run the appropriate command below.
  - If you are using a standard Windows 11 24H2 (or newer) ISO:
    ```cmd
    reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f
    ```
  - If you are using the Windows 11 LTSC 2024 ISO:
    ```cmd
    reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f
    ```
- Proceed immediately to run `setup.exe` as described below.
</details>

-   Open the mounted DVD drive and run `setup.exe`. Continue through the prompts until you reach the final confirmation screen.
-   Make sure that the final screen displays "**Keep personal files and apps**." Proceed with the installation and wait for completion.

---

:::info

- If **Windows 11 LTSC 2024** is already up to date, performing an in-place repair upgrade requires the latest monthly updated ISO.  
- Since Microsoft does not provide updated ISO files for LTSC, you will need to [manually update the ISO file](update-windows-iso.md).

:::

:::tip

-   If you do not see the option to keep files and apps, or if the setup displays an error, you can [connect with us](troubleshoot.md) for help.

:::
