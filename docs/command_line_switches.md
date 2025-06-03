# Command Line Switches

## Switches List

-   You can use the switches below in MAS AIO, separate files version and in Powershell one-liner to run in unattended mode.
-   If you want to use MAS to pre-activate Windows, check [this](oem-folder.md) page for more details.

### HWID

| Switches                | Meaning                                                                                                                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/HWID`                 | Activate with HWID                                                                                                                                                                        |
| `/HWID-NoEditionChange` | Some editions don't support HWID, so by default the script changes the edition to nearest available edition to enable activation. This switch runs HWID without allowing edition changes. |

### Ohook

| Switches           | Meaning                          |
|--------------------|----------------------------------|
| `/Ohook`           | Install Ohook to activate Office |
| `/Ohook-Uninstall` | Uninstall Ohook                  |

### TSforge

| Switches                     | Meaning                                                                                                                                                                                               |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/Z-Windows`                 | Activate only Windows with TSforge                                                                                                                                                                    |
| `/Z-ESU`                     | Activate only ESU with TSforge                                                                                                                                                                        |
| `/Z-Office`                  | Activate only Office with TSforge                                                                                                                                                                     |
| `/Z-ProjectVisio`            | Activate only Project/Visio with TSforge                                                                                                                                                              |
| `/Z-WindowsESUOffice`        | Activate all Windows / ESU / Office with TSforge                                                                                                                                                      |
| `/Z-WinHost`                 | Activate only Windows KMS Host with TSforge                                                                                                                                                           |
| `/Z-OffHost`                 | Activate only Office KMS Host with TSforge                                                                                                                                                            |
| `/Z-APPX`                    | Activate only 8/8.1 APPXLOB with TSforge                                                                                                                                                              |
| `/Z-ID-ActivationIdGoesHere` | To specify an activation ID for activation, where ActivationIdGoesHere needs to be edited for Activation ID. If you want to add multiple through parameters, pass each of them in separate parameters |
| `/Z-Reset`                   | Reset rearm counter, evaluation period and clear the tamper state, key lock                                                                                                                           |

**Change activation method:**  

For builds 19041 and later, the script automatically selects StaticCID (requires an internet connection). If no internet connection is detected, it automatically switches to the KMS4k method.  
For builds earlier than 19041, the script automatically selects ZeroCID.

To override this automatic selection and use a specific activation method, you can apply the following switches in combination with the switches listed above.

| Switches   | Meaning                                                                                                                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/Z-SCID`  | Force use StaticCID activation method. It needs Internet and does not work on Windows 7 and older versions.                                                      |
| `/Z-ZCID`  | Force use ZeroCID activation method. Works reliably on builds below 19041, may break on builds between 19041-26100 and does not work on builds above 26100.4188. |
| `/Z-KMS4k` | Volume licenses only. Activates for 4000+ years.                                                                                                                 |

### KMS38

| Switches                  | Meaning                                                                                                                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/KMS38`                  | Activate with KMS38                                                                                                                                                                         |
| `/KMS38-NoEditionChange`  | Some editions don't support KMS38, so by default the script changes the edition to nearest available edition to enable activation. This switch runs KMS38 without allowing edition changes. |
| `/KMS38-RemoveProtection` | Remove KMS38 protection                                                                                                                                                                     |

### Online KMS

| Switches                      | Meaning                                                                                                                                                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/K-Windows`                  | Activate only Windows with Online KMS                                                                                                                         |
| `/K-Office`                   | Activate only Office with Online KMS                                                                                                                          |
| `/K-ProjectVisio`             | Activate only Project/Visio with Online KMS                                                                                                                   |
| `/K-WindowsOffice`            | Activate all Windows and Office with Online KMS                                                                                                               |
| `/K-NoEditionChange`          | Some editions don't support KMS, script by default change edition to nearest available to enable KMS activation. This switch can be used to stop this change. |
| `/K-NoRenewalTask`            | Whenever you run any activation, the script installs the auto-renewal task by default. To NOT auto-install renewal task with activation, use this switch.     |
| `/K-Uninstall`                | Uninstall Online KMS including renewal tasks                                                                                                                  |
| `/K-Server-YOURKMSSERVERNAME` | To specify a server address for activation, where YOURKMSSERVERNAME needs to be edited for server name                                                        |
| `/K-Port-YOURPORTNAME`        | To specify a port for activation, where YOURPORTNAME needs to be edited for port address                                                                      |

```
/S
Run operations in silent mode (no output but the CMD window will still appear)
```

------------------------------------------------------------------------

## Using in the Powershell One-Liner

`& ([ScriptBlock]::Create((irm https://get.activated.win))) /para`

-   Replace `/para` in this command with the switches from the above table. You can also use multiple switches. For example, `/HWID /Ohook`
-   This Powershell one-liner will only work on Windows 8.1 and later.
-   To change the edition through the command line, check [here](change_windows_edition.md#manual-edition-change). We didn't automate it in MAS because it requires a reboot in some cases.

------------------------------------------------------------------------

## Rules

-   The script will run in unattended mode if any switch is used.
-   `/S` switch is not applicable in MAS separate files version scripts.
-   All switches are case-insensitive and work in any order, but must be separated with spaces.
-   KMS Uninstall switch will take precedence over other KMS switches.
-   KMS38 remove protection switch will take precedence over KMS38 activation.

------------------------------------------------------------------------

## Need help?

-   Check [here](troubleshoot.md).
