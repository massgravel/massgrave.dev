# Change Edition Issues

If the script encounters an error during the Windows edition change, follow the points listed below in this order.

## Restart System

-   Press the restart button to reboot the system, then attempt to change the edition again.

## Update Windows

-	Open the Windows settings, navigate to the Windows Update section, and ensure that Windows is fully updated.

## Error 0x80070490

:::note

Only proceed if the script displays a 0x80070490 error code. If it doesn’t, this action is unnecessary.

:::

<details>
<summary>Click here for info</summary>

-   During a Home to Pro upgrade, the script may show the below error:  
```         
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```
-   This issue often appears when .NET Framework 3.5 is installed.
-   To solve this, it needs to be disabled. To do that, open Command Prompt as admin and enter  
    `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`
-   Once that's done, try to change the edition again.
-   After the edition change, you can enable .NET 3.5 again:  
    `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

</details>

## In-Place Repair Upgrade

-   If none of the solutions worked, please follow the guide below to fix the system corruption.
-   https://gravesoft.dev/in-place_repair_upgrade
