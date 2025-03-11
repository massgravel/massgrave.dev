# Change Windows Edition

This option can be used to switch between the editions of your Windows version.

Supported versions:

- Windows 7
- Windows 8
- Windows 8.1
- Windows 10
- Windows 11
+ their server equivalents

## How does it work?

"Core" refers to the core editions - the ones that have license files built in to Windows.   

Core: Home, Pro and Pro for Workstations
Non-Core: Enterprise, Education, Enterprise LTSC

The script has four methods for changing editions:
    -   May's DISM API Method - Used for a Windows 10/11 Core to non-core edition change
    -   [slmgr /ipk Method](https://learn.microsoft.com/windows/deployment/upgrade/windows-edition-upgrades#upgrade-using-a-command-line-tool) - Used for Windows 10/11, where edition license files are already there
    -   [DISM Method](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options) - Used for Server 2016 and later
    -   [CBS Upgrade Method](https://github.com/asdcorp/Set-WindowsCbsEdition) - Used for Windows versions older than 10

The script is future-proof, which means that it won't need an update upon the release of new Windows / Server editions and can get the required product key from the system itself.

## Limitations

The script blocks changing to CountrySpecific, ServerRdsh, and to/from CloudEdition editions since it is not supported by Microsoft and the user may face issues.

The script cannot change non-core editions to core editions. (Pro --> Home isn't available)

The script cannot change GAC editions to LTSC editions. (Enterprise --> Enterprise LTSC isn't available)

------------------------------------------------------------------------

## Manual Edition Change

If you want to manually change the edition instead of using the script, follow these steps.

### Windows 10/11

-   To view the list of available editions, open the command prompt as admin and enter  
    `dism /online /english /Get-TargetEditions`
-   Get the keys for the desired edition from [here](hwid.md#supported-products)
-   If you are upgrading from Home to Pro, you will need to disable the Internet before performing the upgrade.
-   Now enter this command (replace `<product_key>` with the actual key)   
    `changepk.exe /ProductKey <product_key>`
-   In the Home to Pro upgrade, it may show an error. Restart the system anyway. If it still shows an error, use the script
-   Activate the changed edition with MAS.  
-   That's all.

### Windows Server 2016 and later

-   Follow the official Microsoft guide [here](https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options), you can get the required keys from [here](kms38.md#supported-products).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](change_edition_issues.md).
