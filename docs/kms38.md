# KMS38 Activation

## Overview

-   How to use it? Please find the instructions [here](intro.md#how-to-activate-windows--office).
-   This activation method activates Windows 10/11 and Windows Server (14393 and later builds), until January 19, 2038, 03:14:07 UTC.
-   This activation method does not store any files on the system.
-   This activation method works offline.
-   Unlike HWID and Online KMS activation options, KMS38 does not match with any official activation method.

------------------------------------------------------------------------

## How does it work?

-   In a genuine [KMS](https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview) activation environment, activation lasts a maximum of up to 180 days. This is done using a valid license and server setup.
-   In the Windows major upgrade process, the system uses `gatherosstate.exe` to carry over the remaining KMS activation period. It does this by creating a ticket that can be used offline.
-   The trick is that we can fool the `gatherosstate.exe` about the remaining KMS activation period and manually put the desired period maximum up to January 19, 2038, 03:14:07 UTC.
-   Why is it limited to the year 2038?  
    This is due to the [Y2K38 problem](https://en.wikipedia.org/wiki/Year_2038_problem). This date (19 January 2038, 03:14:07 UTC) is the maximum value that can fit into a signed 32 bit integer.
-   How can we convince the gatherosstate.exe?  
    There are two methods for it.  
    **1-** Place a [custom slc.dll](https://github.com/asdcorp/Integrated_Patcher_3) file beside gatherosstate.exe:  
    gatherosstate.exe uses the system's `C:\Windows\System32\slc.dll` file to gather the system's info. If we place a custom slc.dll file beside gatherosstate.exe which can send the rubbish data to it, then it will simply accept it and generate a valid ticket allowing activation up to January 19, 2038, 03:14:07 UTC.  
    **2-** [Modify](https://github.com/asdcorp/GamersOsState) the gatherosstate.exe file itself so that it doesn't check the system's activation status and we can put the activation period as we wish.
-   **Notes:**
    -   To be clear, we are **not modifying/patching any on-board system file** to get the ticket. Gatherosstate.exe is a part of the ISO file and not available in C drive system files. The system's slc.dll file is not touched; instead, we use custom slc.dll only for a brief moment of ticket generation.
    -   Latest MAS doesn't use any of these methods; instead, it uses ready-to-use Universal Tickets (check below for manual activation info).

**Q:** Can Microsoft block this kind of activation?  
**A:** Not directly. They could only update Clipup to allow for a maximum activation period of 180 days. Not much besides that can be done on their part. The tickets are not sent to Microsoft at all, so they can't block them or take action directly.

------------------------------------------------------------------------

## Supported Products

### Windows 10 / 11
| Product Names                                          | EditionID                | Generic Volume License Key    |
|--------------------------------------------------------|--------------------------|-------------------------------|
| Education                                              | Education                | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Education N                                            | EducationN               | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Enterprise                                             | Enterprise               | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N                                           | EnterpriseN              | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Enterprise G                                           | EnterpriseG              | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Enterprise G N                                         | EnterpriseGN             | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
| Enterprise LTSB 2016                                   | EnterpriseS              | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Enterprise LTSC 2019                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2021                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2024                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise N LTSB 2016                                 | EnterpriseSN             | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Enterprise N LTSC 2019                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2021                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2024                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br /> (19044.2788 and later) | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| IoT Enterprise LTSC 2024                               | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Home                                                   | Core                     | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N                                                 | CoreN                    | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home China                                             | CoreCountrySpecific      | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
| Home Single Language                                   | CoreSingleLanguage       | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Lean                                                   | CloudE                   | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
| Enterprise multi-session <br /> (17763 and later)      | ServerRdsh               | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
| Enterprise multi-session <br /> (17134 and before)     | ServerRdsh               | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
| Pro                                                    | Professional             | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N                                                  | ProfessionalN            | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Pro Education                                          | ProfessionalEducation    | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Pro Education N                                        | ProfessionalEducationN   | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Pro for Workstations                                   | ProfessionalWorkstation  | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Pro N for Workstations                                 | ProfessionalWorkstationN | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| SE                                                     | CloudEdition             | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
| SE N                                                   | CloudEditionN            | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

### Windows Server 2025 (LTSC)
| Product Names                        | EditionID        | Generic Volume License Key    |
|--------------------------------------|------------------|-------------------------------|
| Windows Server 2025 Standard         | ServerStandard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter       | ServerDatacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Azure Core       | ServerAzureCor   | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter | ServerTurbine    | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

### Windows Server 2022 (LTSC)
| Product Names                        | EditionID        | Generic Volume License Key    |
|--------------------------------------|------------------|-------------------------------|
| Windows Server 2022 Datacenter       | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard         | ServerStandard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Azure Core       | ServerAzureCor   | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter | ServerTurbine    | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

### Windows Server 2019 (LTSC)
| Product Names                  | EditionID        | Generic Volume License Key    |
|--------------------------------|------------------|-------------------------------|
| Windows Server 2019 Datacenter | ServerDatacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | ServerStandard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | ServerSolution   | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core | ServerAzureCor   | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
| Windows Server 2019 ARM64      | ServerARM64      | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

### Windows Server 2016 (LTSC)
| Product Names                     | EditionID          | Generic Volume License Key    |
|-----------------------------------|--------------------|-------------------------------|
| Windows Server 2016 ARM64         | ServerARM64        | K9FYF-G6NCK-73M32-XMVPY-F9DRR |
| Windows Server 2016 Datacenter    | ServerDatacenter   | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard      | ServerStandard     | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials    | ServerSolution     | JCKRF-N37P4-C2D82-9YXRT-4M63B |
| Windows Server 2016 Cloud Storage | ServerCloudStorage | QN4C6-GBJD2-FB422-GHWJK-GJG2R |
| Windows Server 2016 Azure Core    | ServerAzureCor     | VP34G-4NPPG-79JTQ-864T4-R3MQX |

### Windows Server 23H2 (Annual Channel)
| Product Names             | EditionID        | Generic Volume License Key    |
|---------------------------|------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

### Windows Server 20H2, 2004, 1909, 1903, and 1809 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | ServerStandardACor   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

### Windows Server 1803 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | ServerStandardACor   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

### Windows Server 1709 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | ServerStandardACor   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |

:::info

-   Systems in all architectures (x86, x64 and arm64) are supported.
-   Any evaluation version of Windows (i.e. 'EVAL' LTSB/C) [cannot be activated](evaluation_editions.md) beyond the evaluation period. You can use the TSforge option in MAS to reset the activation at any time.
-   KMS38 only supports Windows/server version 14393 (1607) and newer versions.
-   Initial release (19044.1288) of Iot LTSC 2021 doesn't support KMS license and it was added later in update 19044.2788.
-   Server Azure Datacenter (ServerTurbine) edition does not support activation on non-azure systems.

:::

------------------------------------------------------------------------

## How to remove KMS38?

-   In MAS, go to KMS38 Activation and apply the Remove KM38 Protection option.
-   After that, In MAS, go to Troubleshoot and apply the Fix Licensing option.
-   Done.

------------------------------------------------------------------------

## KMS38 - Server Cor/Acor

-   Windows Server Cor/Acor (No GUI) editions don't have the `clipup.exe` file.
-   To KMS38 activate it, you need to download the `ClipUp.exe` file from [this link](https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o).  
    `File: ClipUp.exe`  
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`  
    This file has digital signatures that can be verified. You can also get this file from the official [Windows Server 2016 x64 RTM ISO](https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO).
-   Put the `ClipUp.exe` file beside the KMS38 Activation script. That would be either `MAS_AIO.cmd` or `KMS38_Activation.cmd`
-   The activation script will check for `ClipUp.exe` in the current folder (from where the script is running) and will use it accordingly.

------------------------------------------------------------------------

## KMS38 Protection

-   KMS38 Activation is vulnerable to unintended replacement by a 180-Day KMS Activator.
-   From MAS 1.7, the script will enable KMS38 protection by default.
-   If you are going to use KMS_VL_ALL by abbodi1406 or [MAS](intro.md) (Online KMS option) for **Office activation**, then you can choose to remove this protection.
-   Below is the explanation for how the script protect KMS38.
-   In the KMS activation method, Windows first checks the KMS IP registered as a specific KMS, and if that is not defined, then it checks the Global KMS IP. Another fact is that if Localhost (IP range 127.0.0.0/8) is defined as the KMS IP in Windows 8 and later OS, then Windows will not accept it as a valid KMS IP. This script simply utilizes the above facts to protect the KMS38 activation from being overwritten by any alternative 'normal' 180-Day KMS Activation, and at the same time, that KMS activator can be used for Office activation.
-   Script steps-  
    -   Set the Windows edition-specific KMS IP to Localhost (127.0.0.2)
    -   Protect the below Registry from edit and delete  
	   `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\55c92734-d682-4d71-983e-d6ec3f16059f\XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\`
    -   Done.  

------------------------------------------------------------------------

## Command line Switches

-   Check [here](command_line_switches.md).

------------------------------------------------------------------------

## Manual Activation

-   Check [here](manual_kms38_activation.md)

------------------------------------------------------------------------

## Manual Ticket Generation

This guide is for manually creating the same kind of tickets that are used in the MAS script.

-   Download the .cab file from the following official Microsoft link:  
    https://download.microsoft.com/download/9/A/E/9AE69DD5-BA93-44E0-864E-180F5E700AB4/adk/Installers/14f4df8a2a7fc82a4f415cf6a341415d.cab
-   Find the file named `filf8377e82b29deadca67bc4858ed3fba9` (Size: 330 KB) and rename it to `gatherosstate.exe`.
-   Make a folder named `Files` in the root of the C: drive (`C:\Files`) and copy the `gatherosstate.exe` file to that folder.
-   Ensure you have a working Internet connection.
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
C:\Files\gatherosstatemodified.exe /c GVLKExp=2038-01-19T03:14:07Z`;DownlevelGenuineState=1
```
-   A GenuineTicket.xml file should be created in the `C:\Files\` folder.

**Notes:**

-   There are two types of tickets: Lockbox and Downlevel. If the system is already activated, then the created ticket will be a Lockbox ticket. If not, it will be a Downlevel ticket.
-   To make the exact ticket used by the MAS script for HWID activation, make sure the system is already activated and change the time using the PowerShell command below. Then, start the ticket generation process according to the steps above.\
    `Set-TimeZone -Id "UTC"; $date=[datetime]"2022/10/11 12:00";while($true){set-date $date; start-sleep -milliseconds 10}`

------------------------------------------------------------------------

## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.
-   Further, read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
