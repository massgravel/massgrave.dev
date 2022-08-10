# **HWID Activation**

------------------------------------------------------------------------

## Overview

-   How to use it? Please find the instructions [here](https://massgrave.dev).

-   This activation is supported for Windows 10/11 only.

-   This activation does not store any files in your system.

-   This activation is a permanent activation for your system Hardware.

-   On a system, this activation can be created for all the supported editions, and all can be linked to Microsoft account without any issues.

-   Once a system is activated, this activation cannot be removed because the license is stored in the Microsoft servers and not in the user's system. MS checks the hardware ID (HWID) and if a license is found in their database, the system will automatically activate.

-   Any significant changes in the Hardware (such as a motherboard) may deactivate the system. It is possible to reactivate a system that was deactivated because of significant hardware changes, IF your activation, was linked to an online Microsoft account.

-   For activation to succeed, internet connectivity must be enabled. If you are trying to activate without these conditions being met, then the system will auto-activate later when the conditions are met.

-   Auto activation scenario after the Windows re-install:

    -   The Internet is required. (Only at the time of activation)

    -   The system will auto-activate if Retail (Consumer) media was used for the installation.

    -   The system will NOT auto-activate if VL (Business) media was used for the installation. In this case, the user will have to insert that windows edition Retail/OEM key (find keys below on this page) to activate, if the user doesn't wish to activate again using this script.

------------------------------------------------------------------------

## How does it work?

-   In the official upgrade process from Windows 7 to Windows 10, Microsoft provides an HWID (digital license) activation for Windows 10 without any cost.

-   In the background, the upgrade process runs a file named `gatherosstate.exe` and it checks the license of current Windows if found activated, it generates a valid GenuineTicket.xml which is sent to Microsoft and in return, MS authorizes a license.

-   So if we just convince the `gatherosstate.exe` file that the system is activated by fooling it, it will generate a valid ticket, which can be used to get the valid HWID (Digital license). The script here does exactly that to get the activation for free without any upgrade process.

Now a question, can Microsoft differentiate counterfeit tickets and block the license?

-   Umm.. Yes, but actually no. The signature type can (sort of) be used to determine what utility is responsible for the ticket. There is no way (in a standard environment) for a non-activated Windows 10 installation to generate a ticket. In the normal process, gatherosstate will ask SLC for the entire ticket, but when this fails it will generate and sign it by itself, creating a "downlevelGTkey" signature. For every activated system, a generated ticket will be returned by SLC and thus will have a "clientLockboxKey" signature. Put simply, the signature (should) always be a "clientLockboxKey" one in the case of an activated system, but in this case, it isn't. Microsoft will not take action against it, because of the risk of voiding valid licenses. Besides, they never really cared for consumer piracy; That's not where they get the most money from.

------------------------------------------------------------------------

## Supported Products

| Windows 10/11            | Generic Retail/OEM/MAK Key      |
|:-------------------------|:--------------------------------|
| Education                | `YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY` |
| Education N              | `84NGF-MHBT6-FXBX8-QWJK7-DRR8H` |
| Enterprise               | `XGVPP-NMH47-7TTHJ-W3FW7-8HV2C` |
| Enterprise N             | `3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT` |
| Enterprise LTSC 2015     | `FWN7H-PF93Q-4GGP8-M8RF3-MDWWW` |
| Enterprise LTSC 2016     | `NK96Y-D9CD8-W44CQ-R8YTK-DYJWX` |
| Enterprise LTSC 2019     | `43TBQ-NH92J-XKTM7-KT3KK-P39PB` |
| Enterprise N LTSC 2015   | `NTX6B-BRYC2-K6786-F6MVQ-M7V2X` |
| Enterprise N LTSC 2016   | `2DBW3-N2PJG-MVHW3-G7TDK-9HKR4` |
| Home                     | `YTMG3-N6DKC-DKB77-7M9GH-8HVX7` |
| Home N                   | `4CPRK-NM3K3-X6XXQ-RXX86-WXCHW` |
| Home China               | `N2434-X9D7W-8PF6X-8DV9T-8TYMD` |
| Home Single Language     | `BT79Q-G7N6G-PGBYW-4YWX6-6F4BT` |
| IoT Enterprise           | `XQQYW-NFFMW-XJPBH-K8732-CKFFD` |
| IoT Enterprise LTSC 2021 | `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` |
| Pro                      | `VK7JG-NPHTM-C97JM-9MPGT-3V66T` |
| Pro N                    | `2B87N-8KFHP-DKV6R-Y2C8J-PKCKT` |
| Pro Education            | `8PTT6-RNW4C-6V7J2-C2D3X-MHBPB` |
| Pro Education N          | `GJTYN-HDMQY-FRR76-HVGC7-QPF8P` |
| Pro for Workstations     | `DXG7C-N36C4-C4HTG-X4T3X-2YV77` |
| Pro N for Workstations   | `WYPNQ-8C467-V2W6J-TX4WX-WT2RQ` |
| S                        | `V3WVW-N2PV2-CGWC3-34QGF-VMJ2C` |
| S N                      | `NH9J3-68WK7-6FB93-4K3DF-DJ4F6` |
| SE                       | `K9VKN-3BGWV-Y624W-MCRMQ-BHDCD` |
| SE N                     | `KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W` |
| Team                     | `XKCNC-J26Q9-KFHD2-FKTHY-KD72Y` |

**Notes:**

-   X86-X64 and ARM64 architecture systems are supported.

-   Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) cannot be activated.

-   IoTEnterpriseS (LTSC) 2021 key will be used to activate the unsupported EnterpriseS (LTSC) 2021 edition.

-   Windows Server does not support HWID activation.

-   ServerRdsh edition does not [officially](https://docs.microsoft.com/en-us/azure/virtual-desktop/windows-10-multisession-faq#can-i-run-windows-10-enterprise-multi-session-on-premises) support activation on non-azure systems.

------------------------------------------------------------------------

## Downlevel & Lockbox Ticket

Downlevel = downlevelGTkey

Lockbox = clientLockboxKey

-   Downlevel Method: It creates a downlevelGTkey ticket for activation with the simplest process.

-   LockBox Method: It creates a clientLockboxKey ticket which better mimics genuine activation, But requires more steps such as,

    -   Cleaning ClipSVC licenses

    -   Deleting a volatile and protected registry key by taking ownership\
        `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ClipSVC\Volatile\PersistedSystemState`

    -   System may need a restart for successful activation

    -   Microsoft Account and Store Apps may need relogin-restart in the system

**Notes:**

-   We don't suggest running the Lockbox method on a production system. Hence by default script will choose the Downlevel method and won't show you the option to select the Lockbox method. However, if you want, you can apply it through command line switches.

-   Microsoft accepts both types of tickets and that's unlikely to change.

------------------------------------------------------------------------

## Command line Switches

-   This is applicable only in separate files versions.

-   If any parameter is used then the script will automatically run in unattended mode.

-   To activate with the Downlevel method (default),

`"HWID_Activation.cmd" /a`

-   To only generate GenuineTicket.xml with the Downlevel method (default),

`"HWID_Activation.cmd" /g`

-   To enable LockBox method (not recommended), run the script with /k parameter You need to use this option with either activation or ticket generation. Example,

`"HWID_Activation.cmd" /a /k`

`"HWID_Activation.cmd" /g /k`

------------------------------------------------------------------------

## File Details

Besides the plain batch script, HWID activation requires the use of the official gatherosstate.exe (x86) file.

     File: gatherosstate.exe
    SHA-1: FABB5A0FC1E6A372219711152291339AF36ED0B5 

It's taken from [Windows 10 Version 1607 ADK](https://go.microsoft.com/fwlink/p/?LinkId=526740) (Section: User State Migration Tool)

------------------------------------------------------------------------

## Manual Activation

-   You need the `gatherosstate.exe` file, get it from MAS separate files version.

-   Make a folder named `Files` in C drive, `C:\Files` and copy the `gatherosstate.exe` file in that folder.

-   Make sure the Internet is enabled.

-   Open Windows Powershell as administrator, and enter the following listed commands in the sequence in which they are given.

-   Enter the Key, (Replace `<key>` with the key from the above list) with the following command

`slmgr /ipk <key>`

-   Copy the below code all at once and enter it in PowerShell to modify the `gatherosstate.exe` file.

<!-- -->

    $bytes  = [System.IO.File]::ReadAllBytes("C:\Files\gatherosstate.exe")
    $bytes[320] = 0x9c
    $bytes[321] = 0xfb
    $bytes[322] = 0x05
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

-   Now we need to generate the ticket, to do that, enter the below command.

<!-- -->

    $value = (Get-ItemProperty HKLM:\SYSTEM\CurrentControlSet\Control\ProductOptions).OSProductPfn

    C:\Files\gatherosstatemodified.exe Pfn=$value`;DownlevelGenuineState=1

-   A GenuineTicket.xml file should be created in the folder `C:\Files\` now let's apply it.

`clipup -v -o -altto C:\Files\`

-   Activate Windows with the following command:

`slmgr /ato`

-   Check Activation Status with the following command:

`slmgr /xpr`

-   Done.

------------------------------------------------------------------------

## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.

-   Further, read [here](https://massgrave.dev/oem-folder.html).

------------------------------------------------------------------------

## Troubleshooting

-   Reach out to us on [Discord](https://discord.gg/gjJEfq7ux8) (signup not required) with an error screenshot.
