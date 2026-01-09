# KMS38 Documentation

:::danger[KMS38 Deprecation and Removal]

Windows uses a clip-based KMS license to migrate the KMS grace period during feature upgrades. For example, if 100 days remain in the KMS grace period and Windows is upgraded, this migration allows the remaining days to carry over. The process relies on the *gatherosstate.exe* file to transfer the license. KMS38 takes advantage of this mechanism by extending the grace period until the year 2038.

Starting with build **26040**, Microsoft removed *gatherosstate.exe* from the ISO. As a result, after a feature or in-place upgrade, the KMS grace period no longer carries over and resets to zero, requiring reconnection to a KMS server for renewal.

Beginning with build **26100.7019**, Microsoft fully deprecated this functionality, causing KMS38 to stop working on that build and all later versions.

---

**KMS38 has now been removed from the MAS script.** Users are advised to use **HWID** or **TSforge activation** instead.

---

If you still wish to use it on older Windows versions or keep it for archival purposes, you can download the script from [**here**](https://github.com/massgravel/Microsoft-Activation-Scripts/blob/ab6b572af940fa0ea4255b327eb6f69a274d6725/MAS/Separate-Files-Version/Activators/KMS38_Activation.cmd)

:::

## Overview

-   **How to use it?** Instructions can be found [here](intro.md#how-to-activate-windows--office--extended-updates-esu).
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

-   In MAS, go to Troubleshoot and apply the Fix Licensing option.
-   Done.

------------------------------------------------------------------------

## KMS38 - Server Cor/Acor

-   Windows Server Cor/Acor (No GUI) editions don't have the `clipup.exe` file.
-   To KMS38 activate it, you need to download the `ClipUp.exe` file from [this link](https://buzzheavier.com/mys913qkbfg6).  
    `File: ClipUp.exe`  
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`  
    This file has digital signatures that can be verified. You can also get this file from the official [Windows Server 2016 x64 RTM ISO](https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO).
-   Put the `ClipUp.exe` file beside the KMS38 Activation script. That would be either `MAS_AIO.cmd` or `KMS38_Activation.cmd`
-   The activation script will check for `ClipUp.exe` in the current folder (from where the script is running) and will use it accordingly.

------------------------------------------------------------------------

## Command line Switches

-   Check [here](command_line_switches.md).

------------------------------------------------------------------------

## Manual Activation

-   Check [here](manual_kms38_activation.md)

------------------------------------------------------------------------

## Manual Ticket Generation

This guide is for manually creating the same kind of tickets that are used in the MAS script.

-   Make a folder named `Files` in the root of the C: drive (`C:\Files`).
-   Open Windows PowerShell.
-   Copy the entire block of code below and enter it in PowerShell to generate the `GenuineTicket.xml` file.
```
function SignProperties {
    param (
        $Properties,
        $rsa
    )

    $sha256 = [Security.Cryptography.SHA256]::Create()
    $bytes = [Text.Encoding]::UTF8.GetBytes($Properties)
    $hash = $sha256.ComputeHash($bytes)

    $signature = $rsa.SignHash($hash, [Security.Cryptography.HashAlgorithmName]::SHA256, [Security.Cryptography.RSASignaturePadding]::Pkcs1)
    return [Convert]::ToBase64String($signature)

}

[byte[]] $key = 0x07,0x02,0x00,0x00,0x00,0xA4,0x00,0x00,0x52,0x53,0x41,0x32,0x00,0x04,0x00,0x00,
                0x01,0x00,0x01,0x00,0x29,0x87,0xBA,0x3F,0x52,0x90,0x57,0xD8,0x12,0x26,0x6B,0x38,
                0xB2,0x3B,0xF9,0x67,0x08,0x4F,0xDD,0x8B,0xF5,0xE3,0x11,0xB8,0x61,0x3A,0x33,0x42,
                0x51,0x65,0x05,0x86,0x1E,0x00,0x41,0xDE,0xC5,0xDD,0x44,0x60,0x56,0x3D,0x14,0x39,
                0xB7,0x43,0x65,0xE9,0xF7,0x2B,0xA5,0xF0,0xA3,0x65,0x68,0xE9,0xE4,0x8B,0x5C,0x03,
                0x2D,0x36,0xFE,0x28,0x4C,0xD1,0x3C,0x3D,0xC1,0x90,0x75,0xF9,0x6E,0x02,0xE0,0x58,
                0x97,0x6A,0xCA,0x80,0x02,0x42,0x3F,0x6C,0x15,0x85,0x4D,0x83,0x23,0x6A,0x95,0x9E,
                0x38,0x52,0x59,0x38,0x6A,0x99,0xF0,0xB5,0xCD,0x53,0x7E,0x08,0x7C,0xB5,0x51,0xD3,
                0x8F,0xA3,0x0D,0xA0,0xFA,0x8D,0x87,0x3C,0xFC,0x59,0x21,0xD8,0x2E,0xD9,0x97,0x8B,
                0x40,0x60,0xB1,0xD7,0x2B,0x0A,0x6E,0x60,0xB5,0x50,0xCC,0x3C,0xB1,0x57,0xE4,0xB7,
                0xDC,0x5A,0x4D,0xE1,0x5C,0xE0,0x94,0x4C,0x5E,0x28,0xFF,0xFA,0x80,0x6A,0x13,0x53,
                0x52,0xDB,0xF3,0x04,0x92,0x43,0x38,0xB9,0x1B,0xD9,0x85,0x54,0x7B,0x14,0xC7,0x89,
                0x16,0x8A,0x4B,0x82,0xA1,0x08,0x02,0x99,0x23,0x48,0xDD,0x75,0x9C,0xC8,0xC1,0xCE,
                0xB0,0xD7,0x1B,0xD8,0xFB,0x2D,0xA7,0x2E,0x47,0xA7,0x18,0x4B,0xF6,0x29,0x69,0x44,
                0x30,0x33,0xBA,0xA7,0x1F,0xCE,0x96,0x9E,0x40,0xE1,0x43,0xF0,0xE0,0x0D,0x0A,0x32,
                0xB4,0xEE,0xA1,0xC3,0x5E,0x9B,0xC7,0x7F,0xF5,0x9D,0xD8,0xF2,0x0F,0xD9,0x8F,0xAD,
                0x75,0x0A,0x00,0xD5,0x25,0x43,0xF7,0xAE,0x51,0x7F,0xB7,0xDE,0xB7,0xAD,0xFB,0xCE,
                0x83,0xE1,0x81,0xFF,0xDD,0xA2,0x77,0xFE,0xEB,0x27,0x1F,0x10,0xFA,0x82,0x37,0xF4,
                0x7E,0xCC,0xE2,0xA1,0x58,0xC8,0xAF,0x1D,0x1A,0x81,0x31,0x6E,0xF4,0x8B,0x63,0x34,
                0xF3,0x05,0x0F,0xE1,0xCC,0x15,0xDC,0xA4,0x28,0x7A,0x9E,0xEB,0x62,0xD8,0xD8,0x8C,
                0x85,0xD7,0x07,0x87,0x90,0x2F,0xF7,0x1C,0x56,0x85,0x2F,0xEF,0x32,0x37,0x07,0xAB,
                0xB0,0xE6,0xB5,0x02,0x19,0x35,0xAF,0xDB,0xD4,0xA2,0x9C,0x36,0x80,0xC6,0xDC,0x82,
                0x08,0xE0,0xC0,0x5F,0x3C,0x59,0xAA,0x4E,0x26,0x03,0x29,0xB3,0x62,0x58,0x41,0x59,
                0x3A,0x37,0x43,0x35,0xE3,0x9F,0x34,0xE2,0xA1,0x04,0x97,0x12,0x9D,0x8C,0xAD,0xF7,
                0xFB,0x8C,0xA1,0xA2,0xE9,0xE4,0xEF,0xD9,0xC5,0xE5,0xDF,0x0E,0xBF,0x4A,0xE0,0x7A,
                0x1E,0x10,0x50,0x58,0x63,0x51,0xE1,0xD4,0xFE,0x57,0xB0,0x9E,0xD7,0xDA,0x8C,0xED,
                0x7D,0x82,0xAC,0x2F,0x25,0x58,0x0A,0x58,0xE6,0xA4,0xF4,0x57,0x4B,0xA4,0x1B,0x65,
                0xB9,0x4A,0x87,0x46,0xEB,0x8C,0x0F,0x9A,0x48,0x90,0xF9,0x9F,0x76,0x69,0x03,0x72,
                0x77,0xEC,0xC1,0x42,0x4C,0x87,0xDB,0x0B,0x3C,0xD4,0x74,0xEF,0xE5,0x34,0xE0,0x32,
                0x45,0xB0,0xF8,0xAB,0xD5,0x26,0x21,0xD7,0xD2,0x98,0x54,0x8F,0x64,0x88,0x20,0x2B,
                0x14,0xE3,0x82,0xD5,0x2A,0x4B,0x8F,0x4E,0x35,0x20,0x82,0x7E,0x1B,0xFE,0xFA,0x2C,
                0x79,0x6C,0x6E,0x66,0x94,0xBB,0x0A,0xEB,0xBA,0xD9,0x70,0x61,0xE9,0x47,0xB5,0x82,
                0xFC,0x18,0x3C,0x66,0x3A,0x09,0x2E,0x1F,0x61,0x74,0xCA,0xCB,0xF6,0x7A,0x52,0x37,
                0x1D,0xAC,0x8D,0x63,0x69,0x84,0x8E,0xC7,0x70,0x59,0xDD,0x2D,0x91,0x1E,0xF7,0xB1,
                0x56,0xED,0x7A,0x06,0x9D,0x5B,0x33,0x15,0xDD,0x31,0xD0,0xE6,0x16,0x07,0x9B,0xA5,
                0x94,0x06,0x7D,0xC1,0xE9,0xD6,0xC8,0xAF,0xB4,0x1E,0x2D,0x88,0x06,0xA7,0x63,0xB8,
                0xCF,0xC8,0xA2,0x6E,0x84,0xB3,0x8D,0xE5,0x47,0xE6,0x13,0x63,0x8E,0xD1,0x7F,0xD4,
                0x81,0x44,0x38,0xBF

$rsa = New-Object Security.Cryptography.RSACryptoServiceProvider
$rsa.ImportCspBlob($key)

$SessionIdStr = "OSMajorVersion=5;OSMinorVersion=1;OSPlatformId=2;PP=0;GVLKExp=2038-01-19T03:14:07Z;DownlevelGenuineState=1;"
$SessionId = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($SessionIdStr + [char]0))
$PropertiesStr = "OA3xOriginalProductId=;OA3xOriginalProductKey=;SessionId=$SessionId;TimeStampClient=2022-10-11T12:00:00Z"
$SignatureStr = SignProperties $PropertiesStr $rsa

$xml = @"
<?xml version="1.0" encoding="utf-8"?><genuineAuthorization xmlns="http://www.microsoft.com/DRM/SL/GenuineAuthorization/1.0"><version>1.0</version><genuineProperties origin="sppclient"><properties>$PropertiesStr</properties><signatures><signature name="clientLockboxKey" method="rsa-sha256">$SignatureStr</signature></signatures></genuineProperties></genuineAuthorization>
"@
[System.IO.File]::WriteAllText("C:\Files\GenuineTicket.xml", ($xml -join ""), [System.Text.Encoding]::ASCII)
```
-   A GenuineTicket.xml file should be created in the `C:\Files\` folder.

------------------------------------------------------------------------

## Setup Preactivate

-   Check the **Extract OEM** option in the MAS `Extras` section if you want a pre-activated Windows installation.
-   For more details, read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
