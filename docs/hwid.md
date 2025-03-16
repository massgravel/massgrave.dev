# HWID Activation

## Overview

-   How to use it? Please find the instructions [here](intro.md#download--how-to-use-it).
-   This activation method supports Windows 10/11 only.
-   This activation method does not store or modify any files in your system.
-   This activation method gives you permanent Windows activation for your system hardware.
-   All activations can be linked to a Microsoft account without any issues.
-   Once the system is activated, this activation cannot be removed because the license is stored in the Microsoft servers and not in the user's system. MS checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate. This is how official digital license works.
-   Any significant changes to the hardware (such as a motherboard) may deactivate the system. It is possible to reactivate a system that was deactivated because of significant hardware changes, IF your activation, was linked to an online Microsoft account.
-   For activation to succeed, internet connectivity must be enabled. If you are trying to activate without these conditions being met, then the system will auto-activate later when the conditions are met.
-   The following is required for Windows to reactivate itself after Windows reinstall:
    -   The internet is required. (Only at the time of activation)
    -   The system will auto-activate only if Retail (Consumer) media was used for installing Windows.
    -   The system will NOT auto-activate if VL (Business) media was used for the installation. In this case, the user will have to insert the generic Retail/OEM key corresponding to the Windows edition currently running to activate if the user doesn't want to use the script again. (Those keys can be found below on this page)

------------------------------------------------------------------------

## HWID History

## How does it work?

#### HWID 1 (Now defunct) (Summer of 2018 - Sep 26 2023)

-   In the official upgrade process from Windows 7 to Windows 10, if your copy of Windows 7 was activated, Microsoft provided a digital license for Windows 10 without any cost.
-   In the background, the upgrade process runs a file named gatherosstate.exe (available in Windows 10/11 ISO) and it checks the license of the current Windows installation. If it detected that it is activated, it generates a valid GenuineTicket.xml **ticket** which is sent to Microsoft and in return, MS authorizes a license.
-   So, if we can convince the gatherosstate.exe file that the conditions are met for ticket generation by fooling it, it will generate a valid ticket, which can be used to get the valid digital license.
-   How to convince gatherosstate.exe that Windows is activated?  
    There are two methods for it.  
    **1-** Place a [custom slc.dll](https://github.com/asdcorp/Integrated_Patcher_3) file beside gatherosstate.exe:  
    gatherosstate.exe uses the system's `C:\Windows\System32\slc.dll` file to gather the system's info. If we place a custom slc.dll file beside gatherosstate.exe, it can send rubbish data to it, then it will simply accept it and generate a valid ticket.  
    **2-** [Modify](https://github.com/asdcorp/GamersOsState) the gatherosstate.exe file directly so that it doesn't check the system's activation status at all and create a valid ticket.
-   You can find the workings of this old method here: [MAS-Legacy-Methods](https://github.com/massgravel/MAS-Legacy-Methods).
-   Microsoft [made](https://devicepartner.microsoft.com/en-us/communications/comm-windows-ends-installation-path-for-free-windows-7-8-upgrade) server-side changes to their licensing servers to block the free upgrade, and with that server-side change, this method stopped working. To be clear, only new activation requests coming from new hardware were blocked, already established digital licenses with this method are fine.

#### HWID 2 (Currently working) (03 Oct 2023 - Current)

-   When Microsoft stopped the free upgrade, it started requiring a genuine valid key in the ticket to authorize a digital license. In the new method, we use the Installation ID of a genuine, valid key. This gets accepted by the server and allows us to get a digital license for free. Check the manual activation process in below section to know how to make working universal tickets.

------------------------------------------------------------------------

Now a question, can Microsoft block the new requests or revoke already established digital licenses?

-   Revoking the licenses would be too extreme and will face many complications and create a risk of voiding valid licenses. However, they can very easily block the new activation requests for new hardware coming from the methods mentioned here.

------------------------------------------------------------------------

## Supported Products

| Windows 10/11 Product Names           | EditionID                | Generic Retail/OEM/MAK Key    |
|---------------------------------------|--------------------------|-------------------------------|
| Education                             | Education                | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
| Education N                           | EducationN               | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
| Enterprise                            | Enterprise               | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
| Enterprise N                          | EnterpriseN              | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
| Enterprise LTSB 2015                  | EnterpriseS              | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
| Enterprise LTSB 2016                  | EnterpriseS              | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
| Enterprise LTSC 2019                  | EnterpriseS              | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
| Enterprise N LTSB 2015                | EnterpriseSN             | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
| Enterprise N LTSB 2016                | EnterpriseSN             | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
| Home                                  | Core                     | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
| Home N                                | CoreN                    | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
| Home China                            | CoreCountrySpecific      | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
| Home Single Language                  | CoreSingleLanguage       | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
| IoT Enterprise                        | IoTEnterprise            | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
| IoT Enterprise Subscription           | IoTEnterpriseK           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
| IoT Enterprise LTSC 2021              | IoTEnterpriseS           | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| IoT Enterprise LTSC 2024              | IoTEnterpriseS           | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 | IoTEnterpriseSK          | N979K-XWD77-YW3GB-HBGH6-D32MH |
| Pro                                   | Professional             | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
| Pro N                                 | ProfessionalN            | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
| Pro Education                         | ProfessionalEducation    | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
| Pro Education N                       | ProfessionalEducationN   | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
| Pro for Workstations                  | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
| Pro N for Workstations                | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
| S                                     | Cloud                    | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
| S N                                   | CloudN                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
| SE                                    | CloudEdition             | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
| SE N                                  | CloudEditionN            | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
| Team                                  | PPIPro                   | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

:::info

-   Systems in all architectures (x86, x64 and arm64) are supported.
-   Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) [cannot be activated](evaluation_editions.md) beyond the evaluation period. You can use TSforge option in MAS to reset the activation any given time.
-   IoTEnterpriseS (LTSC) 2021 key will be used to activate the unsupported EnterpriseS (LTSC) 2021 edition.
-   IoTEnterpriseS (LTSC) 2024 key will be used to activate the unsupported EnterpriseS (LTSC) 2024 edition.
-   Windows Server does not support HWID activation.
-   Enterprise multi-session (ServerRdsh) edition can be activated with only a key NJCF7-PW8QT-3324D-688JX-2YV66, but it does not support real digital license activation.

:::

------------------------------------------------------------------------

## How to remove HWID?

-   **HWID (Digital license) activation cannot be removed** because the license is stored in the Microsoft servers and not in the user's system.
-   Microsoft checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate. This is how Official digital license activation process works.

**What if you still want to remove it?**

-   As explained above, you cannot remove it for your hardware, only major hardware change such as CPU, motherboard can remove the activation.

**What if you just want to keep Windows in the unactivated stage?**  
- To do that, you can install the [KMS key](kms38.md#supported-products) in the Windows settings activation page  
  Or
- Change the edition using Change Windows edition option in MAS.  
- **Note:** 
  - Windows settings will instantly show that Windows is not activated but it usually takes 3 hours for the Activation Watermark to appear.
  - These options will simply hide the HWID activation. If you reinstall Windows with the same edition or restore the default generic Retail/OEM keys, the system will automatically activate again if an Internet connection is found.

------------------------------------------------------------------------

## Command line Switches

-   Check [here](command_line_switches.md).

------------------------------------------------------------------------

## Manual Activation

-   Check [here](manual_hwid_activation.md).

------------------------------------------------------------------------

## Manual Ticket Generation

This guide is for manually creating the tickets that are used in the MAS script.

-   Download the .cab file from the following official Microsoft link:  
    https://download.microsoft.com/download/9/A/E/9AE69DD5-BA93-44E0-864E-180F5E700AB4/adk/Installers/14f4df8a2a7fc82a4f415cf6a341415d.cab
-   Find the file named `filf8377e82b29deadca67bc4858ed3fba9` (Size: 330 KB) and rename it to `gatherosstate.exe`.
-   Make a folder named `Files` in the root of the C: drive (`C:\Files`) and copy the `gatherosstate.exe` file to that folder.
-   Make sure you have a working internet connection.
-   Open Windows PowerShell as Administrator and enter the following commands.
-   Copy the entire block of code below and enter it in PowerShell to patch the `gatherosstate.exe` file. The patches are based on [GamersOsState](https://github.com/asdcorp/GamersOsState).  
```
$bytes  = [System.IO.File]::ReadAllBytes("C:\Files\gatherosstate.exe")
$bytes[320] = 0xf8
$bytes[321] = 0xfb
$bytes[322] = 0x05
$bytes[324] = 0x03
$bytes[13672] = 0x25
$bytes[13674] = 0x73
$bytes[13676] = 0x3b
$bytes[13678] = 0x00
$bytes[13680] = 0x00
$bytes[13682] = 0x00
$bytes[13684] = 0x00
$bytes[32748] = 0xe9
$bytes[32749] = 0x9e
$bytes[32750] = 0x00
$bytes[32751] = 0x00
$bytes[32752] = 0x00
$bytes[32894] = 0x8b
$bytes[32895] = 0x44
$bytes[32897] = 0x64
$bytes[32898] = 0x85
$bytes[32899] = 0xc0
$bytes[32900] = 0x0f
$bytes[32901] = 0x85
$bytes[32902] = 0x1c
$bytes[32903] = 0x02
$bytes[32904] = 0x00
$bytes[32906] = 0xe9
$bytes[32907] = 0x3c
$bytes[32908] = 0x01
$bytes[32909] = 0x00
$bytes[32910] = 0x00
$bytes[32911] = 0x85
$bytes[32912] = 0xdb
$bytes[32913] = 0x75
$bytes[32914] = 0xeb
$bytes[32915] = 0xe9
$bytes[32916] = 0x69
$bytes[32917] = 0xff
$bytes[32918] = 0xff
$bytes[32919] = 0xff
$bytes[33094] = 0xe9
$bytes[33095] = 0x80
$bytes[33096] = 0x00
$bytes[33097] = 0x00
$bytes[33098] = 0x00
$bytes[33449] = 0x64
$bytes[33576] = 0x8d
$bytes[33577] = 0x54
$bytes[33579] = 0x24
$bytes[33580] = 0xe9
$bytes[33581] = 0x55
$bytes[33582] = 0x01
$bytes[33583] = 0x00
$bytes[33584] = 0x00
$bytes[33978] = 0xc3
$bytes[34189] = 0x59
$bytes[34190] = 0xeb
$bytes[34191] = 0x28
$bytes[34238] = 0xe9
$bytes[34239] = 0x4f
$bytes[34240] = 0x00
$bytes[34241] = 0x00
$bytes[34242] = 0x00
$bytes[34346] = 0x24
$bytes[34376] = 0xeb
$bytes[34377] = 0x63
[System.IO.File]::WriteAllBytes("C:\Files\gatherosstatemodified.exe", $bytes)
```
-   Right click on the newly created file, `gatherosstatemodified.exe`, click the "Properties" option and set the Compatibility mode to Windows XP SP3.
-   To generate the ticket using our modified `gatherosstate.exe`, run these commands:  
```         
$value = (Get-ItemProperty HKLM:\SYSTEM\CurrentControlSet\Control\ProductOptions).OSProductPfn

C:\Files\gatherosstatemodified.exe /c Pfn=$value`;PKeyIID=465145217131314304264339481117862266242033457260311819664735280
```
-   A GenuineTicket.xml file should be created in the `C:\Files\` folder. To apply the ticket file and activate Windows, run the following commands:  
`clipup -v -o -altto C:\Files\`
`slmgr /ato`
-   After waiting for a few seconds, Windows should be activated.

**Notes:**

-   There are two types of tickets: Lockbox and Downlevel. If the system is already activated, then the created ticket will be a Lockbox ticket. If not, it will be a Downlevel ticket.
-   To make the exact ticket used in the MAS HWID script, make sure the system is already activated and change the time with the below PowerShell command. Then, start the ticket generation process according to the steps above.\
    `Set-TimeZone -Id "UTC"; $date=[datetime]"2022/10/11 12:00";while($true){set-date $date; start-sleep -milliseconds 10}`


## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.
-   Further, read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
