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
| English  | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (Buzzheavier)](https://buzzheavier.com/kmr0i1zoz8g8)<br/>[en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (ZeroFS)](https://zerofs.link/f/gw2CD6ponn7Sy29DjwgZCL/) |
| English  | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (Buzzheavier)](https://buzzheavier.com/9es30p2w8fsb)<br/>[en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (ZeroFS)](https://zerofs.link/f/55qDeErhGjLPSvDPKmsyD2/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.dvp](https://zerofs.link/f/TUoZmmAWNqkhUNrz2bR8ra/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.dvp](https://zerofs.link/f/mH8vMkWBWSBBD5Jg9Usxxz/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.dvp](https://zerofs.link/f/CpRKbHCZzZNBV4RZ2zMJse/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.dvp](https://zerofs.link/f/jUjx2uxqdboZiuAE5Qukk6/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.dvp](https://zerofs.link/f/WWTGvSR5Hx97GcKFjYeVuv/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.dvp](https://zerofs.link/f/QHesRjae84XkU4puD7j5JR/) |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.dvp](https://zerofs.link/f/29vKYQ5GtMPb5Pek2k7WV5/) |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.dvp](https://zerofs.link/f/5JDkgN7ei57EsgyyqXbxPF/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.dvp](https://zerofs.link/f/7cowMFgBt7PXwT2eWwYerQ/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.dvp](https://zerofs.link/f/nn5JhCHigFFgMWz5BXZ8y5/) |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.dvp](https://zerofs.link/f/ajKUDumtU2DnJzuZdg8iUS/) |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.dvp](https://zerofs.link/f/T2AZokqB35HoGsz3gKpun2/) |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.dvp](https://zerofs.link/f/MvypRKv7B2oQjjTgGRQr7P/) |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.dvp](https://zerofs.link/f/EKoobhosmyFyBteScGuEAp/) |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.dvp](https://zerofs.link/f/gUeLL9zcxxgxZHZchzu2GL/) |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.dvp](https://zerofs.link/f/WixxM3FsgPSzotXdHfdmar/) |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.dvp](https://zerofs.link/f/gKgvs9hFgxue3JmL6B7kwR/) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.dvp](https://zerofs.link/f/BvMa6ikes5VzkYPmHUsjta/) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.dvp](https://zerofs.link/f/AzticgQfhGtnNChVcoXPpt/) |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.dvp](https://zerofs.link/f/XePumRDJHJwEiB2QMtucCJ/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.dvp](https://zerofs.link/f/9S79CYL2ti4sKGm8NChQTb/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.dvp](https://zerofs.link/f/cRxNEDAeecNcEpBWTzyDTU/) |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.dvp](https://zerofs.link/f/keSxGX3mxs9eTyAEoghWRJ/) |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.dvp](https://zerofs.link/f/7TwJPujYZ47C2qNGss4rkX/) |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.dvp](https://zerofs.link/f/AvVZGAXqtSyXN5ZGUoC6mr/) |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.dvp](https://zerofs.link/f/5CQesSXpURD94kYivmcXyw/) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.dvp](https://zerofs.link/f/dCh57vSg3xssnrWdKBcTdP/) |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.dvp](https://zerofs.link/f/Ju2b2EA2XAvPpmBs6YXgBB/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.dvp](https://zerofs.link/f/V8e3NLBuTgT9tSGrjjEeTe/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.dvp](https://zerofs.link/f/hPBfCKsdqeRyyYyK6fiaVx/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.dvp](https://zerofs.link/f/Bh568PthTbMbGizQvvnTPk/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.dvp](https://zerofs.link/f/StiR6a9FYdxQm5R7Ajc7rN/) |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.dvp](https://zerofs.link/f/RyAJQbQzKcpJzVZBCSESLM/) |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.dvp](https://zerofs.link/f/BSFLcZgpCHPqsM6Ssf8zVX/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.dvp](https://zerofs.link/f/e9gzJNKyx7pPjaStH5zNiW/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.dvp](https://zerofs.link/f/EhED7vNxfW9uKe7TFvv4o6/) |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.dvp](https://zerofs.link/f/MaUMRxiYKuTQD5HxxUwSNy/) |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.dvp](https://zerofs.link/f/h8XZspnUR2kdi4vVyu9p43/) |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.dvp](https://zerofs.link/f/YAeYyeBm7MSXgGMnWhPh4f/) |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.dvp](https://zerofs.link/f/3D9uTopNi47FgfHQGV5EfD/) |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.dvp](https://zerofs.link/f/eF77BHNzixcL3joyrHLS94/) |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.dvp](https://zerofs.link/f/33hrkPdBzQuTraN44TQFMG/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.dvp](https://zerofs.link/f/KUn57gkp4BusYCGREVrYcb/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.dvp](https://zerofs.link/f/L2CeZyxEHsrJQ4JtnuRNaQ/) |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.dvp](https://zerofs.link/f/DdbvE7MPigvPW3CXFzDvg7/) |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.dvp](https://zerofs.link/f/m25di2Z4iLRYha6N6SD8ur/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.dvp](https://zerofs.link/f/MGRukSvXbEtiDGfBkeqEqG/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.dvp](https://zerofs.link/f/LjwLEnBr8CwgG7R3asUvr6/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.dvp](https://zerofs.link/f/GWHP5V8gr7LXiXLX63pt2q/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.dvp](https://zerofs.link/f/JB5istnagVGVpq8hNuJ4JW/) |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.dvp](https://zerofs.link/f/DGMAKJvDHQm3Tk22nrknsL/) |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.dvp](https://zerofs.link/f/ShyfvNHj84wcua5aRjgqLs/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.dvp](https://zerofs.link/f/hG4aerisrkdmeaGjqCbRxx/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.dvp](https://zerofs.link/f/ASyStYeHjDp7xs4PdrY7xj/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.dvp](https://zerofs.link/f/SkRCGLHjMCtWthKoNdz5Ds/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.dvp](https://zerofs.link/f/ZszrmJLLztaA5YNegCCPXP/) |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.dvp](https://zerofs.link/f/WZWEKkaeZXjCrnVsbNDKAj/) |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.dvp](https://zerofs.link/f/heGKxY2QxJoZfFqVeP3aim/) |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.dvp](https://zerofs.link/f/Jc2QB9ce6aHbZmTbEPspFt/) |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.dvp](https://zerofs.link/f/FbzxZL6KouSLqEiSVcBd9A/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.dvp](https://zerofs.link/f/enP83EydB6Fc9Jeapsp8FZ/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.dvp](https://zerofs.link/f/c8a7SAUw6V8M5JWNUEyg5V/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.dvp](https://zerofs.link/f/DFqBCg5DKUiqzjNP75JiWU/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.dvp](https://zerofs.link/f/ax2cgb78bNAvHMxWFCGxk2/) |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.dvp](https://zerofs.link/f/LqTkHRcc4m53vUv2ZjUP25/) |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.dvp](https://zerofs.link/f/Uk5hF5JiEt294Qw6XMhKFB/) |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.dvp](https://zerofs.link/f/bQE8PY4c2a83nxXXz5oNLu/) |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.dvp](https://zerofs.link/f/JMiBrLjtWxUrjq4gE64pLp/) |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.dvp](https://zerofs.link/f/WcB26oRUgAcsC8wNJcqRFR/) |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.dvp](https://zerofs.link/f/TA9EYhFbDXWihS264ZPuLc/) |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.dvp](https://zerofs.link/f/VAFFHiLudDuruyQMFpHVjW/) |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.dvp](https://zerofs.link/f/PkARuG3Y4zfwdRneNpjqXP/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.dvp](https://zerofs.link/f/RgBcHAowTSfLwSMNBnYsmK/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.dvp](https://zerofs.link/f/49vR8Uyyk3hxjzbUsrWynU/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (Buzzheavier)](https://buzzheavier.com/ae46jbvqybiz)<br/>[en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (ZeroFS)](https://zerofs.link/f/XHs8rriNmsL9nrScLjuXBg/) |
| English  | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (Buzzheavier)](https://buzzheavier.com/kym06wh8mo3o)<br/>[en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (ZeroFS)](https://zerofs.link/f/hMHK8cq6x526r53iCqq4Tc/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.dvp](https://zerofs.link/f/bpN7ENbsWqwjGfKjbcQeh8/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.dvp](https://zerofs.link/f/8BgRmsyg9pGYXxERji3Zry/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.dvp](https://zerofs.link/f/CWuX3LKciDgdWLtZroBiwB/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.dvp](https://zerofs.link/f/a8seuKt26zGusid7wvQmeJ/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.dvp](https://zerofs.link/f/G33MiwRgLVQEPpEexZQ5Tu/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.dvp](https://zerofs.link/f/KXH5HeoL7yJ9mtoqp3oC2n/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.dvp](https://zerofs.link/f/CAUJbfmbJNdc2nv3wBVPzj/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.dvp](https://zerofs.link/f/8bCEr9kqDYZauD3rQvHoPK/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.dvp](https://zerofs.link/f/6uarymTk7PAUSGVweW4K2M/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.dvp](https://zerofs.link/f/Qmgvc6f7EhRN53BpKo4e89/) |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.dvp](https://zerofs.link/f/exftUJ6ohxNwZ9DJZFRV3a/) |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.dvp](https://zerofs.link/f/CpzNzaJfnnqpStocBY9seS/) |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.dvp](https://zerofs.link/f/hcN3bATYjFz4wuWs9WzivN/) |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.dvp](https://zerofs.link/f/9dAKfsvn5GEt3ZCjyXauJ2/) |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.dvp](https://zerofs.link/f/EjzVK7mJ39prKGbRydnAFs/) |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.dvp](https://zerofs.link/f/GNfNKfpjtdTeUAQG99X3Dk/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.dvp](https://zerofs.link/f/5KVyj3oyb2pPYvucZFJfe7/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.dvp](https://zerofs.link/f/XjZ6DGNvsrD5vhQqijWGnm/) |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.dvp](https://zerofs.link/f/Zq5FmJQprNDKaNDRKhXoJE/) |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.dvp](https://zerofs.link/f/LhDheZ6hgFg8diPtsht9xm/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.dvp](https://zerofs.link/f/jPW6BtBBhwT2nd54viqTTr/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.dvp](https://zerofs.link/f/YzJrXHZ9GiwfXv4qgNVCef/) |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.dvp](https://zerofs.link/f/QmDMTDSjzWS7Fgz3Cs5vjB/) |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.dvp](https://zerofs.link/f/BsebQLB3DCaTNyR6WMNmTH/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.dvp](https://zerofs.link/f/ZjtNeaUtrGZZKbgaRvGQBF/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.dvp](https://zerofs.link/f/MUPpLPNUx7vj97csMjNgoL/) |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.dvp](https://zerofs.link/f/GZQzJNYpw95HpuR4hgsKJA/) |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.dvp](https://zerofs.link/f/dMq7HdYUiZLNcdzLAEEKbC/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.dvp](https://zerofs.link/f/P5HSsFtdhsiBhxqpbFdDr6/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.dvp](https://zerofs.link/f/EYGr5R3rMCYYAQ2udJHyEz/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.dvp](https://zerofs.link/f/n7TN97PEcpmLifZNxNZ4Te/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.dvp](https://zerofs.link/f/9xubx3NLyjQYA9e9gMrF5o/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.dvp](https://zerofs.link/f/ZrrtEBLKD4wjRui2Gmz7dE/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.dvp](https://zerofs.link/f/AWbUMuHnrHGBebezEHVatr/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.dvp](https://zerofs.link/f/3isLsUjhc3hLegDz5dxapB/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.dvp](https://zerofs.link/f/Xi9jsNRZpvN2G5EBeAFwge/) |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.dvp](https://zerofs.link/f/cKsjSp77m6EMkvWoHFwiKY/) |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.dvp](https://zerofs.link/f/mzEypSeR5DW6MdBqHqxAdS/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.dvp](https://zerofs.link/f/M2s2PkUhdrmRH7sdNNvYmw/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.dvp](https://zerofs.link/f/d4hju36ypxnDoE3NWW3wwv/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.dvp](https://zerofs.link/f/AWMCckCNPjj5SiJh9GiM9q/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.dvp](https://zerofs.link/f/FyYZ6dxbQZZ3aL2GVGZy4K/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.dvp](https://zerofs.link/f/HVhhyLYuCAbewpgEGJvc7m/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.dvp](https://zerofs.link/f/nwQjHET2abX3AguXmTycgj/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.dvp](https://zerofs.link/f/7kxQjPhcvheWVWLyZgmdU6/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.dvp](https://zerofs.link/f/Zahjz9Bxmxbg49yMyHr9Pk/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.dvp](https://zerofs.link/f/cG2GLGwbQQPMzE9zsQ9zWd/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.dvp](https://zerofs.link/f/F39RhLFUHjumHqjzbiRakD/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.dvp](https://zerofs.link/f/LqDjmdgBt2TpGoiWfCvT69/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.dvp](https://zerofs.link/f/39pa38LXdTWgPrDcad5NJ8/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.dvp](https://zerofs.link/f/RwfiGHmDjK3RQszEsMSaMa/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.dvp](https://zerofs.link/f/kwsnyWfCZhEKEjgLEkFBQF/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.dvp](https://zerofs.link/f/3unXhKBhHiVSDMbeLfySZZ/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.dvp](https://zerofs.link/f/JHAE8vPZYzGvPRKYNBJndt/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.dvp](https://zerofs.link/f/kiEw3Yz2YrBVDegWxSYJVQ/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.dvp](https://zerofs.link/f/STGiA6NsgcnQc5kwivC7Yb/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.dvp](https://zerofs.link/f/kverAFrqCfRSSeiBCHnnXp/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.dvp](https://zerofs.link/f/iYoNnWCCGi3vHHf79583ew/) |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.dvp](https://zerofs.link/f/HcHX8Q7nGBcqvo36JHbh6S/) |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.dvp](https://zerofs.link/f/bj75TBqJiPSHsDHwG7C3L6/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.dvp](https://zerofs.link/f/hcf53xyQfeA3ogmDTFk5dg/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.dvp](https://zerofs.link/f/bdcbem6iNAaGYfhznxDTbh/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.dvp](https://zerofs.link/f/NbJSZnTaB5CnYLMUs8gFzA/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.dvp](https://zerofs.link/f/e2wFoSbzqUyreLvDofYBNi/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.dvp](https://zerofs.link/f/68wieKZVBf6XWXiAJhnjtw/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.dvp](https://zerofs.link/f/nwcct765Exahswun8j9tHV/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.dvp](https://zerofs.link/f/WQbrrhRUvQA3zkfyxKsDav/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.dvp](https://zerofs.link/f/UoP7FuZ3omKfxdMivmX5e3/) |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.dvp](https://zerofs.link/f/cKHchenEhM3YAR2Prmqv3e/) |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.dvp](https://zerofs.link/f/k7tx9VTXKgwi2FUWazWX3k/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.dvp](https://zerofs.link/f/ZtmE7ApGDV3fbvWSemrfBh/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.dvp](https://zerofs.link/f/AHVjP34AWVE8phUfATF862/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.dvp](https://zerofs.link/f/LFns3PsWujuJtPX2A23Fis/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.dvp](https://zerofs.link/f/XdnSW37Do5LBJKKkEcLV69/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (Buzzheavier)](https://buzzheavier.com/bmfv0akebifm)<br/>[en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (ZeroFS)](https://zerofs.link/f/YvdhXKwaKL7mfEfEFMfi7x/) |
| English  | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (Buzzheavier)](https://buzzheavier.com/gp4u6hbn0yvg)<br/>[en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (ZeroFS)](https://zerofs.link/f/CcM6Fs3NAhuCuNajb6U8ya/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link |
|:-----------------------|:-----|:---|
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.dvp](https://zerofs.link/f/SyhXVTQJ8TxGdWfu8LRTgE/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.dvp](https://zerofs.link/f/ez6e7T8EFHn59SM34FRxTD/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.dvp](https://zerofs.link/f/X5RkYWyiBxQnnL4Y2J3Qye/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.dvp](https://zerofs.link/f/53Yqn7pkVkXtspbcp5s642/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.dvp](https://zerofs.link/f/eDatJMWb7uhGgfkMJt2ydF/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.dvp](https://zerofs.link/f/EvNMzPERuZfa8W2BCDagVC/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.dvp](https://zerofs.link/f/ioXusnLonpdvgQ2wd5zTqB/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.dvp](https://zerofs.link/f/8AbJkRj73sQP5ZEEnaAqk9/) |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.dvp](https://zerofs.link/f/4aPpuVCHcQFMk34AuYproF/) |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.dvp](https://zerofs.link/f/ArTER7sqnZM542Ubs3YC9W/) |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.dvp](https://zerofs.link/f/NgarYVkJZLmgaRAgMtYfrr/) |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.dvp](https://zerofs.link/f/7c3KfeVjL9By8tPQY5o8Ji/) |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.dvp](https://zerofs.link/f/aiTDHjXmj9hMhLWCqQacih/) |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.dvp](https://zerofs.link/f/223XJwrCFKrg9ZrFSeriqU/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.dvp](https://zerofs.link/f/4u3JPuevjJYiYL9CzxJHE9/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.dvp](https://zerofs.link/f/nfnvJY34S4xumKywkwp3MN/) |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.dvp](https://zerofs.link/f/8cVhdUhdVwwGmFbTo7hqLi/) |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.dvp](https://zerofs.link/f/4KABUCN86KJXkrToKB9QRz/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.dvp](https://zerofs.link/f/Agr5vZNMk4z82mdeENC35H/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.dvp](https://zerofs.link/f/Q9pdwosqA9Vxve4SL58byB/) |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.dvp](https://zerofs.link/f/9vRUAWJcsvpBoqwmARLm5a/) |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.dvp](https://zerofs.link/f/TZ8GXecA3BGENT4kxwmXHn/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.dvp](https://zerofs.link/f/VnYAoQJfrtLMcLRix28opX/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.dvp](https://zerofs.link/f/Xui5ThkP22hw9Rujcrsiau/) |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.dvp](https://zerofs.link/f/dEiLBMeCFgMrdPXLQWBqZV/) |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.dvp](https://zerofs.link/f/8oCS9gwvwx6Q7YsT8NoTs6/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.dvp](https://zerofs.link/f/gKodfYzx8wjUAHcJLKmmMF/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.dvp](https://zerofs.link/f/hxqxuYb6iQZKUxGA7Ytcj4/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.dvp](https://zerofs.link/f/CexvqYoFTaJmXtYMHVTauB/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.dvp](https://zerofs.link/f/UbsyPjbwBUzgEXhLYpPatW/) |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.dvp](https://zerofs.link/f/cMi2g4iUfkUrddpzPTZD3m/) |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.dvp](https://zerofs.link/f/LikZ37JRLjR8DXXqwNyBpU/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.dvp](https://zerofs.link/f/CaGJykF8GUcTVM9WysrFoS/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.dvp](https://zerofs.link/f/HbKsCtmtEgY3equRmLEJaF/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.dvp](https://zerofs.link/f/TCZRCghQHtgyL2qjqhTipi/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.dvp](https://zerofs.link/f/jZj5xt4uwqJ8uhHh7nVXch/) |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.dvp](https://zerofs.link/f/CQzwLfUsJris7RCxpTh6cR/) |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.dvp](https://zerofs.link/f/E9wGU2zGNwXPCYQwTizPva/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.dvp](https://zerofs.link/f/ekg6WvTL35YzqragKQCTGf/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.dvp](https://zerofs.link/f/FwHAzAeyVyKkH8BrQXoVJm/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.dvp](https://zerofs.link/f/WJLQsuUggfxxUYULUeZcrF/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.dvp](https://zerofs.link/f/QDzVevy2mmJD2qwaGk3ZaN/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.dvp](https://zerofs.link/f/UQBYfCBG3FXSMpJe7JJ89i/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.dvp](https://zerofs.link/f/Fh8pc7ChGN8pHRzAfRKMRD/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.dvp](https://zerofs.link/f/5xmicfrhU6aSw8Mkf94zwM/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.dvp](https://zerofs.link/f/LCCPh67FdSavSs79Pvfo7c/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.dvp](https://zerofs.link/f/3zSpVazHHMRKEMW6MyXJaS/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.dvp](https://zerofs.link/f/Ja7ESEDvu2Kz7FhsXYV2Hf/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.dvp](https://zerofs.link/f/R37h7hGBADff3X7AAQD3PQ/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.dvp](https://zerofs.link/f/7jxiWaZeKZoZTYcouVS5Hr/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.dvp](https://zerofs.link/f/TZfsyCAXgScokXu6qes7WY/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.dvp](https://zerofs.link/f/93VUk5DXnAjTWeRXgR8kHm/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.dvp](https://zerofs.link/f/fo9HXRZ74HQGhx5TfahsKd/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.dvp](https://zerofs.link/f/inS63E2q36gBpRVWutRe2E/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.dvp](https://zerofs.link/f/KL8KFV75iVpQUFyvUq8AEZ/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.dvp](https://zerofs.link/f/exDcqhWFb4veAvfYFDUgJX/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.dvp](https://zerofs.link/f/BtsGr78uG3xSZSnEgSjBmW/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.dvp](https://zerofs.link/f/RwmSJUNxrE8WJwQYhMUWs4/) |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.dvp](https://zerofs.link/f/aFhTihWiHRR2xM2eDRyZYS/) |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.dvp](https://zerofs.link/f/2wPmfUGUyEZtZTcVzCbmpH/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.dvp](https://zerofs.link/f/bJJo9yZe55LL6LFhuzTkiU/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.dvp](https://zerofs.link/f/PVeaEckZFKMcMDVtuQmHs9/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.dvp](https://zerofs.link/f/ifgj7quuMQrEVUiDmyrHEm/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.dvp](https://zerofs.link/f/kJbZqmW2fSa3p4gEA7cBth/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.dvp](https://zerofs.link/f/JPVpWG3dx4FewnaANrk4cM/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.dvp](https://zerofs.link/f/6eHevB5BzUjGW462WxoZbd/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.dvp](https://zerofs.link/f/nZfTHFNaiPmjrkmRdwqGuJ/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.dvp](https://zerofs.link/f/CBRbmSDbQPg4pTdEwETKS4/) |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.dvp](https://zerofs.link/f/FxesMdNPAeYzT4dV2NeFvk/) |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.dvp](https://zerofs.link/f/e5nEMWztXzMtikDzBbdZXq/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.dvp](https://zerofs.link/f/XVtehEnQ8xU5H6UsDdwChx/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.dvp](https://zerofs.link/f/J6Yxd6LM86xdHJWGvFT7yc/) |
| Chinese-Traditional    | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.dvp](https://zerofs.link/f/8SgWFgfiYt6EjyTVyio6GT/) |
| Chinese-Traditional    | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.dvp](https://zerofs.link/f/U6TAZYJDf5HTFgH346BZcc/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.dvp](https://zerofs.link/f/SFYLah8Lo5FLwvtbxiwzgP/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.dvp](https://zerofs.link/f/BmiWhsq2J492aeU4nxepTX/) |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

See [here](windows_arm_links.md).

</TabItem>
</Tabs>
