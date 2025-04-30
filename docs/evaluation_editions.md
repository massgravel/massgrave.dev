# Windows Evaluation Editions

Windows evaluation editions are trial versions of Windows operating systems provided by Microsoft. These editions allow users, especially IT professionals, to test and evaluate the features and capabilities of different Windows versions before making a purchase decision.

https://www.microsoft.com/evalcenter  
Microsoft provides Windows 10/11 Enterprise and Server in evaluation version.

:::warning

Evaluation editions can not be activated beyond the evaluation period. Avoid using them, download the [full versions](genuine-installation-media.md) instead.

:::

---

## Difference between the full and evaluation

Both versions are almost the same feature-wise. The main difference lies in the **activation**.

- The evaluation version of Windows typically comes with a 90-day (180-day for Server) trial period.
- Evaluation Editions cannot be activated outside of the evaluation period. 
- After the trial period, the system will start showing notifications and may shut down periodically.
- To be clear, you can not permanently activate it with your genuine key, digital license, KMS, etc.

---

## Convert evaluation to the full version

### Windows 10/11 Enterprise Evaluation

Officially, converting Windows 10/11 Enterprise eval to full version is not supported.  
However, you can use an alternative method to change to the full version by doing an in-place upgrade with an ISO **(keeping files and apps)** and with a registry tweak.  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="eval_ltsc" label="Windows 10/11 Enterprise Evaluation (LTSC)" default>

LTSC means long-term servicing channel. Microsoft provides longer update support for them.

- Download Windows 10/11 Enterprise LTSC ISO from [here](windows_ltsc_links.md) in the same Windows language, and architecture.
- Right-click on the downloaded ISO file, Open With > Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter,  
  `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d EnterpriseS /f`  
  - If you are on Windows 11 with unsupported hardware then enter,  
  `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`  
- Go into that DVD drive and run setup.exe, continue until you reach the final confirmation screen.
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

It will upgrade your eval Windows version to the full version.
</TabItem>

<TabItem value="eval_gac" label="Windows 10/11 Enterprise Evaluation (GAC)" default>

GAC means general availability channel, aka normal version.

- Download genuine Windows 10/11 ISO from [MSDL](https://msdl.gravesoft.dev/) in the same Windows language, and architecture.
- Right-click on the downloaded ISO file, Open With > Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter,  
  `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d Enterprise /f`  
  - If you are on Windows 11 with unsupported hardware then enter,  
  `reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f`  
- Go into that DVD drive and run setup.exe, enter this key if the setup is asking for it `NPPR9-FWDCX-D2C8J-H872K-2YT43`
- Continue until you reach the final confirmation screen.
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

It will upgrade your eval Windows version to the full version.
</TabItem>
</Tabs>

### Windows Server Evaluation

Changing Windows Server eval to the full version is officially supported.  
You can use the official method here https://learn.microsoft.com/windows-server/get-started/upgrade-conversion-options  
or  
Use the change edition option in the [MAS script](intro.md).

---

## Extend evaluation activation period

Windows 10/11 Enterprise evaluation version typically comes with a 90-day trial period and it automatically gets activated when the system connects to the Internet.

### Extend 90 days, 2 more times

When the 90-day activation period has expired or is about to expire, you can extend it for 90 days more.  
Open the command prompt as admin and enter,  
`slmgr /rearm`

You can repeat this process 2 times (a total of 270 days of activation).

### Reset the activation at any given time

#### Method -1
You can use TSforge option in MAS to reset the activation (trial) period at any given time.

#### Method -2
WPA registry keys at `HKEY_LOCAL_MACHINE\SYSTEM\WPA` hold the records of the trial period. By clearing this registry we can simply reset the activation (trial) period at any given time. You can follow below guide to do this.  
https://gravesoft.dev/fix-wpa-registry

:::note

The eval activation for Windows 10 Enterprise LTSC 2021 is not working because of the incorrect key used by Microsoft. However, TSforge option in MAS can fix this and reset the activation (trial) period.

:::

---

## Avoid license swapping

Some people suggest installing license files of the full version of Windows Enterprise to activate the evaluation installation.  
This is not a good idea for many reasons,  

- If you apply this method then the below commands will show errors  
  `dism /online /english /Get-CurrentEdition`  
  `dism /online /english /Get-TargetEditions`
- Windows update can't update license files, Microsoft applies policy fixes through Windows updates. For example, 19044.1288 RTM release of IoT enterprise LTSC didn't support sandbox, but with later updates it started supporting it. KMS activation support was enabled with later updates as well. They update license files quite often, it's better to have updated windows and license files.
- Furthermore, installed edition packages would be missing, which can have undocumented side effects.

It's better to either upgrade to the full version or extend the activation period as mentioned above on this page.

---

:::tip

You can [connect with us](troubleshoot.md) for help if you need.

:::

