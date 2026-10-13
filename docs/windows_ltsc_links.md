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
| English  | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (Buzzheavier)](https://buzzheavier.com/kmr0i1zoz8g8)<br/>[en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso (ZeroFS)](https://zerofs.link/f/JbVcADWFBbd6URYqBsDwfnhbz0Z4SiQ6kYkfgoACn-DKEbc/) |
| English  | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (Buzzheavier)](https://buzzheavier.com/9es30p2w8fsb)<br/>[en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso (ZeroFS)](https://zerofs.link/f/X3DU6faYGON2RtMZfhP2_aew-ivJnvThTgbsJYiAnhhKB5I/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.dvp](https://zerofs.link/f/BLheOSTKRj0A56WyrRAIqDf0HAr7c_xkzp56Gvg2YIJDxkY/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.dvp](https://zerofs.link/f/dXDjTfqALjHdVsQbwPNWIt6sgGTrGdWfHUCB7CNRs3KarZs/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.dvp](https://zerofs.link/f/J42yoOJve6WlomsDoEOb8f49PrJwK3zhvH9OhaIPPyVpB2w/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.dvp](https://zerofs.link/f/ac2Zcg9-jcPcOFbcgfIJiQ-HUdqBsNX4W2N5ag4oFKM-2XA/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.dvp](https://zerofs.link/f/BzqpspiOy_nUlOqpslsZPF3spMClpshWilOnkA3kvt_ruDg/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.dvp](https://zerofs.link/f/m445jw7Nrbf6exzKbmdle-v7QO2ViduLfpZAFBpm9DMS7Og/) |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.dvp](https://zerofs.link/f/1bSPAB8YqzQTf6l4oDXaeIrunwzYWyDobaKWPg1AsKJC08Q/) |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.dvp](https://zerofs.link/f/vWkx_brB5js_2PGxTUpJOhymzcOPHtwbsDkPNuCiFqfcclg/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.dvp](https://zerofs.link/f/GTMVa3n5vJe73SmkVsnC6m3g_8OFew71qY3cjf2SFp8QR1I/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.dvp](https://zerofs.link/f/GBEJY5KRIayJJ0UGQ6snkqa8UuHp8nkIMyP0mEohhZJ84l0/) |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.dvp](https://zerofs.link/f/53K2Z9pCjcGtJZoJstbIhptrdo_UGvMXnR3hLhj6PSvl2SA/) |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.dvp](https://zerofs.link/f/xi_7G4BUnhR31JHN6T9o3ywGnuL0LVTyZfxZfqraEHb2fV8/) |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.dvp](https://zerofs.link/f/tmJEyEDfhcQDTYDpppm4pAKo1WoGFsqo2D5_9edLz7773A4/) |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.dvp](https://zerofs.link/f/A6CrPmNzp5zXzdnSQGiXT4OKYPLmeFkOPzHUXUZL1Cg8Ld0/) |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.dvp](https://zerofs.link/f/uYGzHgMPrSvJGBhpeeXjDimKaEzldZs852-KXd9e826h6lg/) |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.dvp](https://zerofs.link/f/8KMqJfIxnPBuBkho5mDWpGWRhXJ6NB3Qf9BTJJ-UPtK5w9M/) |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.dvp](https://zerofs.link/f/ZR6IOu6MT1VALPVSeOY9iwM3Io_m51dsXrWWt1-xgpT8mB0/) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.dvp](https://zerofs.link/f/gtfV8eePC7eMw07x8tAfW1cuRJYZ8JCF7Fk22StuZ7rA2-M/) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.dvp](https://zerofs.link/f/Y3Crw8dII10vBtQzF3z2_wQ7D5Fg9JDv6p0RBC9Uj3rchEQ/) |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.dvp](https://zerofs.link/f/n52yDBHge7T91yL_lKRLVLGltb0eqDja91_s8hdRWNE6vzM/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.dvp](https://zerofs.link/f/bSGwU0mTpuGHe5Eoy1k3cLCaNIVcQ05rEr_Z2WkBtjDzq9k/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.dvp](https://zerofs.link/f/gzaq9crpDkPMvOWyYjNgtNvaGT8wL4LackdsCYrdDhjmwUw/) |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.dvp](https://zerofs.link/f/MJd_yBceOewgTyumHEbw9CbhzQCy9eouQZv4Y7EbRVdGrHY/) |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.dvp](https://zerofs.link/f/THqjgFJgSjYdADNEw6-gfVJ7EKnrOhwsTljir_Sh_BL8qt4/) |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.dvp](https://zerofs.link/f/OOODl43uFyr7Vqcam_KDemOc8iphSnWukRKQ56KuMOk9pE0/) |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.dvp](https://zerofs.link/f/sTfak9RVw7mwEoOs6n6021fCg-qKxP_SB14vWUv8D5bDmzA/) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.dvp](https://zerofs.link/f/Vn2tPVcnBZlS68FUHn3QC7aWq3EQJJKqBtNvC5gnGkKU1YY/) |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.dvp](https://zerofs.link/f/fIpWlJJKGfNMcIPlyUPQF-tbJ1uxNTi2JxUvMXaktpeqsFE/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.dvp](https://zerofs.link/f/jMktGv6oHEFMZekmG6iWbBAH2wVAkzxXq4JvKwez9_AtRYs/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.dvp](https://zerofs.link/f/Sk43SJ9HGvtZLC_3ano8YJL35mVYLfk4WYqJ2QFNjZnVMoI/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.dvp](https://zerofs.link/f/gYiumnRilKZA4j3GgF6vnefOM0RQ0eSEpja-PdcxXLB3Egc/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.dvp](https://zerofs.link/f/PsQ2PJb2kUMcDO2vFiXD4WxIYL-TJTaePjpvk1wa-I8skJY/) |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.dvp](https://zerofs.link/f/u2po3yS7TGzOjGe3C-oOmI5kvohfgs1eMyjPym2EEOeCsN8/) |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.dvp](https://zerofs.link/f/VQ6opltoP13muU1XiiIL5t9yQshSmLqhHn3M7Nyp7OIqQ9c/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.dvp](https://zerofs.link/f/WX5kwppbj0vq7YBE4KkAfzrzYjDSdrWKnX4U9gf3P9mgJLg/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.dvp](https://zerofs.link/f/aQyGnyfHnVvrrQgZTMZtSbS7HMBAd6ORz3PSXkeaRDKAXkU/) |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.dvp](https://zerofs.link/f/ovLJXux7O0goeytF61WVXQk8AG-r1FMX2hdUQ4MKRRTjVPg/) |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.dvp](https://zerofs.link/f/a3UIUfkX3wu74eatb4xOzZwTh3oAzDzd2lQmKB_owXe20xc/) |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.dvp](https://zerofs.link/f/jCeQ577C2W2b-i-1phL6BPG3DuPWYptfaC76HV2kmuoRd-o/) |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.dvp](https://zerofs.link/f/zxvut3fcJpHqzVd5A1wV-84dw_lx23lHY1eR_nT89Zxa-8c/) |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.dvp](https://zerofs.link/f/aO_Kq-8jMA08edcpX5_zwp40G8CiB8K1S2BUwe2XBSOIaac/) |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.dvp](https://zerofs.link/f/ySiGHXZW5l3-3nnEuVh2f_Tn9JEjV0egh5tTgGUX90Q3mPw/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.dvp](https://zerofs.link/f/zUJ4hhru0Ap07rru_NN0zqrIE9-MCSS1dCJ1V2jng_8rdPw/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.dvp](https://zerofs.link/f/E07ksqDOOijT-STivAPmYWuTHml7a52LgpdIXe6nuMyR-ak/) |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.dvp](https://zerofs.link/f/rji7amueingCRhjR5pO1pAPFY7-IwymQbdTgS3edwiyVFKc/) |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.dvp](https://zerofs.link/f/wy08sIzYD5jlmGs4bwXAjD89PGCbrhed8sIFklLriIjk3LU/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.dvp](https://zerofs.link/f/cNw8JBhxe5LV0-ekECXiDbsMydklW1UqE52nzjaDHY-3yds/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.dvp](https://zerofs.link/f/egH1Yj3-E3yRWAPtGt8xxfOHzYTXpiUdya3G-HKIyMFqAnU/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.dvp](https://zerofs.link/f/HQaRToEaFzSfwXAvD3rO-QuM15DCAA7pWAMe6gezZOEKi90/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.dvp](https://zerofs.link/f/YkqG8jiMzlXWFzY1UvbKkJhbISUBfURgGyu_ugj_gxz0yO8/) |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.dvp](https://zerofs.link/f/pnmxW9i2q7l96veSMO-bSfdnozRuN6tPP-VhoDeipYt1EDM/) |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.dvp](https://zerofs.link/f/SBSpCzzguRXpWljVnvhRozHeNX6y_LJQP8TcTFlKfPyVm64/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.dvp](https://zerofs.link/f/nBKqxP3lPDEh49ZEQmN44VuZf0DJMtA7xFAlBqRXkp-lGRs/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.dvp](https://zerofs.link/f/6OVX8OR5H01ksUiNzI_08crvhmuwoIZL9OES5VEcEPhKrWA/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.dvp](https://zerofs.link/f/-pkuLManOYTaQcv4rr1tcrfu_VkDffWfA7_krA2IISk6Vfc/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.dvp](https://zerofs.link/f/AWv-2HviV6ZLm5JuqRyolpv-WEpUhyJ_pt-F_Ucxm9t80ko/) |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.dvp](https://zerofs.link/f/LFqLKQWNuCm06f_YQbw5FTqFnPbsAA-WRZlXRz-pkD-0D9s/) |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.dvp](https://zerofs.link/f/LwwQSbUUb47wv77GG-UnPvVAyfIIKFo1KNAXL-XTl_9_pJo/) |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.dvp](https://zerofs.link/f/ViKmGTfRS95uOtVyBHBj_EdPao-U7MprmV7Xm7GzPPpu2u4/) |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.dvp](https://zerofs.link/f/uKK55XXDfgV2Z3yo2rrFzP-8ePHrKde8nVKdrcpZh7dqDuw/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.dvp](https://zerofs.link/f/LQoBXRTXI7qD4hJ-qNTH9_yjLxbVQgX3W4VhCksoM8ow6VI/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.dvp](https://zerofs.link/f/rPQHzHFM3-FwQw_zasa8fHaNCs-lSj5xwzCWnxRUyH7ldXw/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.dvp](https://zerofs.link/f/ouGWg5hWoSLAfpiZK0_FBoAu3wkA8cxed5j8iSuOZRVpo-o/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.dvp](https://zerofs.link/f/yzTo2CtfchuTyFS7851StG6IMixGww9d1O0h16ijMLOzRHg/) |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.dvp](https://zerofs.link/f/CxShhH7stc2uT76L10JZBCQQUivg7Ms9m-zBT7IbRizohgA/) |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.dvp](https://zerofs.link/f/MwHimCaPTQ4wuu28o0cfSWYhNQO9saEyxJ9OWDppQWLceI8/) |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.dvp](https://zerofs.link/f/CQZM879ueD5Id_XfIpZ2piNgElp0nhK7U17k2MllFW3GpRM/) |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.dvp](https://zerofs.link/f/9r7hH-i9zZh768AwbJuDV_4Ws454f5HWfxfjcm7mWrCzLgY/) |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.dvp](https://zerofs.link/f/4M8Z0DrBLsGSbdZs2lgWmYhw1d2IAwYKuwcTdSF79rt5YlU/) |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.dvp](https://zerofs.link/f/0627k29K7zWlrxfxTmW_auNL1J3HVIcwj8pRhN7_5bUyl3Q/) |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.dvp](https://zerofs.link/f/sCO6oAG70xEs3YfCui3WG8OyCeIgpktXdT_kcdGA81PsJKg/) |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.dvp](https://zerofs.link/f/ZB4Dj49jzfMbGTL3px88aqBpQk5y_q4reDb9-LTwVVRh1n4/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.dvp](https://zerofs.link/f/ERc5cIquWeVrQjgpgLZEWD1IZxeCbyQQJsG1LzToTgy7Uz4/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.dvp](https://zerofs.link/f/o6mYgZQWBkX8omBHjaJ30owrYJXoD3taSa8ikvpyIhvlYVo/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (Buzzheavier)](https://buzzheavier.com/ae46jbvqybiz)<br/>[en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso (ZeroFS)](https://zerofs.link/f/pKC9wgSlSquQtl5TgTOyOdpCH0dD7OjfZsyuvx7skzs6dX4/) |
| English  | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (Buzzheavier)](https://buzzheavier.com/kym06wh8mo3o)<br/>[en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso (ZeroFS)](https://zerofs.link/f/4Gb-9RcgYOYzVc5HNQUqtYfmTkYWfjHjseq2ZIolz6eQPGE/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link                                                                                                                                                   |
|:-----------------------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.dvp](https://zerofs.link/f/MVTq_H2QiDzZBpud969VkBwmCKQGZ4pyV1YQfYt8cBU-WIU/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.dvp](https://zerofs.link/f/kpQll7MTYASu3Rd7t_U-Sz_00MeChdAyzY5J7CzJ7bBAsIc/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.dvp](https://zerofs.link/f/pkg9_ycaWZ7PdTYxQ3OsjpluEVH6QJ4T9683Vo_L4z5VMP4/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.dvp](https://zerofs.link/f/T9gcncZXP1bo-Sv3Pxo0r5n3P__7WV5dY7jnZPvb2NpunmE/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.dvp](https://zerofs.link/f/k7x-YJbx080qnh5V2Qst8UCe1h7b4zOAmYD4wsyzXTxHREU/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.dvp](https://zerofs.link/f/njCKBrrPPQUJbXfSpJ4MPx38w5Pc8Fe6CgLTLsCJnNX2lkI/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.dvp](https://zerofs.link/f/tyRdXovs0bQVmrZ_vmI0sAF2XX94rP6-HYWTM3OEVCODLnU/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.dvp](https://zerofs.link/f/aKBV4L8b4sCLq9t0sdTpBmA4-c4tHcoqKBHVWF8i1wmUXcc/) |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.dvp](https://zerofs.link/f/7NCwE3fJCV-kXcFTNH3gQgwaLFqhBZZBEOHsmNQcpn2sLKQ/) |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.dvp](https://zerofs.link/f/6df0a6dcg3TOIXpX7fUr2mOTuWPVaIyvCGBwT5xigk7yMqo/) |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.dvp](https://zerofs.link/f/Dart_8R9LcPhfysQzSQ2J6dAUomkGjCMV5X9sC7qpsL_WJU/) |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.dvp](https://zerofs.link/f/8nRfVsMG70cOfsVYdaI6u_mKeTVr-xqAFw-F7a-xvNfzIak/) |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.dvp](https://zerofs.link/f/474yYL5qPCGbQZSwE_-eGXCrjM-5AKYipeUjkqaTNMqNL90/) |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.dvp](https://zerofs.link/f/MT4myC10FVP1LWCsMfPUSG0jMXeCOFq_Jsv3SP_-j3Rwk28/) |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.dvp](https://zerofs.link/f/jMQu75LEn0t_l-PXRxFcm4dSZTy9UV1Z97mYl4ifIjDc8K8/) |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.dvp](https://zerofs.link/f/R-I2Q1H4y5oU9k98g1Z1vv4rrb35N_3NEDgZYm0zbG-a4XI/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.dvp](https://zerofs.link/f/it1F7a9X-D2f1wD9pw9Cry972URIuXZc4fIKXb6wS0Nosys/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.dvp](https://zerofs.link/f/iMxhm6TQZAtYfdmwwi3AFaCrACyqx8zlzfwYBAdwI08dat0/) |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.dvp](https://zerofs.link/f/PTCAUR8S8C0iSdEPa9eRfv24CKOhJDhX_pJQaAkKveRbO-Q/) |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.dvp](https://zerofs.link/f/z7KA_D2Xnt9izdBRWova4OuiFBXSkniJAN-GCONAgHUQXlk/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.dvp](https://zerofs.link/f/POuklESohkJls-loj7vqcewfUH0EvGmCpc_J8ACrl_RvF34/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.dvp](https://zerofs.link/f/KSKwBK8E9u5Oq-YHWXz733fVNOABNA-la6EJBgwkLjG3pGo/) |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.dvp](https://zerofs.link/f/PQbuyPOKicXfA6xJBypXqBOld9NbmAnTWessZVzpM7zImMM/) |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.dvp](https://zerofs.link/f/HEp3Teskk2qEgB_owjBag2Idb4U05FabmzLn0a82gNz6vfI/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.dvp](https://zerofs.link/f/hsxmo54gaisUHDiYWNjLGDhUAQAPeRgYxB5dSV5ZmueX4kQ/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.dvp](https://zerofs.link/f/IOX9jps1PAr4PW5yeJCMwY3u2OOj1fKRxfGc2DyAOpr-LK8/) |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.dvp](https://zerofs.link/f/QT2qbhHkuQBHRSblbWq5uf8xfqt3ZO4SriSmpEKzAporCNE/) |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.dvp](https://zerofs.link/f/agmd2ULGPBCsjHQsiyj1UId_Htx6P82BwP24jCRHBfu86Pg/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.dvp](https://zerofs.link/f/rizo2ttFj1loc5g_rNymC7dsm46BqI0RHoztMgetMyi2Stw/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.dvp](https://zerofs.link/f/e-MkYUrR4-Hx2PaiFAWjuNssR5Nt-Gebl18IvGe0-MsXbdU/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.dvp](https://zerofs.link/f/RU3tOE7B0M1h_NlgGLu6nv24zr_uCdMNJfOLIKqSWGCfCTQ/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.dvp](https://zerofs.link/f/cDYsoAHp97vr1Ukgh4cJteuou2g7m6FlQ1HjiA9pbTfxm1g/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.dvp](https://zerofs.link/f/HKmblypwPp6jEg5MUfWi54HHEhOGyKEl0BcYSs7wRUx_EWM/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.dvp](https://zerofs.link/f/jhs9g-5CLGbI7aUytO8GHj5VXXSTKRs9MH4vqQY1Kh-TYYU/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.dvp](https://zerofs.link/f/-qr5ENuwO3U0j_moT21BMs6GavO7UXjUbOYCoaLv6m2F8tc/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.dvp](https://zerofs.link/f/-nIn0gT2G0fqedgWATmzJf3tsnWluDh0Nv9PZsClneGBR5s/) |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.dvp](https://zerofs.link/f/1bKUBz33-ZipukkTtKkjkFdk4ZUEnv74VR6WT-5FR27qFow/) |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.dvp](https://zerofs.link/f/KCHY8AOga2z9KcDDDoquZGCdgbiUXmektgyHqBXU9bqDKZk/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.dvp](https://zerofs.link/f/sG4kBzjKARPpXrdPRclp4cARvg8E7SmoIrgWK9qAsT5Abb4/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.dvp](https://zerofs.link/f/hwtxWvEFPeTkoAdD4LRlXMSlNGw_xio5ezIfIrLsDX6almE/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.dvp](https://zerofs.link/f/c5BjosCH4hwAd4EXuU8j2ET_Hmq9UYNRurk0CGZz_qOYHYw/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.dvp](https://zerofs.link/f/IQeU9UnpMMOdFvp3EWwtYa8FNh2VT7Ft2ZbONPfy_We9iY0/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.dvp](https://zerofs.link/f/Pgpp8KJ1BO7WkSlCBzmN7HdY3KcP8da_XUWOM2uvvTbyRtI/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.dvp](https://zerofs.link/f/47kd0ITJB6GojCtV7La--y4uFhGtXlAoHNd0yxV2_s0lOfA/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.dvp](https://zerofs.link/f/ieijPuYGV38DUAinIIO3BfbXFEBFQSh0uJaVMOmwmmyNPIs/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.dvp](https://zerofs.link/f/io9YM82roEuB5A4XOmr-vpnJCNtRMjOXv3HNeDPky4_Ajbk/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.dvp](https://zerofs.link/f/GFlVA-AIacMWWSuWN0i72nsOcdBlgmB8vTWbg9gLzX933PA/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.dvp](https://zerofs.link/f/uAoAgwZQQPmXzYSe0QiakBjoWlXnCMKZSyU4EcYBFE4dpkI/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.dvp](https://zerofs.link/f/6ss8qF2L-KwN_ogXBEOPF-aF0pGDBxxA-KjInUtMzEcnAUM/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.dvp](https://zerofs.link/f/gIvHfuXsCCQQU95Ybs_VSeCqtyFtNmg6WdWNw9R11kNz4rQ/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.dvp](https://zerofs.link/f/q8DLoECp9rBGBM0DpPoq2VKzkEeneSzXay18_pTGy_dJYC4/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.dvp](https://zerofs.link/f/qkceCyBwbUXP0e5jQYUpkt-PoEYAFg-6fR4QkW5SrVEu2zo/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.dvp](https://zerofs.link/f/wY32O9HqJzSQrtIM-WlgvZdnv13NG-kb9hm_tMzS09Z5thA/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.dvp](https://zerofs.link/f/bLCL7JKrK96BOlzjP79hj5zXd8PUKNj0BOpE0F-UserqjDE/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.dvp](https://zerofs.link/f/gPvVeOPlvmLwlPXIY7o4S6RMftzkOomVs8ulVz6AXTO7MUA/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.dvp](https://zerofs.link/f/GeoGS9bStB_Vlw8kMhyP6kOyebu---8Oe-i-oATagRtiT3s/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.dvp](https://zerofs.link/f/CiFzI-yyo2-Ww3VVypTrwEqKLqQaV1467UUHVwa3e8G8_x0/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.dvp](https://zerofs.link/f/iAqr0Ia8nTP9bIuRihD8bMmRiEUE0wmkCPAVLc4DuJaB1i4/) |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.dvp](https://zerofs.link/f/tdt3Pe_wGBFYtfwOAqT1J0V2LzfR-QqZ3vCJyKM9lDcJEm0/) |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.dvp](https://zerofs.link/f/EFkYLDQSkLGfZYeXCGN-AQhTySYBtIwVJ-exJOtHZQaS_qw/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.dvp](https://zerofs.link/f/ejor8UjqVSwSyh_ejXcrlG-0n5hobD4UnZjcXjygUF5gPCY/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.dvp](https://zerofs.link/f/dsetRbN6V6J1xAnv6qr2lwAwj-94MygScMsdtiiuNvgzZCo/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.dvp](https://zerofs.link/f/sNjU7nxLM2QJ_yvrbgWewwq9XkvgzzAgJvUcwpDSI75jvfg/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.dvp](https://zerofs.link/f/txjhz7oMgZqAsioCGe-bAN600MJutgV35ZD0GB8UtUU3qUU/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.dvp](https://zerofs.link/f/02uQhXBgfj3LwCtGB9aqrkrwhtdNwg4upnkOjdtz_JPTY5E/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.dvp](https://zerofs.link/f/JkQegroKa57NBqnTpx_6M1pe-Ekz9iJR-Z6aw7C2GzRlvOk/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.dvp](https://zerofs.link/f/UqKmPaMf_Ep4hfY3evtRNYSVHh6In8Twhkr4eOqSDzj218s/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.dvp](https://zerofs.link/f/26ngbCm9ZKNPzNcp6P0ocDCceNJp6NC9Yqx0V1OoZz5oNJA/) |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.dvp](https://zerofs.link/f/VwdHL2w7uCN0xy8c-kCxV3WPAct2bRtQ3JaquETw0B0Z8NY/) |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.dvp](https://zerofs.link/f/tCy7_XCjgYgp51Ok_Dazclx8c6YmD65A-AtEMKG3YDabMu8/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.dvp](https://zerofs.link/f/btzckDHd0V4z6X36M3akn0vive_7VwyUh2R7pO7fmiL3-Ss/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.dvp](https://zerofs.link/f/68EfrzEW8roZ_YxALBRBX0EEbjp1vzRUz9wW2irKmkg_Pow/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.dvp](https://zerofs.link/f/OE7wFgGw4hjGM8Nt5s2wFr4ryjqQ8HCfbs7yNGskGYTLIMQ/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.dvp](https://zerofs.link/f/3UqcWLcomdjQEu7hx6IvMhimRf4iCzoV02RREwKPwZ3OC00/) |

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

The files below are **full** ISO images.

| Language | Arch | Link |
|:---------|:-----|:---|
| English  | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (Buzzheavier)](https://buzzheavier.com/bmfv0akebifm)<br/>[en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso (ZeroFS)](https://zerofs.link/f/NYqjuzs0VaSTCS2Zj0MCjK59HJmx3DRKtFOtqBhHRqkJ-4w/) |
| English  | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (Buzzheavier)](https://buzzheavier.com/gp4u6hbn0yvg)<br/>[en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso (ZeroFS)](https://zerofs.link/f/MtN2BIFwhBw53epfejG_sHemWL7LXZtXHTWZyhyig3lEtLk/) |

The files below are **DVP patches** that use the above ISO images for their respective architectures as a source. See [here](dumbversion_patches.md) to learn how to use them.

| Language               | Arch | Link |
|:-----------------------|:-----|:---|
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.dvp](https://zerofs.link/f/LxyEpsBlyQkAmJyFbX1c77Yow31s35fbTZubse9c9_RzbM0/) |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.dvp](https://zerofs.link/f/rByCN8hSPeGf6ZjCKCv19-ugV10f4Rkt0biGPgu3OJVsCY8/) |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.dvp](https://zerofs.link/f/PMcuq1mqMrDfpsqIsBWZPMizaaVJjNW6_r_8CcHBoacIbms/) |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.dvp](https://zerofs.link/f/MXvh0_1VYr6ZUWmG0FBrnmV5nyrJy2TvzFyii-m49kqAWgE/) |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.dvp](https://zerofs.link/f/brFvPY0yPEvCJ5e1_97Ifl5SNvi59jZ4Xn_m7geOgcRIvSU/) |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.dvp](https://zerofs.link/f/TcLCx_m9zdO3pM0XfklIfG1xj3ooYkPrGhvPDgDEomNGrR8/) |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.dvp](https://zerofs.link/f/y-CRyT3HupwtxWBbROONRy94tuDYvTaVEm0nBjuEr45auGE/) |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.dvp](https://zerofs.link/f/XJQD77NTSuLN6J3jseM34-DNr86FTElSZbxHzFAmMubwVg0/) |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.dvp](https://zerofs.link/f/B9c1OMMvL_ENBXm2vqALCoNVh6KfOrMdjZ4jwcP97jlp5G8/) |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.dvp](https://zerofs.link/f/Jm5RRDc6_dZ141JgyAO3FARj3EeFO1jVCFQ5CIv6XCj3Jgw/) |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.dvp](https://zerofs.link/f/TWhCPlWMD3SfCtOoD7ACUIfaHq2dbTIl58L9dxwKb-BA5K8/) |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.dvp](https://zerofs.link/f/iBzys_4j4zkGgmISaEwUSJB-k1UctTkSAB-X5Kl6NRL6uXs/) |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.dvp](https://zerofs.link/f/Nflib62nCNNdaPXpovZVzsuVTNskG5XL6ax5l-BCkRSQoYU/) |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.dvp](https://zerofs.link/f/d2mcQDhX2mK9CmkYE0xWQXrz3MjdIB44TFYCwc9iYoCeNNQ/) |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.dvp](https://zerofs.link/f/1mZeumFtl_t0m4kIj-yGE31GvHJXyDEvLkBDqo4KTOL_PrA/) |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.dvp](https://zerofs.link/f/FLksUH3kTrg59sGOoNEL9LvfhR0S_tygYSJFX0a3CeYFqgk/) |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.dvp](https://zerofs.link/f/m-gP6M0Rf5DtFLegf6l_HTwQMFBPeACeqlfIk35SXk2Bamg/) |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.dvp](https://zerofs.link/f/NPeFT0lNxiqKBMAusFpfbkfc8-FyyJFzQ84dQjYm2tunxKQ/) |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.dvp](https://zerofs.link/f/srSHNNztDjx-dfqSZCb2XO2pv7dB1W8Zb-8LhPKNDZsMZf4/) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.dvp](https://zerofs.link/f/KvMA-7Q5Mv--RR2QXyjbgEUIMh-SN3bczqAPqRmXHbTyYH8/) |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.dvp](https://zerofs.link/f/fdfZRKRg5mBvXjc4TF0afh68Myp-ief4P3CRBPw0NielOd0/) |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.dvp](https://zerofs.link/f/8qECkXjYPjgWyrEPhrc3INDJCrHODXKLS9gKvfCBdqzmjDo/) |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.dvp](https://zerofs.link/f/uIyIyYxPqfa7Aoyf_njlKZQyUgnvEQfvkWevDuVWFidXzmg/) |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.dvp](https://zerofs.link/f/DT4ixEkF-8lsw4b0DYe3xdSljRAr4QHv6B9QxSWP5fgD9ms/) |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.dvp](https://zerofs.link/f/gcW3Dn5qRXMrZoBZl1SK5muxSE0wNiDOQmC4hFEfkblUxTY/) |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.dvp](https://zerofs.link/f/olKKoit2mgr5sECqNMv4WmIu40vZdLmPifgkWp-zkjfmSIw/) |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.dvp](https://zerofs.link/f/4dZlmcD329SpE1Orpb-qCWrtW0HNrw89BBCqn2PxrZtfi84/) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.dvp](https://zerofs.link/f/RceupZwL7z-1IQFkO0PhrclO8cNA2FBpDAoHPGlSpxdLeTo/) |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.dvp](https://zerofs.link/f/1fYDLx6noQ9CBFLHu7GsHfY3DYF5qmJM07qlPLneC64tQMI/) |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.dvp](https://zerofs.link/f/EtzuOkrepQPf4EFfhruG-qQULbKz2t0blDAjzh6JxrdkhNw/) |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.dvp](https://zerofs.link/f/KTAzwGJeoHYQsjsGVBI0xrZ2o0eumDk0q6zjJRXxPs8MW80/) |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.dvp](https://zerofs.link/f/Ua15dM7NJ-XmCni1PwkCgfGWTuwJoAXFA64ktC1gyK7oLoc/) |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.dvp](https://zerofs.link/f/1BfOgL4RYdVg9_irPzMYTV31KVHLinTW5VxHKUdwBCHTzm8/) |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.dvp](https://zerofs.link/f/x50W8q7ANQfznOGuMZBe1ETd2Hoj7NM6CaIsxit7G8KAt0Y/) |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.dvp](https://zerofs.link/f/IVymraFEYNy57dQMsb0Vu7rfICBQ11kohI3QZiLI-nPyW6g/) |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.dvp](https://zerofs.link/f/SJg_NOYOHV966uxuN017dkmv84MBpiTkT4PtO1on75d1daA/) |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.dvp](https://zerofs.link/f/3DkymX2piDSbKT999IVZnWkRVn9Cbz0kGW_4Q_2x3ubpCJA/) |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.dvp](https://zerofs.link/f/DAYoWIB0ASHNZYxaelorMzxvWaqhVOrRkj2yGHHpJjbp_Gg/) |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.dvp](https://zerofs.link/f/uZ5md-uSa50nZOurDfQs6MzeXvLZr0FnAeZRaSH1wFPoP2g/) |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.dvp](https://zerofs.link/f/hqbYzcMiRS7yFrOFBZgQ0_iCW_HDEU-mw5IUmOysk2W8roE/) |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.dvp](https://zerofs.link/f/khkoq4rZK59O5kOl8ujh0NSnyE3q8pE_pBgyQ9sW90h7wmk/) |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.dvp](https://zerofs.link/f/DfKVbm7J4Nn9754fOSgFoB4fEJ34I_1iXQ6rke1KDIWB1YQ/) |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.dvp](https://zerofs.link/f/kUOZj9aif7m2eUjaMoWQ8JzlZWiLWFcYqAMmvaF9Myv7PqM/) |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.dvp](https://zerofs.link/f/-qBSF6FmJ1Rm9rBO5porMzyKNtg7yvyBqY5vWgWXlB1_LlA/) |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.dvp](https://zerofs.link/f/LMskO95fZzliJjPxwduRFBIdvL5kUCjDvoVsLx4a8LiZbcc/) |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.dvp](https://zerofs.link/f/N8mz2fVExneSCNSZlesAMw6H-cCMiAWwdwItBRgCK0mRDMw/) |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.dvp](https://zerofs.link/f/x2fyGovwHt8y22rQJPdHbgbUJgQq5aPfAin5XrUbokJZHYQ/) |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.dvp](https://zerofs.link/f/SsUUrSu1ImqguIg_qfHiI7Li7UWqnLDduADjrJfXrIzgNsk/) |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.dvp](https://zerofs.link/f/3v9GalaEU72trRgA8PgvuwlhO_U83GjRgAgFSTKryzfofg0/) |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.dvp](https://zerofs.link/f/LIVD76AVxPpuTa_k7CV1HW4mHGSR-MPKRLqvPFcPE0UAVkQ/) |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.dvp](https://zerofs.link/f/nLe4k7t2rbd9BMC9eTKHom_TglXW7W1Cpj5NoVWq8AviQxg/) |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.dvp](https://zerofs.link/f/pboE0C3ENCHv1LbsWSMr_aQLGAsMSZQ1Ey-Egq_Ob8w6kAY/) |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.dvp](https://zerofs.link/f/zfm7FKdfrELa42X-olwRGKuYeC4h_-V-EmGblKvL8yty0YA/) |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.dvp](https://zerofs.link/f/1leSAbdwJ04yz_ctrWUqpb9NWCdUgPGEo9w0AaUMQqVvjTA/) |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.dvp](https://zerofs.link/f/8WqEqbrJqHP7zgh1NW-mYV0Y97feTjvfVT6bQ5Dr93luD7U/) |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.dvp](https://zerofs.link/f/eaQoOwnjFOtPbbbxn-KOz-3sXBOGD4On7HD-hUjDaVynar0/) |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.dvp](https://zerofs.link/f/RhVKRx54zijJUx9NDAtIPX3_T917Ntw9pKaG-UgpzyvNJio/) |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.dvp](https://zerofs.link/f/IdSnl2PTyY34D6Ot0gd48WYygH_nVNv4dmPRzbSN1PO0Ytg/) |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.dvp](https://zerofs.link/f/GpKHp4gXhgLZdmLZF5cPeEKeAKjyH1Uz58OJWvk2tGAx2vA/) |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.dvp](https://zerofs.link/f/mlilP2Xyzq5FSUL_jr2K7FW9ZE-PUlxpdM3pGyIUDF_Eitw/) |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.dvp](https://zerofs.link/f/XdxM7xZ9_vx2QWP-jm6OugvMGR-rlvwsecq47RNvCTOt0OI/) |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.dvp](https://zerofs.link/f/loE5iJ3eq6laTHWe2rJr7HMLgQ1g09YMwzYWaN4n4LqNbCE/) |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.dvp](https://zerofs.link/f/mw0sUAiq7PsfdhvvDVUk5Lzl95z1ynotDjUubVrA9WKFGuE/) |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.dvp](https://zerofs.link/f/lU37ohiFYTPo5qb54Y2D6G5FFQAWDhcoIgO8sikruP4lgLo/) |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.dvp](https://zerofs.link/f/7_kF3XGuQnoaGu-Iibh7di0lO93bg01CNuSy-uLLpLaySBc/) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.dvp](https://zerofs.link/f/0a_71swj53qeDUv5DBu0trhD0hUvUAp8ZFiVevx5hW7TUsA/) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.dvp](https://zerofs.link/f/m8XR5kwqJ-SXkxxw03kjgqvS7t1FrQ1QZ3BF4Y6YcPMNWaw/) |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.dvp](https://zerofs.link/f/hX34T5oAg_XGqLHH1ui4d0WXTp32H0E8Uxhmuuynh1FTZb8/) |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.dvp](https://zerofs.link/f/-rzweWD4Cykrk9zWZ0hVREi5877NWBlEarQX5h3-CpRZsVM/) |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.dvp](https://zerofs.link/f/EFlusAUtAKj4in9FMMmRe7N68zMuYLGYGHiwbEVmyJ7Zvgw/) |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.dvp](https://zerofs.link/f/VCglNVzkuejXaVKA3WfCxHg9uD1Awass2muDTkNaBGsSIww/) |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.dvp](https://zerofs.link/f/PMzD37o3ARTIRxTiFmzQYNSZ3mpFQLNynZN8yQFqnIEPiRU/) |
| Chinese-Traditional    | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.dvp](https://zerofs.link/f/tvlgvMFLVRmsMgtHJTZE9ZHhPdCtMqRCeJENG_OKryHq0R0/) |
| Chinese-Traditional    | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.dvp](https://zerofs.link/f/3QwIIs61ETVlegtx_RkVcQev3NFoNwpNmWD1rQufC39dmBY/) |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.dvp](https://zerofs.link/f/BYtj8b8MBzCiPkN973gEFttZvF9ClkQkVcfMIRMz6Rc3GkQ/) |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.dvp](https://zerofs.link/f/b4tpEI2S-hLXBZtceVNNkgpT9P36UD2_wNTcpiROhzJ9Yqw/) |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

See [here](windows_arm_links.md).

</TabItem>
</Tabs>
