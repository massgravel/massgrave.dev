# Change Edition Issues

## Error 0x80070490

-   In the Home to Pro upgrade process, the script may show the below error in red:  
```         
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```
-   This issue is often caused by the .NET Framework 3.5 that's installed.
-   The solution is to disable it. To do that, open the command prompt as administrator and enter  
    `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`
-   Once it's done, run the edition change.
-   Afterwards, you can re-enable .NET 3.5 by entering this command into your admin command prompt window.
    `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

---

## Other Errors

-   Restart the system, then try again.
-   If it's still not resolved, follow the below guide.  
https://gravesoft.dev/in-place_repair_upgrade

---
