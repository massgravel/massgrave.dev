# Change Windows Edition

-   You can find this option in MAS (**7** on the main menu).
-   It can change the editions of Windows 7, 8, 8.1, 10, 11 and their Server equivalent editions.
-   The script incorporates 4 methods for edition changing:
    -   May's DISM API Method - Used for changing Windows 10/11 Core (Home) to non-Core.
    -   [slmgr /ipk method](https://learn.microsoft.com/windows/deployment/upgrade/windows-edition-upgrades#upgrade-using-a-command-line-tool) - Used in Windows 10/11 when edition license files are already present
    -   [DISM method](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options) - Used for Server 2016 and later server versions
    -   [CBS Upgrade method](https://github.com/asdcorp/Set-WindowsCbsEdition) - Used for Windows versions before 10
-   Available editions that can be changed to are shown in the script based on these 4 options.
-   The script is future-proof, which means that it won't need an update upon the release of new Windows / Server editions (it can get the required key from the system automatically).
-   The script disallows changing to CountrySpecific, ServerRdsh, and to/from CloudEdition editions since it's not officially supported (you may face issues).
-   The script cannot change:
    -   non-Core editions to Core editions (for example, Pro > Home is not available)
    -   GAC editions to LTSC editions (for example, Enterprise > Enterprise LTSC is not available)

------------------------------------------------------------------------

## Manual Edition Change

If you want to manually change the edition instead of using the script, you can follow the steps below.

### Windows 10/11

-   To view the list of available editions, open Command Prompt as admin and enter  
    `dism /online /english /Get-TargetEditions`
-   Get the keys for the desired edition from [here](hwid.md#supported-products)
-   If you are upgrading from Core to non-Core, you will need to disable the Internet before performing the upgrade.
-   Now, enter this command: `changepk.exe /ProductKey <product key>` 
    Replace `<product key>` with the actual key.
-   When upgrading from Core to non-Core, an error may be shown. Ignore it and restart the system anyway. (Use [the script](change_windows_edition.md) if it's still not working)
-   Activate the new edition using [MAS](intro.md).
-   You're done!

### Windows Server 2016 onward

-   Follow the official Microsoft guide [here](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options). You can get the required keys from [here](kms38.md#supported-products).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](change_edition_issues.md).
