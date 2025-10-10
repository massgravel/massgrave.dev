# TSforge Activation

## Overview

-   How to use it? Please find the instructions [here](intro.md#how-to-activate-windows--office--extended-updates-esu).
-   This activation is permanent until a Windows reinstall or a major feature upgrade (not to be confused with small enablement upgrades or monthly cumulative updates).
-   This activation method doesn't modify any Windows components and doesn't install any new files.
-   Once the system is activated (with ZeroCID or KMS4k), hardware can be changed arbitrarily without triggering de-activation.
-   Internet is not required for ZeroCID or KMS4k, but it is required for StaticCID. The script uses the StaticCID method from Windows 11 24H2 (26100) and later versions.
-   This activation method can activate any of the following products if a phone license is available and licensing is managed by the system's SPP. For example,
    *   Windows Vista and later
    *   Windows Server 2008 and later
    *   Office 2013 and later (requires Windows 8 or later)
    *   Windows addons (ESU, APPXLOB, etc.)
    *   Windows and Office KMS Hosts (CSVLK)
-   Online validation (WAT) is bypassed on Windows 7.
-   In addition to the permanent activation of Windows and Office KMS Hosts, it also charges the KMS server with 25 clients (required for KMS client activation) for 30 days (maximum).
-	In addition to activation, it can reset the rearm count and evaluation period, clear the tamper state, and remove the evaluation key lock.

------------------------------------------------------------------------

## How does it work?

### ZeroCID

**Process on Windows Vista and 7**

![](/img/win7_color.svg)

**Process on Windows 8 and later**

![](/img/winmodern_color.svg)

- Windows activation is managed by a subsystem called the Software Protection Platform (SPP).
- SPP stores information about the activation state in files called the "physical store" and "token store".
- The physical store's contents are cryptographically protected and integrity-checked by SPPSvc/SPSys, preventing users from easily modifying it.
- The physical store is usually found at these locations:
  - Windows Vista - `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-2P-0.C7483456-A289-439d-8115-601632D005A0` and `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-2P-1.C7483456-A289-439d-8115-601632D005A0`
  - Windows 7 - `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-5P-0.C7483456-A289-439d-8115-601632D005A0` and `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-5P-1.C7483456-A289-439d-8115-601632D005A0`
  - Windows 8 - `C:\Windows\System32\spp\store\data.dat`
  - Windows 8.1/10/11 - `C:\Windows\System32\spp\store\2.0\data.dat`
- The token store is usually found at these locations:
  - Windows Vista - `C:\Windows\ServiceProfiles\NetworkService\AppData\Roaming\Microsoft\SoftwareLicensing\tokens.dat`
  - Windows 7 - `C:\Windows\ServiceProfiles\NetworkService\AppData\Roaming\Microsoft\SoftwareProtectionPlatform\tokens.dat`
  - Windows 8 - `C:\Windows\System32\spp\store\tokens.dat`
  - Windows 8.1/10/11 - `C:\Windows\System32\spp\store\2.0\tokens.dat`
- In normal product key installation and phone activation, associated cache data is written to the physical store and token store. Said phone activation data is [cryptographically checked](https://github.com/UMSKT/writeups/blob/main/PKEY2005.md) against the Installation ID before being written. When SPP relaunches, it is only given a very basic check against the current Hardware ID.
- By writing forged cache data directly to the physical store and token store, we can bypass both checks, causing SPP to believe it installed a fake product key and/or confirmation ID.
- To bypass checks for hardware changes, a [Hardware ID](https://github.com/massgravel/activation/blob/main/Hwid.md#hardware-id) with a threshold of 0 is included in this forged data.
- On Windows 7, the fake product key data does not contain a value known as the "Key Unique ID". This value is required for both WAT and online activation, so removing it causes both to be non-functional, preventing WAT from triggering de-activation.
- The presence of valid product key and confirmation ID data causes SPP to activate the specified product as long as it is capable of phone activation.
- This process is implemented as the ZeroCID option in [TSforge](https://github.com/massgravel/TSforge).

### StaticCID

- In [Windows 11 build 27802](https://betawiki.net/wiki/Windows_11_build_27802), Microsoft introduced a [bug](blog/pesky-ampersands) that causes Confirmation ID cache validation to always fail, forcing validation directly from the stored Confirmation ID each time the license status is checked.
- Because of this, ZeroCID does not work in any Windows 11/Server 2025 Insider Canary builds released afterwards, or any Windows 11/Server 2025 retail/release preview builds newer than 26100.4188.
- To circumvent this bug, TSforge is used to set the current Installation ID to that of a known key that can be used to generate valid Confirmation IDs.
- Confirmation IDs are then obtained over the internet using [a client](https://github.com/dadorner-msft/activationws) for the [VAMT](https://learn.microsoft.com/en-us/windows/deployment/volume-activation/introduction-vamt) API.
- Depositing this CID causes activation, since the CID matches the IID and SPP never checks if the IID matches the installed product key.
- The following product keys are used in StaticCID:
  - RTM Licenses - `744NM-C4FXY-YGM8B-7MVJC-BBFB9`
  - Test Licenses - `PCPHN-JH4DV-KW84V-JTWT3-VXHBC`

### KMS4k

- In KMS4k, fake cached KMS server response data is written to the trusted store.
- Unlike via normal KMS emulators, this method can arbitrarily set the activation expiration up to a maximum of 2147483640 (2^31 - 8) minutes, or 4083 years.
- This allows for offline KMS activation that is effectively infinite for all practical purposes.

------------------------------------------------------------------------

## Supported Products

This activation method can activate any of the following products if a phone license is available and licensing is managed by the system's SPP.

- **Windows**
  - Windows Vista
  - Windows 7
  - Windows 8
  - Windows 8.1
  - Windows 10
  - Windows 11 (Does not support ZeroCID since 26100.4188)
- **Windows Server**
  - Windows Server 2008
  - Windows Server 2008 R2
  - Windows Server 2012
  - Windows Server 2012 R2
  - Windows Server 2016
  - Windows Server 2019
  - Windows Server 2022
  - Windows Server 2025 (Does not support ZeroCID since 26100.4188)
- **Microsoft Office** (Requires Windows 8 or later) (Also supports UWP version of Office)
  - Office 2013
  - Office 2016
  - Office 2019
  - Office 2021
  - Office 2024
- **Windows Addons**
  - **Commercial Extended Security Updates (ESU)**
    - **Windows 7** (Enterprise, Professional, Ultimate and their E/N variants)
    - **Windows Embedded POSReady 7** (Embedded)
    - **Windows Embedded Standard 7** (Embedded)
    - **Windows Server 2008** (ServerDatacenter, ServerStandard, ServerEnterprise and their V/Core/VCore variants)
    - **Windows Server 2008 R2** (ServerDatacenter, ServerStandard, ServerEnterprise and their V/Core/VCore variants)
    - **Windows Server 2012** (ServerDatacenter, ServerStandard and their Core variants)
	- **Windows 8.1** (Enterprise, Professional, EmbeddedIndustry and their E/N variants)
    - **Windows Server 2012 R2** (ServerDatacenter, ServerStandard and their Core variants)
    - **Windows 10** (Core, CoreCountrySpecific, CoreSingleLanguage, Education, Enterprise, IoTEnterprise, Professional, ProfessionalEducation, ProfessionalWorkstation, ServerRdsh, PPIPro and their N variants)
  - **8/8.1 APPXLOB**
	- Client
	- Embedded Industry
	- Embedded Standard
	- Server 2012
  - **Others** (Can be selected from the manual option)
    - OCUR
- **KMS Hosts** (CSVLK)
  - Windows Vista and later
  - Windows Server 2008 and later
  - Office 2010 and later

:::info

- All architectures (x86, x64 and arm64) are supported.
- For Windows, the script's key preference is: OEM_DM > OEM_COA_SLP > OEM_COA_NSLP > MAK > RETAIL
- For Office, the script's key preference is: OEM_COA_NSLP > MAK > RETAIL

:::

------------------------------------------------------------------------

## Keys

TSforge activation generates keys for PKey2009-based products and sets product key data for PKey2005-based products.  
However, it cannot handle keys for Windows Vista and Windows Server 2008. That is why only the keys for these products are listed here.

Keys aren't available for these editions, but since the editions themselves aren't publicly available, it doesn't matter.
```
a797d61e-1475-470b-86c8-f737a72c188d   StarterN
5e9f548a-c8a9-44e6-a6c2-3f8d0a7a99dd   ServerComputeClusterV
```

### Windows Vista 
| Edition      | Generic Key                   | Key Type |
|--------------|-------------------------------|----------|
| Business     | 4D2XH-PRBMM-8Q22B-K8BM3-MRW4W | Retail   |
| BusinessN    | 76884-QXFY2-6Q2WX-2QTQ8-QXX44 | Retail   |
| Enterprise   | YQPQV-RW8R3-XMPFG-RXG9R-JGTVF | Retail   |
| EnterpriseN  | Q7J9R-G63R4-BFMHF-FWM9R-RWDMV | Retail   |
| HomeBasic    | RCG7P-TX42D-HM8FM-TCFCW-3V4VD | Retail   |
| HomeBasicN   | HY2VV-XC6FF-MD6WV-FPYBQ-GFJBT | Retail   |
| HomePremium  | X9HTF-MKJQQ-XK376-TJ7T4-76PKF | Retail   |
| HomePremiumN | KJ6TP-PF9W2-23T3Q-XTV7M-PXDT2 | Retail   |
| Starter      | X9PYV-YBQRV-9BXWV-TQDMK-QDWK4 | Retail   |
| Ultimate     | VMCB9-FDRV6-6CDQM-RV23K-RP8F7 | Retail   |
| UltimateN    | CVX38-P27B4-2X8BT-RXD4J-V7CKX | Retail   |


### Windows Server 2008
| Edition                        | Generic Key                   | Key Type   |
|--------------------------------|-------------------------------|------------|
| ServerComputeCluster           | 24FV9-H7JW8-C8Q6X-BQKMK-K977J | Retail     |
| ServerDatacenter               | 6QBHY-DXTPJ-T9W3P-DTJXX-4VQMB | Retail     |
| ServerDatacenterV              | 83TWG-TD3TC-HRDP2-K93FJ-Y34YC | OEM:NONSLP |
| ServerEnterprise               | MRB7H-QJRHG-FXTBR-B2Q2M-8WMTJ | Retail     |
| ServerEnterpriseIA64           | H4VB6-QPRWH-VDCYM-996P8-MHKFY | OEM:NONSLP |
| ServerEnterpriseV              | H8H7M-HDPQT-PJHQF-M7B83-9CVGV | Retail     |
| ServerHomePremium              | RGBMC-PQBVF-94Q9K-HD63B-VY6MP | Retail     |
| ServerHomeStandard             | 6C8KR-MD3QK-9GWFW-44CY2-W9CBM | Retail     |
| ServerMediumBusinessManagement | 7XRBY-6MP2K-VQPT8-F37JV-YYQ83 | Retail     |
| ServerMediumBusinessMessaging  | 6PDTD-JK48J-662TF-8J2QV-R4CRB | Retail     |
| ServerMediumBusinessSecurity   | D694V-CMWKH-PY92X-PFQKQ-JCB69 | Retail     |
| ServerSBSPremium               | MRDK3-YYQF3-88BQJ-D6FJG-69YJY | Retail     |
| ServerSBSPrime                 | 2KB23-GJRBD-W3T9C-6CH2W-39B7V | Retail     |
| ServerSBSStandard              | H4XDD-B27GY-667P6-XWVV7-GYG8J | Retail     |
| ServerStandard                 | 8YVM4-YQBDH-7WDQM-R27WR-WVCWG | Retail     |
| ServerStandardV                | H9MW3-6V7GK-94P9G-7FTPJ-VKCKF | Retail     |
| ServerStorageEnterprise        | 2264C-TD9T8-P8HPW-CC9GH-MHM2V | Retail     |
| ServerStorageExpress           | RCYMT-YX342-8T6YY-XYHYC-3DD7X | Retail     |
| ServerStorageStandard          | FKFT2-WXYY9-WBPY7-6YMY4-X48JF | Retail     |
| ServerStorageWorkgroup         | 8X9J7-HCJ7J-3WDJT-QM7D8-464YH | Retail     |
| ServerWeb                      | BGT39-9FYH7-X2CYD-T628F-QPQPW | Retail     |
| ServerWinSB                    | HPH76-FHFPP-DRW9D-7W2V4-HWGKT | Retail     |
| ServerWinSBV                   | 2V8G6-KRXYR-MMGXJ-6RWM3-GXCCG | Retail     |

### Windows Server 2008 ESU
| ESU Version   | Blocked key sourced from the Internet | Key Type   |
|---------------|---------------------------------------|------------|
| Server-ESU-PA | 9FPV7-MWGT8-7XPDF-JC23W-WT7TW         | Volume:MAK |

### KMS Host - Windows Vista
| Editions                                  | Blocked keys sourced from the Internet | Key Type     |
|-------------------------------------------|----------------------------------------|--------------|
| Business, Enterprise and their N editions | TWVG3-9Q4P8-W9XJF-Y76FJ-DWQ4R          | Volume:CSVLK |

### KMS Host - Windows Server 2008
| Editions                                                                                                                                            | Blocked keys sourced from the Internet | Key Type     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|--------------|
| ServerComputeCluster, ServerDatacenter, <br /> ServerEnterprise, ServerEnterpriseIA64, <br /> ServerStandard, ServerWeb <br /> and their V editions | BHC4Q-6D7B7-QMVH7-4MKQH-Y9VK7          | Volume:CSVLK |
| ServerComputeCluster, ServerEnterprise, <br /> ServerStandard, ServerWeb <br /> and their V editions                                                | PVGKG-2R7XQ-7WTFD-FXTJR-DQBQ3          | Volume:CSVLK |
| ServerComputeCluster, ServerWeb                                                                                                                     | KH4PC-KJFX6-XFVHQ-GDK2G-JCJY9          | Volume:CSVLK |

------------------------------------------------------------------------

## Unsupported Products

This activation method does not work if a phone license is not available or if licensing is not managed by the system's SPP.

- **Office on Windows 7**
  - Its licensing is based on OSPP, not SPP.
  - You can use Ohook option in MAS to activate it.
- **Office 2010**
  - Its licensing is based on OSPP, not SPP.
  - You can use Ohook option in MAS to activate it.
- **Office 365**
  - Phone activation license is not available. TSforge option will install Mondo 2016 license (feature-wise equivalent to 365) instead to activate Office.
  - You can use Ohook option in MAS to activate it.
- **Windows Evaluation editions** (Windows 8 / Server 2012 and later)
  - Permanent activation license is not available. TSforge option will reset the evaluation period instead.
- **Windows Evaluation editions** (Windows 7 / Server 2008 R2)
  - WLMS service protects the SPPSVC service and prevents it from stopping. Although permanent activation license is available, its officially not supported.
- **Server Azure Datacenter (ServerTurbine) edition**
  - It does not support activation on non-azure systems.
- **Windows 10 Consumer ESU (1 Year)**
  - Its licensing is based on CLIP, not SPP.
  - You can activate commercial ESU for 3 years with TSforge.

:::info

**OSPP based Office:** Physical store is stored in the registry in a format that has not yet been reverse engineered.

:::

------------------------------------------------------------------------

## ZeroCID / KMS4k / AVMA4k

- TSforge is included in MAS and it also has its own [standalone release](https://github.com/massgravel/TSforge).
- TSforge includes the ZeroCID / KMS4k / AVMA4k activation methods.
- AVMA4k is a proof-of-concept method with many limitations, so we do not recommend using it.
- MAS only uses the ZeroCID and KMS4k method and does not include AVMA4k, as ZeroCID can already activate all available products permanently.

| Methods | Info                                                                                                 |
|---------|------------------------------------------------------------------------------------------------------|
| ZeroCID | Offline permanent activation / until reinstall/feature upgrade                                       |
| KMS4k   | Offline KMS activation for over 4000 years / until reinstall/feature upgrade                         |
| AVMA4k  | Offline AVMA activation for over 4000 years (Server 2012 R2+ only) / until reinstall/feature upgrade |

------------------------------------------------------------------------

## Windows ESU

- Microsoft offers paid [Extended Security Updates](https://learn.microsoft.com/en-us/lifecycle/faq/extended-security-updates) (ESU) for several Windows versions after their product lifecycle ends.
- You can activate the Windows ESU / Premium Assurance license using the TSforge option in MAS.

---

#### Windows 10 ESU FAQ

#### I activated ESU with the TSforge option, but the Windows Update page in Settings still asks me to enroll. Why?

Microsoft provides Extended Security Updates (ESU) through several channels, such as CommercialAzureESU, CommercialW365ESU, CommercialKeybasedESU, and ConsumerESU.  

TSforge activates the [Commercial Key-based ESU](https://learn.microsoft.com/en-us/windows/whats-new/enable-extended-security-updates#get-the-product-keys-for-activating-extended-security-update-esu-licenses), which is intended for use by administrators in business environments.  

The Windows Update page in Settings does not display the status of Commercial Key-based ESU activations and may still prompt you to enroll in Consumer ESU. This behavior is normal and can safely be ignored.

#### How can I check if TSforge ESU is activated?

According to the official [Microsoft documentation](https://learn.microsoft.com/en-us/windows/whats-new/enable-extended-security-updates#install-and-activate-the-esu-key), you can verify the status of a Commercial Key-based ESU activation by running the following command in an elevated Command Prompt:

`cscript C:\Windows\System32\slmgr.vbs /dlv`

---

| Windows Version              | Supported Editions List                                                                                                                           | ESU Period                                                                                                                                                                                                                                                   | Minimum Required Updates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Windows Server 2008          | ServerDatacenter, ServerStandard, ServerEnterprise <br /> and their V/Core/VCore variants                                                         | [6 Years](https://web.archive.org/web/20170331081347/https://blogs.technet.microsoft.com/hybridcloud/2017/03/01/now-available-windows-server-premium-assurance-and-sql-server-premium-assurance/) with Premium Assurance License <br /> Jan 2020 to Jan 2026 | Windows Server 2008 SP2 <br /> + <br /> KB4493730 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/04/windows6.0-kb4493730-x64_5cb91f4e9000383f061b80f88feffdf228c2443c.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/04/windows6.0-kb4493730-x86_ab4368f19db796680ff445a7769886c4cdc009a0.msu) <br /> KB4474419 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/09/windows6.0-kb4474419-v4-x64_09cb148f6ef10779d7352b7269d66a7f23019207.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/09/windows6.0-kb4474419-v4-x86_fd568cb47870cd8ed5ba10e1dd3c49061894030e.msu) <br /> **Reboot**  <br /> KB5016891 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.0-kb5016891-x64_1b5f7e1030f5d229a7618c09f1617fd1ed00e90f.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.0-kb5016891-x86_cf3aef17f12a6dc85dd20a06e5ba9f4c882e286f.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Windows 7                    | Enterprise, Professional, Ultimate <br /> and their E/N variants                                                                                  | [3 Years](https://learn.microsoft.com/en-us/lifecycle/products/windows-7) <br /> Jan 2020 to Jan 2023 <br /><br /> 4-6 Years ESU is not officially supported, <br /> but you can manually install Server 2008 R2 x64 updates until Jan 2026  <br /><br /> You can find the latest KB numbers for updates in the [W7 changelog list](https://db.tt/Nbmb4PGt), <br /> maintained by [abbodi1406](https://forums.mydigitallife.net/threads/abbodi1406s-batch-scripts-repo.74197/), and download them directly from the [Microsoft Update Catalog](https://catalog.update.microsoft.com/home.aspx).  | Windows 7 SP1 <br /> + <br /> KB4490628 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/03/windows6.1-kb4490628-x64_d3de52d6987f7c8bdc2c015dca69eac96047c76e.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/03/windows6.1-kb4490628-x86_3cdb3df55b9cd7ef7fcb24fc4e237ea287ad0992.msu) <br /> KB4474419-v3 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x64_b5614c6cea5cb4e198717789633dca16308ef79c.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x86_0f687d50402790f340087c576886501b3223bec6.msu) <br /> **Reboot**  <br /> KB5039339 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2024/06/windows6.1-kb5039339-x64_f62846508976a6e5325ab1dca0783f9b3a60a564.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2024/06/windows6.1-kb5039339-x86_fa942048bba2a167242451236f9daf00940588aa.msu) <br /> KB4575903 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2020/07/windows6.1-kb4575903-x64_b4d5cf045a03034201ff108c2802fa6ac79459a1.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2020/07/windows6.1-kb4575903-x86_5905c774f806205b5d25b04523bb716e1966306d.msu) <br /> KB3138612 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/updt/2016/02/windows6.1-kb3138612-x64_f7b1de8ea7cf8faf57b0138c4068d2e899e2b266.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/updt/2016/02/windows6.1-kb3138612-x86_6e90531daffc13bc4e92ecea890e501e807c621f.msu) <br /> KB5016892 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.1-kb5016892-x64_52b68ba8744cb47ddfcecd19238087625e1a5fbd.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.1-kb5016892-x86_ffb5b83149833e7f969f69e4f152fee5c1fdbc68.msu) |
| Windows 7 Embedded POSReady7 | Embedded                                                                                                                                          | [3 Years](https://learn.microsoft.com/en-us/lifecycle/products/windows-embedded-posready-7) <br /> Oct 2021 to Oct 2024                                                                                                                                      | Same as Windows 7 minus KB5016892                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Windows 7 Embedded Standard  | Embedded                                                                                                                                          | [3 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-embedded-standard-7) <br /> Oct 2020 to Oct 2023                                                                                                                                      | Same as Windows 7 minus KB5016892                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Windows Server 2008 R2       | ServerDatacenter, ServerStandard, ServerEnterprise <br /> and their V/Core/VCore variants                                                         | [6 Years](https://web.archive.org/web/20170331081347/https://blogs.technet.microsoft.com/hybridcloud/2017/03/01/now-available-windows-server-premium-assurance-and-sql-server-premium-assurance/) with Premium Assurance License <br /> Jan 2020 to Jan 2026 | Same as Windows 7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Windows Server 2012          | ServerDatacenter, ServerStandard and their Core variants                                                                                          | [3 Years](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012) <br /> Oct 2023 to Oct 2026                                                                                                                                              | KB5017221 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows8-rt-kb5017221-x64_d01e9b9b910f5f1e374bc1b89a8d00c1a97e215f.msu) <br /> KB2937636 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/crup/2014/07/windows8-rt-kb2937636-x64_29e0b587c8f09bcf635c1b79d09c00eef33113ec.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Windows 8.1                  | Enterprise, Professional, EmbeddedIndustry and their E/N variants                                                                                 | ESU is not officially supported, <br /> but you can manually install Server 2012 R2 (for x64) updates until Jan 2024, <br /> and Embedded 8.1 (for x86) updates until July 2023                                                                              | Build 9600.17415 <br /> + <br /> KB3021910 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2015/04/windows8.1-kb3021910-x64_e291c0c339586e79c36ebfc0211678df91656c3d.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2015/04/windows8.1-kb3021910-x86_7e70173bec00c3d4fe3b0b8cba17b095b4ed2d20.msu) <br /> KB3172614 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2016/07/windows8.1-kb3172614-x64_e41365e643b98ab745c21dba17d1d3b6bb73cfcc.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2016/07/windows8.1-kb3172614-x86_d11c233c8598b734de72665e0d0a3f2ef007b91f.msu) <br /> KB5017220 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows8.1-kb5017220-x64_d771111b22ec71560b207a6735d5ecebd47c4f38.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2022/08/windows8.1-kb5017220-x86_3134a18dac1b1fe4f656c9e25d0e4aaa75619d16.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Windows Server 2012 R2       | ServerDatacenter, ServerStandard and their Core variants                                                                                          | [3 Years](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012-r2) <br /> Oct 2023 to Oct 2026                                                                                                                                           | Same as Windows 8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Windows 10                   | Core, CoreCountrySpecific, CoreSingleLanguage, <br /> Education, Enterprise, IoTEnterprise, <br /> Professional, ProfessionalEducation, <br /> ProfessionalWorkstation, ServerRdsh and their N variants | [3 Years](https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates) <br /> Oct 2025 to Oct 2028                                                                                                                                         | Windows 10 22H2 <br /> <br /> ESU license added in 19045.4957 <br /> <br /> ESU license last updated in 19045.6388 <br /> <br /> Just run Windows Update.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

------------------------------------------------------------------------

## Windows KMS Host

- You can activate the Windows KMS host license using the TSforge option in MAS.
- Script will auto-select the available CSVLK with most KMS Counted IDs.
- Along with activation it will also charge the host with 25 clients which is a minimum required threshold for a working KMS host.
- With Windows KMS host, you can activate the KMS client in your network.
- This option is for the advanced users, you can check the below guides to understand more about it.

https://learn.microsoft.com/en-us/windows-server/get-started/kms-create-host

**Notes:**  
- **Use this activation only when necessary.**
- On Windows 10/11, the system may randomly change the Windows edition later. This is a Windows issue and can be safely ignored.
- KMS host license causes the sppsvc service to run continuously.

------------------------------------------------------------------------

## Office KMS Host

- You can activate the Office KMS host license using the TSforge option in MAS.
- To activate an Office KMS host, you will need to download and run the installer for the appropriate license pack.
- Along with activation it will also charge the host with 25 clients for a working KMS host.
- With Office KMS host, you can activate the Office KMS client in your network.
- This option is for the advanced users, you can check the below guides to understand more about it.

https://learn.microsoft.com/en-us/office/volume-license-activation/plan-volume-activation-of-office#key-management-service-kms-activation-of-office

**Notes:**  
- **Use this activation only when necessary.**
- KMS host license causes the sppsvc service to run continuously.

<details>
  <summary>Office KMS Host Links</summary>

All links given below are official links hosted by Microsoft.

| Version              | Link                                                                                                                                     |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Office 2010 KMS host | `https://download.microsoft.com/download/E/4/E/E4EF2B72-9F16-4D5F-9A1D-D9BE39A1C127/KeyManagementServiceHost_en-us.exe`                  |
| Office 2013 KMS host | `https://download.microsoft.com/download/3/4/2/342F1FEA-CCB2-4F68-A6DE-041934383C18/office2013volumelicensepack_4701-1000_en-us_x86.exe` |
| Office 2016 KMS host | `https://download.microsoft.com/download/5/E/3/5E329B97-6DC5-4AA7-9AA7-A5B5D46AF82F/office2016volumelicensepack_4324-1002_en-us_x86.exe` |
| Office 2019 KMS host | `https://download.microsoft.com/download/F/6/0/F60CA746-5F03-482D-A331-15F38FB4AACA/office2019volumelicensepack_x86.exe`                 |
| Office 2021 KMS host | `https://download.microsoft.com/download/8/e/e/8eef6160-396a-4c26-830d-9e2a24c00309/Office2021VolumeLicensePack_x86.exe`                 |
| Office 2024 KMS host | `https://download.microsoft.com/download/1/4/0/140c97ae-7360-4dfc-9ba0-5f509600a06e/Office2024VolumeLicensePack_x86.exe`                 |

 - When prompted for a KMS host product key during installation, select "No".
 - On Windows 11 24H2/Server 2025 and newer, the VBScript FoD must be enabled for these installers to work.
 - Office 2019-2024 packs are only supported on Windows 8/Server 2012 and newer. 
 - If installing multiple license packs on the same machine, make sure to install older versions before newer versions (ex. Install Office 2016 before Office 2024).

</details>

<details>
  <summary>Office 2010 KMS Host Installer Workaround</summary>

 - Office 2010 license installer requires a workaround to install on Windows 10/11/Server 2016-2025:
   - Run the installer, and dismiss the resulting error message.
   - Launch Command Prompt as Administrator.
   - If you are using 32-bit Windows, run `notepad "%programfiles%\MSECache\OfficeKMS\kms_host.vbs"`.
   - If you are using 64-bit or ARM64 Windows, run `notepad "%programfiles(x86)%\MSECache\OfficeKMS\kms_host.vbs"`
   - Click `Edit > Replace`.
   - In the "Find" textbox type `>= "7"`, in the "Replace" textbox type `>= 1`.
   - Click "Replace All".
   - Save the file and close Notepad.
   - If you are using 32-bit Windows, run `cscript "%programfiles%\MSECache\OfficeKMS\kms_host.vbs"`.
   - If you are using 64-bit or ARM64 Windows, run `cscript "%programfiles(x86)%\MSECache\OfficeKMS\kms_host.vbs"`

</details>

<details>
  <summary>Workaround to install on Non-Volume licensed Windows</summary>

 - All installers normally require volume-licensed Windows, but this can be worked around as well:
   - Follow the same procedure as for the above Office 2010 workaround, but replace `If isVL = False` with `If False`.
   - For Office 2019-2024 packs, the installer script to edit is named after the Office version (ex. `kms_host19.vbs` for Office 2019). 

</details>

------------------------------------------------------------------------

## Reset of Rearm / Timers / Tamper / Lock

- You can use this feature in TSforge option in MAS.

| Features                   | Info                                                               |
|----------------------------|--------------------------------------------------------------------|
| Reset Rearm Count          | Reset rearm counter for infinite evaluation                        |
| Reset Eval Period          | Reset evaluation period for infinite evaluation                    |
| Clear Tamper State         | Clear the tamper state set due to store corruption or deletion     |
| Remove Evaluation Key Lock | Remove the product key change lock set for evaluation product keys |

------------------------------------------------------------------------

## How to remove TSforge?

-   This activation method doesn't modify any Windows components and doesn't install any new files. Instead, it appends data to one of data files used by Software Protection Platform.
-   If you want to reset the activation status,
    - In MAS script, goto Troubleshoot and apply Fix Licensing option.
    - Done

------------------------------------------------------------------------

## Manual Activation

See the [TSforge README](https://github.com/massgravel/TSforge) for information on manually using TSforge.

------------------------------------------------------------------------

## Command Line Switches

-   Check [here](command_line_switches.md).

------------------------------------------------------------------------

## Setup Preactivation

-   Check the Extract OEM option in the MAS Extras section if you want pre-activated Windows installation.
-   Read more [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
