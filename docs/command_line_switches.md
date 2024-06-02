# Command Line Switches

## Switches List

-   You can use the below switches in MAS AIO, separate files version and in Powershell one-liner to run in unattended mode.
-   If you want to use it in Windows Pre-Activation then check [this](oem-folder.md) page for more details.

| Switches                  | Meaning                                                                                                                                                                                                            |
|------------------------|-----------------------------------------------|
| `/HWID`                   | Activate with HWID                                                                                                                                                                                                 |
| `/HWID-NoEditionChange`   | Some editions don't support HWID, script by default change edition to nearest available to enable HWID activation. This switch can be used to stop this change. You don't need to add `/HWID` switch with this.    |
|                           |                                                                                                                                                                                                                    |
| `/Ohook`                  | Install Ohook to activate Office                                                                                                                                                                                   |
| `/Ohook-Uninstall`        | Uninstall Ohook                                                                                                                                                                                                    |
|                           |                                                                                                                                                                                                                    |
| `/KMS38`                  | Activate with KMS38                                                                                                                                                                                                |
| `/KMS38-RemoveProtection` | Remove KMS38 protection                                                                                                                                                                                            |
| `/KMS38-NoEditionChange`  | Some editions don't support KMS38, script by default change edition to nearest available to enable KMS38 activation. This switch can be used to stop this change. You don't need to add `/KMS38` switch with this. |
|                           |                                                                                                                                                                                                                    |
| `/KMS-Windows`            | Activate Windows with Online KMS                                                                                                                                                                                   |
| `/KMS-Office`             | Activate Office with Online KMS                                                                                                                                                                                    |
| `/KMS-WindowsOffice`      | Activate Windows & Office with Online KMS                                                                                                                                                                          |
| `/KMS-RenewalTask`        | Install Online KMS renewal task                                                                                                                                                                                    |
| `/KMS-ActAndRenewalTask`  | Install Online KMS activation & renewal tasks (Recommended)                                                                                                                                                        |
| `/KMS-Uninstall`          | Uninstall Online KMS                                                                                                                                                                                               |
| `/KMS-KeepvNext`          | Don't override Office C2R vNext license                                                                                                                                                                            |
| `/KMS-Debug`              | Create Debug log in Online KMS Activation                                                                                                                                                                          |
| `/KMS-Logger`             | Create simple log in Online KMS Activation                                                                                                                                                                         |
|                           |                                                                                                                                                                                                                    |
| `/S`                      | Run operations in silent mode (no output)                                                                                                                                                                          |

------------------------------------------------------------------------

## Uses In Powershell One Liner

`& ([ScriptBlock]::Create((irm https://get.acti vated.win))) /para`

**Notes** - Remove the space between `acti vated`

-   Replace `/para` in this command with the switches from the above table. You can also use multiple switches. For example, `/HWID /KMS-Office /KMS-ActAndRenewalTask`
-   This Powershell one-liner will work on Windows 8.1 and later versions only.
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
