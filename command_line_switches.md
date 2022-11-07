# Command Line Switches

------------------------------------------------------------------------

## Switches List

-   You can use the below switches in MAS AIO, separate files version and in Powershell one-liner to run in unattended mode.

-   If you want to use it in Windows Pre-Activation then check [this](https://massgrave.dev/oem-folder.html) page for more details.

| Switches                  | Meaning                                        |
|--------------------------|----------------------------------------------|
| `/HWID`                   | Activate with HWID                             |
| `/HWID-NoEditionChange`   | Don't change edition if not supported by HWID  |
|                           |                                                |
| `/KMS38`                  | Activate with KMS38                            |
| `/KMS38-RemoveProtection` | Remove KMS38 protection                        |
| `/KMS38-NoEditionChange`  | Don't change edition if not supported by KMS38 |
|                           |                                                |
| `/KMS-Windows`            | Activate Windows with Online KMS               |
| `/KMS-Office`             | Activate Office with Online KMS                |
| `/KMS-WindowsOffice`      | Activate Windows & Office with Online KMS      |
| `/KMS-RenewalTask`        | Install Online KMS renewal task                |
| `/KMS-ActAndRenewalTask`  | Install Online KMS activation & renewal tasks  |
| `/KMS-Uninstall`          | Uninstall Online KMS                           |
| `/KMS-KeepvNext`          | Don't override Office C2R vNext license        |
| `/KMS-Debug`              | Create Debug log in Online KMS Activation      |
| `/KMS-Logger`             | Create simple log in Online KMS Activation     |
|                           |                                                |
| `/Insert-HWID-Key`        | Insert Windows HWID key                        |
|                           |                                                |
| `/S`                      | Run operations in silent mode (no output)      |

------------------------------------------------------------------------

## Uses In Powershell One Liner

`& ([ScriptBlock]::Create((irm https://massgrave.dev/get))) /para`

-   Replace `/para` in the this command with the switches from the above table. You can use multiple switches. Example,

`& ([ScriptBlock]::Create((irm https://massgrave.dev/get))) /HWID /KMS-Office`

------------------------------------------------------------------------

## Rules

-   Script will run in unattended mode if any switch is used.

-   `/S` switch is not applicable in MAS separate files version scripts.

-   All switches are case-insensitive, works in any order, but must be separated with spaces.

-   KMS Uninstall switch will take precedence over other KMS switches

-   KMS38 remove protection switch will task precedence over KMS38 activation.

------------------------------------------------------------------------

## Need help?

-   Reach out to us on [Discord](https://discord.gg/gjJEfq7ux8) (signup not required)
