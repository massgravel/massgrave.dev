---
pagetitle: Check Activation Status
---

# Check Activation Status

------------------------------------------------------------------------

MAS includes 2 scripts for checking activation status in Windows and Office (WMI, VBS) which are taken from abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/).\

Read below to see the differences between the 2 scripts.

------------------------------------------------------------------------

## Check Activation Status [VBS]

-   Queries and executes official licensing VBScripts: slmgr.vbs for Windows, ospp.vbs for Office.

-   Shows the activation expiration date for Windows.

-   Office 2010 ospp.vbs shows very little information.

------------------------------------------------------------------------

## Check Activation Status [WMI]

-   Queries and executes WMI functions using wmic.exe or VBScripts.

-   Shows extra information (SKU ID, key channel).

-   Shows the activation expiration date for all products.

-   Shows more detailed information for Office 2010.

-   Can show the status of Office UWP apps.

-   Implement vNextDiag.ps1 functions to **detect new Office 365 vNext licenses and subscriptions**.

------------------------------------------------------------------------
