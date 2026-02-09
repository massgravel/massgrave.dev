---
sidebar_label: Windows 10 / 11 LTSC
---

# Windows LTSC Download

All download links lead to genuine files only.

## Notes

- [**FAQ**](genuine-installation-media.md#faq)
- [How can I verify that these files are genuine?](genuine-installation-media.md#verify-authenticity-of-files)
- Microsoft provides Evaluation ISO public [links](https://www.microsoft.com/en-us/evalcenter) for Windows LTSC releases, but as the name states, those ISOs are for evaluation purposes and can not be activated for more than 90 days. Below listed ISOs are full version that can be activated.
- Microsoft does not provide monthly updated ISOs for LTSC editions. However, you can [manually update Windows ISO file](update-windows-iso) if needed.

#### What is LTSC, and is it the right choice for you?

<details>
<summary>Click here for info</summary>

TL;DR if you're uncertain, avoid LTSC and choose the general availability channel and its editions (Home, Pro, Enterprise, etc).

---

Microsoft releases Windows 10 and 11 through two servicing channels.

1) **GAC** (General Availability Channel)
   - It is intended for both general and enterprise customers.
   - Edition examples include options such as Home, Pro, and Enterprise.
   - Maximum support on the same build is usually [2 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro) for consumers and [3 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-and-education) for the enterprise. After that, you need to install feature updates.
   - This is the main servicing channel and other software and games usually follow this channel's life cycle to provide support.
2) **LTSC** (Long-Term Servicing Channel)
   - It is designed for devices where functionality and features must remain constant over time, such as medical systems, industrial controllers, and air traffic control devices.
   - Examples of editions include: Enterprise LTSC and IoT Enterprise LTSC.
   - Maximum support on the same build is usually [5 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-ltsc-2024) for LTSC and [10 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-iot-enterprise-ltsc-2024) for the IoT LTSC.
   - This is not the main servicing channel and other software and games usually don't follow this channel's life cycle. For example, browsers and games might not provide support for 10 years on same build.
   - It lacks most of the Store (UWP) apps.

---

**Reasons to use LTSC:**

- You don't like annual Windows feature upgrades.
- You don't like preinstalled Store (UWP) apps as well.
- You want longer update support for Windows 10.

**Reasons to avoid using LTSC:**  

- As stated above, many games and software might not support LTSC once that same build has reached the end of life in GAC.
- Games might not work out of the box and you will manually need to install store and Xbox apps.
- New hardware might not be fully supported by a 2-3 year-old LTSC build (A new version of LTSC is released every 3 years).
- You might miss new features added in GAC that aren't available in LTSC.

---

**Common misconceptions**
- LTSC is fast.  
  It's not fast, although there might be a bit more RAM available because of no store apps running in the background, and you can achieve the same result in GAC channel editions by [turning off](https://www.elevenforum.com/t/enable-or-disable-background-apps-in-windows-11.923/) background apps and startup apps.
  
- It's more privacy-oriented.  
  No, [telemetry options](https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89) are the same as GAC Enterprise.
  
- IoT LTSC 2021 is the only way to receive security updates for Windows 10 after October 2025.  
  No, You can [activate ESU](windows10_eol.md) in Windows 10 as well.
</details>

#### Microsoft store app installation on LTSC

<details>
<summary>Click here for info</summary>

Applicable on Windows 11 LTSC 2024 and Windows 10 LTSC 2021.

**Microsoft Store**

LTSC editions do not come with store apps pre-installed. To install them, follow the steps below.

- Make sure the Internet is connected.
- Open PowerShell as admin and enter,  
`wsreset -i`  
- Wait for a notification to appear that the store app is installed, it may take a few minutes.

On Windows 10 2021 LTSC, you might encounter an error indicating that cliprenew.exe cannot be found. This error can be safely ignored.

**App Installer**

This app is very useful; it includes WinGet, enabling easy installation of .appx packages. After installing the Store app, install the App installer from this URL.

https://apps.microsoft.com/detail/9nblggh4nns1

**It didn't work. What should I do next?**

You can install them using the package provided by abbodi1406.  
https://github.com/stdin82/htfx/releases/tag/v0.0.24

</details>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#### Differences between IoT and Non-IoT Windows Enterprise LTSC

<details>
<summary>Click here for info</summary>

<Tabs>

<TabItem value="Windows 11 LTSC 2024" label="Windows 11 LTSC 2024" default>


| Features                               | Enterprise LTSC | IoT Enterprise LTSC / IoT Enterprise Subscription LTSC                                                                                                                                                                                    |
|:---------------------------------------|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **TPM / Secure Boot / UEFI / 4GB RAM** | All Required    | [Not Required](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) 🎉 <br /> Also not required by [IoT Enterprise 24H2 (Non-LTSC)](windows_11_links.md) |
| **Update Support**                     | [5 Years (till 2029)](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-ltsc-2024)         | [10 Years (till 2034)](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-iot-enterprise-ltsc-2024)                                                                                                                                                                                                                                  |
| **Digital License (HWID)**             | Not supported   | Supported                                                                                                                                                                                                                                 |
| **Automatic Device Encryption**        | Enabled         | Disabled                                                                                                                                                                                                                                  |
| **Reserved Storage Feature**           | Enabled         | Disabled                                                                                                                                                                                                                                  |
| **2 Simultaneous RDP Sessions**        | No              | Yes                                                                                                                                                                                                                                       |


- IoT Enterprise LTSC is a winner.
- The only difference between IoT Enterprise LTSC and IoT Enterprise Subscription LTSC is that the subscription edition supports a subscription license.
- You can change the editions to each other (IoT and Non-IoT Windows Enterprise LTSC) only by inserting the corresponding edition key on the activation page in the Windows settings.

|                          |                |                               |
|--------------------------|----------------|-------------------------------|
| IoT Enterprise LTSC 2024 | IoTEnterpriseS | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Enterprise LTSC 2024     | EnterpriseS    | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |

</TabItem>

<TabItem value="Windows 10 LTSC 2021" label="Windows 10 LTSC 2021" default>


| Features                     | Enterprise LTSC                                                                                       | IoT Enterprise LTSC                                                                                        |
|:-----------------------------|:------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| **Update Support**           | [5 Years (till 2027)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021) | [10 Years (till 2032)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021) |
| **Digital License (HWID)**   | Not supported                                                                                         | Supported                                                                                                  |
| **Reserved Storage Feature** | Enabled                                                                                               | Disabled                                                                                                   |
| **KMS License**              | Supported                                                                                             | Support added after the update 19044.2788                                                                  |
| **$OEM$ Folder Support**     | Yes                                                                                                   | No [(More Info)](oem-folder.md)                                                                            |


- IoT Enterprise LTSC is a winner.
- You can change the editions to each other (IoT and Non-IoT Windows Enterprise LTSC) only by inserting the corresponding edition key on the activation page in the Windows settings.

|                          |                |                               |
|--------------------------|----------------|-------------------------------|
| IoT Enterprise LTSC 2021 | IoTEnterpriseS | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| Enterprise LTSC 2021     | EnterpriseS    | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |

</TabItem>


<TabItem value="Old Versions" label="Old Versions" default>


- There are ISOs available for IoT Enterprise LTSC/LTSB 2019, 2016, and 2015, but they only have the Non-IoT LTSC OEM key (generic, not-activated) preinstalled. The installed key is the only difference. There is no real, different IoT edition available for these versions.

</TabItem>
</Tabs>

</details>

#### How to upgrade from non-LTSC to LTSC edition while keeping files and apps?

<details>
<summary>Click here for info</summary>

You might want to check [Windows 10 EOL guide](windows10_eol.md).

</details>

#### How to clean install Windows 11 IoT Enterprise LTSC 2024 in Non-English language?

<details>
<summary>Click here for info</summary>

IoT LTSC edition ISOs are available in English language only. However, you can follow the below steps to clean install it.

- Download the non-IoT LTSC 2024 ISO in the desired language from the section below.
- Follow [PID.txt method](clean_install_windows#windows-11-on-unsupported-hardware) to install IoT version from scratch.

Alternatively, You can install Non-IoT LTSC in another language and later install IoT LTSC 2024 key `KBN8V-HFGQ4-MGXVD-347P6-PDQGT` in activation page in Windows settings to change the edition.

</details>

#### How to clean install Windows 10 IoT Enterprise LTSC 2021 in Non-English language?

<details>
<summary>Click here for info</summary>

IoT LTSC edition ISOs are available in English language only.

When installing Windows 11 IoT Enterprise LTSC 2024 from scratch, one advantage is its relaxed hardware requirements. However, there isn't much benefit to doing the same with the 2021 IoT version, since you can easily change the Windows edition later. Additionally, the PID.txt method for installing the virtual edition from scratch is only applicable to Windows 11 24H2 and later versions. While there are other methods to install from scratch, they are more complex, and the results do not justify the effort.

Our recommendation is as follows:

- Download the non-IoT LTSC 2021 ISO in the desired language from the section below.
- Install Windows using this [clean installation guide](clean_install_windows).
- After installing Windows, to change the edition, enter the IoT LTSC 2021 key `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` on the activation page in the Windows settings.

</details>

---

## Download Links


<Tabs>

<TabItem value="Windows 11 LTSC 2024" label="Windows 11 LTSC 2024" default>

**Windows 11 IoT Enterprise LTSC 2024**

Build - 26100.1742

These ISOs contain below editions.  
Windows 11 Enterprise LTSC  
Windows 11 IoT Enterprise LTSC    
Windows 11 IoT Enterprise Subscription LTSC

| Language | Arch | Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:---|:---|:---|
| English | x64 | [X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso](https://oemsoc.download.prss.microsoft.com/dbazure/X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso_640de540-87c4-427f-be87-e6d53a3a60b4?t=2c3b664b-b119-4088-9db1-ccff72c6d22e&P1=102816950270&P2=601&P3=2&P4=OC448onxqdmdUsBUApAiE8pj1FZ%2bEPTU3%2bC6Quq29MVwMyyDUtR%2fsbiy7RdVoZOHaZRndvzeOOnIwJZ2x3%2bmP6YK9cjJSP41Lvs0SulF4SVyL5C0DdDmiWqh2QW%2bcDPj2Xp%2bMrI9NOeElSBS5kkOWP8Eiyf2VkkQFM3g5vIk3HJVvu5sWo6pFKpFv4lML%2bHaIiTSuwbPMs5xwEQTfScuTKfigNlUZPdHRMp1B3uKLgIA3r0IbRpZgHYMXEwXQ%2fSLMdDNQthpqQvz1PThVkx7ObD55CXgt0GNSAWRfjdURWb8ywWk1gT7ozAgpP%2fKNm56U5nh33WZSuMZIuO1SBM2vw%3d%3d) <br/> = <br/> [en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso](https://buzzheavier.com/2gtemvaqgfm3) <br /> <br /> Both files are identical, only name is different. <br /> 1st link is from the official OEM portal, and 2nd file is taken from MVS and hosted on massgrave. <br /> Note: With 1st link file you need to rename extension to .iso |

---

**Windows 11 Enterprise LTSC 2024**

Build - 26100.1742

| Language | Arch | Link |
|:---|:---|:---|
| Arabic                 | x64  | [ar-sa_windows_11_enterprise_ltsc_2024_x64_dvd_8012f159.iso](https://buzzheavier.com/qhnk7evjlk8j) |
| Bulgarian              | x64  | [bg-bg_windows_11_enterprise_ltsc_2024_x64_dvd_2778f4e8.iso](https://buzzheavier.com/c7zmlvfoz5kn) |
| Czech                  | x64  | [cs-cz_windows_11_enterprise_ltsc_2024_x64_dvd_d4ef05f2.iso](https://buzzheavier.com/ukdubjr1nz5u) |
| Danish                 | x64  | [da-dk_windows_11_enterprise_ltsc_2024_x64_dvd_c231c267.iso](https://buzzheavier.com/rcnwowrf6225) |
| German                 | x64  | [de-de_windows_11_enterprise_ltsc_2024_x64_dvd_4f136f69.iso](https://buzzheavier.com/z2kprsz24doj) |
| Greek                  | x64  | [el-gr_windows_11_enterprise_ltsc_2024_x64_dvd_54eaabb2.iso](https://buzzheavier.com/4uocdjy0xdh4) |
| English-United Kingdom | x64  | [en-gb_windows_11_enterprise_ltsc_2024_x64_dvd_e2137661.iso](https://buzzheavier.com/ed3qieys8404) |
| English                | x64  | [en-us_windows_11_enterprise_ltsc_2024_x64_dvd_965cfb00.iso](https://buzzheavier.com/ewj0dt4zu94c) |
| Spanish                | x64  | [es-es_windows_11_enterprise_ltsc_2024_x64_dvd_77392d61.iso](https://buzzheavier.com/t3wgmn5p49ir) |
| Spanish-Mexico         | x64  | [es-mx_windows_11_enterprise_ltsc_2024_x64_dvd_3310c094.iso](https://buzzheavier.com/c28olzic82lc) |
| Estonian               | x64  | [et-ee_windows_11_enterprise_ltsc_2024_x64_dvd_2dbd4bfe.iso](https://buzzheavier.com/al8ew7rmngt6) |
| Finnish                | x64  | [fi-fi_windows_11_enterprise_ltsc_2024_x64_dvd_998f5df6.iso](https://buzzheavier.com/cxkyj5e5mnwe) |
| French-Canada          | x64  | [fr-ca_windows_11_enterprise_ltsc_2024_x64_dvd_78732953.iso](https://buzzheavier.com/kg5upak8ltg4) |
| French                 | x64  | [fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso](https://buzzheavier.com/ok24s3r2hvmw) |
| Hebrew                 | x64  | [he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso](https://buzzheavier.com/l7izknffxxf7) |
| Croatian               | x64  | [hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso](https://buzzheavier.com/fj74757dr2m1) |
| Hungarian              | x64  | [hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso](https://buzzheavier.com/mmwnabm5q6am) |
| Italian                | x64  | [it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso](https://buzzheavier.com/28kni34thyyy) |
| Japanese               | x64  | [ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso](https://buzzheavier.com/h2uv9w6jttvn) |
| Korean                 | x64  | [ko-kr_windows_11_enterprise_ltsc_2024_x64_dvd_b6b6eb18.iso](https://buzzheavier.com/ltfkfkhdqvc4) |
| Lithuanian             | x64  | [lt-lt_windows_11_enterprise_ltsc_2024_x64_dvd_145479e9.iso](https://buzzheavier.com/10v1aai4o9pp) |
| Latvian                | x64  | [lv-lv_windows_11_enterprise_ltsc_2024_x64_dvd_e0ebc53d.iso](https://buzzheavier.com/c5lveyjpywro) |
| Norwegian-Bokmal       | x64  | [nb-no_windows_11_enterprise_ltsc_2024_x64_dvd_d41eeb48.iso](https://buzzheavier.com/jtwzkon9ziij) |
| Dutch-Netherlands      | x64  | [nl-nl_windows_11_enterprise_ltsc_2024_x64_dvd_e3063aab.iso](https://buzzheavier.com/ss690ap0unwt) |
| Polish                 | x64  | [pl-pl_windows_11_enterprise_ltsc_2024_x64_dvd_e00807a1.iso](https://buzzheavier.com/ozzqx0xqvppq) |
| Portuguese-Brazil      | x64  | [pt-br_windows_11_enterprise_ltsc_2024_x64_dvd_2bb6b75b.iso](https://buzzheavier.com/qlx3jyi3v6fs) |
| Portuguese-Portugal    | x64  | [pt-pt_windows_11_enterprise_ltsc_2024_x64_dvd_2f34bd6b.iso](https://buzzheavier.com/8axhd4wxa5kt) |
| Romanian               | x64  | [ro-ro_windows_11_enterprise_ltsc_2024_x64_dvd_2eadb4df.iso](https://buzzheavier.com/ssqnl2sbx6ic) |
| Russian                | x64  | [ru-ru_windows_11_enterprise_ltsc_2024_x64_dvd_f9af5773.iso](https://buzzheavier.com/2r5ykst3i8iz) |
| Slovak                 | x64  | [sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso](https://buzzheavier.com/70k5gv521qcr) |
| Slovenian              | x64  | [sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso](https://buzzheavier.com/2c2g8spembif) |
| Serbian-Latin          | x64  | [sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso](https://buzzheavier.com/fx3w6pscqvti) |
| Swedish                | x64  | [sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso](https://buzzheavier.com/tr3u5cgoww2w) |
| Thai                   | x64  | [th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso](https://buzzheavier.com/jihs2q50dcel) |
| Turkish                | x64  | [tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso](https://buzzheavier.com/b1aocavpcxn3) |
| Ukranian               | x64  | [uk-ua_windows_11_enterprise_ltsc_2024_x64_dvd_b3f00872.iso](https://buzzheavier.com/ymey7u7i2rul) |
| Chinese-Simplified     | x64  | [zh-cn_windows_11_enterprise_ltsc_2024_x64_dvd_cff9cd2d.iso](https://buzzheavier.com/k2laem70enbn) |
| Chinese-Traditional    | x64  | [zh-tw_windows_11_enterprise_ltsc_2024_x64_dvd_6287d84d.iso](https://buzzheavier.com/all2owcypu0q) |

</TabItem>
<TabItem value="Windows 10 LTSC 2021" label="Windows 10 LTSC 2021" default>

**Windows 10 IoT Enterprise LTSC 2021**

(Build - 19044.1288)

These ISOs contain below editions.    
Windows 10 Enterprise LTSC  
Windows 10 IoT Enterprise LTSC   

| Language | Arch | Link                                                                                                                                                         |
|:---------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| English  | x64  | [en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f.iso](https://buzzheavier.com/yhggy3l1e5oq) |

---

**Windows 10 Enterprise LTSC 2021**

(Build - 19044.1288)

| Language               | Arch | Link |
|:-----------------------|:-----|:---|
| Arabic                 | x64  | [ar-sa_windows_10_enterprise_ltsc_2021_x64_dvd_60bc2a7a.iso](https://buzzheavier.com/yf1vm6rxb48p) |
| Arabic                 | x86  | [ar-sa_windows_10_enterprise_ltsc_2021_x86_dvd_69e2349b.iso](https://buzzheavier.com/ef2mythfr8ve) |
| Bulgarian              | x64  | [bg-bg_windows_10_enterprise_ltsc_2021_x64_dvd_b0887275.iso](https://buzzheavier.com/z0ke9b8w39jr) |
| Bulgarian              | x86  | [bg-bg_windows_10_enterprise_ltsc_2021_x86_dvd_8beb279f.iso](https://buzzheavier.com/prssl7s2gm1g) |
| Czech                  | x64  | [cs-cz_windows_10_enterprise_ltsc_2021_x64_dvd_d624c653.iso](https://buzzheavier.com/ocf9j3es6h44) |
| Czech                  | x86  | [cs-cz_windows_10_enterprise_ltsc_2021_x86_dvd_2afa1afb.iso](https://buzzheavier.com/z6ecz9xhsfb2) |
| Danish                 | x64  | [da-dk_windows_10_enterprise_ltsc_2021_x64_dvd_6ec511bb.iso](https://buzzheavier.com/288zwl5vr0we) |
| Danish                 | x86  | [da-dk_windows_10_enterprise_ltsc_2021_x86_dvd_de761707.iso](https://buzzheavier.com/qncu2u3cs5cx) |
| German                 | x64  | [de-de_windows_10_enterprise_ltsc_2021_x64_dvd_71796d33.iso](https://buzzheavier.com/rh5e6junhpiv) |
| German                 | x86  | [de-de_windows_10_enterprise_ltsc_2021_x86_dvd_6317aaff.iso](https://buzzheavier.com/38twllf34e1h) |
| Greek                  | x64  | [el-gr_windows_10_enterprise_ltsc_2021_x64_dvd_c83eab34.iso](https://buzzheavier.com/gj2ckclc9izw) |
| Greek                  | x86  | [el-gr_windows_10_enterprise_ltsc_2021_x86_dvd_c7850ec0.iso](https://buzzheavier.com/034q03xa9z4w) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_ltsc_2021_x64_dvd_7fe51fe8.iso](https://buzzheavier.com/eaz0ug2ovut3) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_ltsc_2021_x86_dvd_baa2b09f.iso](https://buzzheavier.com/pr502wxskyyo) |
| English                | x64  | [en-us_windows_10_enterprise_ltsc_2021_x64_dvd_d289cf96.iso](https://buzzheavier.com/pj97mvcpou4e) |
| English                | x86  | [en-us_windows_10_enterprise_ltsc_2021_x86_dvd_9f4aa95f.iso](https://buzzheavier.com/2e3lg19or5as) |
| Spanish                | x64  | [es-es_windows_10_enterprise_ltsc_2021_x64_dvd_51d721ea.iso](https://buzzheavier.com/060yymks5xfl) |
| Spanish                | x86  | [es-es_windows_10_enterprise_ltsc_2021_x86_dvd_243c83eb.iso](https://buzzheavier.com/ngf73ro7mv9e) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2021_x64_dvd_f6aaf384.iso](https://buzzheavier.com/sombc4h5pj5q) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2021_x86_dvd_93a5debe.iso](https://buzzheavier.com/tu07g9x3jx5s) |
| Estonian               | x64  | [et-ee_windows_10_enterprise_ltsc_2021_x64_dvd_012a5c50.iso](https://buzzheavier.com/y2dcp0jih0r4) |
| Estonian               | x86  | [et-ee_windows_10_enterprise_ltsc_2021_x86_dvd_292aa316.iso](https://buzzheavier.com/6380k77u0q7m) |
| Finnish                | x64  | [fi-fi_windows_10_enterprise_ltsc_2021_x64_dvd_551582d9.iso](https://buzzheavier.com/ft93q3n24i55) |
| Finnish                | x86  | [fi-fi_windows_10_enterprise_ltsc_2021_x86_dvd_15e0eeb9.iso](https://buzzheavier.com/g1ku2rhh8x2x) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso](https://buzzheavier.com/bminf8sd38lv) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2021_x86_dvd_5237961d.iso](https://buzzheavier.com/icorghosigo2) |
| French                 | x64  | [fr-fr_windows_10_enterprise_ltsc_2021_x64_dvd_bda01eb0.iso](https://buzzheavier.com/e9p8rgta7p4l) |
| French                 | x86  | [fr-fr_windows_10_enterprise_ltsc_2021_x86_dvd_53f189f9.iso](https://buzzheavier.com/ru5rcwhyed0k) |
| Hebrew                 | x64  | [he-il_windows_10_enterprise_ltsc_2021_x64_dvd_3a55ecd6.iso](https://buzzheavier.com/jh22fprualv4) |
| Hebrew                 | x86  | [he-il_windows_10_enterprise_ltsc_2021_x86_dvd_3b560f44.iso](https://buzzheavier.com/0rdkw8z2c0t2) |
| Croatian               | x64  | [hr-hr_windows_10_enterprise_ltsc_2021_x64_dvd_f5085b75.iso](https://buzzheavier.com/plfm93fli4qq) |
| Croatian               | x86  | [hr-hr_windows_10_enterprise_ltsc_2021_x86_dvd_bd52180e.iso](https://buzzheavier.com/yxsrw3tmyb89) |
| Hungarian              | x64  | [hu-hu_windows_10_enterprise_ltsc_2021_x64_dvd_d541ddb3.iso](https://buzzheavier.com/onlpqy8ad40a) |
| Hungarian              | x86  | [hu-hu_windows_10_enterprise_ltsc_2021_x86_dvd_a8cb11dd.iso](https://buzzheavier.com/b824imm5rklc) |
| Italian                | x64  | [it-it_windows_10_enterprise_ltsc_2021_x64_dvd_0c1aa034.iso](https://buzzheavier.com/0uqhtp2t12fa) |
| Italian                | x86  | [it-it_windows_10_enterprise_ltsc_2021_x86_dvd_46e4f7e1.iso](https://buzzheavier.com/ifldz4wanunv) |
| Japanese               | x64  | [ja-jp_windows_10_enterprise_ltsc_2021_x64_dvd_ef58c6a1.iso](https://buzzheavier.com/sjrmjez6pzru) |
| Japanese               | x86  | [ja-jp_windows_10_enterprise_ltsc_2021_x86_dvd_ac893196.iso](https://buzzheavier.com/qoh3pw7ggr7d) |
| Korean                 | x64  | [ko-kr_windows_10_enterprise_ltsc_2021_x64_dvd_6d26f398.iso](https://buzzheavier.com/sz76w5npre9e) |
| Korean                 | x86  | [ko-kr_windows_10_enterprise_ltsc_2021_x86_dvd_dff1cb4e.iso](https://buzzheavier.com/rymurphnyxl4) |
| Lithuanian             | x64  | [lt-lt_windows_10_enterprise_ltsc_2021_x64_dvd_9ffbbd5b.iso](https://buzzheavier.com/ce3u4bonp5hv) |
| Lithuanian             | x86  | [lt-lt_windows_10_enterprise_ltsc_2021_x86_dvd_fefed947.iso](https://buzzheavier.com/vhpgz8nymg9u) |
| Latvian                | x64  | [lv-lv_windows_10_enterprise_ltsc_2021_x64_dvd_6c89d2e0.iso](https://buzzheavier.com/14y8a5ry3btd) |
| Latvian                | x86  | [lv-lv_windows_10_enterprise_ltsc_2021_x86_dvd_41041cfd.iso](https://buzzheavier.com/mmm49jbyu87h) |
| Norwegian-Bokmal       | x64  | [nb-no_windows_10_enterprise_ltsc_2021_x64_dvd_c65c51a5.iso](https://buzzheavier.com/1in26crf14e7) |
| Norwegian-Bokmal       | x86  | [nb-no_windows_10_enterprise_ltsc_2021_x86_dvd_6f625462.iso](https://buzzheavier.com/tkc4x16uyhzz) |
| Dutch-Netherlands      | x64  | [nl-nl_windows_10_enterprise_ltsc_2021_x64_dvd_88f53466.iso](https://buzzheavier.com/vcdxtfufsq5h) |
| Dutch-Netherlands      | x86  | [nl-nl_windows_10_enterprise_ltsc_2021_x86_dvd_231b3321.iso](https://buzzheavier.com/figniopa9uph) |
| Polish                 | x64  | [pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso](https://buzzheavier.com/ikdmzqj2hizv) |
| Polish                 | x86  | [pl-pl_windows_10_enterprise_ltsc_2021_x86_dvd_4b0aed09.iso](https://buzzheavier.com/aol0d54ne9up) |
| Portuguese-Brazil      | x64  | [pt-br_windows_10_enterprise_ltsc_2021_x64_dvd_f318268e.iso](https://buzzheavier.com/0twv2efo5i5q) |
| Portuguese-Brazil      | x86  | [pt-br_windows_10_enterprise_ltsc_2021_x86_dvd_d4aea182.iso](https://buzzheavier.com/0xbjf4rpwta5) |
| Portuguese-Portugal    | x64  | [pt-pt_windows_10_enterprise_ltsc_2021_x64_dvd_f2e9b6a0.iso](https://buzzheavier.com/zxo90z2ks7kq) |
| Portuguese-Portugal    | x86  | [pt-pt_windows_10_enterprise_ltsc_2021_x86_dvd_2ed38b71.iso](https://buzzheavier.com/tdg1opwsaiy1) |
| Romanian               | x64  | [ro-ro_windows_10_enterprise_ltsc_2021_x64_dvd_ae2284d6.iso](https://buzzheavier.com/04skx4c4tu1w) |
| Romanian               | x86  | [ro-ro_windows_10_enterprise_ltsc_2021_x86_dvd_e68b65bc.iso](https://buzzheavier.com/ebw3cco23qh9) |
| Russian                | x64  | [ru-ru_windows_10_enterprise_ltsc_2021_x64_dvd_5044a1e7.iso](https://buzzheavier.com/418jivft1k2c) |
| Russian                | x86  | [ru-ru_windows_10_enterprise_ltsc_2021_x86_dvd_cdf355eb.iso](https://buzzheavier.com/if6s9ycigkyr) |
| Slovak                 | x64  | [sk-sk_windows_10_enterprise_ltsc_2021_x64_dvd_d6c64c5f.iso](https://buzzheavier.com/p3i1qjjw9z06) |
| Slovak                 | x86  | [sk-sk_windows_10_enterprise_ltsc_2021_x86_dvd_10ed79ca.iso](https://buzzheavier.com/lugzy79j1uh9) |
| Slovenian              | x64  | [sl-si_windows_10_enterprise_ltsc_2021_x64_dvd_ec090386.iso](https://buzzheavier.com/k4rshtiv6tdf) |
| Slovenian              | x86  | [sl-si_windows_10_enterprise_ltsc_2021_x86_dvd_5e0e48a8.iso](https://buzzheavier.com/m2zh85x2v2vz) |
| Serbian-Latin          | x64  | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x64_dvd_2d2f8815.iso](https://buzzheavier.com/sfjzui2y3ygs) |
| Serbian-Latin          | x86  | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x86_dvd_248407e2.iso](https://buzzheavier.com/zohm80gvx453) |
| Swedish                | x64  | [sv-se_windows_10_enterprise_ltsc_2021_x64_dvd_9a28bb6b.iso](https://buzzheavier.com/63aqmfy22ptj) |
| Swedish                | x86  | [sv-se_windows_10_enterprise_ltsc_2021_x86_dvd_9081ef5b.iso](https://buzzheavier.com/wnybuvpextzv) |
| Thai                   | x64  | [th-th_windows_10_enterprise_ltsc_2021_x64_dvd_b7ed34d6.iso](https://buzzheavier.com/d286p8h0kzbp) |
| Thai                   | x86  | [th-th_windows_10_enterprise_ltsc_2021_x86_dvd_df412841.iso](https://buzzheavier.com/l5ndpddanu7h) |
| Turkish                | x64  | [tr-tr_windows_10_enterprise_ltsc_2021_x64_dvd_e55b1896.iso](https://buzzheavier.com/i4ckkzyngnc6) |
| Turkish                | x86  | [tr-tr_windows_10_enterprise_ltsc_2021_x86_dvd_36fc55f4.iso](https://buzzheavier.com/61f7ypwbnwzg) |
| Ukranian               | x64  | [uk-ua_windows_10_enterprise_ltsc_2021_x64_dvd_816da3c3.iso](https://buzzheavier.com/aybxz30h6pb2) |
| Ukranian               | x86  | [uk-ua_windows_10_enterprise_ltsc_2021_x86_dvd_aa372ed6.iso](https://buzzheavier.com/siuqdamrl7yb) |
| Chinese-Simplified     | x64  | [zh-cn_windows_10_enterprise_ltsc_2021_x64_dvd_033b7312.iso](https://buzzheavier.com/h1yn52aj10ft) |
| Chinese-Simplified     | x86  | [zh-cn_windows_10_enterprise_ltsc_2021_x86_dvd_30600d9c.iso](https://buzzheavier.com/qiwl1ddy721v) |
| Chinese-Traditional    | x64  | [zh-tw_windows_10_enterprise_ltsc_2021_x64_dvd_80dba877.iso](https://buzzheavier.com/dp28x1b0z506) |
| Chinese-Traditional    | x86  | [zh-tw_windows_10_enterprise_ltsc_2021_x86_dvd_03be1c20.iso](https://buzzheavier.com/zi31zh84xltm) |

</TabItem>
<TabItem value="Windows 10 LTSC 2019" label="Windows 10 LTSC 2019" default>

**Windows 10 IoT Enterprise LTSC 2019**

(Build - 17763.107)  
It doesn't have the actual IotEnterpriseS edition, it's just EnterpriseS with OEM key (generic, not-activated) installed.

| Language | Arch | Link                                                                                                                                                   |
|:---------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| English  | x64  | [en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso](pathname:///redirect.html#en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso) |
| English  | x86  | [en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso](pathname:///redirect.html#en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso) |

---

**Windows 10 Enterprise LTSC 2019**

(Build - 17763.316)

| Language               | Arch | Link                                                                                                                                                 |
|:-----------------------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso](pathname:///redirect.html#ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso)       |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso](pathname:///redirect.html#ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso)       |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso](pathname:///redirect.html#bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso)       |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso](pathname:///redirect.html#bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso)       |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso](pathname:///redirect.html#cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso)       |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso](pathname:///redirect.html#cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso)       |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso](pathname:///redirect.html#cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso)       |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso](pathname:///redirect.html#cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso)       |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso](pathname:///redirect.html#ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso)       |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso](pathname:///redirect.html#ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso)       |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso](pathname:///redirect.html#da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso)       |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso](pathname:///redirect.html#da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso)       |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso](pathname:///redirect.html#de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso)       |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso](pathname:///redirect.html#de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso)       |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso](pathname:///redirect.html#el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso)       |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso](pathname:///redirect.html#el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso)       |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso](pathname:///redirect.html#en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso](pathname:///redirect.html#en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso) |
| English                | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso](pathname:///redirect.html#en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso)       |
| English                | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso](pathname:///redirect.html#en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso)       |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso](pathname:///redirect.html#es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso)       |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso](pathname:///redirect.html#es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso)       |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso](pathname:///redirect.html#et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso)       |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso](pathname:///redirect.html#et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso)       |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso](pathname:///redirect.html#fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso)       |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso](pathname:///redirect.html#fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso)       |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso](pathname:///redirect.html#fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso)       |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso](pathname:///redirect.html#fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso)       |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso](pathname:///redirect.html#he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso)       |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso](pathname:///redirect.html#he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso)       |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso](pathname:///redirect.html#hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso)       |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso](pathname:///redirect.html#hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso)       |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso](pathname:///redirect.html#hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso)       |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso](pathname:///redirect.html#hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso)       |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso](pathname:///redirect.html#it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso)       |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso](pathname:///redirect.html#it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso)       |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso](pathname:///redirect.html#ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso)       |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso](pathname:///redirect.html#ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso)       |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso](pathname:///redirect.html#ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso)       |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso](pathname:///redirect.html#ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso)       |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso](pathname:///redirect.html#lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso)       |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso](pathname:///redirect.html#lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso)       |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso](pathname:///redirect.html#lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso)       |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso](pathname:///redirect.html#lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso)       |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso](pathname:///redirect.html#nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso)       |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso](pathname:///redirect.html#nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso)       |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso](pathname:///redirect.html#nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso)       |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso](pathname:///redirect.html#nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso)       |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso](pathname:///redirect.html#pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso)       |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso](pathname:///redirect.html#pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso)       |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso](pathname:///redirect.html#pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso)       |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso](pathname:///redirect.html#pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso)       |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso](pathname:///redirect.html#pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso)       |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso](pathname:///redirect.html#pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso)       |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso](pathname:///redirect.html#ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso)       |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso](pathname:///redirect.html#ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso)       |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso](pathname:///redirect.html#ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso)       |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso](pathname:///redirect.html#ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso)       |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso](pathname:///redirect.html#sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso)       |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso](pathname:///redirect.html#sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso)       |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso](pathname:///redirect.html#sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso)       |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso](pathname:///redirect.html#sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso)       |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso](pathname:///redirect.html#sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso)       |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso](pathname:///redirect.html#sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso)       |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso](pathname:///redirect.html#sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso)       |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso](pathname:///redirect.html#sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso)       |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso](pathname:///redirect.html#th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso)       |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso](pathname:///redirect.html#th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso)       |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso](pathname:///redirect.html#tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso)       |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso](pathname:///redirect.html#tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso)       |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso](pathname:///redirect.html#uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso)       |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso](pathname:///redirect.html#uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso)       |

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso](pathname:///redirect.html#ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso)           |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso](pathname:///redirect.html#ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso)           |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso](pathname:///redirect.html#bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso)           |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso](pathname:///redirect.html#bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso)           |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso](pathname:///redirect.html#cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso)           |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso](pathname:///redirect.html#cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso)           |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso](pathname:///redirect.html#cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso)           |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso](pathname:///redirect.html#cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso)           |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso](pathname:///redirect.html#ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso)           |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso](pathname:///redirect.html#ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso)           |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso](pathname:///redirect.html#da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso)           |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso](pathname:///redirect.html#da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso)           |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso](pathname:///redirect.html#de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso)           |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso](pathname:///redirect.html#de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso)           |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso](pathname:///redirect.html#el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso)           |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso](pathname:///redirect.html#el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso)           |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso](pathname:///redirect.html#en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso)     |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso](pathname:///redirect.html#en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso)     |
| English                | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso](pathname:///redirect.html#en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso)           |
| English                | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso](pathname:///redirect.html#en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso)           |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso)     |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso)     |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso](pathname:///redirect.html#es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso)           |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso](pathname:///redirect.html#es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso)           |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso](pathname:///redirect.html#et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso)           |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso](pathname:///redirect.html#et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso)           |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso](pathname:///redirect.html#fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso)           |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso](pathname:///redirect.html#fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso)           |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso)     |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso)     |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso](pathname:///redirect.html#fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso)           |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso](pathname:///redirect.html#fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso)           |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso](pathname:///redirect.html#he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso)           |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso](pathname:///redirect.html#he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso)           |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso](pathname:///redirect.html#hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso)           |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso](pathname:///redirect.html#hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso)           |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso](pathname:///redirect.html#hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso)           |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso](pathname:///redirect.html#hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso)           |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso](pathname:///redirect.html#it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso)           |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso](pathname:///redirect.html#it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso)           |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso](pathname:///redirect.html#ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso)           |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso](pathname:///redirect.html#ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso)           |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso](pathname:///redirect.html#ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso)           |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso](pathname:///redirect.html#ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso)           |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso](pathname:///redirect.html#lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso)           |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso](pathname:///redirect.html#lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso)           |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso](pathname:///redirect.html#lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso)           |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso](pathname:///redirect.html#lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso)           |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso](pathname:///redirect.html#nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso)           |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso](pathname:///redirect.html#nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso)           |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso](pathname:///redirect.html#nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso)           |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso](pathname:///redirect.html#nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso)           |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso](pathname:///redirect.html#pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso)           |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso](pathname:///redirect.html#pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso)           |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso](pathname:///redirect.html#pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso)           |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso](pathname:///redirect.html#pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso)           |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso](pathname:///redirect.html#pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso)           |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso](pathname:///redirect.html#pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso)           |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso](pathname:///redirect.html#ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso)           |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso](pathname:///redirect.html#ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso)           |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso](pathname:///redirect.html#ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso)           |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso](pathname:///redirect.html#ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso)           |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso](pathname:///redirect.html#sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso)           |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso](pathname:///redirect.html#sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso)           |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso](pathname:///redirect.html#sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso)           |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso](pathname:///redirect.html#sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso)           |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso](pathname:///redirect.html#sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso](pathname:///redirect.html#sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso](pathname:///redirect.html#sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso)           |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso](pathname:///redirect.html#sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso)           |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso](pathname:///redirect.html#th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso)           |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso](pathname:///redirect.html#th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso)           |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso](pathname:///redirect.html#tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso)           |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso](pathname:///redirect.html#tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso)           |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso](pathname:///redirect.html#uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso)           |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso](pathname:///redirect.html#uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso)           |

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso](pathname:///redirect.html#ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso)           |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso](pathname:///redirect.html#ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso)           |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso](pathname:///redirect.html#bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso)           |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso](pathname:///redirect.html#bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso)           |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso](pathname:///redirect.html#cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso)           |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso](pathname:///redirect.html#cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso)           |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso](pathname:///redirect.html#cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso)           |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso](pathname:///redirect.html#cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso)           |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso](pathname:///redirect.html#da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso)           |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso](pathname:///redirect.html#da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso)           |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso](pathname:///redirect.html#de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso)           |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso](pathname:///redirect.html#de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso)           |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso](pathname:///redirect.html#el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso)           |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso](pathname:///redirect.html#el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso)           |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso](pathname:///redirect.html#en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso)     |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso](pathname:///redirect.html#en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso)     |
| English                | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso](pathname:///redirect.html#en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso)           |
| English                | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso](pathname:///redirect.html#en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso)           |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso)     |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso](pathname:///redirect.html#es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso)     |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso](pathname:///redirect.html#es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso)           |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso](pathname:///redirect.html#es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso)           |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso](pathname:///redirect.html#et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso)           |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso](pathname:///redirect.html#et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso)           |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso](pathname:///redirect.html#fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso)           |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso](pathname:///redirect.html#fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso)           |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso)     |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso](pathname:///redirect.html#fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso)     |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso](pathname:///redirect.html#fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso)           |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso](pathname:///redirect.html#fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso)           |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso](pathname:///redirect.html#he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso)           |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso](pathname:///redirect.html#he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso)           |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso](pathname:///redirect.html#hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso)           |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso](pathname:///redirect.html#hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso)           |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso](pathname:///redirect.html#hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso)           |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso](pathname:///redirect.html#hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso)           |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso](pathname:///redirect.html#hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso)           |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso](pathname:///redirect.html#hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso)           |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso](pathname:///redirect.html#it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso)           |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso](pathname:///redirect.html#it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso)           |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso](pathname:///redirect.html#ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso)           |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso](pathname:///redirect.html#ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso)           |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso](pathname:///redirect.html#ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso)           |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso](pathname:///redirect.html#ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso)           |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso](pathname:///redirect.html#lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso)           |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso](pathname:///redirect.html#lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso)           |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso](pathname:///redirect.html#lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso)           |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso](pathname:///redirect.html#lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso)           |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso](pathname:///redirect.html#nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso)           |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso](pathname:///redirect.html#nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso)           |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso](pathname:///redirect.html#nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso)           |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso](pathname:///redirect.html#nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso)           |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso](pathname:///redirect.html#pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso)           |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso](pathname:///redirect.html#pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso)           |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso](pathname:///redirect.html#pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso)           |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso](pathname:///redirect.html#pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso)           |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso](pathname:///redirect.html#pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso)           |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso](pathname:///redirect.html#pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso)           |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso](pathname:///redirect.html#ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso)           |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso](pathname:///redirect.html#ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso)           |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso](pathname:///redirect.html#ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso)           |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso](pathname:///redirect.html#ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso)           |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso](pathname:///redirect.html#sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso)           |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso](pathname:///redirect.html#sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso)           |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso](pathname:///redirect.html#sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso)           |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso](pathname:///redirect.html#sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso)           |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso](pathname:///redirect.html#sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso](pathname:///redirect.html#sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso](pathname:///redirect.html#sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso)           |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso](pathname:///redirect.html#sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso)           |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso](pathname:///redirect.html#th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso)           |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso](pathname:///redirect.html#th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso)           |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso](pathname:///redirect.html#tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso)           |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso](pathname:///redirect.html#tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso)           |
| Chinese-Traditional         | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso](pathname:///redirect.html#tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso)           |
| Chinese-Traditional         | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso](pathname:///redirect.html#tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso)           |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso](pathname:///redirect.html#uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso)           |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso](pathname:///redirect.html#uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso)           |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

See [here](windows_arm_links.md).

</TabItem>
</Tabs>
