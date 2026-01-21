---
sidebar_label: Office License Is Not Genuine
---

# 'Get genuine Office' banner

![](./assets/office-license-is-not-genuine.png)

------------------------------------------------------------------------

## Why does the banner appear?

Here are the possible reasons:

-   Office Click-to-Run builds (since February 2021) that are activated with KMS check for the existence of a KMS server name in the registry. If the KMS server is not present, a banner is shown in Office programs notifying that "Office isn't licensed properly."
-   If 32-bit Office is installed on 64-bit Windows, Office checks for the KMS server existence in the corresponding WOW6432Node registry key as well.
-   Office also detects if the registered KMS server is on its blacklist. The following three adddresses are known to be blacklisted:  
    `km-s8.MSG-uides.com` `km-s9.MSG-uides.com` `0.0.0.0` (Without hyphens)  
    The first two are public KMS servers, and the last one is not a real IP.
-   The checks above are not performed if the Volume version of Office is properly installed using the PerpetualVL2019 or PerpetualVL2021 channel.  
    However, Microsoft has not yet updated these checks for the release of the PerpetualVL2024 channel. As a result, if any of the above conditions are met, Office will show a banner even to genuine customers.

------------------------------------------------------------------------

## Solution

-   Use [MAS](intro.md) to activate Office.

:::info
A similar banner may appear if you are not properly logged into Office with your Microsoft account. You will need to go to the **Account** tab in Office and either resolve the issue or sign out of your account.

![](./assets/office_stored_credentials_banner.png)
:::

------------------------------------------------------------------------

## Additional help

-   See [here](troubleshoot.md).
