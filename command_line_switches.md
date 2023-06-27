---
pagetitle: Command Line Switches
---

# Command Line Switches

------------------------------------------------------------------------

## Switches List

-   You can use the below switches in MAS AIO, separate files version and in Powershell one-liner to run in unattended mode.

-   If you want to use it in Windows Pre-Activation then check [this](oem-folder.html) page for more details.

| Switches                  | Meaning                                                  |
|------------------------|-----------------------------------------------|
| `/HWID`                   | Activate with HWID                                       |
| `/HWID-NoEditionChange`   | Don't change edition if not supported by HWID            |
|                           |                                                          |
| `/KMS38`                  | Activate with KMS38                                      |
| `/KMS38-RemoveProtection` | Remove KMS38 protection                                  |
| `/KMS38-NoEditionChange`  | Don't change edition if not supported by KMS38           |
|                           |                                                          |
| `/KMS-Windows`            | Activate Windows with Online KMS                         |
| `/KMS-Office`             | Activate Office with Online KMS                          |
| `/KMS-WindowsOffice`      | Activate Windows & Office with Online KMS                |
| `/KMS-RenewalTask`        | Install Online KMS renewal task                          |
| `/KMS-ActAndRenewalTask`  | Install Online KMS activation & renewal tasks (Use this) |
| `/KMS-Uninstall`          | Uninstall Online KMS                                     |
| `/KMS-KeepvNext`          | Don't override Office C2R vNext license                  |
| `/KMS-Debug`              | Create Debug log in Online KMS Activation                |
| `/KMS-Logger`             | Create simple log in Online KMS Activation               |
|                           |                                                          |
| `/Insert-HWID-Key`        | Insert Windows HWID key                                  |
|                           |                                                          |
| `/S`                      | Run operations in silent mode (no output)                |

------------------------------------------------------------------------

## Uses In Powershell One Liner

`iex "&{$(irm https://mass grave.dev/get)} /para"`

Note - Remove space between `mass grave`

-   Replace `/para` in this command with the switches from the above table. You can also use multiple switches. For example, `/HWID /KMS-Office /KMS-ActAndRenewalTask`

**Note:** This Powershell one liner will work on Windows 8 and later versions only.

------------------------------------------------------------------------

## Rules

-   Script will run in unattended mode if any switch is used.

-   `/S` switch is not applicable in MAS separate files version scripts.

-   All switches are case-insensitive, works in any order, but must be separated with spaces.

-   KMS Uninstall switch will take precedence over other KMS switches.

-   KMS38 remove protection switch will task precedence over KMS38 activation.

------------------------------------------------------------------------

## Need help?

-   Check [here](troubleshoot.html).
