---
pagetitle: Online KMS Activation
---

# Online KMS Activation

------------------------------------------------------------------------

## Overview

-   How to use it? Please find the instructions [here](index.html#Download__How_to_use_it).

-   This Online KMS Activation script is a fork of abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/)

-   This fork's purpose is to avoid having any KMS binary files and activate Windows / Office using only transparent batch script with online public KMS servers IP (Not hostname).

-   This script requires Internet for activation.

-   KMS activates Windows / Office for 180 Days. For Windows Core / ProWMC editions it is 30 / 45 Days.

-   This script can activate both Retail and Volume Windows installation.

-   This script can activate C2R Retail and VL Office, but not 2010 / 2013 MSI Retail Office and UWP Office.

-   This script skips the activation of any permanently / KMS38 activated product.

-   As mentioned, KMS activates only for a limited period and it's not permanent, read below on how to achieve lifetime activation.

------------------------------------------------------------------------

## Activation Renewal

-   By design in the genuine [KMS](https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview) activation method, the system contacts the registered server every 7 days, and if contacted successfully it will automatically renew and reset the activation for the full period of 180 days again, starting from the day of successful contact. If the system cannot contact the server, it will be deactivated after 180 days and it will remain deactivated until contact can be restored.

-   To get the lifetime activation, you need to do either one of the below two things,

1.  **Manual Activation**\
    Run the online KMS activation whenever required.

2.  **Activation Auto-Renewal**\
    You can install the auto-renewal in the script.\
    This method puts the following two files,\
    \
    `C:\ProgramData\Activation-Renewal\Activation_task.cmd`

    `C:\ProgramData\Activation-Renewal\Info.txt`

    And creates a scheduled task (`\Activation-Renewal`) to run the script every 7 days. This task registers the working KMS server and triggers activation commands only for the installed Volume products.\
    The scheduled task runs only if the system is connected to the Internet.

------------------------------------------------------------------------

## Remarks

-   With KMS Activation, you can update Windows/Office without any issues.

-   What is left in the system in the activation process?

    -   **If Renewal Task is installed:** After activation, it leaves the KMS Server IP in the registry, which helps you to get the global activation feature whereby the system auto-renews the activation. About files and scheduled tasks, it has been mentioned above.

    -   **If Renewal Task is NOT installed:** It leaves a non-existent IP 10.0.0.10 to avoid the Office Not Genuine Banner issue.

-   This script includes the most-stable KMS servers (16) list from all over the world. The server selection process is fully automatic. Script randomly selects a server, tests if it's online, if yes then apply the activation command, if fails, then retry this process maximum of total 3 times for a product. Such redundancy makes sure that we get the working KMS server at any time.

-   If your system date is incorrect (beyond 180 days) and you are offline, the system will be deactivated, but will automatically reactivate when you correct the system date.

-   The advantage of Online KMS activation is that it doesn't need any KMS binary file and the system can be activated using some manual commands or transparent batch script files. So this is for those who don't like/have difficulties/trust issues in offline KMS because of its binary files and antivirus detections.

    But if you prefer offline KMS then checkout an open-source activator, abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/)

------------------------------------------------------------------------

## Supported Products

**Volume-capable:**

-   **Windows 11:**\
    Enterprise, Enterprise LTSC, IoT Enterprise LTSC, Enterprise G, Enterprise multi-session, SE (CloudEdition), Education, Pro, Pro Workstation, Pro Education, Home, Home Single Language, Home China

-   **Windows 10:**\
    Enterprise, Enterprise LTSC/LTSB, Enterprise G, Enterprise multi-session, Education, Pro, Pro Workstation, Pro Education, Home, Home Single Language, Home China

-   **Windows 8.1:**\
    Enterprise, Pro, Pro with Media Center, Core, Core Single Language, Core China, Pro for Students, Bing, Bing Single Language, Bing China, Embedded Industry Enterprise/Pro/Automotive

-   **Windows 8:**\
    Enterprise, Pro, Pro with Media Center, Core, Core Single Language, Core China, Embedded Industry Enterprise/Pro

-   Windows 10/11 on **ARM64** is supported. Windows 8/8.1/10/11 **N editions** variants are also supported (e.g. Pro N)

-   **Windows 7:**\
    Enterprise /N/E, Professional /N/E, Embedded POSReady/ThinPC

-   **Windows Server 2022/2019/2016:**\
    LTSC editions (Standard, Datacenter, Essentials, Cloud Storage, Azure Core, Server ARM64), SAC editions (Standard ACor, Datacenter ACor, Azure Datacenter)

-   **Windows Server 2012 R2:**\
    Standard, Datacenter, Essentials, Cloud Storage

-   **Windows Server 2012:**\
    Standard, Datacenter, MultiPoint Standard, MultiPoint Premium

-   **Windows Server 2008 R2:**\
    Standard, Datacenter, Enterprise, MultiPoint, Web, HPC Cluster

-   **Office Volume 2010 / 2013 / 2016 / 2019 / 2021**

**Notes:**

-   X86-X64 and ARM64 architecture systems are supported.

-   Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) cannot be activated.

-   ServerRdsh edition does not [officially](https://docs.microsoft.com/en-us/azure/virtual-desktop/windows-10-multisession-faq#can-i-run-windows-10-enterprise-multi-session-on-premises) support activation on non-azure systems.

-   Supported [Windows]{.underline} products do not need volume conversion, only the GVLK (KMS key) is needed, which the script will install accordingly.

-   KMS activation on Windows 7 has a limitation related to OEM Activation 2.0 and Windows marker. For more info, see [here](https://support.microsoft.com/en-us/help/942962) and [here](https://technet.microsoft.com/en-us/library/ff793426(v=ws.10).aspx#activation-of-windows-oem-computers). To verify the activation possibility before attempting, see [this](https://forums.mydigitallife.net/posts/1553139/).

-   These editions are only KMS-activatable for *45* days at max:

    -   Windows 10/11 Home edition variants

    -   Windows 8.1 Core edition variants, Pro with Media Center, Pro for Students

    These editions are only KMS-activatable for *30* days at max:

    -   Windows 8 Core edition variants, Pro with Media Center

------------------------------------------------------------------------

## Unsupported Products

-   Office MSI Retail 2010/2013, Office 2010 C2R Retail

-   Office UWP (Windows 10/11 Apps)

-   Windows editions that do not support KMS activation by design: Windows Evaluation Editions\
    Windows 7 (Starter, HomeBasic, HomePremium, Ultimate)\
    Windows 10 (Cloud "S", IoTEnterprise, IoTEnterpriseS, ProfessionalSingleLanguage... etc)\
    Windows Server (Server Foundation, Storage Server, Home Server 2011... etc)

------------------------------------------------------------------------

## How does it work?

-   **What is KMS activation?**\
    Key Management Service (KMS) is a genuine activation method provided by Microsoft for volume licensing customers (organizations, schools, or governments). The machines in those environments (called KMS clients) are activated via the Environment KMS Host Server (authorized Microsoft's licensing key), instead of Microsoft activation servers. By design, the KMS activation period lasts up to 180 Days (6 Months) at max, with the ability to renew and reinstate the period at any time. Activation renewal automatically happens every 7 days if the client can connect to the KMS host server. For more info, see [here](https://www.microsoft.com/Licensing/servicecenter/Help/FAQDetails.aspx?id=201#215) and [here](https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview).

-   **How are we getting it for free?**\
    Developers reverse-engineered the KMS Host Server setup, so now anyone can host a KMS server and activate the systems without any limitations. KMS activators such as KMSpico, MTK, KMS_VL_ALL, etc., locally create an emulated KMS Host Server and activate Windows and Office.

    This locally-emulated KMS server requires you to run binary files which often cause anti-virus alerts (false positives).

    Another method of KMS activation is a publicly-available Online KMS Host Server. In this method, the site hosts the emulated KMS server, and anyone can simply use this server to activate their systems, there is no requirement for running any software on your system.

-   **Is Online KMS activation safe?**\
    Yes.\
    Let's go into the details. In the KMS protocol, there is a relationship between host and client. The client system asks the host system to grant the activation, and the host system grants the activation if it's eligible. In this process, the client system shares some of the system's data, which is not sensitive in nature. According to the [Microsoft document](https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview), the client system shares the following data with the host system: Client FQDN, CMID, time-stamp, Product license state, expiration time, and IP address

    In this shared info, the important part is your IP address. Below are some things regarding it which you should know.

    -   Sharing your IP while going online is not a security concern. You can not go online to visit any website without having to share your IP address.

    -   IP addresses do not necessarily represent a specific person. Internet Service Providers (ISPs) mostly use dynamic IP, which means the same IP address can be used by many different persons, and a dynamic IP address is periodically reassigned to different people all the time. But a static IP address is permanently assigned to a unique subscriber. The Internet Service Provider (ISP) won't reveal that information unless there is a legal reason to do so.

    -   Microsoft has never tried to go after Home users in legal cases for using a few pirated activations (not talking about stolen legal keys) simply because the cost of legal actions would be much higher than the amount of money gained by forcing a few people to purchase activations.

    -   No law enforcement is going to take action based on IPs from all over the world without the consent of Microsoft itself.

Feel free to contact us in case you have a contradictory point of view.

------------------------------------------------------------------------

## Office 'Non-genuine' Banner

-   Office Click-to-Run builds (since February 2021) that are activated with KMS check the existence of the KMS server name in the registry.

-   If KMS server is not present, a banner is shown in Office programs notifying that "Office isn't licensed properly", see [here](https://i.imgur.com/gLFxssD.png).

-   Therefore in manual mode, `KeyManagementServiceName` value containing a non-existent IP address 10.0.0.10 will be kept in the below registry keys:

<!-- -->

    HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform

    HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform

This is perfectly fine to keep, and it does not affect Windows or Office activation. For more explanation, visit [here](office-license-is-not-genuine.html)

------------------------------------------------------------------------

## Office Retail to Volume

Office Retail must be converted to Volume first before it can be activated with KMS.\
By default, this activation script will convert Office C2R Retail to Volume.

**Notes:**

-   Supported Click-to-Run products: Office 365 (Microsoft 365 Apps), Office 2021 / 2019 / 2016, Office 2013

-   Activated Office Retail or Subscription products will be skipped from conversion

-   Office 365 itself does not have volume licenses, therefore it will be converted to Office Mondo licenses

-   Windows 10/11: Office 2016 products will be converted with corresponding Office 2019 licenses (if RTM detected)

-   Windows 8.1: Office 2016/2019 products will be converted with corresponding Office 2021 licenses (if RTM detected)

-   Office Professional suite will be converted with Office Professional Plus licenses

-   Office HomeBusiness/HomeStudent suites will be converted with Office Standard licenses

-   Office 2013 products follow the same logic, but handled separately

Alternatively, if the automatic conversion did not work, or if you prefer to use the standalone converter script: [Office-C2R-Retail2Volume](https://forums.mydigitallife.net/posts/1150042/)

------------------------------------------------------------------------

## Debug Mode

-   With debug mode, we can get a log file with more details of the activation script process and it can be used to troubleshoot the activation issues.

-   In the Online KMS option, you can enable `Debug Mode` by pressing 6. When the activation is run with Debug Mode enabled, it creates a log file that contains details of the activation process, this is useful to detect activation errors. You can send that log to us to check. Check troubleshoot heading.

------------------------------------------------------------------------

## Override Office vNext

-   The script is set by default to override Office C2R vNext license (subscription or lifetime) or its residue.

-   However, if you prefer to turn OFF this function from the menu, press 7 in keyboard to change the state to Override Office vNext [No] and then proceed to activate Office.

-   You will need to turn off this option if you have O365 subscription and wants to use KMS for Project and Visio.

-   If Office vNext license is detected, the option and state will be highlighted, to draw the user attention.

------------------------------------------------------------------------

## Command line Switches

-   Check [here](command_line_switches.html).

------------------------------------------------------------------------

## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.

-   Further read [here](oem-folder.html).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.html).
