# HWID Activation

## Overview

-   **How to use it?** Instructions can be found [here](intro.md).
-   This activation method supports Windows 10 and 11 only.
-   This activation method does not store or modify any files on your system.
-   This activation method provides permanent Windows activation for your system hardware.
-   All activations can be linked to a Microsoft account without any issues.
-   Once the system is activated, the activation cannot be removed because the license is stored on Microsoft's servers, not on the user's system. Microsoft checks the hardware ID (HWID), and if a license is found in their database, the system will automatically activate. This is how all digital licenses work.
-   Any significant changes to the hardware (such as the motherboard) may deactivate the system. It is possible to reactivate a system that was deactivated due to hardware changes if your activation was linked to an online Microsoft account.
-   Internet connectivity is required for activation to succeed. If you attempt to activate without an internet connection, the system will auto-activate later when connectivity is restored.
-   The following is required for Windows to auto-activate after a reinstall:
    -   Internet connectivity is required (only at the time of activation).
    -   The system will auto-activate only if Retail (Consumer) media was used to install Windows.
    -   The system will not auto-activate if VL (Business) media was used for the installation. In this case, the user must insert the generic Retail/OEM key corresponding to the installed Windows edition to activate (unless they wish to use the script again). (These keys are listed below).

------------------------------------------------------------------------

## HWID History

## How does it work?

#### HWID 1 (Defunct) (Summer 2018 - Sep 26, 2023)

-   During the official upgrade process from Windows 7 to Windows 10, if your copy of Windows 7 was activated, Microsoft provided a digital license for Windows 10 at no cost.
-   In the background, the upgrade process runs a file named `gatherosstate.exe` (available in the Windows 10/11 ISO), which checks the license of the current Windows installation. If it detects that the system is activated, it generates a valid `GenuineTicket.xml` ticket. This is sent to Microsoft, and in return, Microsoft authorizes a license.
-   Therefore, if we can convince `gatherosstate.exe` that the conditions for ticket generation are met by manipulating it, it will generate a valid ticket that can be used to acquire a digital license.
-   How do we convince `gatherosstate.exe` that Windows is activated?
    There are two methods to achieve this:
    - **1.** Place a [custom slc.dll](https://github.com/asdcorp/Integrated_Patcher_3) file alongside `gatherosstate.exe`:  
    The executable uses the system's `C:\Windows\System32\slc.dll` file to gather system info. If we place a custom `slc.dll` file beside `gatherosstate.exe`, it can send dummy data to the executable. The executable will simply accept this data and generate a valid ticket.  
    - **2.** [Modify](https://github.com/asdcorp/GamersOsState) the `gatherosstate.exe` file directly so that it skips the system activation check entirely and creates a valid ticket.
-   Microsoft [made](https://devicepartner.microsoft.com/en-us/communications/comm-windows-ends-installation-path-for-free-windows-7-8-upgrade) server-side changes to their licensing servers to block the free upgrade; consequently, this method stopped working. To be clear, only new activation requests originating from new hardware were blocked; digital licenses already established with this method remain valid.

#### HWID 2 (Oct 03, 2023 - Current)

-   When Microsoft stopped the free upgrade, they began requiring a genuine, valid key in the ticket to authorize a digital license. In this new method, we use the Installation ID of a genuine, valid key. This is accepted by the server, allowing us to obtain a digital license for free. See the manual activation process in the section below to learn how to create working universal tickets.

------------------------------------------------------------------------

**Can Microsoft block new requests or revoke already established digital licenses?**

-   Revoking licenses would be an extreme measure facing many complications, including the risk of voiding valid licenses. However, Microsoft could easily block new activation requests for new hardware originating from the methods mentioned here.

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

-   Systems on all architectures (x86, x64, and arm64) are supported.
-   Any evaluation version of Windows (i.e. 'EVAL' LTSB/C) [cannot be activated](evaluation_editions.md) beyond the evaluation period. You can use the TSforge option in MAS to reset the activation at any given time.
-   The IoTEnterpriseS (LTSC) 2021 key will be used to activate the unsupported EnterpriseS (LTSC) 2021 edition.
-   The IoTEnterpriseS (LTSC) 2024 key will be used to activate the unsupported EnterpriseS (LTSC) 2024 edition.
-   Windows Server does not support HWID activation.
-   Enterprise multi-session (ServerRdsh) edition can only be activated with the key NJCF7-PW8QT-3324D-688JX-2YV66, but it does not support real digital license activation.

:::

------------------------------------------------------------------------

## How to Remove HWID?

-   **HWID (Digital License) activation cannot be removed** because the license is stored on Microsoft servers, not on the user's system.
-   Microsoft checks the Hardware ID (HWID); if a license is found in their database, the system will automatically activate. This is how the official Digital License activation process works.

**What if you still want to remove it?**

-   As explained above, you cannot remove the license for your current hardware. Only a major hardware change, such as replacing the CPU or motherboard, will invalidate the activation.

**What if you just want to keep Windows in an unactivated state?**  
- To do this, you can install a [KMS key](online_kms.md#supported-products) in the Windows Activation Settings page.  
- You can also change the Windows edition using the "Change Windows Edition" option in MAS.  
- **Note:** 
  - Windows Settings will instantly show that Windows is not activated, but it usually takes 3 hours for the activation watermark to appear.
  - These options simply hide the HWID activation. If you reinstall Windows with the same edition or restore the default generic Retail/OEM keys, the system will automatically activate again once an internet connection is established.

------------------------------------------------------------------------

## Command Line Switches

-   See [here](command_line_switches.md).

------------------------------------------------------------------------

## Manual Activation

-   See [here](manual_hwid_activation.md).

------------------------------------------------------------------------

## Manual Ticket Generation

This guide is for manually creating the same kind of tickets used in the MAS script.

-   Create a folder named `Files` in the root of the C: drive (`C:\Files`).
-   Open Windows PowerShell.
-   Copy the entire block of code below and paste it into PowerShell to generate the `GenuineTicket.xml` file.

<!-- VS Code does syntax highlighting or whatever when I add this which is cool -->
```powershell
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

$Pfn = (Get-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\ProductOptions" -Name "OSProductPfn").OSProductPfn
# By default, this code generates a GenuineTicket.xml file for the edition of Windows it's run on.
# To create a ticket for an arbitrary edition, set $Pfn to the appropriate value for that edition.
# Example: Uncommenting the line below will create a ticket for Windows 10/11 Pro.
# $Pfn = "Microsoft.Windows.48.X19-98841_8wekyb3d8bbwe"

$SessionIdStr = "OSMajorVersion=5;OSMinorVersion=1;OSPlatformId=2;PP=0;Pfn=$Pfn;PKeyIID=465145217131314304264339481117862266242033457260311819664735280;"
$SessionId = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($SessionIdStr + [char]0))
$PropertiesStr = "OA3xOriginalProductId=;OA3xOriginalProductKey=;SessionId=$SessionId;TimeStampClient=2022-10-11T12:00:00Z"
$SignatureStr = SignProperties $PropertiesStr $rsa

$xml = @"
<?xml version="1.0" encoding="utf-8"?><genuineAuthorization xmlns="http://www.microsoft.com/DRM/SL/GenuineAuthorization/1.0"><version>1.0</version><genuineProperties origin="sppclient"><properties>$PropertiesStr</properties><signatures><signature name="clientLockboxKey" method="rsa-sha256">$SignatureStr</signature></signatures></genuineProperties></genuineAuthorization>
"@
[System.IO.File]::WriteAllText("C:\Files\GenuineTicket.xml", ($xml -join ""), [System.Text.Encoding]::ASCII)
```

-   A `GenuineTicket.xml` file should be created in the `C:\Files\` folder.

------------------------------------------------------------------------

## Setup Preactivate

-   See the **Extract OEM** option in the MAS `Extras` section if you want a pre-activated Windows installation.
-   For more details, read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   See [here](troubleshoot.md).
