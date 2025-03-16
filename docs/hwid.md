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

## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.
-   Further, read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
