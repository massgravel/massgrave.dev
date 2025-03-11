# Windows 10 Updates After End-Of-Life

This document explains how users can receive official updates after the retirement date of Windows 10 on October 14, 2025.  

For many users, the obvious solution is to upgrade to Windows 11, but some can't due to Windows 11's hardware requirements.  
Some users may also dislike Windows 11
and would like to stay on Windows 10 as long as they can.

Here are several solutions to choose from to receive updates past October 14th, 2025.

---

## Windows 10 ESU

Microsoft sells [Extended Security Updates (ESU)](https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates), a subscription to receive Windows updates past the expiration date. These updates will begin to roll out in November 2025. 

**You can use the [TSforge](tsforge.md) option in MAS to activate 3 years of ESU.** You will receive updates from Oct 2025 to Oct 2028. This requires Pro edition or higher, see [here](faq.md#how-to-change-the-windows-edition-from-home-to-pro).

---

## Windows 10 (IoT) Enterprise LTSC 2021

Microsoft releases Windows 10/11 in two servicing channels.

1- GAC (General Availability Channel) (i.e. Home, Pro, Enterprise). It will reach the end of support on [October 14, 2025](https://learn.microsoft.com/lifecycle/products/windows-10-home-and-pro).  
2- LTSC (Long-Term Servicing Channel) (i.e. Enterprise LTSC, IoT Enterprise LTSC). Windows 10 Enterprise LTSC 2021 will reach the end of support on [Jan 12, 2027](https://learn.microsoft.com/lifecycle/products/windows-10-enterprise-ltsc-2021) 
and Windows 10 IoT Enterprise LTSC 2021 will reach the end of support on [Jan 13, 2032](https://learn.microsoft.com/lifecycle/products/windows-10-iot-enterprise-ltsc-2021) 

The solution is simple. You can just use the Official Windows 10 IoT Enterprise LTSC 2021 edition to get updates till Jan 13, 2032.

**Download Link**  
https://massgrave.dev/windows_ltsc_links

**Clean installation guide**  
https://gravesoft.dev/clean_install_windows

<details>
  <summary>Upgrade Windows 10 Home, Pro, etc editions to Windows 10 IoT Enterprise LTSC 2021 while keeping files and apps</summary>

- Download Windows 10 Enterprise LTSC ISO from [here](windows_ltsc_links.md) in the **same Windows language and architecture**.  
  - To check the installed Windows architecture, open Powershell as admin and enter,  
`Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture`  
    x64 means 64 Bit, x86 means 32 Bit  
  - To check the installed Windows Language, open Powershell as admin and enter,  
`dism /english /online /get-intl | find /i "Default system UI language"`
- Right-click on the downloaded ISO file, Open With > Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter,  
  `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`
- Now **quickly** go into that DVD drive and run setup.exe, and continue until you reach the final confirmation screen. (Don't take time at this step, otherwise it won't show an option to keep files and apps)
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

That's all.

</details>

<details>
  <summary>Notes</summary>

- IoT Enterprise LTSC edition ISO's are available in English language only. But don't worry, you can install Non-IoT Enterprise LTSC in another language and later install IoT Enterprise LTSC 2021 key `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` to change the edition.
- LTSC editions do not have Store apps installed by default. However, if you upgrade from GAC to LTSC, all your Store apps will be retained. In contrast, if you perform a clean installation of Windows LTSC, Store apps will not be installed. For instructions on how to install them manually, please refer to this [page](windows_ltsc_links.md).
- IoT editions are [binary identical](https://learn.microsoft.com/windows/iot/iot-enterprise/Overview) to Enterprise editions. The difference is in licensing. You can use it just fine on a general-purpose device.

</details>

---

## Windows 11 IoT Enterprise 24H2 / IoT Enterprise LTSC 2024

Many users choose not to use Windows 11 due to hardware limitations, such as a lack of TPM, Secure Boot, or UEFI support. While it is possible to bypass these limitations, doing so is officially unsupported and may lead to issues with future updates.

However, a promising alternative is available.

In 2024, Microsoft released Windows 11 IoT Enterprise 24H2 (GAC) / IoT Enterprise LTSC 2024 (LTSC) which has [relaxed hardware requirements](https://learn.microsoft.com/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements).
You can officially install these Windows 11 editions without meeting the usual hardware requirements, such as TPM, Secure Boot, and UEFI, while still receiving continued support in the future. 

**ISO Download Links:-**  
**Windows 11 IoT Enterprise 24H2 (GAC)**  
https://massgrave.dev/windows_11_links

**Windows 11 IoT Enterprise LTSC 2024 (LTSC)**  
https://massgrave.dev/windows_ltsc_links

<details>
  <summary>Clean installation guide</summary>

- Guide: https://gravesoft.dev/clean_install_windows
- These IoT editions are available in the English language only. If you want this official support for IoT editions in other languages and don't want to use language packs, you can install any Windows 11 24H2 (For GAC) or Enterprise LTSC 2024 (For LTSC) ISO file with [Rufus](https://gravesoft.dev/clean_install_windows) and once the installation is done, you can use the change edition option in MAS to switch the edition to IoT Enterprise and enjoy official support on unsupported hardware.

</details>

<details>
  <summary>Upgrade Windows 10 Home, Pro, etc editions to Windows 11 IoT Enterprise (GAC/LTSC) 2024 while keeping files and apps</summary>

- Download the required ISO from the above link in the **same Windows language and architecture**.
- The IoT edition is available in English language only, but don't worry. If you want it in another language, download any Windows 11 24H2 (For GAC) or Enterprise LTSC 2024 (For LTSC) ISO in your language. (ISO in the same language is important)
  - To check the installed Windows architecture, open Powershell as admin and enter,  
`Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture`  
    x64 means 64 Bit, x86 means 32 Bit  
  - To check the installed Windows Language, open Powershell as admin and enter,  
`dism /english /online /get-intl | find /i "Default system UI language"`
- Right-click on the downloaded ISO file, Open With > Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter,  
  **For GAC**  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f`  
  **For LTSC**  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`
- Now **quickly** go into that DVD drive and run setup.exe, and continue until you reach the final confirmation screen. (Don't take time at this step, otherwise it won't show an option to keep files and apps)
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

That's all.

</details>

<details>
  <summary>Notes</summary>

- Many tools can let you install Windows 11 if the hardware is not supported and monthly updates would work fine. However yearly feature updates will fail to install if hardware requirements are not met.
- This is why IoT (24H2/2024) editions are mentioned so that you can get official support on future feature upgrades.
- LTSC editions do not have Store apps installed by default. However, if you upgrade from GAC to LTSC, all your Store apps will be retained. In contrast, if you perform a clean installation of Windows LTSC, Store apps will not be installed. For instructions on how to install them manually, please refer to this [page](windows_ltsc_links.md).
- Windows 11 24H2 / 2024 requires CPUs that support SSE4.2 and POPCNT instructions.
- IoT editions are [binary identical](https://learn.microsoft.com/windows/iot/iot-enterprise/Overview) to Enterprise editions. The difference is in licensing. You can use it just fine on a general-purpose device.

</details>

---

:::tip

-   If you need any help regarding this, you can [connect with us](troubleshoot.md).

:::
