# \$OEM\$ Folders

(Windows Pre-Activation)

------------------------------------------------------------------------

## Overview

-   To create a pre-activated Windows installation .iso, do the following things:

-   Extract `$OEM$` folder to desktop using the MAS script.

-   Copy the `$OEM$` folder to the `sources` folder in the Windows installation media (.iso or USB).

-   The directory will appear like this: `\sources\$OEM$` in your altered .iso or on your bootable USB drive.

-   Now use this .iso or bootable USB drive to install Windows and it will either already be activated (KMS38) as soon as it boots, or will self-activate (HWID or Online KMS) at first internet contact.

------------------------------------------------------------------------

## Notes

-   MAS AIO version doesn't contains `clipup.exe` file, if you need to activate `Server Core/Acor` editions then please use MAS separate files version.

-   You can check [here](https://massgrave.dev/) about activation method details and select the activation method as per your requirement.

------------------------------------------------------------------------

## HWID

-   When using HWID activation, no files are stored on the system, and Windows 10-11 will be activated when connected to the internet for the first time.

------------------------------------------------------------------------

## KMS38

-   When using KMS38 activation, no files are stored on the system, and Windows 10-11-Server becomes activated immediately without Internet.

------------------------------------------------------------------------

## Online KMS

-   When using Online KMS activation, Windows and Office both will be activated when connected to the internet for the first time. This option uses renewal task for lifetime activation.

------------------------------------------------------------------------

## HWID + Online KMS

-   In this method, Windows 10-11 will be activated with HWID and **Office** will be activated using Online KMS.

------------------------------------------------------------------------

## KMS38 + Online KMS

-   In this method, Windows 10-11-Server will be activated with KMS38 and **Office** will be activated using Online KMS.
