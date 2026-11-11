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
| English | x64 | [en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso](https://buzzheavier.com/2gtemvaqgfm3) |

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
| French                 | x64  | [fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso](https://buzzheavier.com/ok24s3r2hv17) |
| Hebrew                 | x64  | [he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso](https://buzzheavier.com/l7izknffxxf7) |
| Croatian               | x64  | [hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso](https://buzzheavier.com/fj74757dr2m1) |
| Hungarian              | x64  | [hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso](https://buzzheavier.com/mmwnabm5q6am) |
| Italian                | x64  | [it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso](https://buzzheavier.com/28kni34thyyy) |
| Japanese               | x64  | [ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso](https://buzzheavier.com/h2uv9w6jtt17) |
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
| Slovak                 | x64  | [sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso](https://buzzheavier.com/70k5gv521q17) |
| Slovenian              | x64  | [sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso](https://buzzheavier.com/2c2g8spembif) |
| Serbian-Latin          | x64  | [sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso](https://buzzheavier.com/fx3w6pscqvti) |
| Swedish                | x64  | [sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso](https://buzzheavier.com/tr3u5cgoww2w) |
| Thai                   | x64  | [th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso](https://buzzheavier.com/jihs2q50dcel) |
| Turkish                | x64  | [tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso](https://buzzheavier.com/b1aocavpcx17) |
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
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso](https://buzzheavier.com/bminf8sd3817) |
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
| English  | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (Buzzheavier)](https://buzzheavier.com/kmr0i1zoz8g8)<br/>[en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (ZeroFS)](https://zerofs.link/f/lFXu4lcuqq4SW1_FAVk_jVzsmy5AgoT38v2kJuWucpfRSNI/) |
| English  | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (Buzzheavier)](https://buzzheavier.com/9es30p2w8fsb)<br/>[en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (ZeroFS)](https://zerofs.link/f/121sRU1h4CUfCmGLTvWYWlkjC4ZTS0Z_iOwagyykz49ARVg/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.dvp](https://zerofs.link/f/GwMmoLL3ENIaRH55r6crdwQ6W_a-y2wZXIgJU5PBWo7vnmg/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.dvp](https://zerofs.link/f/F-7pfsDhw1qKCj5lZ5RB3GF00NamCXomlqpwP-IkhXM2fVw/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.dvp](https://zerofs.link/f/ipiIfsjZo-mbHViwdSjapiP5WLRgit929KSasCIbaufzdcc/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.dvp](https://zerofs.link/f/nz00FzJEavv_-8Gqfzhug3OkSwvw6ioWmt8X3cVw4SGBxOI/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.dvp](https://zerofs.link/f/f7rRP65eJIKsjSS7AhFz8xvIMkr5JqZYtekg4TBs10WqosM/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.dvp](https://zerofs.link/f/On2-2rJk4wESgNZQ1zQpk_T3lwvrSbulJ_WEukA9zgsoz8g/) |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.dvp](https://zerofs.link/f/KOe3otnsDIOqaFh2R3vsHWeCkEpRwY8czTNWkBnkFpl9XL8/) |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.dvp](https://zerofs.link/f/q3kUYNq2i-OW048Z6qhEySKQ1ao1vYsHUqDC5m9Z8iONwcU/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.dvp](https://zerofs.link/f/Jh7u0-whHimUjGOy9LEzj61zFHtertHWZW7seaHtq_V4ssM/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.dvp](https://zerofs.link/f/TLQ6__vYy0duSkareTLwTIR8R4ot7F_hi_ordVt_06W-s30/) |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.dvp](https://zerofs.link/f/TTlvNJyaVFLk-RzQUjsTlYO4aS9Ot2XmI2wxSuiVLeQNxtw/) |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.dvp](https://zerofs.link/f/7PQ3_Ali4RzRUSRRGBbdk70qPPbUBk1Zj4aR3Z4w__JkPZA/) |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.dvp](https://zerofs.link/f/S5lEGB3DgGIMpF94BLfplSCsGcJHFSVVPCsZ0zEzpnzyuYw/) |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.dvp](https://zerofs.link/f/SIGJ5JMuTni3lg4oYAgSBimgZOUw-FjiOfTAjNQ-GocTbnY/) |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.dvp](https://zerofs.link/f/q1XYyMTjEt_U3iuHZ1x2QwdVWoBifRkwaWfaZJIepaZSPHg/) |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.dvp](https://zerofs.link/f/jOCu8vpM63OLNbhQD4XKC-wyaK9JB1azByO_7JkeWyd7XHw/) |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.dvp](https://zerofs.link/f/F_yszgjd6_XemlKGh4Iepo1rR2qNRqq0GAPGzh7GlH8O_WU/) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.dvp](https://zerofs.link/f/Y-cy1T-KaANC9K-fITuBWToyU7mZHdokEUhibYiDGa6cXOM/) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.dvp](https://zerofs.link/f/hzzv66OtxLKKD3lWjGq2SGQ0jtRPbolvhcZXk65L0rS8BLA/) |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.dvp](https://zerofs.link/f/RkAPcqaIw7U87pGIdBHHdszfdqbYSRnvzalGDnQmeyJqLB0/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.dvp](https://zerofs.link/f/sbZkYunCWxzVyS1JRf_xXzgNAakd-Zhxu7laTPg6CrtGS4s/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.dvp](https://zerofs.link/f/yoQkeKkh449CiWEdTa9BvyAiLFZjXa2fF2Dq8CFKILThJDc/) |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.dvp](https://zerofs.link/f/lWoFQGDyTDvs1wEs5HQ48zpOl8y4OQZtljBMWzS4rDI8hLI/) |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.dvp](https://zerofs.link/f/_1AQ40I4ND7WAscdicU7Edn_CISRgZShg2ZQIfg0E0YEiy8/) |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.dvp](https://zerofs.link/f/vhhFd6Ar5EsHlyAZGUWc1giCTsfLWsVf7EuDm6zKlzWqLYQ/) |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.dvp](https://zerofs.link/f/HbQI3AVXs-v282k3F2IUDkoz4yDrCnQjbH9KCUXMG-3-3wY/) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.dvp](https://zerofs.link/f/HltoQodVd9XpuZ2jvuYGuzMcYeWvpSnf0BxuDflsVnNWf-U/) |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.dvp](https://zerofs.link/f/lgHBOuUPv4sDF3SBwSAKinrBXlEf2XY0LduWYd2IDbI67yE/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.dvp](https://zerofs.link/f/H-5d_fl_rqS7Qx0rZXyi6UZvicrIsQKTOmKY0rT3ZLKsPpE/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.dvp](https://zerofs.link/f/jA3fTrMmjB9X2yMhaVNP96t6__hz8Z5ujo5IjJvv7ilZv9c/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.dvp](https://zerofs.link/f/Y5iNJTdpcLSkaZZx28KgHmW1u68cJpswnFJVoyB3TpBAMwI/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.dvp](https://zerofs.link/f/PGg7w6iCADFGNaKYLxjzO-DaBGT5eDlXZxHnT6jxqAq_3DY/) |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.dvp](https://zerofs.link/f/81flJEJrtIzhvJNI0tiDa78dgkTELcLmNvZsorpH6pBoLqc/) |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.dvp](https://zerofs.link/f/ey4tO1xvIsTAMNxXiuUNn7mzC3U_zff3pJcGgdwlM2DyT9c/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.dvp](https://zerofs.link/f/jbmQiFxsAQ8irzE08mhwKtjRo8P8gNqpiJ0tPsfhK6dkajA/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.dvp](https://zerofs.link/f/1zeEKCgx3h0_jPKSg-I67V4KI-hNkwt9LzKiI-jl8OVAFVE/) |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.dvp](https://zerofs.link/f/sSfSEfHuS3irXnguCwL9rxEnlWKOCpUMexCSS0S-XxcaLkQ/) |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.dvp](https://zerofs.link/f/79ViA5vdAnqunQKkBD7mu07484B11vCQNwXvkaJTWxA-lE4/) |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.dvp](https://zerofs.link/f/ddeO1izgtm56fWX0wQOYuF_SzL88LizOYse57LM37Z2BCDA/) |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.dvp](https://zerofs.link/f/UVmjJb9mJzgn4z2Q3WCdo7G_59ABmOfwefkWDFqySIWtT4E/) |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.dvp](https://zerofs.link/f/A285oj6rINSIfen7fViTlOkgJjjAr17moAdY9WS8bTqPP_8/) |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.dvp](https://zerofs.link/f/mGMtjLEMKXClH3UL42gyyKGt0NecUD78r4jIoMbvuO41n8s/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.dvp](https://zerofs.link/f/EAVsTv5dvcvcb4_Juf7yLvVI0Afm_TsAIpnpvEjnHMpFccY/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.dvp](https://zerofs.link/f/oEQoE39NZ7JRs6KBBjvgwqARQ_2YsIt5rdk2jGtA3tkwX0w/) |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.dvp](https://zerofs.link/f/YHc6V2Twd83UBxQ7ymsj1EaITNynfd-mwPYt4mJHdLu12h8/) |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.dvp](https://zerofs.link/f/kW3YVuG6l8K5Ub4t7og_v7HPqGZ3bki20Oaf8cz9hSzkYms/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.dvp](https://zerofs.link/f/UEmtwRITYQY3ybRGSn7bY7zJPVytZwbT8SVXgahCely_MjU/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.dvp](https://zerofs.link/f/7PGloiRAhITrUMKPIVa06VnC12cbeu_teTeH62UV3tR9JyM/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.dvp](https://zerofs.link/f/Uq802U6-1gtnsRO0WSRsKZRag-mFANdU5XazpUW2XC0Rdrw/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.dvp](https://zerofs.link/f/PzCwcsd85A_tLnV-DDkGNETntiWDAiTq3B670RrTNN1Henk/) |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.dvp](https://zerofs.link/f/OGnoG10M2bXfUckuSiHInAJKSEi4NQfdwzBch4zgdX5gEYk/) |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.dvp](https://zerofs.link/f/wSoFZdzeu7Zu7lBblgGFz1zFOI4flL-UY-D3pxhn83RlM4g/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.dvp](https://zerofs.link/f/oywhhBb0zkHPY1Zpp7xRZQgfQqBOma21Y4TequCXoZpVe_o/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.dvp](https://zerofs.link/f/Lvif7DNaABr46dQuaeXXoG-R8VC7aSvyVFgTyN_QtxmaM7w/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.dvp](https://zerofs.link/f/OGp7WhXUkoAvmL5dqdz6W_OiJ53I5Yazw-S6PSS7Ex15EZI/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.dvp](https://zerofs.link/f/TafDrjp75LmHTi0xfxSe3R4W4je8E7F3Z0G42KhOcrFqqls/) |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.dvp](https://zerofs.link/f/_3sJmkwUz7tm8KNNp5CWzEZmd-SmfCA0_c_QOqJTOizLtCI/) |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.dvp](https://zerofs.link/f/lgRQ_Kup5-LG0yZsvJxk540RYmcg4WGMBrViGPb6Dm273n0/) |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.dvp](https://zerofs.link/f/G6JjHrUpnBMcebYG-I-9gQ0Dn07nqW7LPB1NvTFNN4ZjaTY/) |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.dvp](https://zerofs.link/f/SOMZPUQHJgEBOsJCPfmD2lQOOY_gh80_H7exIU1HUbFcV7I/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.dvp](https://zerofs.link/f/G7IA4tgz0PdlacUCV4s5j8zXJHZlk65ZJRi3sRYQmUPxcnE/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.dvp](https://zerofs.link/f/bgapSsQD3y_KwFAQXZfNztVjqqdnSwJ-fTIzljTz9uy3S8U/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.dvp](https://zerofs.link/f/h-RF3fNB25XBL80oE40fkW9k__iJe3-AgkXJHZgsiQhhlJQ/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.dvp](https://zerofs.link/f/o_oscsu1hJvtD-bnj6mIkHQD0eK9TFP6tZj0xjnaX2aY7GI/) |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.dvp](https://zerofs.link/f/Do9_adFBRGmgggTCk8NFVLMaXHDuPjWd3vWmlXDRhiADaaQ/) |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.dvp](https://zerofs.link/f/zMd_KkswOd8drGeQ6S6vVEd2A71M0uXuD4ZaKkdGM3-5bh4/) |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.dvp](https://zerofs.link/f/r9DKzU7AC7Prvczx5gKOh2zh53elkBb-WxuZ_UaiCC4SFkc/) |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.dvp](https://zerofs.link/f/P5Mq9_XcxKaoizIDmS-UKaUMEaW93T6UkdHJJ0JAvTRFy5s/) |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.dvp](https://zerofs.link/f/d3QDz-c0JdPExVYVnyx8zF0B-G_9SKFvHHMc9fBtX0EpCAE/) |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.dvp](https://zerofs.link/f/rKFpvfUOS5zokWSUazhtz04p8HOUC2sqWP1VjA3mQFTqxb0/) |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.dvp](https://zerofs.link/f/ZqoRoSrrUEoXrnsetaqSa5MSiP8Cg3hyX7H8Li_CqB7wd28/) |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.dvp](https://zerofs.link/f/iIWMwlPiWDSGG1AepCd-4vaZyNQx_b5yjQPlJC2H6B_YN4M/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.dvp](https://zerofs.link/f/d--X_YeEkUpRnEC65pX3D-PUFLDTv-0sAzWdZHx6UNPcffc/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.dvp](https://zerofs.link/f/2jErtpb_jzP7XN4mcEr46ae88-Gl2JwWLMYFtIZNMEE_QHM/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (Buzzheavier)](https://buzzheavier.com/ae46jbvqybiz)<br/>[en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (ZeroFS)](https://zerofs.link/f/YVmnN9DsjrIeRLffvvCegR4-Fvj9rv9Oza3vCaMf-Tdjno4/) |
| English  | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (Buzzheavier)](https://buzzheavier.com/kym06wh8mo3o)<br/>[en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (ZeroFS)](https://zerofs.link/f/iPM1YPbbKaQpn11VBGDCwOwmKqv_a70_b15Y7J8uXBViCbg/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.dvp](https://zerofs.link/f/siFuTJGHZhacLyb0UtAE7yeyBTfSD0SBAWUy70DIfosu6Qw/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.dvp](https://zerofs.link/f/pzTxAq4Bg7l68qjLHkgzG76RgSpjo0UsvEoH0eZcsnmMo94/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.dvp](https://zerofs.link/f/jBjyFA9TZ7288QRZtyq1P5JmKw2AU71NCa3MKmwrUJFX1pw/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.dvp](https://zerofs.link/f/iWycavlYw-3ul-_V9u_h5GUmIQPqvuT0XEC6CRF2syDzVTc/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.dvp](https://zerofs.link/f/kuRagF0ZFzm_21Gvqtz8eKFP56bQPTOo6H6T-BlTocHTgTQ/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.dvp](https://zerofs.link/f/-B4Mmy3FUow6m8isAkZZnoFhvtgdvwJcJEnykyQOqms4Pfo/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.dvp](https://zerofs.link/f/WooqkjU9YT9fzLer25I1zZpb9VkiXtC6PBNSqPaf2JdQquQ/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.dvp](https://zerofs.link/f/XypFHcts4eiX9rKA-QOWjnXownMGKGD2GQaC2ABdIEqtZLY/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.dvp](https://zerofs.link/f/Fw9NhL7JUCFplen3yO3V9vBd3qmM-LZU_MLYbA7MriWMurg/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.dvp](https://zerofs.link/f/C-TC1qNLReGTRzuIEVoIsJLJBO0HWxAdlFZSOSYElWuW6To/) |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.dvp](https://zerofs.link/f/X6Csp9lDieLrSEbJNhI2MmhlhAs7cQQ3LomzIuau_kdV3v0/) |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.dvp](https://zerofs.link/f/ypHxYENI6b8k3LInqAvHuys99ZNmalLxUpRmCTa22L6Qizc/) |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.dvp](https://zerofs.link/f/4HDDLUByJ3k_u4kL0GzZdacq2Bn2hM5Tp7OHlAsI5qM8dvM/) |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.dvp](https://zerofs.link/f/zYf91bKbmZhkrbLPXcJ2lNSg4Znr-cPOGEFv4VE1vkUVRyM/) |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.dvp](https://zerofs.link/f/fYYvlAhaM5TGWbdqqcQfhD-87Izt7Mtg_OJgJdFb0Q3ANQc/) |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.dvp](https://zerofs.link/f/_ilZkAmc1wpJcxKvjL5CZhXq7Im2UOl5PmO3SyWjoKipUlE/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.dvp](https://zerofs.link/f/ZmGbb6Aae8WsTeKTte3HRfO-UKEmWPv3kJpJ6_26waP4xQk/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.dvp](https://zerofs.link/f/EZKs2LBQ4ZSoxmEceptIIUN1YkH8NMisROOh7njPnFKsbjQ/) |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.dvp](https://zerofs.link/f/2pLR2uCVF2mNMX0IY7ePIXXTrKcAoCqX2x-BD-Aj2YAMbfs/) |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.dvp](https://zerofs.link/f/daDOHX0aN2pk7DCv9Q3RXlwFzZ7SAC_j4I1ML4rJcZgrG5g/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.dvp](https://zerofs.link/f/nxpbf6NhORoph3cWYYfqTwVsYSPKWtvBtntkl2TQhlW_Ih0/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.dvp](https://zerofs.link/f/Mw9Y7GTl3WKl_fF1xvgaHk9n-J7M5O8XCcfTvmdpHBlP9ys/) |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.dvp](https://zerofs.link/f/CnQ6arCAi2L3Z6k24Vs8jqrhemo5s-3dOX9AwpEr0-umzi4/) |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.dvp](https://zerofs.link/f/F60La-ylUSk9jUnORiPb-4Ajae-e5Us5CwT_K5MV3xXAPJ4/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.dvp](https://zerofs.link/f/tRaNcFrZ7d9q51Ciy-tIyRYk9AT0DGk10F0ld-9m-49UZDQ/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.dvp](https://zerofs.link/f/m-1xLirsR1cq63b0r6XqLTNz5RSDT_f1JMupU1yzuawdxog/) |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.dvp](https://zerofs.link/f/w9m0muog7RtkxaKnlXrTeW4Anxue739Xz2ydja9RQB9muP8/) |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.dvp](https://zerofs.link/f/1j2UN9OGggpRwq0MQ9_vxk3iehx2Bav0-THfgzhqhTtqo4Q/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.dvp](https://zerofs.link/f/aPKSfW5u9gX1OWmRvz6HyectVUoeZHUqvMjKeV-2sag5NVA/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.dvp](https://zerofs.link/f/Yrgl4HmjqvrPWqnvU184eGK4_2GU4bHHf4HSa0tUA-VIvQU/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.dvp](https://zerofs.link/f/KLPaaPsCl025HnqBeHgsM36erPW69HN8793qDY7kDg0sXyA/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.dvp](https://zerofs.link/f/Rye2owUD3m5wW0JcZpm2GUUyOWFTHNSETOU9Ug1l44KUMGw/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.dvp](https://zerofs.link/f/gMWs0SZHHHpx4BaIY6SJv7SYjhe200U2uVbrs-FHvjkO5AM/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.dvp](https://zerofs.link/f/3wFnfdXZ6JR2nlw5lEf2m2GvORRTgHdzqZ9cfK-xeLaihe8/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.dvp](https://zerofs.link/f/oycERouoytV57Z4FeaDR12sZQEXsJpSdSC0O7r6xN5WaLQk/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.dvp](https://zerofs.link/f/Du0MvlGA_h44nsJ7Q6_Cuj1scI-HU1dGQLn18xuMPVjb3nE/) |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.dvp](https://zerofs.link/f/nC_jUVCPtzX6Oad2JKIIsBRGvhOGeiKYhQj5DKKclM8Jn3g/) |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.dvp](https://zerofs.link/f/_fKHC2zun8RkrUA5h98_4pTKW5_y8CO2edERsGqMWRKbYOE/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.dvp](https://zerofs.link/f/ZOvmDe6ayM-10Z8Abcvd_vVJ_iiaAJ-xKKu9dvBT2P048pE/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.dvp](https://zerofs.link/f/3VEb7SRFfuLAXNPsvhVXw0AlbXMkao7IYxcMgIakeT8uC-o/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.dvp](https://zerofs.link/f/f3dlc7vnniDy3Pem6MEYS54UvVefc1RRqG6cReWr40tGlDU/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.dvp](https://zerofs.link/f/vartxltYS-HLJgXc8iuNHY8QuS9sWu-vCl-SKf49zdZO6j4/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.dvp](https://zerofs.link/f/lG3bJY4pAess9xEY0o72Sl-qqizLJtxzgSaWzS20yl8K4yM/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.dvp](https://zerofs.link/f/YeAWlAq5zJNNnop9nfWxcg2sEbymAD0w2IUkDF1Z9-lOioI/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.dvp](https://zerofs.link/f/ylDNQUvoYV9gQ98xHfdF8b_THsZHU4bFKakgJJvZpZ4oBOM/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.dvp](https://zerofs.link/f/vqzxsAbhoxVuFpgHWx7DPhprLuM8L03d8tLlD9v6U9wTWcs/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.dvp](https://zerofs.link/f/hxDe31n7bfodCJ2Rt_I1metHN2JdzekmB6N0Qad63xUmCOA/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.dvp](https://zerofs.link/f/XkoRid27ffb1DmlWubrVEPQMQISYcW9YT7k7SQY_QMQT9yw/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.dvp](https://zerofs.link/f/-ILpu9aFpcopCXiO5ZEO5YzyRVk-NzNy0OR_GOS2LNTiqt8/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.dvp](https://zerofs.link/f/t6fHLzP3x069TY2pEDuCvVaMYgsCgTZUVGmQRjL_f04w2kE/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.dvp](https://zerofs.link/f/CGPqSrwTC232lgp66y7EYVfVWSUALNdO8DsyuLRchS6G5AI/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.dvp](https://zerofs.link/f/o5pyVJxB72zmgGp1TW8ijAjcHeSmCcKI353l6HySLbFxlv4/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.dvp](https://zerofs.link/f/blGO21-mmf8fcGXOWrvOuuTGMpVFVUduleUwlE3NVoKM4us/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.dvp](https://zerofs.link/f/HduSc81xMPjszu1fFgdXvocxh0yFzsp7Z-JardHKv3xZDlA/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.dvp](https://zerofs.link/f/gFLBn7e_D_rJXvWPjMfj1qNChNhbhmunyHR9M8hjhR6TQMc/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.dvp](https://zerofs.link/f/mi2CvvYXz6FGgDLAVYy33x014dNgOT3TH37toi8ieZflUTs/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.dvp](https://zerofs.link/f/FJ-HMLiPHggrJT1Q54PuvN31NumenSxIrXewO_zMH3kYSO0/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.dvp](https://zerofs.link/f/QGGTLKEnxje-RxldqSUehYYSAyXMib3iiJNjebCCFogvo_8/) |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.dvp](https://zerofs.link/f/05LHcM2P-xnHhqP44HeVN8zlFSFW5CVnCoNMt_9xa476UG4/) |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.dvp](https://zerofs.link/f/n05XlCA2TubL9GouwsU4Zd0z_KqMDDybwrBXoy5pAgYf4bg/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.dvp](https://zerofs.link/f/RRitIZ_KRRBRT3EaLYh2yOZRfvSNAAkZPX4Zpkrhe77RE_Y/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.dvp](https://zerofs.link/f/7JgbxkXlaQm5_GkbOjsEsJhFRUwWaxkuZ9Q4JRBpTL1mnrY/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.dvp](https://zerofs.link/f/33Wmu9pQcECLWbHwf82HboVEPdqMMTFXMYin3EVm5ReM9lY/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.dvp](https://zerofs.link/f/k3V8sEsiUYNPmw0MlRuDs9uBl_RjGgdjHpCF0Gmx1rnOOtM/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.dvp](https://zerofs.link/f/22DA7pLn83-nKR6M_YYX-1W4jEtCBVgaoD7ZJ2WonqtArUM/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.dvp](https://zerofs.link/f/DlRZxcUpUZEW-XepxN00LGQQwmvHQlhVaGUwhu-dNsvGhgU/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.dvp](https://zerofs.link/f/jpezg3JBteTr92_bY2v_DU59vDhdzs-1cNkyNC7LerQcaa0/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.dvp](https://zerofs.link/f/Q81h2lDF5qjDO8UmrC448apadvQGhupPQx4xR0VsCDIFg3M/) |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.dvp](https://zerofs.link/f/OFOtBF35OJVwTNp3Q6afdXQ0FaHYqTXK8MP2esK6bNML8TY/) |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.dvp](https://zerofs.link/f/YIVnHMiW4c_wmQumnZUnYU22iKsgIv91AEphqW4wiuHFCFk/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.dvp](https://zerofs.link/f/C4gtMeVbTc6-9zZ_U2KS43kiujxePjMRjx9kYtkHNNV7O8c/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.dvp](https://zerofs.link/f/u7IBQiozjRIExe3OFaB7I2z1lkAPpuj2Sa7psorKg25pya8/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.dvp](https://zerofs.link/f/Mn6x8Wa8jdJxnbgtKm3P5wozylHibqFIs2D2PxkEJLCh4Ec/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.dvp](https://zerofs.link/f/t7VxrK49_H1J71_cNu-FprLyQ-lsHvkYCX2HSqHV-Fa6OMA/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (Buzzheavier)](https://buzzheavier.com/bmfv0akebifm)<br/>[en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (ZeroFS)](https://zerofs.link/f/fbNZ5647-wlX6-u7cPuK52O_1xgzLI8SnOhYBe-jpMPWfPg/) |
| English  | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (Buzzheavier)](https://buzzheavier.com/gp4u6hbn0yvg)<br/>[en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (ZeroFS)](https://zerofs.link/f/4CZtnqjRozrvg7Oiy65zAmAdnOXknYfRL7BhCGJUbhyGt8c/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link |
|:-----------------------|:-----|:---|
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.dvp](https://zerofs.link/f/XKuP9vDAVvJT3rtPXqjfB20PUCSkWsfDIC9V88pujY2Nkek/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.dvp](https://zerofs.link/f/qwNRxU1qgCGJzWSaC00SWGYsk1uWjwR-I1dEMP9bXLsrnNM/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.dvp](https://zerofs.link/f/KGu_1WIJ91zhIH1BRBZQmFp-gFzP8Wxz-7hAoBG9LKKG-mc/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.dvp](https://zerofs.link/f/8xk_3ZSbZncx1C3kfqLuNWWa98wTCz890CzJBqCuY-0bGsA/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.dvp](https://zerofs.link/f/EAc61K67gT04EKwgqjWAie1f-uYv0Sc6COTXUtSbJgZ81-Y/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.dvp](https://zerofs.link/f/WAd-jrF3ahe4fa7mrdL2XChL_AWzydO8RjgHjxc6tCkrQeA/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.dvp](https://zerofs.link/f/7sOTcdSyCHAedpMQbXDQAB0tnXKoTITNyUuXnMlsvF_fLmw/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.dvp](https://zerofs.link/f/ibM5fYgd2VCq6dwOXsQmqhY6H5s1bPqFhsD5uOaTcSeW2-g/) |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.dvp](https://zerofs.link/f/-5fadbtGG6mZ5LBBGz_l-vCgMdobT_OHHuNbJUe_lVq7je4/) |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.dvp](https://zerofs.link/f/ghN3qi5iZXfbvNCLV0YWhMoiauTzT8bP1-IZQtd7OHMN77o/) |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.dvp](https://zerofs.link/f/7uITvZ1mjEq2fvCNryGqZWL-bKbvsheD973PPx5LY0fkRnM/) |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.dvp](https://zerofs.link/f/NecSEMfBzdxehYozBkJdZeL-DaX4uOr9abGslAjlIdb9XQA/) |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.dvp](https://zerofs.link/f/-g0P80fkiAGv6NyEp7a-6w7QORjjCpyuy69LRlt6nzIMDsM/) |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.dvp](https://zerofs.link/f/ZVSyFufBBA5CXRJACvINFI7eq_CipKDWydIwuZcXdle7cYg/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.dvp](https://zerofs.link/f/yVsog38sk9UbLmdJOAaxzWArUrNsWftHnD43NeUqSrl45FY/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.dvp](https://zerofs.link/f/yYgwwFaTHMPfjUY7QOBwAFfyBOVDg7YfhrO_-GcGhZtu3dk/) |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.dvp](https://zerofs.link/f/qR-N2Xhh1zlTgZu0BLhr91hthjxjCt3wf6TU62_JSYWxDkA/) |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.dvp](https://zerofs.link/f/LaWVyUHktcgcisIewNoU0O88eA5D5UnwvxChjAMdwijwOaA/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.dvp](https://zerofs.link/f/EnMzbMBWBuB8p95FmTU_-eYwy1D5DI46XZqnN3Z_UJelmy4/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.dvp](https://zerofs.link/f/XGnX32GT9G_-W0J17mRf47-Bzh1bK9X13YD7IYJtZy_Vvls/) |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.dvp](https://zerofs.link/f/SNuvMKabGheWAdo99qPGeVMb9aJ-IA_ln9JXKtW3-rW_SMY/) |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.dvp](https://zerofs.link/f/GwI5PZmUu68lfknqxWtBqByNA8kbxqkD3vx3LXdBaUyPH_Y/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.dvp](https://zerofs.link/f/e8XWee6lk1IbgkcpRZwx-KlVcDokyjCXcLekiGUKhpf9lOo/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.dvp](https://zerofs.link/f/ae-pveMGxiZxAjtAx2TxO1ds5vvvzT1ks_Yd2RGr6FchHpo/) |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.dvp](https://zerofs.link/f/qisUD9ihWaqjPP8a_lK5iKG3o-defUsbjAp1Naz14AGS3HA/) |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.dvp](https://zerofs.link/f/Y6L3LFfZLGUAxz1vLKuTvZFAeWvKRw6NuSNcUWdzXkqFLuA/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.dvp](https://zerofs.link/f/1Ec8J7akT_XVSppX8fP0WXKAoSM1kmSAj8SxTWa7F8yUhzo/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.dvp](https://zerofs.link/f/_R3tempDKSw6T51YrIO8zX3_MGcu93WMBqJD1DL54_wGh6g/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.dvp](https://zerofs.link/f/8W1qYl_jUPzNsI0Rs4dUYTadx2gj8EgUEbVOs4L38Sj8xQQ/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.dvp](https://zerofs.link/f/pv_-Ws6gXJliUw8rqCmmlL1TjWgl85YeFYpQS0fzOBUZ8Io/) |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.dvp](https://zerofs.link/f/dFTfH1SpQemyXvOszcan3e55Get4tvGQIX5V9YWuC8Fal8s/) |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.dvp](https://zerofs.link/f/0ks3KZ4HzRCccCYzorkYBGaGVHFmUhnLvvlNCcUGJVud2O0/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.dvp](https://zerofs.link/f/SlYRtOPYAeS_4LCUjUhp9la02jJK_PpGybcgWs5mfVnzwBA/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.dvp](https://zerofs.link/f/XLupuxJCse0R5RPgUglQqBiJpOqfcFEzv_kTDLmwBiknB-s/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.dvp](https://zerofs.link/f/rxZ15wa882DwbCgFlCBkb3_swNAB1c_VEG6SeMrMzieEOUc/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.dvp](https://zerofs.link/f/lIPslmNlElai5MSKLVaPXYH-dHMRkslgLqRTC98jgdILTF0/) |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.dvp](https://zerofs.link/f/7qDk2LiLXEDST4wmtR0deHMUmAKHydODh9WrscHLq-tZ1nY/) |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.dvp](https://zerofs.link/f/z-J2JwuliayfpPftsf6orvjdZObjT0g8UH2VbYV6zqJahXg/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.dvp](https://zerofs.link/f/paRxYYx5uPPgU2V8DDzeDep-kQmSGyBhrpGSPobB73EpKXI/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.dvp](https://zerofs.link/f/70RcsLEGIZi8kRidGagw4moM5iasV38qgjhkVagJE1SqOl4/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.dvp](https://zerofs.link/f/wzoo3KMDcqR3dVPSQmTwrGr4eCUBR03wrvzx4tdsBss9u2A/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.dvp](https://zerofs.link/f/_Q9tJNpIxwy7BWmNDJ0OZDQDgf_41PLpqo4Z0ZzvoGevp1k/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.dvp](https://zerofs.link/f/It-E_bTWxAz6fezsVBqQZE2WJm0JA5VJXVlvARX64YO3ijs/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.dvp](https://zerofs.link/f/b1mlFBJnyrfX8FaNFjaMNGHxaUIiN41-wCgtBh9v-Cto5Kw/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.dvp](https://zerofs.link/f/iYgEhwQvgrvIsPPhV3_-EJFeWswrJk9F5hhKI097u6afp8M/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.dvp](https://zerofs.link/f/YYddofdnOQwmTxdsRj4JVtIS_yNsuPOPvdY7hSvK7dxuGP4/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.dvp](https://zerofs.link/f/JsOPlqbsMGgcFyHXqzmi0abygZEsPsjl2ASYwGS_zpO0k6k/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.dvp](https://zerofs.link/f/ng63Zg5BPq7dO0gC3UYYZlMXFAaZCmar4X6UXEm5UP4WjZ8/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.dvp](https://zerofs.link/f/6S6X8XqXjZY3XvilUUC340RdSJ1qagyRqfBA1T8iw2FB_qI/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.dvp](https://zerofs.link/f/j_JwItBqCFUXh_8ipUh9sARDsf0l2Uxe9TApkwoQWmciWgc/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.dvp](https://zerofs.link/f/I_r6wFjDF4W8qzP1qCzxUu-JgUVAsmJA95S79vcq5um7AFQ/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.dvp](https://zerofs.link/f/fpgGcjqlZmgPLo70Rw9_RvT9hsYDa0i_TcBEDs4DZnF8LVc/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.dvp](https://zerofs.link/f/rLqLw55elz71Fxyh3KVngmXkxFGrVfiGR-Dtl2IG-ieiy6w/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.dvp](https://zerofs.link/f/Qs5XWPzcuuQPCfhOJUC9SU4mmxxdTP7GmBsP6sWn6NwcNH4/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.dvp](https://zerofs.link/f/0hUqKtwgb_Deh_7at3gYYEXb31SdocMS16gVIZCyHPq36c4/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.dvp](https://zerofs.link/f/OR0eXgUNwJxjOucaWWi4r-sKuxpoBnZ5P9TiHSGOR5YTWjE/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.dvp](https://zerofs.link/f/z7e_XOWXEmWn5GgaNDSn0GTDpxTyn4XfRHyjl-lblP9vdjg/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.dvp](https://zerofs.link/f/pSEdcvRTOmkHn9QUC-_-qFPOB1aLg2nM616Qp_b8yRCDktY/) |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.dvp](https://zerofs.link/f/-9GeqQCrT-5Tp5-h4H1o4NPQ-ZDsNXJFyJV-7Xh-1sW_XHs/) |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.dvp](https://zerofs.link/f/GRl0z3bZLTvC2_BNrVaiBRDZd3qo55BJDWxVAOukg3LYsWE/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.dvp](https://zerofs.link/f/K9yPI_hUOnl2kkKA8Z3uRfu4GmHGc3iV5YqHDLgoVWaCDms/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.dvp](https://zerofs.link/f/rcYqj-5PmxHjXcu9lF_71RU_PpptEU1yJhShPzzJ_nA_BUo/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.dvp](https://zerofs.link/f/yAU_OfulpDGLwjnRRVSwgnyguv23d1WtchH_Zpde-Yce8UE/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.dvp](https://zerofs.link/f/uUHG8geMuZiLbD8gEC3yFb1U8PY758erwtW-zAFlgJd2FcM/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.dvp](https://zerofs.link/f/kIzVnlib5CayPGoWG_d5BbFWiDa4L58Ug50abGAt0U2IJ0E/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.dvp](https://zerofs.link/f/voglUN5hvkcE1smtGwk4tz4gO4CgVRKeoZey0eeJPukXpd0/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.dvp](https://zerofs.link/f/udv0D8QFVPYw6mzeTQimwhyagMT7CYtERVO7Qj1Ovmjdzqk/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.dvp](https://zerofs.link/f/87nljNLXG2xiHZVKTUMrKMfB3OI4_hheg5EP1tht2Mlsglo/) |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.dvp](https://zerofs.link/f/YGVKVGv5iIEuhmpEZ8oHZ4ILmEFrxQlAY8UP-CIqgIhljeY/) |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.dvp](https://zerofs.link/f/o2U5zF4cRpO09gBKzSYrPoKWnZ0lPFD7e16efCkDVABDsf4/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.dvp](https://zerofs.link/f/K0QaF447_qpp3CS05LbiA4JdhnhonElaOALRJ7anq74SGgc/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.dvp](https://zerofs.link/f/25Q6JbO4o2MMQIa4a4U0BAxhTu52Po9nY9qApJ05YDZBl30/) |
| Chinese-Traditional    | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.dvp](https://zerofs.link/f/NkfsMZ7IpIy_inAfl1LDhokd7AebnNp14PCpG_oKKhLneHg/) |
| Chinese-Traditional    | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.dvp](https://zerofs.link/f/qU7o2fmJw9MQYAM7kDUyavGE1-vOligZ-4A14DqvVF3orBA/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.dvp](https://zerofs.link/f/52H7ZshggQcbTVzRU2zo53y8V8QPSGqnsEVAnoRGtBo-tms/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.dvp](https://zerofs.link/f/1baZVx7lBaTLLjZKh4x0LfHi6UpDVgxZ6miWboeMPe4xwzU/) |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

See [here](windows_arm_links.md).

</TabItem>
</Tabs>
