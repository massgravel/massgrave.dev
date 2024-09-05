# Command Line Switches

## Switches List

-   You can use the below switches in MAS AIO, separate files version and in Powershell one-liner to run in unattended mode.
-   If you want to use it in Windows Pre-Activation then check [this](oem-folder.md) page for more details.

| Switches                      | Meaning                                                                                                                                                                                                            |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/HWID`                       | Activate with HWID                                                                                                                                                                                                 |
| `/HWID-NoEditionChange`       | Some editions don't support HWID, script by default change edition to nearest available to enable HWID activation. This switch can be used to stop this change. You don't need to add `/HWID` switch with this.    |
|                               |                                                                                                                                                                                                                    |
| `/Ohook`                      | Install Ohook to activate Office                                                                                                                                                                                   |
| `/Ohook-Uninstall`            | Uninstall Ohook                                                                                                                                                                                                    |
|                               |                                                                                                                                                                                                                    |
| `/KMS38`                      | Activate with KMS38                                                                                                                                                                                                |
| `/KMS38-RemoveProtection`     | Remove KMS38 protection                                                                                                                                                                                            |
| `/KMS38-NoEditionChange`      | Some editions don't support KMS38, script by default change edition to nearest available to enable KMS38 activation. This switch can be used to stop this change. You don't need to add `/KMS38` switch with this. |
|                               |                                                                                                                                                                                                                    |
| `/K-Windows`                  | Activate only Windows with Online KMS                                                                                                                                                                              |
| `/K-Office`                   | Activate only Office with Online KMS                                                                                                                                                                               |
| `/K-ProjectVisio`             | Activate only Project/Visio with Online KMS                                                                                                                                                                        |
| `/K-WindowsOffice`            | Activate all Windows and Office with Online KMS                                                                                                                                                                    |
| `/K-NoEditionChange`          | Some editions don't support KMS, script by default change edition to nearest available to enable KMS activation. This switch can be used to stop this change.                                                      |
| `/K-NoRenewalTask`            | Whenever you run any activation, the script installs the auto-renewal task by default. To NOT auto-install renewal task with activation, use this switch.                                                          |
| `/K-Uninstall`                | Uninstall Online KMS including renewal tasks                                                                                                                                                                       |
| `/K-Server-YOURKMSSERVERNAME` | To specify a server address for activation, where YOURKMSSERVERNAME needs to be edited for server name                                                                                                             |
| `/K-Port-YOURPORTNAME`        | To specify a port for activation, where YOURPORTNAME needs to be edited for port address                                                                                                                           |
|                               |                                                                                                                                                                                                                    |
| `/S`                          | Run operations in silent mode (no output)                                                                                                                                                                          |

------------------------------------------------------------------------

## Uses In Powershell One Liner

`& ([ScriptBlock]::Create((irm https://get.activated.win))) /para`

-   Replace `/para` in this command with the switches from the above table. You can also use multiple switches. For example, `/HWID /Ohook`
-   This Powershell one-liner will work on Windows 8.1 and later versions only.
-   Make sure to use the below command beforehand to enable TLs1.2 on older Windows versions.  
`[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12`
-   To change the edition through the command line, check [here](change_edition.md#manual-edition-change). We didn't automate it in MAS because it requires a reboot in some cases.

------------------------------------------------------------------------

## Rules

-   Script will run in unattended mode if any switch is used.
-   `/S` switch is not applicable in MAS separate files version scripts.
-   All switches are case-insensitive, and work in any order, but must be separated with spaces.
-   KMS Uninstall switch will take precedence over other KMS switches.
-   KMS38 remove protection switch will take precedence over KMS38 activation.

------------------------------------------------------------------------

## Need help?

-   Check [here](troubleshoot.md).
