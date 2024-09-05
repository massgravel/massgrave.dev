---
slug: /
sidebar_position: 1
sidebar_label: Intro
---

# Microsoft Activation Scripts (MAS)

Open-source Windows and Office activator featuring HWID, Ohook, KMS38, and Online KMS activation methods, along with advanced troubleshooting.

---

## Download / How to use it?  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1 - PowerShell (Windows 8 and later) ❤️" default>

1.   Open PowerShell (Not CMD). To do that, right-click on the Windows start menu and select PowerShell or Terminal.
2.   Copy and paste the code below and press enter  
```
irm https://get.activated.win | iex
```

<details>
  <summary>More options</summary>

- Alternatively, you can use the following (It will be retired Dec 31, 2024)
```
irm https://massgrave.dev/get | iex
```
- On older Windows builds (17134 and before) you will need to run the below command before following the above steps,  
```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
```
- The URL `get.activated.win` might be blocked by some DNS services because it is a new domain.

</details>

3.   You will see the activation options. Choose [1] HWID for Windows activation. Choose [2] Ohook for Office activation.
4.   That's all

</TabItem>
<TabItem value="Method 2" label="Method 2 - Traditional (Windows 7 and later)" default>

-   Download the file under the code button from [GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) or [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts)
-   Right-click on the downloaded zip file and extract
-   In the extracted folder, find the folder named `All-In-One-Version`
-   Run the file named `MAS_AIO.cmd`
-   You will see the activation options, follow the on-screen instructions.
-   That's all.

</TabItem>
</Tabs>

---

:::note

- The IRM command in PowerShell downloads a script from a specified URL, and the IEX command executes it.
- Always double-check the URL before executing the command and verify the source if manually downloading files.
- Be cautious, as some spread malware disguised as MAS by using different URLs in the IRM command.

:::

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v2.7 (5-Sep-2024)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts) / [Codeberg](https://codeberg.org/massgravel/Microsoft-Activation-Scripts)

------------------------------------------------------------------------

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **KMS38** Method to Activate Windows/Server Till the Year 2038
-   **Online KMS** Method to Activate Windows/Server/Office For 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshooting
-   $OEM$ Folders For Preactivation
-   Change Windows Edition
-   Change Office Edition
-   Check Windows/Office Activation Status
-   Available in All In One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product    | Activation Period                    | Is Internet Needed? |
|:----------------|:---------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11        | Permanent                            | Yes                 |
| Ohook           | Office               | Permanent                            | No                  |
| KMS38           | Windows 10-11-Server | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office     | 180 Days. Lifetime With Renewal Task | Yes                 |

For more details, use the respective activation details in Docs.  
To activate unsupported products such as **Office on Mac**, check [here](unsupported_products_activation.md).

------------------------------------------------------------------------

## Screenshots

![](/img/MAS_AIO.png)

![](/img/MAS_HWID.png)

![](/img/MAS_Ohook.png)

![](/img/MAS_Troubleshoot.png)

![](/img/MAS_change_windows_edition.png)

![](/img/MAS_change_office_edition_1.png)

![](/img/MAS_change_office_edition_2.png)

![](/img/MAS_change_office_edition_3.png)

------------------------------------------------------------------------

Made with Love ❤️
