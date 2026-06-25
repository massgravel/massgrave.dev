---
sidebar_label: Windows 10 / 11 LTSC
---

# Windows LTSC Download

All download links lead to genuine files only.

## Notes

- [**FAQ**](genuine-installation-media.md#faq)
- [How can I verify that these files are genuine?](genuine-installation-media.md#verify-authenticity-of-files)
- Microsoft provides public [Evaluation ISO links](https://www.microsoft.com/en-us/evalcenter) for Windows LTSC releases, but as the name states, those ISOs are for evaluation purposes and cannot be activated for more than 90 days. The ISOs listed below are full versions that can be activated.
- Microsoft does not provide monthly updated ISOs for LTSC editions. However, you can [manually update the Windows ISO file](update-windows-iso) if needed.

#### What is LTSC, and is it the right choice for you?

<details>
<summary>Click here for info</summary>

**TL;DR:** If you're uncertain, avoid LTSC and choose the General Availability Channel and its standard editions (Home, Pro, Enterprise, etc.).

---

Microsoft releases Windows 10 and 11 through two servicing channels:

1) **GAC** (General Availability Channel)
   - It is intended for both general and enterprise customers.
   - Edition examples include options such as Home, Pro, and Enterprise.
   - Maximum support on the same build is usually [2 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-home-and-pro) for consumers and [3 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-and-education) for enterprises. After that, you need to install feature updates.
   - This is the main servicing channel, and other software and games usually follow this channel's lifecycle to provide support.
2) **LTSC** (Long-Term Servicing Channel)
   - It is designed for devices where functionality and features must remain constant over time, such as medical systems, industrial controllers, and air traffic control devices.
   - Examples of editions include Enterprise LTSC and IoT Enterprise LTSC.
   - Maximum support on the same build is usually [5 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-ltsc-2024) for LTSC and [10 years](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-iot-enterprise-ltsc-2024) for IoT LTSC.
   - This is not the main servicing channel, and other software and games usually don't follow this channel's lifecycle. For example, browsers and games might not provide support for 10 years on the same build.
   - It lacks most of the Store (UWP) apps.

---

**Reasons to use LTSC:**

- You dislike annual Windows feature upgrades.
- You prefer not to have preinstalled Store (UWP) apps.
- You want longer update support for Windows 10.

**Reasons to avoid using LTSC:**  

- Games and software might drop support for LTSC once that same build has reached its end of life in the GAC channel.
- Some games may require the Microsoft Store and Xbox apps, which you'll need to install manually.
- New hardware might not be fully supported by a 2-3 year-old LTSC build (a new version of LTSC is released every 3 years).
- You might miss new features added to GAC that aren't available in LTSC.

---

**Common misconceptions:**
- **LTSC is fast.**  
  LTSC is not much faster. There might be slightly less RAM usage because there are no Store apps running in the background, but you can achieve the same result in GAC editions by [turning off](https://www.elevenforum.com/t/enable-or-disable-background-apps-in-windows-11.923/) background apps and startup apps.
  
- **It's more privacy-oriented.**  
  No, the [telemetry options](https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89) are the exact same as in GAC Enterprise.
  
- **IoT LTSC 2021 is the only way to receive security updates for Windows 10 after October 2025.**  
  No, you can [activate ESU](windows10_eol.md) on Windows 10 as well.
</details>

#### Microsoft Store App Installation on LTSC

<details>
<summary>Click here for info</summary>

Applicable to Windows 11 LTSC 2024 and Windows 10 LTSC 2021.

**Microsoft Store**

LTSC editions do not come with Store apps preinstalled. To install them, follow the steps below:

- Make sure you are connected to the internet.
- Open PowerShell as administrator and enter:  
`wsreset -i`  
- Wait for a notification to appear indicating that the Store app has been installed; this may take a few minutes.

On Windows 10 LTSC 2021, you might encounter an error indicating that `cliprenew.exe` cannot be found. This error can be safely ignored.

**App Installer**

This app is very useful; it includes WinGet, enabling the easy installation of `.appx` packages. After installing the Store app, download and install the App Installer from this URL:

https://apps.microsoft.com/detail/9nblggh4nns1

**It didn't work. What should I do next?**

You can install them using the package provided by abbodi1406:  
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
| **TPM / Secure Boot / UEFI / 4 GB RAM**| All required    | [Not required](https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) 🎉 <br /> Also not required by [IoT Enterprise 24H2 (Non-LTSC)](windows_11_links.md) |
| **Update Support**                     | [5 years (until 2029)](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-enterprise-ltsc-2024)         | [10 years (until 2034)](https://learn.microsoft.com/en-us/lifecycle/products/windows-11-iot-enterprise-ltsc-2024)                                                                                                                                                                                                                                  |
| **Digital License (HWID)**             | Not supported   | Supported                                                                                                                                                                                                                                 |
| **Automatic Device Encryption**        | Enabled         | Disabled                                                                                                                                                                                                                                  |
| **Reserved Storage Feature**           | Enabled         | Disabled                                                                                                                                                                                                                                  |
| **2 Simultaneous RDP Sessions**        | No              | Yes                                                                                                                                                                                                                                       |


- IoT Enterprise LTSC is the better option.
- The only difference between IoT Enterprise LTSC and IoT Enterprise Subscription LTSC is that the subscription edition supports a subscription license.
- You can switch between these editions (IoT and Non-IoT Windows Enterprise LTSC) simply by entering the corresponding edition key on the Activation page in Windows Settings.

|                          |                |                               |
|--------------------------|----------------|-------------------------------|
| IoT Enterprise LTSC 2024 | IoTEnterpriseS | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Enterprise LTSC 2024     | EnterpriseS    | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |

</TabItem>

<TabItem value="Windows 10 LTSC 2021" label="Windows 10 LTSC 2021" default>


| Features                     | Enterprise LTSC                                                                                       | IoT Enterprise LTSC                                                                                        |
|:-----------------------------|:------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| **Update Support**           | [5 years (until 2027)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021) | [10 years (until 2032)](https://learn.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021) |
| **Digital License (HWID)**   | Not supported                                                                                         | Supported                                                                                                  |
| **Reserved Storage Feature** | Enabled                                                                                               | Disabled                                                                                                   |
| **KMS License**              | Supported                                                                                             | Support added after update 19044.2788                                                                  |
| **$OEM$ Folder Support**     | Yes                                                                                                   | No [(More Info)](oem-folder.md)                                                                            |


- IoT Enterprise LTSC is the better option.
- You can switch between these editions (IoT and Non-IoT Windows Enterprise LTSC) simply by entering the corresponding edition key on the Activation page in Windows Settings.

|                          |                |                               |
|--------------------------|----------------|-------------------------------|
| IoT Enterprise LTSC 2021 | IoTEnterpriseS | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| Enterprise LTSC 2021     | EnterpriseS    | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |

</TabItem>


<TabItem value="Old Versions" label="Old Versions" default>


- There are ISOs available for IoT Enterprise LTSC/LTSB 2019, 2016, and 2015, but they only have the Non-IoT LTSC OEM key (generic, not activated) preinstalled. The installed key is the only difference; there is no distinct IoT edition available for these older versions.

</TabItem>
</Tabs>

</details>

#### How to upgrade from a non-LTSC to an LTSC edition while keeping files and apps?

<details>
<summary>Click here for info</summary>

You might want to check the [Windows 10 EOL guide](windows10_eol.md).

</details>

#### How to clean install Windows 11 IoT Enterprise LTSC 2024 in a non-English language?

<details>
<summary>Click here for info</summary>

IoT LTSC edition ISOs are only available in English. However, you can follow the steps below to perform a clean installation:

- Download the non-IoT LTSC 2024 ISO in your desired language from the section below.
- Follow the [PID.txt method](clean_install_windows#windows-11-on-unsupported-hardware) to install the IoT version from scratch.

Alternatively, you can install the non-IoT LTSC edition in another language and later enter the IoT LTSC 2024 key `KBN8V-HFGQ4-MGXVD-347P6-PDQGT` on the Activation page in Windows Settings to change the edition.

</details>

#### How to clean install Windows 10 IoT Enterprise LTSC 2021 in a non-English Language?

<details>
<summary>Click here for info</summary>

IoT LTSC edition ISOs are only available in English.

When installing Windows 11 IoT Enterprise LTSC 2024 from scratch, one advantage is its relaxed hardware requirements. However, there isn't much benefit to doing the same with the 2021 IoT version, since you can easily change the Windows edition later. Additionally, the PID.txt method for installing the virtual edition from scratch is only applicable to Windows 11 24H2 and later. While there are other methods to install from scratch, they are more complex, and the results do not justify the effort.

Our recommendation is as follows:

- Download the non-IoT LTSC 2021 ISO in your desired language from the section below.
- Install Windows using this [clean installation guide](clean_install_windows).
- After installing Windows, enter the IoT LTSC 2021 key `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` on the Activation page in Windows Settings to change the edition.

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

**Windows 10 Enterprise LTSC 2019**

(Build - 17763.316)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (Buzzheavier)](https://buzzheavier.com/kmr0i1zoz8g8)<br/>[en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (ZeroFS)](https://zerofs.link/f/9GqRAWozjpsC1yIc6uzJ1HURkmqB1XZ97MONdI4G5pR8ssCKSljB7liI94c9dVQZ-_A/) |
| English  | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (Buzzheavier)](https://buzzheavier.com/9es30p2w8fsb)<br/>[en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (ZeroFS)](https://zerofs.link/f/TGRR606E-V9wJ5ssUg5BiIaf6R0etdkHHbsoSHTmUy-S5To4nfbIuXVYHmYJChBoOwE/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.dvp](https://zerofs.link/f/C0NjKPCxso4fKtjvFfJehWAIFtRzK0ovxskU98zRO4j36waqrZXUhaQ_MN2vjUU3VJ4/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.dvp](https://zerofs.link/f/Cgm-yvW8-_temnQJcXdnSkgiyh8wJDJeVGspaqfr_jVSIiEC5NZqakP5kX2rnqRQVNY/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.dvp](https://zerofs.link/f/vwZX0wxNQfbcn1mTdN4XOUVUMgn3ZuirEUsv6V8JnePcCPLxvkb24j1sjmLIQDSQ3Lw/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.dvp](https://zerofs.link/f/ixQbZUZrX7UsE-9U34cxHQPcNMooLCWZao43Hehdi0nvRmNvGRNXFmHetYG0NTllS7I/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.dvp](https://zerofs.link/f/A3FFZau5O49ygUdKZf8eNl1-v0WsZRq5B8y3-ohWJVNrAsslfjzlwoh77cKGyKvqxc0/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.dvp](https://zerofs.link/f/V1xPy81ROriNWi-muc5VnEBju3n5C-iVrKSxnkcoC47lO48mJPWXLRLWSfQoRSr9jQ4/) |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.dvp](https://zerofs.link/f/_wWlu3C9bi0Q5jSOVkZyIbFlvtIJfqjlP0ZGaD1UmTWYEjto7w1kzZOehKZhDlKZYsE/) |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.dvp](https://zerofs.link/f/uj3Iut46gQLi5EA2gKQCI6zdEHdR7i8vb5J-noTqdQROpNIoB-6cJWH2ssQdwNcFvDY/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.dvp](https://zerofs.link/f/qDW2T_3hGcrXnT1Qyqn1DZqacgH06yXfCBdSboRqNtIxspchqSpNL3jGucknGr2Iav4/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.dvp](https://zerofs.link/f/iB7vlnR73oZ-0hxe0kHpsHrw_7Mj7w7d0Nby-0WT3AZF8fm9Jx8_jvug2zFsyObl-48/) |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.dvp](https://zerofs.link/f/YxaIniR02e3aLUGAsEPzMOnsOhqLsNv-9CAQoZfVkALDVTCEkGHm5Ws_aRD5s4JX4jI/) |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.dvp](https://zerofs.link/f/zXltHdwKAiXLie8OkYLneBtX3BV7i5ehSiuvEDY3kf_w292uy0huKGKQs-kY4jmBbQU/) |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.dvp](https://zerofs.link/f/UL0pujUq7OWhtLjVbiH0-HUQTBC65pNth_D6QUK5sP1TIg2g1QfReUnR4QT8gls7NcQ/) |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.dvp](https://zerofs.link/f/P2R3rsPRbCpIg_YHbc8oLILj1tdpm2f0bDWbmmYkAbdFu1Njb1ZURQjgs69pzsOptMY/) |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.dvp](https://zerofs.link/f/2Ny98317f-eifpsWgiUdyKE3EdQc3jowOKNwagLl6AQWtmA-bfpD9Vbep_ZXp67V7NA/) |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.dvp](https://zerofs.link/f/g-5z2M_zxSSlg97S9ioOXX_x4n6MZIWwezyqIk0fgmklbrX9axTYtM6BjiL9fVG1ybk/) |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.dvp](https://zerofs.link/f/CHYFGaFjBnGiHTmqx2mjliLCGPy-RPlqOhuG5MEE-XbXBLel7lVFjN5r5Y5qdtSxFGQ/) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.dvp](https://zerofs.link/f/rRo_N6Ccid9NzG5X33kOt5FnwVY4-BrTkJiqA72X6qv1DSONxEejrgQXkQefzsKa9lA/) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.dvp](https://zerofs.link/f/bGZHVOLeIcpH9H0pc8mOUDKsqO4WhzHPwrJYJcgvl-rGaFqSjjhj6rd8zcfMVxyF9wk/) |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.dvp](https://zerofs.link/f/uiCvBwzhZQ9ngyUx-_wLtRf2myk1gBu9dkKN7dITlguPA-gDK9zmILdCnEgrqGcXbP8/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.dvp](https://zerofs.link/f/eMHjfhwlgq45dm28iJy20_WJPM_JYcMPsWHzFgXEklueRz5hpqxDEnpVAJtmFUdObAY/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.dvp](https://zerofs.link/f/KH75rh_7L8FN17ISxM3AyoDo2SARdaZ1LRdHKbtOV3rOMO38VjxtaZ-Bbdvb7qtXs5A/) |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.dvp](https://zerofs.link/f/jEt5QVAb8OszdRPa4wgbXKejdnCJB1dQ0l0thRFOu-8ZErTfgwe2HqZQg8f_s-r8bMo/) |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.dvp](https://zerofs.link/f/FyPj1nmkBM3-Un5l4YquxfRBFUsfnLNNicGEmxNDENWj92DAtF4ruqm3Hl5gCyY9sCc/) |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.dvp](https://zerofs.link/f/whkc0-JPC-o6s2qAi8ymobkg1ETUrce7po17HQhlIHbQpZ6olty94x7tRr6wra_OXfI/) |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.dvp](https://zerofs.link/f/B7RfTcwX8w-HvOsikbUfovMq3VAoJ2ywK_ubV01KhW_fc1au-MnRy8cnBiYdImrziWk/) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.dvp](https://zerofs.link/f/M1MpOL4bqqx_oNnRqu99v_RUOuqAv731_s8EDKznBb7dvQIbU3kmLWo71IOYAMdfqcw/) |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.dvp](https://zerofs.link/f/T6lF5ckc8J33I_wxspBM0Xa-akTEi54NWxvUXqU8_j8F44UaaGn3e5qUl9zcxIoSWWc/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.dvp](https://zerofs.link/f/YHSh8mhQU5FsW7M59EzbyBHzXPdvu3lUr9589Gbx4TXmTpKnFfDE0fNZSpNsaJHO38U/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.dvp](https://zerofs.link/f/vRIKhY9bWXrgiE0ifiSLJ8yvOZxrSox6uSMHsaa6CFYiY3tD8va1iqlVYwA6EkfDKgs/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.dvp](https://zerofs.link/f/oLksS4AUYgWLqDZQFmnoFbB6qE3gfT2DoRoZT9HcZpIWGwKv8UxqrodLYwSt3PuQgI4/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.dvp](https://zerofs.link/f/o7_lF8h5SpTku0MR07ZdS7djeyOEcHTu5Rg7hyvQoq0v1MguF3gtHKVhi9XwFHA8kk0/) |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.dvp](https://zerofs.link/f/VGBCoPh59bozoPvRT-GP3DGAj_ZvpyNoj_TP2nDQ6v767vTckbS_wFXN4ew00IptVZk/) |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.dvp](https://zerofs.link/f/zYbntaQxbxE3rbf_f_jflWlfq_ft9jY9L2q4odKXnd813H_OIgXtK1okWKO66sijT6s/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.dvp](https://zerofs.link/f/DzYdoXm9wVMPs9bdOty2S4dNGVUw5yXjrTQyteYSdARiuispjNHcxM1BADAqNbdPazY/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.dvp](https://zerofs.link/f/ajreB0G-prmtS36e8FbulJuKo6riMZiwTEydkpjBk2MMkn7yXZrxn6nZrsFrahxJa-w/) |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.dvp](https://zerofs.link/f/mF-_xcju6SRr__QMHZ-mJPhtEy7xnC_7K6ECZj8M__j-w4jElMDoqFmoBQR96FsdzSA/) |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.dvp](https://zerofs.link/f/nHqTFnY_22h-CCL9bpmZ-ftvomfSGaw_37cF085v7ai8TnGrmBZ4BoXou1YERfalmvk/) |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.dvp](https://zerofs.link/f/yK0GgPRE4vqlvGD98TLfWpPpn_ZEH0dyBBuMB2I4PMyrg011Ke-ylxn6WA-GEUz_eZA/) |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.dvp](https://zerofs.link/f/3kdRNElyMWKDUAX538N8NsB29neo9yTn4Vz-7JAoTG-mplAjJEL6_gsejYWzSzgKQu4/) |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.dvp](https://zerofs.link/f/h1IunFgN96Cs1I7yIaHlnDVrNSxD-y2YXfMB-MzrCuxo_vu4pfs5FgazzOhP2y1rgg4/) |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.dvp](https://zerofs.link/f/Lhr6jS9hETCooNa_Bv2Cs7lWT2KP35MGX02grK6MlD2QLvm4GtVxTeubctnHgLE5PNU/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.dvp](https://zerofs.link/f/TaakmWeUqJUY7CwlUwlpeEYFN8wuYG90mzF91hNHRlN_nj3Sr8r8wR3CVnquwd88QsU/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.dvp](https://zerofs.link/f/kL5PNwBKsNXTinH9id9ys4YfKGA02Z2Zk4Cif1RKK6rliU2B3Mu0tBnTkWWmP2fzHqc/) |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.dvp](https://zerofs.link/f/J11-WdHSl31StRpD6YCsOCC1CKyTPzeH08_A0ALPkNEIxeTaESNFGqVEVujTs7S5We8/) |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.dvp](https://zerofs.link/f/v4ugig4aMKzURmqkux-p6ECvIMipqiFgGVQrYOXLcqXGpQlqgzt4s34hlGS-NT6kZ48/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.dvp](https://zerofs.link/f/Sv4hk7CNmmwjgg6rWE1Oz1vHm5WXUOs6pafA9uEm6I5KUoAzslNNVfapcjYMV1pFaFY/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.dvp](https://zerofs.link/f/kFXifx8uJaYWSGNwzAZjeJQiWUnkMNNwfhnZpgKp3glJr6DdgJTlMo6LB2S3MwkM8ts/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.dvp](https://zerofs.link/f/6-lnYFA_KC7OuzlVExNTRRCs1ehmteo9qP5xZSwNHs5eTc2x5R1tg1VIdHuUXC_lDB0/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.dvp](https://zerofs.link/f/qjqN4nHGxBQ4nScrZZIWXtHOhuvTOgxuQ1XWv7CBzRGFZVaTuPfEQzdE5Da98OfC2Sc/) |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.dvp](https://zerofs.link/f/BgXG7h4OsdkwlBJMz3JE5hRC7Ocun70l0kKSirTbtkmLlhTDklb1F-PnrFaZEc1FNqw/) |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.dvp](https://zerofs.link/f/o8S3eAAFRIlmFNctVgIGg1R_VacnehUb1pVnFWbZ3ASIqLFV580V8vAHUbfyg1md9Hk/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.dvp](https://zerofs.link/f/AewyjkSufpVFRw9sHrZ1V4oAo4ztRXdnymw8tsEpgNXd2v40lYAo1dCdqpVYLnwPaeo/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.dvp](https://zerofs.link/f/Z86oQSQ6RKmXDaavxhlcSHfzm19AKzwysQgRAjSGQb3Q__fUv6N-bfe6VAU953m1iv8/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.dvp](https://zerofs.link/f/oRGIRonoX2tfmfECYl0XNoD8hcOtOcqBwUu3VJVFuOXZD0jlSaYLIVzk09me6CcjDpo/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.dvp](https://zerofs.link/f/JyFaO5DQkn2ZzokjIrvXrbto0D4XrV2F9uqtWeMyCng0OIy-pPo6rulWnTr1vWXW9Pc/) |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.dvp](https://zerofs.link/f/4aMzjBjdvDUofSs8WKYklbodU6LFOW7baqpI40Slq3AJo5wttvPypgV5VDmWfzt1ZWg/) |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.dvp](https://zerofs.link/f/goRqKS-TZvYkfkiVQcExu4jzBSxPL8Sdd2cr4jBVcrkj0In9S37bvp-omfO4wy1aWsk/) |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.dvp](https://zerofs.link/f/69wCLGoVDojDwk4mV_qgQLr-Td9jAsM5jo0kUG19vjaOPbKZD7XoXXQzuTLRaxTZ6yg/) |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.dvp](https://zerofs.link/f/64V2GhxkArZFRmT4HscxmyaI2L9NzTf07Abv9Q6ULys9qY8GPtgcvj2O7MbGHjLHawM/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.dvp](https://zerofs.link/f/f8c44SYcxEEURqE8kOh6yiBHDw09Mw96ZYE5gtHWut4tVS0KqNZTu0vTtIew5m8pHNM/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.dvp](https://zerofs.link/f/duJB1zPgtBZvcrCiS4Hm5Fy8C8pEmA5yy8DlOOZIKZ_W0nYdWVbqYd4Vzdz9gSsttIM/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.dvp](https://zerofs.link/f/hKrGRUH10sGbN0xPS6iJG41D5aI-2POmt8JdaPaRYSLvLTtiNE-FVX4sEjrh7eDr-1E/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.dvp](https://zerofs.link/f/vq2xkc4AK9iwaOEpY8QGhUuuydGuDF8QYGyUmfITV2_eGkNrYvJE6nFsTEsqh8eCjmo/) |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.dvp](https://zerofs.link/f/M5HMPeDEyBKNH0PsqW_DVuzozwwbW8gL0NlSPduYL8ybFyRFFy3_He7uQAtRjNtDhbc/) |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.dvp](https://zerofs.link/f/KSTFk_TZ-jDGo2PcFHxhDwHkJ_tIPlc16QtBrJWHqp7O9uGA9U1JrHjPgaQUyik1-KM/) |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.dvp](https://zerofs.link/f/8GhK-tQM8IMnpEuehpm2n24fB8bfoCBT9YXPztx-s0hG5BSV8Wl2CMQ6iJh0rlcJsVQ/) |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.dvp](https://zerofs.link/f/SJHhOAmw0KNBDz3kYWIKEQHIKcPADR2MdXjDqt4dwRILOIEvzZYc8eko0hAWUyoyHnQ/) |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.dvp](https://zerofs.link/f/4S7vW0eDa7mV1xz5egxp6ZDywpPzp0s3ZyngPnbX5FoHYFpmSKx7YfacmkDc54SJMao/) |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.dvp](https://zerofs.link/f/KyFgiCiGfx6UaKg8SavGZ8foaoDgs2rb9gKesG2rBNEEK8zZs-opSNeWRq60LB1UURU/) |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.dvp](https://zerofs.link/f/QPvTmChXBrEw_9YZ_g69OfgeRd1LWRKdvayXvl0fUit0GcyFPT1hVb3zXVBqvhdg_-8/) |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.dvp](https://zerofs.link/f/64u2ELZCSqppsRR5rblxIojEA23iw650kgZ_uhkWI_zTlQaj_mX1jAuPozaj7jJ32PA/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.dvp](https://zerofs.link/f/ixUnQ5QqsrUCejYiB54kxztj5t9mTVdm0amNs6FSx-0kek19hAJI77nOXrSQaIj2LSM/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.dvp](https://zerofs.link/f/atgXkTNDxxwbkMZJEu97A1s_TCQpTbqR7qMd2UGYhsBOgDv-r_iysVQkT85QwtlAGJM/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (Buzzheavier)](https://buzzheavier.com/ae46jbvqybiz)<br/>[en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (ZeroFS)](https://zerofs.link/f/Lb-dW2JjaC8jG-WOe98j-fcaln5P-G5ugzEhG2yn6n0qrHWNaozRTaBgxcvmzzWAt40/) |
| English  | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (Buzzheavier)](https://buzzheavier.com/kym06wh8mo3o)<br/>[en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (ZeroFS)](https://zerofs.link/f/gNxyekIG3Bzah-iWuPPtU_YjyfD5dloWjf04vnITzcXKvnCg-d7Ss_oxgYLCVliR9tA/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.dvp](https://zerofs.link/f/lcaZf3uCk5mqlsB_PX5gSFLqtKRXhshmaGsGrysEOOPUoRQ0JW8rjPt2rTs16SCAMo8/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.dvp](https://zerofs.link/f/7EqbfLO5aQFFy4EAsJb5WyiVg5s7xGqXmb3pvZWjV1YmT1y1T2oUfKZHefaneQXlE4s/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.dvp](https://zerofs.link/f/HEoZsCaNUKVb0nisNDkrwfu_zQa9Il1rrh5ZCfh4BGU6F6nm07l6Lz6dExynAR1QQsI/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.dvp](https://zerofs.link/f/0iM_ZAx9UQt3qecuF9LvVJBy4JCpVTLH66tKPImeBoF74PCrftL2ozCKjLLXSnbAZM8/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.dvp](https://zerofs.link/f/4j6WcNk7GZjTBSOoiDfj-oDsUHcv_xUotajvgAUPtnLJDzURlL8ffNOzqPdLsm2cP68/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.dvp](https://zerofs.link/f/_WEVh9yA3rw4p643OMXxHAAG3zCV2UD5gOCqOa_tcbIu18mORu0dzum3UKR6ZEyWEE4/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.dvp](https://zerofs.link/f/IrgAHz5ImUeghopDLeEnIFVxIS4-eMOwzXbzxv0VeQTAJt3Iuypg0il-D5_RaDTqMOw/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.dvp](https://zerofs.link/f/nK81kJNb0nPAIVSCk6nXQwMqn_gYaYttJfoizrrLG_xCJd6Puv0h6I87vyCKHyrBA-k/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.dvp](https://zerofs.link/f/EdAbJWmLIGqFu-hVXYkhNm9gupwetuWiew8IP_Q7NqnuUDqlM023QvoY0Ng-UzdCbDI/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.dvp](https://zerofs.link/f/l8RM5H10KC7Ls1s79anHHlE_7J4jBUYoRe9G7p0xjvF3ocO32XLMH4vJg1HVJLMHyrE/) |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.dvp](https://zerofs.link/f/WJFdHQMkFTj0SH4bNF_4uDjRnUUGbXCl9urFskSvreTpBQAoOU4oTFUFtKDP6GbNWy4/) |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.dvp](https://zerofs.link/f/TuF0RaYZ_pvO7B5MPLEMr468VY4O3EJBrhbbxAdaY-EZIX-9PJcjw72nrMoZlX2wtsA/) |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.dvp](https://zerofs.link/f/6pbkRhe1PLcKRXSxNvRIKCtXjOooUPnqS6jKoB7hnksVuJKRWlYdMeGEQNmD_wGBo5Y/) |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.dvp](https://zerofs.link/f/Hc-fi4lOadCqpShAx7OaBiyqNuBGzF8iGiGjb89DX7YnTA5QDtZWEGlIFunTIang7HY/) |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.dvp](https://zerofs.link/f/kCWLPpd-AWqm1e7DzCrj0Ek6Q69ZTZUDDom1WJTQ95k9rw4jTQjUqV39jPPctoS6p1Q/) |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.dvp](https://zerofs.link/f/S2Db1iT8-6tymhOYW18IoG6wmAH1sypzl9wNsg8f1rgmH_HSAmGY_sZdIqHtzEHXqEk/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.dvp](https://zerofs.link/f/vXQFnCizbF6mymNfn6gQ2_d3934vGyZDkMFCNdfbuTXcwjWxb31i5AZOTgvVqFFTScs/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.dvp](https://zerofs.link/f/yCcwn77Smu7LVFUhe7SRhVHpV-h0uHvPyDAcBZXN5RRlGjn1WUMHl1IWA1cajv3CRls/) |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.dvp](https://zerofs.link/f/7YOMzjsRaqTXHfQ5poGSYYcw81d1teU7HO0LfTQV0D7eGYgCoFQCRPAzfef8kz_byZA/) |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.dvp](https://zerofs.link/f/8_EgDgEO7ZN3w1aZm1F8SJNl9gbOqcxiakNwTLQD0rUFCum0wwSYKClL8E7LXiXl3gA/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.dvp](https://zerofs.link/f/tjgnWOgEhWYwmWvaB9QiRNZHhiBoYvhH4Rd7xuTeoKNks_ez-RI-SodlF1iaDgXWN1s/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.dvp](https://zerofs.link/f/j-TGbUULOlfgn4px7LbapoWMPPd5MjAA1iBdwSNEmBfp5KHC-gFdPX_L_XFmeo6584c/) |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.dvp](https://zerofs.link/f/moteiiYjGE1-A2_8bQMaiVpQJUyNHzcO0ovQLsUYaxklOy4u5HKLqO3JqsuIFauDsss/) |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.dvp](https://zerofs.link/f/WDLYis8WlOtsXd1l6-ymCjwudCCl8dgNoqgUZrRInO9S4s4wlj53VOc5wDP6so0YHKg/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.dvp](https://zerofs.link/f/AuyM_zoliwLuBYo9rcRSF5MK3dJU8WqR_AOHeiE8RpxStD6sKWCj4DQWwmjhnGYmIfU/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.dvp](https://zerofs.link/f/QlTp4TOqW8v_MwJ0RoiIfpLNXRn8sneh1X7Lwod7Iy5Rv8-el4FHSG0KFpZUTL4dCWo/) |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.dvp](https://zerofs.link/f/NSz7gHyr4zIyTE2b9mtE2UZVj2FJPZllJvxPKsj3vbcOXzDunJ0MjgLv1NUp4I64Y4Y/) |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.dvp](https://zerofs.link/f/o-mwufwMTtrkz7K0FfMDG618E2gYvwF1CefxFKqPHo2sSC3x8scqVrXqsDWkbyohg90/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.dvp](https://zerofs.link/f/ghvyTZiGsNXieDjeiFGSH3qr_ltakhj5Xn2wAX1oI_aZXO8B4-RWfu0kcz-ec-qF8gI/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.dvp](https://zerofs.link/f/S2AI7ozyp9-dpCl3UP6jaY3wO3XfVT7j3ecJjgL3EtpTLV86atHtYQieZg-JR2129O4/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.dvp](https://zerofs.link/f/PZF9UJklCx7bd4_SWXjLwCEDDtb3EKot46Jng2tkh8q5vrlKGnWjzNWrLgmoXq9E4rU/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.dvp](https://zerofs.link/f/qKw_D5JpREb0PHcNa4jrYGpmXFi-LgfnacbBhdS2EJKClTiDtfgvEanPlKP_fnJlzho/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.dvp](https://zerofs.link/f/CI4pZx7h-7-UbKS_ETLli1b-RdzbKAjJitmJkxa7SkS2N7ht9JMLuSpWjRalPQTreuE/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.dvp](https://zerofs.link/f/w24aZYIBXGuKYNtjMR12Bn8aXAvrMS2X_mqGONh9Bj6s3ehUdDAce4n5oixlRPcmQPA/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.dvp](https://zerofs.link/f/-nS2TpmPMxVRJbduPgp2J5UsM3qRWWyeyIBbHZa4KFC7fUmhddN9GW3x7YtVjTo_ndk/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.dvp](https://zerofs.link/f/jrCvKbD-lyF3XNSzQYwl134ZA9r3zqQ48BIV2q0k1h44cE62-JQdAmiLP5cp3Ln7Oys/) |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.dvp](https://zerofs.link/f/NLDmymnIC6wreuQ6uo0tNhifP8gfqIdKm6a7fTlrUcfV3E7Ya2p2xuPQanZQ7HaMqlQ/) |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.dvp](https://zerofs.link/f/GdI8IlICaJ2ZaZ2R5SGC2VMr9MHnQQTyrTZiunLcgPB3zgG6_cCX_vWlYYzB-iXeiG8/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.dvp](https://zerofs.link/f/zCMvsa4kAiSv2ODVxHEnCOLHC65dzX21N5WrNlbEMxXpslw667Up1cx1SnlrZewawsM/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.dvp](https://zerofs.link/f/F-AXOXp9Ofj4ARjFDDKTikZT94Pvw0YoVDwXGPo_rWsFYHYzwlD40-r5nNfsFNZQB7I/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.dvp](https://zerofs.link/f/uxGHqai14a6uNaH17cx204ajwGpW4T3ufqxj0urV6OnsbDPmA0xBUHhXuoQoZNSLoXA/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.dvp](https://zerofs.link/f/u1t3I_RdSoMfzqPSry3rcZfi2E2X7DhN1GvqOU4eLkHXFOayfmhCY89DbtDBsHA9Q5k/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.dvp](https://zerofs.link/f/jDj25ISZwuXdBfTHcjDh7_tsH4ywD4CTHZqTq70pVIHHmFIHNF79a1cBnoG2Cf2dzeo/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.dvp](https://zerofs.link/f/g-02jVjG84sHLwOuTdjVVEO_KtqZMgOQRihAFA6tmNKpQLoo9TYWF1e8qzy0B20KgSM/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.dvp](https://zerofs.link/f/iIWnZbpRJ0sTGaupRAJf7BNIBtgIoDuTilCM1g3dSj50QMoz34m7Ts5_AUd05On555g/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.dvp](https://zerofs.link/f/ly917gNvP2Nvy4Wh3dEos2bnS7Ym7G3h-FJHY52le3LL7ScGgEeJBWet_OrtCLEowOY/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.dvp](https://zerofs.link/f/2bbdM0HG5_XYnYtA_IHlqpyOjudSaSd1oFgokxr9XiofNBISWx9oKg2CEsfHQtmAZDE/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.dvp](https://zerofs.link/f/SR117sURbH8beGm63C7peUQEgz2pGZgxQSV0PPr8wINrHSEihVuIGpPtX7x3nstNDy8/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.dvp](https://zerofs.link/f/yoplmEy7dqp3JfFSBijpXapXd3lXZAemdUt5fjBSh3zrt5NY2QXeE0hbhJarfermZv8/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.dvp](https://zerofs.link/f/14jS8TTK73MDTmkzltI8Q9IPoqs9KzzKD3dtnT9xbwOnLysx9qQPIkWfu1vz4W5M2a0/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.dvp](https://zerofs.link/f/FJiINwdgQcvjHpXP5Sz4qJXtiWy27XIhB_SL-SdUCieaz3fn9gMbDMy7OmEr4U5k1ZE/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.dvp](https://zerofs.link/f/YLjcAFM_UvK_nCwtaFneeuQVeHS6BbnH_fKThLL9JsZugFURVZpKckV9qqXUZpwC3-c/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.dvp](https://zerofs.link/f/anVJtk0RwqrmFfSnS6LFEqV71Mw15xZNA9FAxhbrAlWRxpcPHWNSA-FDQqOpuEBgxSI/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.dvp](https://zerofs.link/f/FkglXWqognA-_Dud6iQ2gXBhA75Yvm3TsVkXcRgDOMTiZfNm-0e_GZkK2CJpIMuZwRM/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.dvp](https://zerofs.link/f/OE57lXHZEC4omqcg1gFR6wipKPzzugGqChdcBWrSMhTkU_bY4I6VC86Ykqch6IEp488/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.dvp](https://zerofs.link/f/z5-OCmz8zzEFdc0rmaqtZpyl7ACU-MWh1L0pVTge9ochxnDJF4cmwjPWEkM45BgGnlI/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.dvp](https://zerofs.link/f/4C5-apgViwA57PkJcazmpWazikREjzEPOwwdHCMrAqw56D_9vH4C5PRfWuyIFH6PsJU/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.dvp](https://zerofs.link/f/OZUla7wnd8yr2TJzcABOGvC3NuNq_EuaBBtSIu2cSLIQPlr1Qszaw1gV38irVeeTS50/) |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.dvp](https://zerofs.link/f/uCyAxj0eN5D5J_InsJ8Xnz2qjWKQSCsw_mz3CcHKzpsNP33SBgVeVgPaQYLz0Dd-CnQ/) |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.dvp](https://zerofs.link/f/dA7i9gGXwDBRAEjbzuoHRgSexNIzjz-9OGtTtLFqS6_mPIdXNHy6uVrLzYu8zoJzbig/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.dvp](https://zerofs.link/f/dgM6UIHS8vwvn09BgtSqRh-Tp5ysBssmb0HObxDLIRdO3tyEIl0ujbU2vuhSGDWsqDU/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.dvp](https://zerofs.link/f/UyYurAzTRkXsYAQ2NMbUlaRYcddrui0vWcDadoKWI24JHzL6nfDs5U7IFi6OyhDLYm4/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.dvp](https://zerofs.link/f/VE1rKaVN4zUpj7etuKZ1icJfzFHmyIXatsg4VefGvG9CvSBeoPRS1OuTQra07g7ofk8/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.dvp](https://zerofs.link/f/HZ8gT4j0AvJwu8KEUayVSehEknYqqZqooLbGzgafcEpySrouTZtJ6rkXxqsjSwJ_q38/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.dvp](https://zerofs.link/f/PSzNldaQ0rCZwYfsRhyISwZJH6FS_YbkSmst_kwK8RpvRKlXnfIGxh-TCXlvzS0AXP8/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.dvp](https://zerofs.link/f/oUD_Fqyl-U7JfORcNg6qe1xItAci9FGZCvFHPRSWy2AKCzwp1pEcxSEM3PkWz_5Jubo/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.dvp](https://zerofs.link/f/cuvydJPjHSkvqupmZG-3ecnwkCv-zPUjhbA82flus4b9ywXmeytCY6yb8iRDzF6Fm5w/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.dvp](https://zerofs.link/f/W73zEtOWfLOj_cw7SdX4fsV4DzFGRxR4m08V0ryKCwQ6_ZNdQ85lgWg1zlnUFuPfq4o/) |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.dvp](https://zerofs.link/f/Em1Y1nwzYkzMYhhI9HvSNWFsKjlPw73oF36SgUde0wE5JSk7pM_EERz6mAJpoZke4Q4/) |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.dvp](https://zerofs.link/f/Ko2dM4BD6pkgYC38TkMjQ5XK4nGH8Sb5Jx2y-d0Ne4eCPDKJtkRVY8V1Ewrjg22BrEo/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.dvp](https://zerofs.link/f/jxVWC7YI5hdYpj34aHqixky2oVREWZuRIXMuYFI9gaUaoBoWBr2cGGGv5A4GC1RRbeY/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.dvp](https://zerofs.link/f/DaiAaVil5w32SSxSoJiYIOLrE-inhx8Nz_1EB4vgmXtfWQI7XsA2ilfvmve5G-zj5tI/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.dvp](https://zerofs.link/f/CsnY_6T4E-K5f7aDHzVjtJHXHZFuHI0isQY-hQS42WxJxMELX7f9atiXGoI1s7GofiY/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.dvp](https://zerofs.link/f/5Yq8YDVECpmWJTgvNq6WuM0XhLM16nOwxngxQCFyVOI8wOfhanq-3UAT_bcVc5VyA78/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (Buzzheavier)](https://buzzheavier.com/bmfv0akebifm)<br/>[en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (ZeroFS)](https://zerofs.link/f/MGCByS1lWodmaXwIhQODkzREm4F44gKLBchjW-SA2cgDJjVU3JEkil9khmWPW0Acm6c/) |
| English  | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (Buzzheavier)](https://buzzheavier.com/gp4u6hbn0yvg)<br/>[en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (ZeroFS)](https://zerofs.link/f/t_784X2gJARB4TuyoEESRFjiSiSZEMXADqxL0fSw6jK8nCz6OZc-DFKp1PaQc3QUaUI/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link |
|:-----------------------|:-----|:---|
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.dvp](https://zerofs.link/f/63i7hdT1TmkR6gvvs_-8KgpIdb7p9LNLN4gfBhw6cT_2RgVrCSP2EB7cAMCXoi15obw/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.dvp](https://zerofs.link/f/XDFShZP611KsY7psntF5UtMjndszdzAdOF6mVpjNP8LKeQlLBseBMqhn4bZSABWFHmw/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.dvp](https://zerofs.link/f/N1BNmW85YNLc3hwcpfHTRvkCublqWJeXwNUhs5ihuf8nECgTpYzOJOIWvLbLlbZLUTo/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.dvp](https://zerofs.link/f/waRzb9jBJ5RwDfqODKFsFMZZGyoUAnbnp2XfAFX-7agIPXaUQTApHQfzH9mn2UPhJC4/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.dvp](https://zerofs.link/f/7p9-8s_Z_amEaM9DU7BtCLjYyEWhvdcboXqHbYREaIzTzq3LutqymLHqKwA4AaTYKv8/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.dvp](https://zerofs.link/f/uh_hOf5lMmDg9yiPf5EHkSAfo9xhWHEEgyHX9lHfS57a1Q1qyWEMWZrFe7KO175l6so/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.dvp](https://zerofs.link/f/bKmKbOZPeeF-jIUp9u7RKnA2EqFu69BkXko2OmfUqz_6Dr-AGyo9R_YVO6FGsFPc5XQ/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.dvp](https://zerofs.link/f/u8jGbpS2FQDz2vAxAZaFZQCXy3fcJLnLa0TdEi4zNDpDBlJMWSTSvE6w8y3b6mV3SZM/) |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.dvp](https://zerofs.link/f/NfgC6PsNi0_N6JXpNqC0vUe7vcmHM2VYS8sbDAQE6t7wqHuVf0MDWFzxZbOoy8xGSBo/) |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.dvp](https://zerofs.link/f/jAgSnrGuFKuSqHDB1r6THQL3rK0VV19IWCerVc17V2oVloznrpVKPhkLE4I_m3jgnK0/) |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.dvp](https://zerofs.link/f/nUq2L8fKNo8s3kgSiaZN_3O5183GmSHqFznwzEZ9CeWCPFLFNnnc19_1jHlI0lh8PhM/) |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.dvp](https://zerofs.link/f/2GSgZHDJc3L2aqrgyitVuvhKc6OHycQduBm1yk2IrnVIWJgnLqxrGaZEbsfptalUAVg/) |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.dvp](https://zerofs.link/f/wDi_R46oaUJHKgXV27Ha4Pucm496xfn0GzqTV8YKR1PCAffx72r_eHua3hgmKR3emtk/) |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.dvp](https://zerofs.link/f/hW973ee4DHxeA0nw3F7ewIjvSojGuHfPswpsNf1V-OGDBGrHvWUMko5wqUFQC99jriM/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.dvp](https://zerofs.link/f/nFXzEqjn4r8DE5I1fHPjxydnFlfrAES8N01qFmla_V4NTi8cL0GvIuyQuKH83D75Ulg/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.dvp](https://zerofs.link/f/9jiks7bhJB5Vv3wU3gnU-WT5XPBuvBX1BEL7fJQ6k44XCZ1Jbh5kZ0w9FRI1tNUMwb8/) |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.dvp](https://zerofs.link/f/2fjm597YNvP1NtQCHorGIMY9PHwjv6DSO-Jes2w8ZW0XvUtA7T5KEAckeBcej7hRgko/) |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.dvp](https://zerofs.link/f/Q7oWLbQ91KH-1LgAZT9Cfx8JTnZQgpdOR9JsW_IpCMnTJrdjAXxiepyDJ4HF6EYrBgo/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.dvp](https://zerofs.link/f/keG6i81geaELd5IMQh02rmxOpNOaoN5X2Zql7PfvBStLoi2qHdBj_k61oKTRxf8iuBI/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.dvp](https://zerofs.link/f/y3xvwaa3kTz5kXZHVydQRPfz-U6vY6z1ockoe0UM6ES-LUZvilsrs3ombxdUJQWdV7I/) |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.dvp](https://zerofs.link/f/UH_sAsKRfzP10ZiZbUndrMGn_kn6pO3RoRWyCdGMXyhEdoYUIgDLSJWN8YFWJqvnazQ/) |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.dvp](https://zerofs.link/f/_XApCxMR-BrRV1JeHT4iL2DBhsbPyl5wJ7mWGODoH4NEk9bwKXWeKZCPoZSmSFkZwi4/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.dvp](https://zerofs.link/f/gT0ykhoM5oIhjtf7AsCXM6FWXil9-0E8BccYQ4LB_qjBFmLwCn8Ujnx4pcnyovc4OC8/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.dvp](https://zerofs.link/f/KfNAU3PoG3dt23fuac-Mvy9QJPrZQrj7NO59Vqf4GK4JtDQlNLXF4W5X4THXRk48pRk/) |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.dvp](https://zerofs.link/f/91b1FlmODCRRIjCuGA9uhLkKE2YvXBthmvmiivKyxWaXxepC393i-0cUTJ1ZSOflN7s/) |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.dvp](https://zerofs.link/f/fnmx9VQh0iZ57Xn3UI1pj_rSG_nfL4DZu5ygM5_eI1aQMrIBciMYxjUSMy4I9PTFkR0/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.dvp](https://zerofs.link/f/lc-BDW14O_LfrKA9tXkDCKxJCGhd4t5TgDv_-xbzLNNkk2sfCJSam_6ZvY9TjmBVS2s/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.dvp](https://zerofs.link/f/N87nbQBb8EzQK8Ci7WrD6MZnpUtrVxwU4RJHfreqO-rjtmnxodS13s0L0Z3Imrno0Ac/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.dvp](https://zerofs.link/f/bB0EOVTOcHG_rRNUcy43ILi-8aaAKc8i7x1NNRirKTfXYkUXoALGIaodEwgcdZm9ilU/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.dvp](https://zerofs.link/f/2rKZUXTOowMHZamTp4KRRIHj9HvrMOHdaalw80AcKeCRljc8WDZGmscQIevzi3KrkmQ/) |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.dvp](https://zerofs.link/f/TKY5HVuT5qa5gVCNoOCVPCA01hW8G0d5mHHGyNZD3sQzYX4uaJ4raAAbvgPpwkXFXCM/) |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.dvp](https://zerofs.link/f/vztgFz2GPA_BhJaIeNJeiL8PKj1lcYdr6M43k2vziCumiiMyirGk-LMcw8b0Uwhx7iY/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.dvp](https://zerofs.link/f/qMiV4XDQM1C1pBXojy8iWungyFAj3XKBogpnwWVui57x6vHupSm3S9vVoD_LvdKgyOQ/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.dvp](https://zerofs.link/f/okgg-kpZYCElvJgTY2QEqPdbC2ddBPTk7r9AixqZtwZIK2B0WiMCzzjhPCGoNbtkOs0/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.dvp](https://zerofs.link/f/9LpTpvwc-cV_UVCIQp1f7w7lmSybxnR3IOZX5Syq5qh0x9Xe9XKphtOp90nNzkbR5Do/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.dvp](https://zerofs.link/f/4Uob23wOE12VKzFvb7y-N1rVQlcSK6ugVICjGlbs6ynJtWntfJmZharEtyyPWlFPhkw/) |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.dvp](https://zerofs.link/f/fSeE3Wms_UHd4rZlbZt7sVYwMfI0G0WQg2Ve5Gt9LoG0Ce86ktcGqrF1M4mS6bA8iRY/) |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.dvp](https://zerofs.link/f/Eaa2qP8yBuz4k5G9xGOqs4Y_QveFm87feq3F8AP3NK3u4Q99L-grIRyNkN4J0dyV8FQ/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.dvp](https://zerofs.link/f/ECizzqhyhppk_kZ0X2I_kinLPm7Vg-VVhTW54uBMo5of5LyzKSjGN8o38kJGoLz44Eg/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.dvp](https://zerofs.link/f/rQ5tAfql9UbBoqqwnyi7V2o_hEkPC9hM-MtQ6TvY5m_1MmHWqx1f3Uy82YIevvLzHCo/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.dvp](https://zerofs.link/f/14AFKOU1UiBOjYDI4ihk_TGwKS-YjBZRnqBOBgK23AKQlhoM3KZWFRUnumPHT7FOxt0/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.dvp](https://zerofs.link/f/7ixDw8UxkiF7VqAsbpZEpEbuOXWRWYj4nxLG8GIAtZnxZNBd8WanyiGMRUIgxTvg_lg/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.dvp](https://zerofs.link/f/8ODEmvCKJ5KysmIrmosYKJOpMAd10zn8SqRtGsrjV8cALaA9gRN2k8ve0JNcnw-HKxw/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.dvp](https://zerofs.link/f/iUvJzcoH-GiJ_T0rD5lnNYt7Ty2RCJ5rz5jQ2AtDa5yUgmSAgRG0il6izYLWwTAOaJw/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.dvp](https://zerofs.link/f/ZYZ4xBiMZAgXuTEq2n13Uxz4icdFZlXDcViqKBCc_FYeHtWZqOgmwdfGzf0dve9N8_M/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.dvp](https://zerofs.link/f/5KxmhxG6JDQ1Cd02hcuKQw3YYKZveUQOoVmHK4tf7tsy0vTXqj709LQPCLIeXqE47vk/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.dvp](https://zerofs.link/f/hpEsH78CwgHy8T7BxYPipk-Ojf8GgrzbbhfBLEhgyPhPA-jVx5SpM31HRs1WMCgG6UI/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.dvp](https://zerofs.link/f/psE2f1nh_xC2CDT9leuXjI3UKjG2zgVPaFIEkdoUJWvz_4W9Rt1m02sx9SNzSGmYET4/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.dvp](https://zerofs.link/f/tLsqkuQx52bA0QURkWZLj_3_8f1GnLKilK9cVQIrKHn6mD173lMfXrPegUTgrwPnLk0/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.dvp](https://zerofs.link/f/2jUjtuG33RHKQIfWIdfvJfeuSc-7Jk1RCCpDfSVE-1pup8NyRW8O1VH_JyS6WxtuYVM/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.dvp](https://zerofs.link/f/O2N_vnix6vuqeJpcF4UNhoITOyfjiXFirTdyEioTqfDR4eT5nxMJA1xEnL1Z9T2kr44/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.dvp](https://zerofs.link/f/6wdqytzWbRAfFGuutuh_7D-nLTfibtHSATuL_VQJ94qp1r29Ietroe8w0D4QPw2wzak/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.dvp](https://zerofs.link/f/HKUQL8w3RRZOMwAdBmP0mpCvn1PxGggC3bnmf6VZs5xInpeXyqtJuJZgLw1gfQmmtEM/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.dvp](https://zerofs.link/f/M3umUTlug4_SGLeoxZ-CaURgKXwkYb_z9tWVqM-98ySJHtbblq_QdRjoI7qT8smxBDg/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.dvp](https://zerofs.link/f/4klAnvHc4pdAwwohjx4OudS_3qHdJ03vk-qDtBjMPHg8jZv8UXIQP5g1Yzhpf_47q74/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.dvp](https://zerofs.link/f/l3eHyuRufZ_GD9ydIW8lJPEiaMSVrRagyIL_QJ3WAikJCevfrv0nmeCQQ__bZxvYiIk/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.dvp](https://zerofs.link/f/3qD331co9p-sJ_JbsUswFQhWAaPW1UaON-4NZUb65uvPDqV_TWzPzJRHOzxKR0MXB_Q/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.dvp](https://zerofs.link/f/uzGK3cTPRLqs2mH-KrTBikX2sU2lBfSEFLQNRdeB0VNanXfuAw_a1tU28MU02Yw_cD0/) |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.dvp](https://zerofs.link/f/aAquZdypHyFgfgRQYlgFAkWS0k3ipdavJqYSE1_fXwgO3eF40o3lbwlR2i-keFwbLzw/) |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.dvp](https://zerofs.link/f/5nfyb5ZPDZmE8NQmfU4abWdYG3z1Zexp4P9iy-LbokxsIu_iCRU8M8DXJ5iFqYTEfMg/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.dvp](https://zerofs.link/f/ahefogV-_UrwmkOXyaZIWwz19oSv_oeBNh19nRcJJGBWIEYO0nHZmWlGsI0_C_V8vSs/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.dvp](https://zerofs.link/f/Rj0UXvFkkRTHNUxqRV5Ohvl8qXdL0t-H5Ix55_HyjIaVLBGtztj_n3YcDEoXMmsOwVc/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.dvp](https://zerofs.link/f/0Kjb-vVHjYp2AynmA7Ir471ENMjQCT1mdl4ZkdLf7Pawjolj86OOWeh1hBulBZvzjRM/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.dvp](https://zerofs.link/f/9DQlXmYXU-WPQxSWhhhCSvzu_T6yQEFlLCPDhvHAbV1ziQzDkR1473Z_7FvI9X-wh-8/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.dvp](https://zerofs.link/f/HY17jKpB-V34XaWfKvEOjwST9VnqqQT_Ej_o_EB-2YYW4Of7Ysd7xsmwYgnvPrQddQI/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.dvp](https://zerofs.link/f/HeuV_Ly_QmlT1TwXhlTsQfdxCU4vNIL8kNZc-MPaqlBaucu4JnskHFFwC3geuLxa0WE/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.dvp](https://zerofs.link/f/Agz6bHgFw2SSN1IVJ3E61KJaIUQEmF9VkWgoG3_av6ZIU-jn4R-gj8cDOgBxU0AlQh0/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.dvp](https://zerofs.link/f/L3qs5ZdfBtz9IdpuGZfyBwVG0jLm9P8JQ7Tdf0q2SQUf1xSyDXG7qRmg70uCzz0YWZU/) |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.dvp](https://zerofs.link/f/i8qOgRbGlGhqw4n0FIG_HDg2fJvKUTwvOHDV97PAMwSl5UaakKBbMKZVwT7XaXMG2kY/) |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.dvp](https://zerofs.link/f/TqI7V91qh4s7j81qhpz9uRWnTNy4eyl14kJt2ViApz1NWKrGvpFpsPxb1Z0x2jg9CiU/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.dvp](https://zerofs.link/f/V9PMj0audZZ3fCBtOEOmnX_1zrzpXRPescUUrRGo2r4P4N2uoiUO02l2A9jefPwkl50/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.dvp](https://zerofs.link/f/b83jUnEcje71rvrJtlFB8YY_Mnz_0RO-5kuTSq3TDQXPqk5k2CgXHVuhL6iZx4EIhIc/) |
| Chinese-Traditional    | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.dvp](https://zerofs.link/f/PgVZBFGBflD04mQiFWrUAMrsYB8Mh7VSJXMKwc7HrAlZCyxgryMYqQ9TUoeTRHRvIU4/) |
| Chinese-Traditional    | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.dvp](https://zerofs.link/f/WEI_wsfsLpzrbzfYyhEFqgmgjcfxES32FCybrZhLlCG-aRbntp4dCWY2QTUGMnDusIg/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.dvp](https://zerofs.link/f/EhKW5Jr-14LzfMdMZml_r8JoYoSxu_AwGCaoMEmtuX9cm8yj-fF-RXAjbtwRThU3Yrc/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.dvp](https://zerofs.link/f/5KmGpWjOI6iV5YskeITY2hUVSXg_D7P0rdkYLkWivRhGzKJ-OOiaQKuH9HNI2Lnrrmo/) |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

See [here](windows_arm_links.md).

</TabItem>
</Tabs>
