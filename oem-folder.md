---
pagetitle: OEM Folders
---

# \$OEM\$ Folders

(Windows Pre-Activation)

------------------------------------------------------------------------

## Overview

-   To create a pre-activated Windows installation .iso, do the following things:

-   Extract `$OEM$` folder to the desktop using the MAS script.

-   Copy the `$OEM$` folder to the `sources` folder in the Windows installation media (.iso or USB).

-   The directory will appear like this: `\sources\$OEM$` in your altered .iso or on your bootable USB drive.

-   Now use this .iso or bootable USB drive to install Windows and it will either already be activated (KMS38) as soon as it boots or will self-activate (HWID or Online KMS) at the first internet contact.

-   You can check [here](index.html) about activation method details and select the activation method as per your requirement.

-   On Windows 8 and later, **running setupcomplete.cmd is disabled** if the default installed key for the edition is OEM Channel.\
    For example - Preactivation won't work for Windows 10 Iot Enterprise LTSC because installed key is of OEM channel.\
    The **solution** for this issue is to use (Non-Iot) Windows 10 Enterprise LTSC ISO and HWID method in preactivation will use Iot LTSC key to change the edition.

------------------------------------------------------------------------

## KMS38 - Server Cor/Acor

-   Windows Server Cor/Acor (No GUI) editions don't have `clipup.exe` file.

-   To KMS38 activate it, you need to download `ClipUp.exe` file from [this link](https://www.box.com/index.php?rm=box_download_shared_file&shared_name=qrmkewit9ty6ah0qzk0vncyyrwo8hei9&file_id=f_747809716860).\
    \
    `File: ClipUp.exe`\
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`\
    \
    This file has digital signatures which can be verified. You can also get this file from official [Windows Server 2016 x64 RTM ISO](https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO).

-   Put the `ClipUp.exe` beside the KMS38 Activation script. That would be either `MAS_AIO.cmd` or `KMS38_Activation.cmd`

-   Activation script will check `ClipUp.exe` in the current folder (from where script is running) and will use it accordingly.

------------------------------------------------------------------------

## HWID

-   When using HWID activation, no files are stored on the system, and Windows 10-11 will be activated when connected to the internet for the first time.

------------------------------------------------------------------------

## Ohook

-   If Office is preinstalled then Ohook method will activate the Office immediately without Internet. This activation uses custom sppc.dll file for the activation.

------------------------------------------------------------------------

## KMS38

-   When using KMS38 activation, no files are stored on the system, and Windows 10-11-Server becomes activated immediately without Internet.

------------------------------------------------------------------------

## Online KMS

-   When using Online KMS activation, Windows-Server and Office (Preinstalled) both will be activated when connected to the internet for the first time. This option uses a renewal task for lifetime activation.

------------------------------------------------------------------------

## HWID + Ohook

-   In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Ohook.

------------------------------------------------------------------------

## HWID + Online KMS

-   In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Online KMS.

------------------------------------------------------------------------

## KMS38 + Ohook

-   In this method, Windows 10-11-Server will be activated with KMS38, and **Office** (Preinstalled) will be activated using Ohook.

------------------------------------------------------------------------

## KMS38 + Online KMS

-   In this method, Windows 10-11-Server will be activated with KMS38, and **Office** (Preinstalled) will be activated using Online KMS.

------------------------------------------------------------------------

## Online KMS + Ohook

-   In this method, Windows-Server will be activated with Online KMS, and **Office** (Preinstalled) will be activated using Ohook.

------------------------------------------------------------------------
