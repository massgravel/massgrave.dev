---
pagetitle: Change Edition Issues
---

# Change Edition Issues

------------------------------------------------------------------------

## Error 0x80070490

-   In the Home to Pro upgrade process, the script may show the below error in red color:

```         
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```

-   This issue often appears due to the installed .Net 3.5 framework.

-   To solve this, we need to disable it, to do that, open the command prompt as admin and enter\
    `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`

-   Once it's done, try to change the edition again.

-   After the edition change, you can enable .net 3.5 again, to do that, enter,\
    `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

------------------------------------------------------------------------

## Error In Windows Insider

-   Windows 11 insider **builds 26052 and later** has an issue that causes an error in changing the edition from Home to Pro. The solution is not known yet.

------------------------------------------------------------------------

## Other Errors

-   In Windows settings, go to the Windows Update page, run the check for updates button, and ensure that Windows is fully updated.

<!-- -->

-   In the MAS script, go to Troubleshoot and run these options in the below order,
    -   DISM Restore
    -   SFC Scan
-   Restart the system and try to change the edition again.
-   If it's still not resolved, please connect with us [here](troubleshoot.html).
