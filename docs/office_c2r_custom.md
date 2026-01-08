# Office C2R Custom Install

## Notes

-   If you find the guide below confusing, the simplest option is to use the [Office C2R Installer](office_c2r_links.md).
-   Retail Office (e.g., O365) receives the latest feature updates, whereas Volume Office (e.g., ProPlus 2024) does not.
-   Please note that the official C2R custom installation method does not use an ISO or a one-click solution. Below is the simplest guide for a customized Office installation.

:::tip

-   **Users from sanctioned countries** need to follow [this guide](bypass_microsoft_geoblocking.md) to bypass geoblocking when downloading Office.

:::

---

## Custom Installation Guide

### 1. Using Office Deployment Tool ❤️

-   If Office has been installed previously:
	- Uninstall Office via **Apps and Features** in Windows Settings.
	- Run the `OfficeScrubber.cmd` file from [Office Scrubber](https://gitlab.com/-/project/11037551/uploads/f49f0d69e0aaf92e740a1f694d0438b9/OfficeScrubber_14.zip) by abbodi1406 and select the `[R] Remove all Licenses` option.
-   Create a new folder named `Office` on your `C:` drive (e.g., `C:\Office`).
-   Download the [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT).
-   Copy the downloaded `setup.exe` to the Office folder you create (e.g., `C:\Office\setup.exe`).
-   Go to [config.office.com](https://config.office.com/deploymentsettings).
-   If you want Retail Office, select `Microsoft 365 Apps for enterprise` in the Office Suites section.
-   If you want Volume Office, select `Office LTSC Professional Plus 2024 - Volume License` in the Office Suites section. (Do not select the SPLA version).
-   You can add Visio and Project apps if needed, but ensure that a supported language is selected for [Project](https://learn.microsoft.com/en-us/projectonline/supported-languages-for-project-online) / [Visio](https://support.microsoft.com/en-us/office/display-languages-supported-in-the-visio-desktop-app-a921983e-fd5d-45ef-8af1-cedf70c53d75).
-   If you plan to download Office files to install later, ensure you select a specific version number rather than "Latest" in the `Select the version` option.
-   You only need to configure options up to the "Language" section. You can leave the rest as default.
-   Click the **Export** button, select the "Keep Current Settings" option, and it will download a file named `Configuration.xml`. (If the name is different, rename it to `Configuration.xml`).
-   Copy the downloaded `Configuration.xml` file to the Office folder you created (e.g., `C:\Office\Configuration.xml`). 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="direct_install" label="Direct Install" default>

-   Open **Command Prompt** (not PowerShell) **as Administrator** and run the following commands:  
    ```         
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

It will now install Office.

</TabItem>

<TabItem value="download_and_install" label="Download and then install" default>

-	Ensure you selected a specific version number in the configuration as per the steps above.
-   Open **Command Prompt** (not PowerShell) **as Administrator** and run the following commands:  
	- Download Office files:
    ```         
    cd /d C:\Office\
    setup.exe /download Configuration.xml
    ```
	- Install Office from the downloaded files (can be done offline):
	```
	cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

</TabItem>
</Tabs>

:::warning[Common errors]

- Make sure you are entering these commands in Command Prompt (CMD) as Administrator.
- File name extensions are hidden by default in Windows. Consequently, some users might incorrectly rename `Configuration.xml` to `Configuration.xml.xml` because the original  `.xml` extension was not visible.

:::

---

<details>
    <summary>2. Using YAOCTRI (for advanced users only)</summary>

#### Easy Custom Installation of Office Retail Products
1. Download any offline `.img` file from the [Office C2R Installers](office_c2r_links.md) page. Preferably, choose **`O365ProPlusRetail`**.  
2. Right-click the downloaded `.img` file and select **Mount**.  
3. Download [YAOCTRI](https://pixeldrain.com/u/nrCgsLJa) and extract the zip file.  
4. Run **`YAOCTRIR_Configurator.cmd`** as Administrator.  
5. Follow the on-screen instructions and select the products you want (including Visio/Project).  
6. Done.  

#### Custom Installation Using the Latest/Volume Office Files
1. Download and extract the following:  
   - [YAOCTRU](https://pixeldrain.com/u/VUo4mjaM)  
   - [YAOCTRI](https://pixeldrain.com/u/nrCgsLJa)  
   - [aria2](https://github.com/aria2/aria2/releases/download/release-1.37.0/aria2-1.37.0-win-32bit-build1.zip)  
2. Copy **`aria2c.exe`** and paste it into the same folder as **`YAOCTRU_Generator.cmd`**.  
3. Run **`YAOCTRU_Generator.cmd`**.  
   - Select **Current / Monthly** channel for Retail products.  
   - Select any **Perpetual VL** channel for Volume products.  
4. When prompted for output type, choose **Aria2 script** (fastest option).  
5. A new `.bat` file will be created in the same folder. Run it to download the Office files.  
6. Wait until the download finishes.  
7. Copy **`YAOCTRIR_Configurator.cmd`** (for Retail) or **`YAOCTRI_Configurator.cmd`** (for Volume) into the newly created **Office** folder.  
8. Run the configurator, follow the on-screen instructions, and select the product(s) you want (including Visio/Project).  
9. Done.  
</details>

---

## Alternative Methods

-   [Office Tool Plus](http://otp.landian.vip/)

---

## Need help?

-   Check [here](troubleshoot.md).
