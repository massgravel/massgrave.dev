---
pagetitle: Check Activation Status
---

# Check Activation Status

------------------------------------------------------------------------

MAS includes checking activation options (WMI/VBS) which are taken from abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/).\
It checks the status of Windows and Office products.

Please find below the difference between vbs and wmi options.

------------------------------------------------------------------------

## Check Activation Status [vbs]

-   Query and execute official licensing VBScripts: slmgr.vbs for Windows, ospp.vbs for Office

-   Shows the activation expiration date for Windows

-   Office 2010 ospp.vbs shows a very little info

------------------------------------------------------------------------

## Check Activation Status [wmi]

-   Query and execute WMI functions using wmic.exe or VBScripts

-   Shows extra info (SKU ID, key channel)

-   Shows the activation expiration date for all products

-   Shows more detailed info for Office 2010

-   Can show the status of Office UWP apps

-   Implement vNextDiag.ps1 functions to **detect new Office 365 vNext licenses and subscriptions**

------------------------------------------------------------------------
