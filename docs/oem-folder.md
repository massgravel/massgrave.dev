# $OEM$ Folders

To create a pre-activated Windows installation ISO, do the following:
-   Extract the `$OEM$` folder to the desktop using the MAS script.
-   Copy the `$OEM$` folder to the `sources` folder in the Windows installation media (ISO or USB).
-   The directory will appear like this: `\sources\$OEM$` in your altered ISO or on your bootable USB drive.
-   Now use this ISO or bootable USB drive to install Windows, it will either already be activated (TSforge) as soon as it boots or will self-activate (HWID or Online KMS) at the first internet contact.
-   You can check [here](intro.md) for activation method details.

:::warning

-   On Windows 8 and later, [**running setupcomplete.cmd is disabled**](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup?view=windows-11#windows-setup-scripts) if the default installed key for the edition is from the OEM channel, except for Enterprise editions and Windows Server.
-	However, in Windows 10, IoT Enterprise editions were not included in the Enterprise category list during the installation process. As a result, Enterprise with an OEM key can handle setupcomplete.cmd, but IoT Enterprise (LTSC) cannot. This was fixed in later Windows 11 versions.
-   In Windows 10 IoT Enterprise (LTSC), you can resolve this issue by using the Non-IoT Windows 10 Enterprise LTSC ISO. In this case, the HWID method in preactivation will install the IoT LTSC key to change the edition and enable HWID activation.  
-   In Windows 11 IoT Enterprise (LTSC), it works fine as expected by default.

:::

------------------------------------------------------------------------

## Edit ISO File

-   As stated above, you can copy the `$OEM$` folder to your bootable USB so you don't have to edit the ISO file. However, if you need to, then follow the steps below.
-   Download [AnyBurn Free Portable](https://www.anyburn.com/download.php) and extract the zip file.
-   Run the file named `AnyBurn(64-bit)\AnyBurn.exe`.
-   Select the option named `Edit image file`.
-   Follow the on-screen instructions and add the `$OEM$` folder to the `sources` folder so that the directory will appear like this: `\sources\$OEM$`.
-   Save the ISO, that's it.

------------------------------------------------------------------------

##  Preinstall Office

-	Follow this [guide](https://gravesoft.dev/office_c2r_custom) and download the Office files.
- 	Copy the downloaded `Office` folder, `setup.exe` and `Configuration.xml` files, and paste them into the $OEM$ folder, beside the `setupcomplete.cmd` file.
-	Open the `setupcomplete.cmd` file with notepad and add the below lines after `fltmc >nul || exit /b` line.
	```
	cd /d "%~dp0"
	setup.exe /configure Configuration.xml
	```
- 	Save the $OEM$ folder into the ISO as per above instructions, that's it.

------------------------------------------------------------------------

## HWID

-   When using HWID activation, no files are stored on the system, and Windows 10-11 will be activated when connected to the internet for the first time.

------------------------------------------------------------------------

## Ohook

-   If Office is preinstalled then Ohook method will activate the Office immediately without Internet. This activation uses custom sppc.dll file for the activation.

------------------------------------------------------------------------

## TSforge

-   When using TSforge activation, no files are stored on the system, and Windows / ESU / Office (preinstalled) becomes activated immediately without Internet.

------------------------------------------------------------------------

## Online KMS

-   When using Online KMS activation, Windows-Server and Office (Preinstalled) both will be activated when connected to the internet for the first time. This option uses a renewal task for lifetime activation.

------------------------------------------------------------------------

## HWID + Ohook

-   In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Ohook.

------------------------------------------------------------------------

## HWID + Ohook + TSforge

-   In this method, Windows 10-11 will be activated with HWID, and **Office** (Preinstalled) will be activated using Ohook and Windows ESU will be activated with TSforge.

------------------------------------------------------------------------

## TSforge + Ohook

-   In this method, Windows and ESU will be activated with TSforge, and **Office** (Preinstalled) will be activated using Ohook.
