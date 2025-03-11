# Change Edition Issues

## Error 0x80070490

-   In the Home to Pro upgrade process, the script may show the below error in red color:  
```         
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```
-   This issue often appears due to the installed .Net 3.5 framework.
-   To solve this, we need to disable it, to do that, open the command prompt as admin and enter  
    `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`
-   Once it's done, try to change the edition again.
-   After the edition change, you can enable .net 3.5 again, to do that, enter,  
    `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

---

## Other Errors

-   Restart the system and then try to change the edition again.
-   If it's still not resolved then follow the below guide.  
https://gravesoft.dev/in-place_repair_upgrade

---
