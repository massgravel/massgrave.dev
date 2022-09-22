# KMS38 Activation

------------------------------------------------------------------------

## Overview

-   How to use it? Please find the instructions [here](https://massgrave.dev).

-   This activation method activates Windows 10/11 and Windows Server (14393 and later builds), until 19 January 2038 03:14:07 UTC.

-   This activation method does not store any files on the system.

-   This activation method works offline.

-   Unlike HWID and Online KMS activation option, KMS38 does not match with any official activation method.

-   Make sure the following things have been accounted for, before applying KMS38 Activation:

    -   Before the activation, if any KMS activator is installed, then make sure to uninstall it completely.

    -   After KMS38 activation has been achieved, if you want to use the 180 Days KMS Activator for MS Office, then you must make sure that it (the 180 Days KMS Activator for MS Office) is compatible with Windows KMS38 activation. FYI, the following activators are compatible and can activate Office without disrupting the Windows KMS38 activation.

        [KMS_VL_ALL]((https://github.com/abbodi1406/KMS_VL_ALL_AIO)) by abbodi1406

        [MAS](https://massgrave.dev) (Online KMS option)

-   Any KMS Activator which is not compatible with KMS38 may overwrite the KMS38 activation for Windows with its own 180 days activation, thereby destroying the KMS38 activation for Windows. To prevent this accidental overwriting, you can select the KMS38 protection option.

------------------------------------------------------------------------

## How does it work?

-   In a genuine [KMS](https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview) activation environment, activation lasts a maximum of up to 180 days. This is done using a valid license and server setup.

-   However, in the Windows major upgrade process, the system uses `gatherosstate.exe` to carry over the remaining KMS activation period. It does it by creating a ticket that can be used offline.

-   The trick is that we can fool the `gatherosstate.exe` about the remaining KMS activation period and manually put the desired period maximum up to 19 January 2038 03:14:07 UTC.

-   Why it's limited to the year 2038?\
    It's related to the [Y2K38 problem](https://en.wikipedia.org/wiki/Year_2038_problem) as this date (19 January 2038 03:14:07 UTC) is the maximum date we can give to `gatherosstate.exe` without it looping back to the year 1970.

**Q:** Can Microsoft block this kind of activation?\
**A:** Not directly. They could only update Clipup to allow for a maximum activation period of 180 days. Not much besides that can be done on their part. The tickets are not sent to Microsoft at all, so they can't block them or take action directly.

------------------------------------------------------------------------

## Supported Products

| Windows 10/11          | Generic Volume License Key      |
|:-----------------------|:--------------------------------|
| Education              | `NW6C2-QMPVW-D7KKK-3GKT6-VCFB2` |
| Education N            | `2WH4N-8QGBV-H22JP-CT43Q-MDWWJ` |
| Enterprise             | `NPPR9-FWDCX-D2C8J-H872K-2YT43` |
| Enterprise N           | `DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4` |
| Enterprise G           | `YYVX9-NTFWV-6MDM3-9PT4T-4M68B` |
| Enterprise G N         | `44RPN-FTY23-9VTTB-MP9BX-T84FV` |
| Enterprise LTSB 2015   | `WNMTR-4C88C-JK8YV-HQ7T2-76DF9` |
| Enterprise LTSB 2016   | `DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ` |
| Enterprise LTSC 2019   | `M7XTQ-FN8P6-TTKYV-9D4CC-J462D` |
| Enterprise LTSC 2021   | `M7XTQ-FN8P6-TTKYV-9D4CC-J462D` |
| Enterprise N LTSB 2015 | `2F77B-TNFGY-69QQF-B8YKP-D69TJ` |
| Enterprise N LTSB 2016 | `QFFDN-GRT3P-VKWWX-X7T3R-8B639` |
| Enterprise N LTSC 2019 | `92NFX-8DJQP-P6BBQ-THF9C-7CG2H` |
| Enterprise N LTSC 2021 | `92NFX-8DJQP-P6BBQ-THF9C-7CG2H` |
| Home                   | `TX9XD-98N7V-6WMQ6-BX7FG-H8Q99` |
| Home N                 | `3KHY7-WNT83-DGQKR-F7HPR-844BM` |
| Home China             | `PVMJN-6DFY6-9CCP6-7BKTT-D3WVR` |
| Home Single Language   | `7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH` |
| Lean                   | `NBTWJ-3DR69-3C4V8-C26MC-GQ9M6` |
| Pro                    | `W269N-WFGWX-YVC9B-4J6C9-T83GX` |
| Pro N                  | `MH37W-N47XK-V7XM9-C7227-GCQG9` |
| Pro Education          | `6TP4R-GNPTD-KYYHQ-7B7DP-J447Y` |
| Pro Education N        | `YVWGF-BXNMC-HTQYQ-CPQ99-66QFC` |
| Pro for Workstations   | `NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J` |
| Pro N for Workstations | `9FNHH-K3HBT-3W4TD-6383H-6XYWF` |
| SE                     | `37D7F-N49CB-WQR8W-TBJ73-FM8RX` |
| SE N                   | `6XN7V-PCBDC-BDBRH-8DQY7-G6R44` |

| Windows Server (LTSC)             | Generic Volume License Key      |
|:----------------------------------|:--------------------------------|
| Windows Server 2022 Datacenter    | `WX4NM-KYWYW-QJJR4-XV3QB-6VM33` |
| Windows Server 2022 Standard      | `VDYBN-27WPP-V4HQT-9VMD4-VMK7H` |
| Windows Server 2022 Azure Core    | `6N379-GGTMK-23C6M-XVVTC-CKFRQ` |
| Windows Server 2019 Datacenter    | `WMDGN-G9PQG-XVVXX-R3X43-63DFG` |
| Windows Server 2019 Standard      | `N69G4-B89J2-4G8F4-WWYCC-J464C` |
| Windows Server 2019 Essentials    | `WVDHN-86M7X-466P6-VHXV7-YY726` |
| Windows Server 2019 Azure Core    | `FDNH6-VW9RW-BXPJ7-4XTYG-239TB` |
| Windows Server 2019 ARM64         | `GRFBW-QNDC4-6QBHG-CCK3B-2PR88` |
| Windows Server 2016 ARM64         | `K9FYF-G6NCK-73M32-XMVPY-F9DRR` |
| Windows Server 2016 Datacenter    | `CB7KF-BWN84-R7R2Y-793K2-8XDDG` |
| Windows Server 2016 Standard      | `WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY` |
| Windows Server 2016 Essentials    | `JCKRF-N37P4-C2D82-9YXRT-4M63B` |
| Windows Server 2016 Cloud Storage | `QN4C6-GBJD2-FB422-GHWJK-GJG2R` |
| Windows Server 2016 Azure Core    | `VP34G-4NPPG-79JTQ-864T4-R3MQX` |

| Windows Server (Semi-Annual Channel) | Generic Volume License Key      |
|:-------------------------------------|:--------------------------------|
| Windows Server Azure Datacenter      | `NTBV8-9K7Q8-V27C6-M2BTV-KHMXV` |
| **20H2, 2004, 1909, 1903, and 1809** |                                 |
| Windows Server Datacenter            | `6NMRW-2C8FM-D24W7-TQWMY-CWH2D` |
| Windows Server Standard              | `N2KJX-J94YW-TQVFB-DG9YT-724CC` |
| **1803**                             |                                 |
| Windows Server Datacenter            | `2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG` |
| Windows Server Standard              | `PTXN8-JFHJM-4WC78-MPCBR-9W4KR` |
| **1709**                             |                                 |
| Windows Server Datacenter            | `6Y6KB-N82V8-D8CQV-23MJW-BWTG6` |
| Windows Server Standard              | `DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4` |

**Notes:**

-   X86-X64 and ARM64 architecture systems are supported.

-   Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) cannot be activated.

-   KMS38 only supports Windows/server version 14393 (1607) and newer versions.

-   ServerRdsh edition does not [officially](https://docs.microsoft.com/en-us/azure/virtual-desktop/windows-10-multisession-faq#can-i-run-windows-10-enterprise-multi-session-on-premises) support activation on non-azure systems.

------------------------------------------------------------------------

## KMS38 Protection

-   By default, KMS38 Activation is vulnerable to unintended replacement by a 180-Day KMS Activator.

-   If you are going to use [KMS_VL_ALL]((https://github.com/abbodi1406/KMS_VL_ALL_AIO)) by abbodi1406 or [MAS](https://massgrave.dev) (Online KMS option) for **Office activation**, then you don't need to enable this protection.

-   However, with a few tricks, you can ensure that no alternative KMS Activator can replace KMS38 Activation by accident or even on purpose. below is the explanation for how to do/undo that.

-   In the KMS activation method, Windows first checks the KMS IP registered as a specific KMS, and if that is not defined then it checks the Global KMS IP. Another fact is that if Localhost (IP range 127.0.0.0/8) is defined as KMS IP in Windows 8 and later OS then Windows will not accept it as a valid KMS IP. This script simply utilizes the above facts to protect the KMS38 activation from being overwritten by any alternative 'normal' 180-Day KMS Activation and at the same time that KMS activator can be used for Office activation.

-   Script steps-

    -   Set the Windows edition-specific KMS IP to Localhost (127.0.0.2)

    -   Lock the below Registry with [reg_own](https://github.com/AveYo/LeanAndMean) snippet by AveYo

    -   Done.

`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\55c92734-d682-4d71-983e-d6ec3f16059f\XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\`

------------------------------------------------------------------------

## Command line Switches

-   This is applicable only in separate file versions.

-   If any parameter is used then the script will automatically run in unattended mode.

-   To activate,

    `"KMS38_Activation.cmd" /a`

-   To activate along with KMS38 protection (from being replaced by 180 days KMS activation),

    `"KMS38_Activation.cmd" /ap`

-   To only generate GenuineTicket.xml,

    `"KMS38_Activation.cmd" /g`

-   To remove KMS38 protection,

    `"KMS38_Activation.cmd" /x`

------------------------------------------------------------------------

## File Details

Besides the plain batch script, KMS38 activation requires the use of an official gatherosstate.exe (x86) file.

         File: gatherosstate.exe
        SHA-1: FABB5A0FC1E6A372219711152291339AF36ED0B5 

It's taken from [Windows 10 Version 1607 ADK](https://go.microsoft.com/fwlink/p/?LinkId=526740) (Section: User State Migration Tool)

**Further**, in the case of Windows Server Core editions, the system doesn't have `clipup.exe` file. So to activate it, MAS separate files version contains the below file. (It's not included in MAS AIO)

          File: ClipUp.exe
         SHA-1: 48D928B1BEC25A56FE896C430C2C034B7866AA7A

It's taken from [Windows Server 2016 x64 ISO](https://www.microsoft.com/en-us/evalcenter/)

------------------------------------------------------------------------

## Manual Activation

-   You need the `gatherosstate.exe` file, get it from MAS separate files version.

-   Make a folder named `Files` in C drive, `C:\Files` and copy the `gatherosstate.exe` file in that folder.

-   Open Windows Powershell as administrator, and enter the following listed commands in the sequence in which they are given.

-   Enter the Key, (Replace `<key>` with the key from the above list) with the following command

`slmgr /ipk <key>`

-   Copy the below code all at once and enter in PowerShell to modify the `gatherosstate.exe` file.

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

    C:\Files\gatherosstatemodified.exe GVLKExp=2038-01-19T03:14:07Z`;DownlevelGenuineState=1

-   A GenuineTicket.xml file should be created in the folder `C:\Files\` now let's apply it.

`clipup -v -o -altto C:\Files\`

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
