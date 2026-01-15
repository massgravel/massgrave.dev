---
slug: /
sidebar_position: 1
sidebar_label: Activate Windows / Office
title: Microsoft Activation Scripts
---

# Microsoft Activation Scripts (MAS)
An open-source Windows and Office activator featuring HWID, Ohook, TSforge, and Online KMS activation methods, along with advanced troubleshooting.

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Activation Methods

<Tabs>
  <TabItem value="powershell" label="Method 1: PowerShell (Recommended)" default>

  **This method is the most convenient and works on Windows 8.1, 10, and 11.**

  1. Click the **Start Menu**, type `PowerShell`, and open it.
  2. Copy and paste the code below and press **Enter.**
  
  <span className="launcher-command">
  ```powershell
  irm https://get.activated.win | iex
  ```
  </span>

  3. In the menu that appears, type the number corresponding to one of the **Green** options.
  
  <details>
    <summary><strong>Having trouble? (Blocked by ISP or Old Windows)</strong></summary>
    
    **If the command is blocked:**  
    Some ISPs block the URL. Use this command to bypass DNS blocks (Windows 10/11 only):
    ```powershell
    iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)
    ```

    **If you receive a TLS/SSL Error (Older Windows):**  
    If you are on an old build of Windows 8.1 or 10, run this command *before* the main command:
    ```powershell
    [Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12
    ```
  </details>

  </TabItem>
  <TabItem value="manual" label="Method 2: Traditional (Offline)">

  **Use this method if you prefer downloading a file or cannot use the PowerShell method.**

  1. Download the script:
      *   [**MAS_AIO.cmd**](https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?path=/MAS/All-In-One-Version-KL/MAS_AIO.cmd&download=true) (Direct script)
      *   [**MAS_AIO.zip**](https://dev.azure.com/massgrave/Microsoft-Activation-Scripts/_apis/git/repositories/Microsoft-Activation-Scripts/items?$format=zip) (If the direct script is blocked by your browser)
  2. Run the `MAS_AIO.cmd` file.
  3. In the menu that appears, type the number corresponding to one of the **Green** options.

  </TabItem>
</Tabs>

---

:::tip

- Some ISPs/DNS providers block access to our domains. You can bypass this by enabling [DNS-over-HTTPS (DoH)](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/encrypted-dns-browsers/) in your browser.  
- **Having trouble?** Connect with us [here](troubleshoot.md).

:::

---

- To activate additional products such as **Office for macOS, Visual Studio, RDS CALs, and Windows XP**, see [here](unsupported_products_activation.md).
- To run the scripts in unattended mode, see [here](command_line_switches.md).

---

:::note

- The `irm` command in PowerShell downloads a script from a specified URL, and the `iex` command executes it.
- Always double-check the URL before executing the command and verify the source is trustworthy when manually downloading files.
- Be cautious of third parties spreading malware disguised as MAS by altering the URL in the PowerShell command.

:::

------------------------------------------------------------------------

## MAS Latest Release

Latest Release: v3.9 (19-Nov-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) / [Self-hosted Git](https://git.activated.win/Microsoft-Activation-Scripts)

------------------------------------------------------------------------

## Features

-   **HWID (Digital License):** Permanently activate Windows.
-   **Ohook:** Permanently activate Office.
-   **TSforge:** Permanently activate Windows, ESU, and Office.
-   **Online KMS:** Activate Windows/Office for 180 days (Lifetime with renewal task).
-   Advanced activation troubleshooting.
-   $OEM$ folders for pre-activation.
-   Change Windows edition.
-   Change Office edition.
-   Check Windows/Office activation status.
-   Available in All-In-One and separate file versions.
-   Fully open source and based on batch scripts.
-   Fewer antivirus detections.

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | Yes, needed on build 26100 and later |
| Online KMS      | Windows / Office       | 180 Days (Lifetime with renewal task) | Yes                 |

For more details, see the respective pages in the documentation and the [comparison chart](chart.md).  
To activate unsupported products such as **Office on Mac**, check [here](unsupported_products_activation.md).

------------------------------------------------------------------------

## Screenshots

![MAS AIO](./assets/MAS_AIO.png)

![MAS HWID](./assets/MAS_HWID.png)

![MAS Ohook](./assets/MAS_Ohook.png)

![MASS TSforge](./assets/MAS_TSforge.png)

![MAS Troubleshoot](./assets/MAS_Troubleshoot.png)

![MAS Change Windows Edition](./assets/MAS_change_windows_edition.png)

![MAS Change Windows Edition 1](./assets/MAS_change_office_edition_1.png)

![MAS Change Windows Edition 2](./assets/MAS_change_office_edition_2.png)

![MAS Change Windows Edition 3](./assets/MAS_change_office_edition_3.png)

------------------------------------------------------------------------