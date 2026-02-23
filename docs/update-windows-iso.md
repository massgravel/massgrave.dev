# Update Windows ISO

Official Windows 10 / 11 ISOs available through public free links on [Microsoft](https://www.microsoft.com/en-us/software-download/) do not include the latest monthly updates.  
Microsoft usually releases updated ISOs after major feature updates, and the next one typically comes with the following year’s release.

These official ISOs work fine for most users since Windows automatically installs cumulative updates (which include all prior updates).  
However, there are several cases where you may need an updated ISO.

---

## Why You Might Need an Updated ISO

### 1. Windows 10 WinRE Update Issue

- Microsoft provides official public links for Windows 10 22H2 (Build 19045.2965).  
  This build contains an issue that can cause Windows Update to fail when installing [KB5028997](https://support.microsoft.com/topic/kb5028997-instructions-to-manually-resize-your-partition-to-install-the-winre-update-400faa27-9343-461c-ada9-24c8229763bf) on MBR/BIOS installations.
- Using an updated ISO that includes the latest updates resolves this issue.

### 2. Windows 11 LTSC 2024 In-Place Upgrade Issue

- The official Windows 11 LTSC 2024 ISOs were released with build **26100.1742**, and Microsoft does **not** provide newer ISOs to MVS paid subscribers.
- If your Windows 11 LTSC 2024 installation is already updated to a newer build and you attempt an in-place repair upgrade using the 26100.1742 ISO, the process will fail.
- Using an ISO that includes the latest updates will resolve this issue.

> **Note:**  
> The same issue occurs with Windows 11 24H2 GAC editions (non-LTSC). However, since updated ISOs for 25H2 are already available, you can use those instead.

### 3. Frequent Windows Installations

Technicians or shop owners who install Windows multiple times per day benefit greatly from updated ISOs.  
Using an updated ISO saves both time and bandwidth during setup and post-installation updates.

---

## How to Get an Updated ISO

### Option 1: Updated ISOs from MVS

Microsoft provides monthly updated Windows 10 / 11 ISOs (non-LTSC) to [MVS](https://my.visualstudio.com/Downloads) subscribers.  
Alternatively, you can find download links [here](genuine-installation-media).

---

### Option 2: Manually Update ISOs

**Applies to:** Windows 10, Windows 11, and Windows Server 2025, 23H2, 2022

:::info

- To create an updated **Windows 10** ISO, your host operating system must be **Windows 8.1 or newer**.  
- To create an updated **Windows 11** ISO, your host operating system must be **Windows 10 version 2004 or later**, or **Windows 11**.

:::

Follow these steps to manually create an updated Windows ISO:

1. **Download the base ISO**  
   - Get the official ISO from [Microsoft](https://www.microsoft.com/en-us/software-download/) (Download ISO file directly; Media Creation Tool ISOs won’t work here.) or [here](genuine-installation-media).

2. **Download W10UI**  
   - Get [W10UI](https://forums.mydigitallife.net/posts/1216064/).  
     Alternative links: [Link 1](https://kutt.it/W10UI) / [Link 2](https://tiny.cc/W10UI).

3. **Download Updates**  
   - Go to [UUP Dump](https://uupdump.net/).  
     (We are using this site here only to fetch official Microsoft update files. Generating ISOs from this site for general use is not recommended; use them for evaluation purposes only.)
   - From the dropdown menu, choose the correct version. For example:  
     - For **Windows 10 LTSC 2021**, choose **Windows 10 21H2**  
     - For **Windows 11 LTSC 2024**, choose **Windows 11 24H2**  
     - For **Windows Server 2025**, choose **Windows 11 24H2** (the update files are the same; the Server 2025 entry doesn’t show the full list)  
     - For **Windows Server 2022**, choose **Windows Server 21H2**  
   - A list will appear. Select the latest build that **does not include “Cumulative Update”** in its name. It should be labeled “Feature update” or “Windows 10/11.”  
   - On the next page, it will ask you to choose a language - no need to change it, just click **Next**.  
   - On the following page, it will ask you to choose an edition - again, no need to change anything, just click **Next**.  
   - On the final summary page, click the button named **Create download package for these updates**.  
   - Extract all the contents of the downloaded ZIP file, then run the script named `uup_download_windows.cmd`.
   - It will download all the update files into a folder named `UUPs`.
   - **Download .NET Updates**  
	 - The package above includes .NET updates **only** for Windows 11 build 22H2 and newer.  
	 If you’re updating **Windows 10** or **Server 2022** ISOs, download the .NET updates separately.  
	 You can skip this step if you’re updating **Windows 11** or **Server 2025** ISOs.
	 - Open the appropriate link below based on your ISO version and download the latest month's file.
	   - **Windows 10 LTSC 2021 (21H2) / Windows 10 22H2** - [x64](https://www.catalog.update.microsoft.com/Search.aspx?q=3.5+-4.8.1+22H2+1903+Updates+x64) / [x86](https://www.catalog.update.microsoft.com/Search.aspx?q=3.5+-4.8.1+22H2+1903+Updates+-x64+-ARM64) / [ARM64](https://www.catalog.update.microsoft.com/Search.aspx?q=3.5+-4.8.1+22H2+1903+Updates+ARM64)  
	   - **Windows Server 2022** - [x64](https://www.catalog.update.microsoft.com/Search.aspx?q=3.5+-4.8.1+21H2+Server+Updates)
	 - Copy and paste the downloaded file into the same `UUPs` folder where other download files are saved.

4. **Mount the ISO**  
   - Right-click the downloaded Windows ISO > **Mount**.

5. **Set Up the Working Directory**  
   - Extract the downloaded W10UI zip file.  
   - Create a folder named `Files` on the C or D drive (e.g., `D:\Files`), avoiding spaces or special characters. Make sure you have at least 40-50 GB of free space available.
   - Copy the extracted `W10UI.cmd` file into this folder.  
   - Copy all the update files downloaded earlier (from the `UUPs` folder) into this folder.  
     Your folder should look like this:  
     ![image](./assets/w10ui-downloaded-files.png)

6. **Integrate Updates**
   - Right-click `W10UI.cmd` > **Run as administrator**.
   - Press **1** to select `[1] Target` and enter the mounted ISO drive path (e.g., `H:\`).
   - Press **0** to start the integration process and wait for it to complete.

7. **Finish**
   - Once the process finishes, an updated ISO file will be created in the same folder.  
   - Done!

---

:::tip
If you need help or run into issues, you can [contact us](troubleshoot.md) for assistance.
:::
