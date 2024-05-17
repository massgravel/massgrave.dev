---
slug: /
sidebar_position: 1
sidebar_label: Intro
---

# Microsoft Activation Scripts (MAS)

A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.

---

## Download / How to use it?

### Method 1 - PowerShell

(Recommended)

-   Right-click on the Windows start menu and select PowerShell or Terminal (Not CMD).
-   Copy and paste the code below and press enter  
`irm https://massgrave.dev/get | iex`  
-   You will see the activation options. Follow the on-screen instructions.
-   That's all.

Note - On older Windows builds you may need to run the below command before,  
`[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12`  

### Method 2 - Traditional

-   Download the file under the code button from [GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) or [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts)
-   Right-click on the downloaded zip file and extract
-   In the extracted folder, find the folder named `All-In-One-Version`
-   Run the file named `MAS_AIO-CRC32_XXXXXXXX.cmd`
-   You will see the activation options, follow the on-screen instructions.
-   That's all.

To run the scripts in unattended mode, check [here](command_line_switches.md)

------------------------------------------------------------------------

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **KMS38** Method to Activate Windows/Server Till the Year 2038
-   **Online KMS** Method to Activate Windows/Server/Office For 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshooting
-   $OEM$ Folders For Preactivation
-   Change Windows Edition
-   Check Windows/Office Activation Status
-   Available in All In One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v2.6 (20-Apr-2024)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts)

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product    | Activation Period                    |
|:----------------|:---------------------|:-------------------------------------|
| HWID            | Windows 10-11        | Permanent                            |
| Ohook           | Office               | Permanent                            |
| KMS38           | Windows 10-11-Server | Till the Year 2038                   |
| Online KMS      | Windows / Office     | 180 Days. Lifetime With Renewal Task |

For more details, use the respective activation details in Docs.  
To activate unsupported products such as **Office on Mac**, check [here](unsupported_products_activation.md).

------------------------------------------------------------------------

## Screenshots

![](/img/MAS_AIO.png)

![](/img/MAS_HWID.png)

![](/img/MAS_Ohook.png)

![](/img/MAS_Troubleshoot.png)

------------------------------------------------------------------------

Made with Love ❤️
