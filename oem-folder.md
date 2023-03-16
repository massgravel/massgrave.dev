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

-   On Windows 8 and later, running setupcomplete.cmd is disabled if the default installed key for the edition is OEM Channel. For example - Preactivation won't work for Windows 10 Iot Enterprise because installed key is of OEM channel.

------------------------------------------------------------------------

## KMS38 - Server Cor/Acor

-   Windows Server Cor/Acor (No GUI) editions don't have `clipup.exe` file.

-   To KMS38 activate it, you need to download `ClipUp.exe` file from [this link](http://www.box.com/index.php?rm=box_download_shared_file&shared_name=qrmkewit9ty6ah0qzk0vncyyrwo8hei9&file_id=f_747809716860).\
    \
    `File: ClipUp.exe`\
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`\
    \
    This file has digital signatures which can be verified. You can also get this file from official Windows server 2016 x64 RTM ISO.

-   Put the `ClipUp.exe` beside the KMS38 Activation script. That would be either `MAS_AIO.cmd` or `KMS38_Activation.cmd`

-   Activation script will check `ClipUp.exe` in the current folder (from where script is running) and will use it accordingly.

------------------------------------------------------------------------

## HWID

-   When using HWID activation, no files are stored on the system, and Windows 10-11 will be activated when connected to the internet for the first time.

------------------------------------------------------------------------

## KMS38

-   When using KMS38 activation, no files are stored on the system, and Windows 10-11-Server becomes activated immediately without Internet.

------------------------------------------------------------------------

## Online KMS

-   When using Online KMS activation, Windows and Office both will be activated when connected to the internet for the first time. This option uses a renewal task for lifetime activation.

------------------------------------------------------------------------

## HWID + Online KMS

-   In this method, Windows 10-11 will be activated with HWID, and **Office** will be activated using Online KMS.

------------------------------------------------------------------------

## KMS38 + Online KMS

-   In this method, Windows 10-11-Server will be activated with KMS38, and **Office** will be activated using Online KMS.
