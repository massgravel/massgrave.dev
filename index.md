---
pagetitle: Microsoft Activation Scripts (MAS)
---

## Intro

**Microsoft Activation Scripts (MAS)**

A Windows and Office activator using HWID / Ohook / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.

------------------------------------------------------------------------

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **KMS38** Method to Activate Windows/Server Till the Year 2038
-   **Online KMS** Method to Activate Windows/Server/Office Till 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshoot
-   \$OEM\$ Folders For Preactivation
-   Change Windows Edition
-   Check Windows/Office Activation Status
-   Available in All In One and Separate Files Version
-   Fully Open Source and Based on Batch Script
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v2.0 (25-Sep-2023)\
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts)

------------------------------------------------------------------------

**Note: Microsoft servers are currently rejecting HWID activation requests when activating through MAS, we're checking what's going on now. Use the KMS38 activation option for now.**

## Download / How to use it?

### Method 1 - PowerShell

(Recommended)

-   On Windows 8.1/10/11, right-click on the Windows start menu and select PowerShell or Terminal (Not CMD).
-   Copy-paste the below code and press enter\
    `irm https://massgrave.dev/get | iex`
-   You will see the activation options, and follow onscreen instructions.
-   That's all.

### Method 2 - Traditional

-   Download the file from [here](https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip)
-   Right click on the downloaded zip file and extract
-   In the extracted folder, find the folder named `All-In-One-Version`
-   Run the file named `MAS_AIO.cmd`
-   You will see the activation options, and follow onscreen instructions.
-   That's all.

To run the scripts in unattended mode, check [here](command_line_switches.html)

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product    | Activation Period                    |
|:----------------|:---------------------|:-------------------------------------|
| HWID            | Windows 10-11        | Permanent                            |
| Ohook           | Office               | Permanent                            |
| KMS38           | Windows 10-11-Server | Till the Year 2038                   |
| Online KMS      | Windows / Office     | 180 Days. Lifetime With Renewal Task |

For more details, use the respective activation details in Doc.

To activate unsupported products such as **Office on Mac**, check [here](unsupported_products_activation.html).

------------------------------------------------------------------------

## Screenshots

![](MAS_AIO.png)

![](MAS_HWID.png)

![](MAS_Ohook.png)

![](MAS_Troubleshoot.png)

------------------------------------------------------------------------

## Other Projects

-   [IDM Activation Script (IAS)](idm-activation-script.html)

------------------------------------------------------------------------

Made with Love ❤️
