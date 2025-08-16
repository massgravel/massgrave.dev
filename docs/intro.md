---
slug: /
sidebar_position: 1
sidebar_label: Intro
---

# Microsoft Activation Scripts (MAS)

Open-source Windows and Office activator featuring HWID, Ohook, TSforge, KMS38, and Online KMS activation methods, along with advanced troubleshooting.

---

### How to Activate Windows / Office / Extended Updates (ESU)?

#### Method 1 - PowerShell ❤️

:::info

1. **Open PowerShell**  
   Click the **Start Menu**, type `PowerShell`, then open it.

2. **Copy and paste the code below, then press Enter.**  
   - For **Windows 8, 10, 11**: 📌
     ```
     irm https://get.activated.win | iex
     ```
   - For **Windows 7** and later:
     ```
     iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))
     ```
<details>

<summary>**Script not launching❓ Click here for info.**</summary>

- If the above is blocked (by ISP or DNS), try this (requires **updated Windows 10 or 11**):
  ```
  iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)
  ```
- If that fails or you have an older Windows, use [**Method 2**](intro.md#method-2---traditional-windows-vista-and-later).

</details>

3. The activation menu will appear. **Choose the green-highlighted options** to activate Windows or Office.

4. **Done!**

:::

#### Method 2 - Traditional (Windows Vista and later)

<details>
  <summary>Click here to view</summary>
  
1.   Download the file using one of the links below:  
`https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip`  
or  
`https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip`
2.   Right-click the downloaded ZIP file and extract it.
3.   In the extracted folder, open the folder named `All-In-One-Version`.
4.   Run the file named `MAS_AIO.cmd`.
5.   You will see the activation options. Follow the on-screen instructions.
6.   That's all.

</details>

---

:::tip

- Some ISPs/DNS block access to our domains. You can bypass this by enabling [DNS-over-HTTPS (DoH)](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/encrypted-dns-browsers/) in your browser.  
- **Having trouble**❓ Connect with us [here](troubleshoot.md).

:::

---

- To activate additional products such as **Office for macOS, Visual Studio, RDS CALs, and Windows XP**, check [here](unsupported_products_activation.md).
- To run the scripts in unattended mode, check [here](command_line_switches.md).

---

:::note

- The IRM command in PowerShell downloads a script from a specified URL, and the IEX command executes it.
- Always double-check the URL before running the command, and verify the source is trustworthy when manually downloading files.
- Be cautious, as some spread malware disguises itself as MAS by changing the URL in the IRM command.

:::

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v3.5 (10-Aug-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) / [Self-hosted Git](https://git.activated.win/massgrave/Microsoft-Activation-Scripts)

------------------------------------------------------------------------

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **TSforge** Method to Permanently Activate Windows/ESU/Office
-   **KMS38** Method to Activate Windows Till the Year 2038
-   **Online KMS** Method to Activate Windows/Office For 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshooting
-   $OEM$ Folders For Preactivation
-   Change Windows Edition
-   Change Office Edition
-   Check Windows/Office Activation Status
-   Available in All-in-One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | Yes - needed on build 19041 and later |
| KMS38           | Windows 10-11-Server   | Until the year 2038                  | No                  |
| Online KMS      | Windows / Office       | 180 days; Lifetime with renewal task | Yes                 |

For more details, see the respective activation pages in [Docs](hwid.md) and the [comparison chart](chart.md).  
To activate unsupported products such as **Office on Mac**, check [here](unsupported_products_activation.md).

------------------------------------------------------------------------

## Screenshots

![](/img/MAS_AIO.png)

![](/img/MAS_HWID.png)

![](/img/MAS_Ohook.png)

![](/img/MAS_TSforge.png)

![](/img/MAS_Troubleshoot.png)

![](/img/MAS_change_windows_edition.png)

![](/img/MAS_change_office_edition_1.png)

![](/img/MAS_change_office_edition_2.png)

![](/img/MAS_change_office_edition_3.png)

------------------------------------------------------------------------

Made with Love ❤️
