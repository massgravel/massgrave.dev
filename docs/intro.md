---
slug: /
sidebar_position: 1
sidebar_label: Intro
---

# Microsoft Activation Scripts (MAS)

Open-source Windows and Office activator featuring HWID, Ohook, TSforge, KMS38, and Online KMS activation methods, along with advanced troubleshooting.

---

### How to Activate Windows / Office?

#### Method 1 - PowerShell (Windows 8 and later) ❤️

:::info

1.   **Open PowerShell**  
	To do that, press the Windows key + X, then select PowerShell or Terminal.

2.   **Copy and paste the code below, then press enter.**  
```
irm https://get.activated.win | iex
```
Alternatively, you can use the following (this will be deprecated in the future):  
```
irm https://massgrave.dev/get | iex
```

3.   You will see the activation options. Choose the activation options highlighted in green. 

4.   That's all

:::

#### Method 2 - Traditional (Windows Vista and later)

<details>
  <summary>Click here to view</summary>
  
1.   Download the file using one of the links below:  
`https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip`  
or  
`https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip`
2.   Right-click on the downloaded zip file and extract it.
3.   In the extracted folder, find the folder named `All-In-One-Version`.
4.   Run the file named `MAS_AIO.cmd`.
5.   You will see the activation options. Follow the on-screen instructions.
6.   That's all.

</details>

---

- To activate additional products such as **Office for macOS, Visual Studio, RDS CALs, and Windows XP**, check [here](unsupported_products_activation.md).
- To run the scripts in unattended mode, check [here](command_line_switches.md).

---

### Not working ❓

- If you are **unable to launch MAS** using the PowerShell method, please refer to **Method 2** above.
- If MAS launches but displays errors, check for troubleshooting steps highlighted in blue and follow them.
- If issues persist, feel free to reach out to us [here](troubleshoot.md).

---

:::note

- The IRM command in PowerShell downloads a script from a specified URL, and the IEX command executes it.
- Always double-check the URL before executing the command and verify the source is trustworthy when manually downloading files.
- Be cautious, as some spread malware disguised as MAS by changing the URL in the IRM command.

:::

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v3.4 (3-June-2025)  
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
-   Available in All In One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## Activations Summary

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | Yes, needed on build 19041 and later |
| KMS38           | Windows 10-11-Server   | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office       | 180 Days. Lifetime With Renewal Task | Yes                 |

For more details, use the respective activation details in Docs and [comparison chart](chart.md).  
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
