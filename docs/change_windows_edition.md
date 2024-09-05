# Change Windows Edition

-   You can find this option in the MAS extras section.
-   It can change the Windows 7-8-8.1-10-11 and their Server equivalent editions.
-   The script incorporates 4 methods for edition changing:
    -   May's DISM Api Method - Used in Windows 10/11 Core to Non-Core edition change
    -   [slmgr /ipk Method](https://learn.microsoft.com/windows/deployment/upgrade/windows-edition-upgrades#upgrade-using-a-command-line-tool) - Used in Windows 10/11 where edition license files are already there
    -   [DISM Method](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options) - Used in Server 2016 and later server versions
    -   [CBS Upgrade Method](https://github.com/asdcorp/Set-WindowsCbsEdition) - Used in Windows versions before 10
-   Available editions that can be changed to are shown in the script based on all these 4 options.
-   The script is future-proof, which means that it won't need an update upon the release of new Windows / Server editions and can get the required product key from the system itself.
-   The script blocks changing to CountrySpecific, ServerRdsh, and to/from CloudEdition editions since it's officially not supported and the user may face issues.
-   The script cannot change,
    -   Non-Core editions to Core editions (For example, Pro > Home isn't available)
    -   GAC editions to LTSC editions (For example, Enterprise > Enterprise LTSC isn't available)

------------------------------------------------------------------------

## Manual Edition Change

If you want to manually change the edition instead of using the script, please follow the steps below.

### Windows 10/11

-   To view the list of available editions, open the command prompt as admin and enter  
    `dism /online /english /Get-TargetEditions`
-   Get the keys for the desired edition from [here](hwid.md#supported-products)
-   If you are upgrading from Home to Pro, you will need to disable the Internet before performing the upgrade.
-   Now enter that product key with this command, replace `<product_key>` with the actual key.  
    `changepk.exe /ProductKey <product_key>`
-   In the Home to Pro upgrade, it may show an error, restart the system anyway. (Use the script if it's still not working)
-   Activate the changed edition with MAS, that's all.

### Windows Server 2016 and Later

-   Follow the official Microsoft guide [here](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options), you can get the required keys from [here](kms38.md#supported-products).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](change_edition_issues.md).
