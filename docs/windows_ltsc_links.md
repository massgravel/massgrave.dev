# Windows LTSC Download

All download links lead to genuine files only.
- [FAQ](genuine-installation-media.md#faq)
- Microsoft provides Evaluation ISO public [links](https://www.microsoft.com/evalcenter) for Windows LTSC releases, but as the name states, those ISO's are for evaluation purposes and can not be activated for more than 90 days. Below listed ISOs are full version that can be activated.

<details>
  <summary>What is LTSC, and is it the right choice for you?</summary>

TL;DR if you're uncertain, avoid LTSC and choose the general availability channel and its editions.

---

Microsoft releases Windows 10 and 11 through two servicing channels.

1) **GAC** (General Availability Channel)
   - It is intended for both general and enterprise customers.
   - Edition examples include options such as Home, Pro, and Enterprise.
   - Maximum support on the same build is usually [2 years](https://learn.microsoft.com/lifecycle/products/windows-11-home-and-pro) for consumers and [3 years](https://learn.microsoft.com/lifecycle/products/windows-11-enterprise-and-education) for the enterprise. After that, you need to install feature updates.
   - This is the main servicing channel and other software and games usually follow this channel's life cycle to provide support.
2) **LTSC** (Long-Term Servicing Channel)
   - It is designed for devices where functionality and features must remain constant over time, such as medical systems, industrial controllers, and air traffic control devices.
   - Examples of editions include: Enterprise LTSC and IoT Enterprise LTSC.
   - Maximum support on the same build is usually [5 years](https://learn.microsoft.com/lifecycle/products/windows-11-enterprise-ltsc-2024) for LTSC and [10 years](https://learn.microsoft.com/lifecycle/products/windows-11-iot-enterprise-ltsc-2024) for the IoT LTSC.
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
</details>

<details>
  <summary>Microsoft store app installation on LTSC</summary>

Applicable on Windows 11 LTSC 2024 and Windows 10 LTSC 2021.

**Microsoft Store**

LTSC editions do not come with store apps pre-installed. To install them, follow the steps below.

- Make sure the Internet is connected.
- Open Powershell as admin and enter,  
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

<details>
  <summary>Differences between IoT and Non-IoT Windows Enterprise LTSC</summary>

<Tabs>

<TabItem value="Windows 11 LTSC 2024" label="Windows 11 LTSC 2024" default>


| Features                               | Enterprise LTSC | IoT Enterprise LTSC / IoT Enterprise Subscription LTSC                                                                                                                                                                                                            |
| :------------------------------------- | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TPM / Secure boot / UEFI / 4GB RAM** | All required    | [Not Required](https://learn.microsoft.com/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements) 🎉 <br /> Also not required by [IoT Enterprise 24H2 (Non-LTSC)](windows_11_links.md)                         |
| **Automatic Device Encryption**        | Enabled         | Disabled                                                                                                                                                                                                                                                          |
| **Update Support**                     | 5 Years         | 10 Years                                                                                                                                                                                                                                                          |
| **Reserved Storage Feature**           | Enabled         | Disabled                                                                                                                                                                                                                                                          |
| **Digital License (HWID)**             | Not supported   | Supported                                                                                                                                                                                                                                                         |
| **Uninstallable Edge outside of EEA**  | Yes             | No                                                                                                                                                                                                                                                                |
| **2 Simultaneous RDP Sessions**        | No              | Yes                                                                                                                                                                                                                                                               |


- IoT Enterprise LTSC is a winner.
- The only difference between IoT Enterprise LTSC and IoT Enterprise Subscription LTSC is that the subscription edition supports a subscription license.
- You can change the editions to each other (IoT and Non-IoT Windows Enterprise LTSC) only by inserting the corresponding edition key.
- IoT LTSC edition ISO's are available in English language only. You can install Non-IoT LTSC in another language and later install IoT LTSC key `CGK42-GYN6Y-VD22B-BX98W-J8JXD` in activation page in Windows settings to change the edition.
</TabItem>

<TabItem value="Windows 10 LTSC 2021" label="Windows 10 LTSC 2021" default>


| Features                     | Enterprise LTSC                                                                                       | IoT Enterprise LTSC                                                                                        |
| :--------------------------- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| **Update Support**           | [5 Years (till 2027)](https://learn.microsoft.com/lifecycle/products/windows-10-enterprise-ltsc-2021) | [10 Years (till 2032)](https://learn.microsoft.com/lifecycle/products/windows-10-iot-enterprise-ltsc-2021) |
| **Reserved Storage Feature** | Enabled                                                                                               | Disabled                                                                                                   |
| **Digital License (HWID)**   | Not supported                                                                                         | Supported                                                                                                  |
| **KMS License**              | Supported                                                                                             | Support added after the update 19044.2788                                                                  |
| **Uninstallable Edge**       | Yes                                                                                                   | No                                                                                                         |
| **$OEM$ Folder Support**     | Yes                                                                                                   | No [(More Info)](oem-folder.md)                                                                            |


- IoT Enterprise LTSC is a winner.
- You can change the editions to each other (IoT and Non-IoT Windows Enterprise LTSC) only by inserting the corresponding edition key.
- IoT LTSC edition ISO's are available in English language only. You can install Non-IoT LTSC in another language and later install IoT LTSC key `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` in activation page in Windows settings to change the edition.

</TabItem>


<TabItem value="Old Versions" label="Old Versions" default>


- There are ISOs available for IoT Enterprise LTSC/LTSB 2019, 2016, and 2015, but they only have the Non-IoT LTSC OEM key (generic, not-activated) preinstalled. The installed key is the only difference. There is no real, different IoT edition available for these versions.

</TabItem>
</Tabs>

</details>

---

## Download Links


<Tabs>

<TabItem value="Windows 11 LTSC 2024" label="Windows 11 LTSC 2024" default>


**Windows 11 IoT Enterprise LTSC 2024**

Build - 26100.1742

These ISO's contain below editions.  
Windows 11 Enterprise LTSC  
Windows 11 IoT Enterprise LTSC    
Windows 11 IoT Enterprise Subscription LTSC

| Language      | Arch  | Link                                                                                                                                                                           |
| :------------ | :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| English       | x64 | [X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso](https://oemsoc.download.prss.microsoft.com/dbazure/X23-81951_26100.1742.240906-0331.ge_release_svc_refresh_CLIENT_ENTERPRISES_OEM_x64FRE_en-us.iso_640de540-87c4-427f-be87-e6d53a3a60b4?t=2c3b664b-b119-4088-9db1-ccff72c6d22e&P1=102816950270&P2=601&P3=2&P4=OC448onxqdmdUsBUApAiE8pj1FZ%2bEPTU3%2bC6Quq29MVwMyyDUtR%2fsbiy7RdVoZOHaZRndvzeOOnIwJZ2x3%2bmP6YK9cjJSP41Lvs0SulF4SVyL5C0DdDmiWqh2QW%2bcDPj2Xp%2bMrI9NOeElSBS5kkOWP8Eiyf2VkkQFM3g5vIk3HJVvu5sWo6pFKpFv4lML%2bHaIiTSuwbPMs5xwEQTfScuTKfigNlUZPdHRMp1B3uKLgIA3r0IbRpZgHYMXEwXQ%2fSLMdDNQthpqQvz1PThVkx7ObD55CXgt0GNSAWRfjdURWb8ywWk1gT7ozAgpP%2fKNm56U5nh33WZSuMZIuO1SBM2vw%3d%3d) <br /> = <br /> [en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso](https://drive.massgrave.dev/en-us_windows_11_iot_enterprise_ltsc_2024_x64_dvd_f6b14814.iso) <br /> <br /> Both files are identical, only name is different. <br /> 1st link is Official from the OEM portal, and 2nd file is taken from MVS and hosted on massgrave. <br /> Note: With 1st link file you need to rename extension to .iso |

---

**Windows 11 Enterprise LTSC 2024**

Build - 26100.1742

| Language               | Arch | Link                                                                                                                                                                                                                 |
|:-----------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Arabic                 | x64  | [ar-sa_windows_11_enterprise_ltsc_2024_x64_dvd_8012f159.iso](https://drive.massgrave.dev/ar-sa_windows_11_enterprise_ltsc_2024_x64_dvd_8012f159.iso) |
| Bulgarian              | x64  | [bg-bg_windows_11_enterprise_ltsc_2024_x64_dvd_2778f4e8.iso](https://drive.massgrave.dev/bg-bg_windows_11_enterprise_ltsc_2024_x64_dvd_2778f4e8.iso) |
| Czech                  | x64  | [cs-cz_windows_11_enterprise_ltsc_2024_x64_dvd_d4ef05f2.iso](https://drive.massgrave.dev/cs-cz_windows_11_enterprise_ltsc_2024_x64_dvd_d4ef05f2.iso) |
| Danish                 | x64  | [da-dk_windows_11_enterprise_ltsc_2024_x64_dvd_c231c267.iso](https://drive.massgrave.dev/da-dk_windows_11_enterprise_ltsc_2024_x64_dvd_c231c267.iso) |
| German                 | x64  | [de-de_windows_11_enterprise_ltsc_2024_x64_dvd_4f136f69.iso](https://drive.massgrave.dev/de-de_windows_11_enterprise_ltsc_2024_x64_dvd_4f136f69.iso) |
| Greek                  | x64  | [el-gr_windows_11_enterprise_ltsc_2024_x64_dvd_54eaabb2.iso](https://drive.massgrave.dev/el-gr_windows_11_enterprise_ltsc_2024_x64_dvd_54eaabb2.iso) |
| English-United Kingdom | x64  | [en-gb_windows_11_enterprise_ltsc_2024_x64_dvd_e2137661.iso](https://drive.massgrave.dev/en-gb_windows_11_enterprise_ltsc_2024_x64_dvd_e2137661.iso) |
| English                | x64  | [en-us_windows_11_enterprise_ltsc_2024_x64_dvd_965cfb00.iso](https://drive.massgrave.dev/en-us_windows_11_enterprise_ltsc_2024_x64_dvd_965cfb00.iso) |
| Spanish                | x64  | [es-es_windows_11_enterprise_ltsc_2024_x64_dvd_77392d61.iso](https://drive.massgrave.dev/es-es_windows_11_enterprise_ltsc_2024_x64_dvd_77392d61.iso) |
| Spanish-Mexico         | x64  | [es-mx_windows_11_enterprise_ltsc_2024_x64_dvd_3310c094.iso](https://drive.massgrave.dev/es-mx_windows_11_enterprise_ltsc_2024_x64_dvd_3310c094.iso) |
| Estonian               | x64  | [et-ee_windows_11_enterprise_ltsc_2024_x64_dvd_2dbd4bfe.iso](https://drive.massgrave.dev/et-ee_windows_11_enterprise_ltsc_2024_x64_dvd_2dbd4bfe.iso) |
| Finnish                | x64  | [fi-fi_windows_11_enterprise_ltsc_2024_x64_dvd_998f5df6.iso](https://drive.massgrave.dev/fi-fi_windows_11_enterprise_ltsc_2024_x64_dvd_998f5df6.iso) |
| French-Canada          | x64  | [fr-ca_windows_11_enterprise_ltsc_2024_x64_dvd_78732953.iso](https://drive.massgrave.dev/fr-ca_windows_11_enterprise_ltsc_2024_x64_dvd_78732953.iso) |
| French                 | x64  | [fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso](https://drive.massgrave.dev/fr-fr_windows_11_enterprise_ltsc_2024_x64_dvd_d66e386e.iso) |
| Hebrew                 | x64  | [he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso](https://drive.massgrave.dev/he-il_windows_11_enterprise_ltsc_2024_x64_dvd_fae050ec.iso) |
| Croatian               | x64  | [hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso](https://drive.massgrave.dev/hr-hr_windows_11_enterprise_ltsc_2024_x64_dvd_e3594411.iso) |
| Hungarian              | x64  | [hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso](https://drive.massgrave.dev/hu-hu_windows_11_enterprise_ltsc_2024_x64_dvd_8fea6034.iso) |
| Italian                | x64  | [it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso](https://drive.massgrave.dev/it-it_windows_11_enterprise_ltsc_2024_x64_dvd_1e8cabb6.iso) |
| Japanese               | x64  | [ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso](https://drive.massgrave.dev/ja-jp_windows_11_enterprise_ltsc_2024_x64_dvd_e59ad418.iso) |
| Korean                 | x64  | [ko-kr_windows_11_enterprise_ltsc_2024_x64_dvd_b6b6eb18.iso](https://drive.massgrave.dev/ko-kr_windows_11_enterprise_ltsc_2024_x64_dvd_b6b6eb18.iso) |
| Lithuanian             | x64  | [lt-lt_windows_11_enterprise_ltsc_2024_x64_dvd_145479e9.iso](https://drive.massgrave.dev/lt-lt_windows_11_enterprise_ltsc_2024_x64_dvd_145479e9.iso) |
| Latvian                | x64  | [lv-lv_windows_11_enterprise_ltsc_2024_x64_dvd_e0ebc53d.iso](https://drive.massgrave.dev/lv-lv_windows_11_enterprise_ltsc_2024_x64_dvd_e0ebc53d.iso) |
| Norwegian-Bokmal       | x64  | [nb-no_windows_11_enterprise_ltsc_2024_x64_dvd_d41eeb48.iso](https://drive.massgrave.dev/nb-no_windows_11_enterprise_ltsc_2024_x64_dvd_d41eeb48.iso) |
| Dutch-Netherlands      | x64  | [nl-nl_windows_11_enterprise_ltsc_2024_x64_dvd_e3063aab.iso](https://drive.massgrave.dev/nl-nl_windows_11_enterprise_ltsc_2024_x64_dvd_e3063aab.iso) |
| Polish                 | x64  | [pl-pl_windows_11_enterprise_ltsc_2024_x64_dvd_e00807a1.iso](https://drive.massgrave.dev/pl-pl_windows_11_enterprise_ltsc_2024_x64_dvd_e00807a1.iso) |
| Portuguese-Brazil      | x64  | [pt-br_windows_11_enterprise_ltsc_2024_x64_dvd_2bb6b75b.iso](https://drive.massgrave.dev/pt-br_windows_11_enterprise_ltsc_2024_x64_dvd_2bb6b75b.iso) |
| Portuguese-Portugal    | x64  | [pt-pt_windows_11_enterprise_ltsc_2024_x64_dvd_2f34bd6b.iso](https://drive.massgrave.dev/pt-pt_windows_11_enterprise_ltsc_2024_x64_dvd_2f34bd6b.iso) |
| Romanian               | x64  | [ro-ro_windows_11_enterprise_ltsc_2024_x64_dvd_2eadb4df.iso](https://drive.massgrave.dev/ro-ro_windows_11_enterprise_ltsc_2024_x64_dvd_2eadb4df.iso) |
| Russian                | x64  | [ru-ru_windows_11_enterprise_ltsc_2024_x64_dvd_f9af5773.iso](https://drive.massgrave.dev/ru-ru_windows_11_enterprise_ltsc_2024_x64_dvd_f9af5773.iso) |
| Slovak                 | x64  | [sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso](https://drive.massgrave.dev/sk-sk_windows_11_enterprise_ltsc_2024_x64_dvd_03b916e7.iso) |
| Slovenian              | x64  | [sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso](https://drive.massgrave.dev/sl-si_windows_11_enterprise_ltsc_2024_x64_dvd_310b3a76.iso) |
| Serbian-Latin          | x64  | [sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso](https://drive.massgrave.dev/sr-latn-rs_windows_11_enterprise_ltsc_2024_x64_dvd_3dfa5da5.iso) |
| Swedish                | x64  | [sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso](https://drive.massgrave.dev/sv-se_windows_11_enterprise_ltsc_2024_x64_dvd_191cf991.iso) |
| Thai                   | x64  | [th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso](https://drive.massgrave.dev/th-th_windows_11_enterprise_ltsc_2024_x64_dvd_47ce2c8a.iso) |
| Turkish                | x64  | [tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso](https://drive.massgrave.dev/tr-tr_windows_11_enterprise_ltsc_2024_x64_dvd_27bdab81.iso) |
| Ukranian               | x64  | [uk-ua_windows_11_enterprise_ltsc_2024_x64_dvd_b3f00872.iso](https://drive.massgrave.dev/uk-ua_windows_11_enterprise_ltsc_2024_x64_dvd_b3f00872.iso) |
| Chinese-Simplified     | x64  | [zh-cn_windows_11_enterprise_ltsc_2024_x64_dvd_cff9cd2d.iso](https://drive.massgrave.dev/zh-cn_windows_11_enterprise_ltsc_2024_x64_dvd_cff9cd2d.iso) |
| Chinese-Taiwan         | x64  | [zh-tw_windows_11_enterprise_ltsc_2024_x64_dvd_6287d84d.iso](https://drive.massgrave.dev/zh-tw_windows_11_enterprise_ltsc_2024_x64_dvd_6287d84d.iso) |

---

</TabItem>
<TabItem value="Windows 10 LTSC 2021" label="Windows 10 LTSC 2021" default>

**Windows 10 IoT Enterprise LTSC 2021**

(Build - 19044.1288)

These ISO's contain below editions.    
Windows 10 Enterprise LTSC  
Windows 10 IoT Enterprise LTSC   

| Language | Arch  | Link                                                                                                                                                             |
| :------- | :---- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| English  | x64   | [en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f.iso](https://drive.massgrave.dev/en-us_windows_10_iot_enterprise_ltsc_2021_x64_dvd_257ad90f.iso)   |

---

**Windows 10 Enterprise LTSC 2021**

(Build - 19044.1288)

| Language               | Arch | Link                                                                                                                                                           |
| :--------------------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arabic                 | x64  | [ar-sa_windows_10_enterprise_ltsc_2021_x64_dvd_60bc2a7a.iso](https://drive.massgrave.dev/ar-sa_windows_10_enterprise_ltsc_2021_x64_dvd_60bc2a7a.iso)           |
| Arabic                 | x86  | [ar-sa_windows_10_enterprise_ltsc_2021_x86_dvd_69e2349b.iso](https://drive.massgrave.dev/ar-sa_windows_10_enterprise_ltsc_2021_x86_dvd_69e2349b.iso)           |
| Bulgarian              | x64  | [bg-bg_windows_10_enterprise_ltsc_2021_x64_dvd_b0887275.iso](https://drive.massgrave.dev/bg-bg_windows_10_enterprise_ltsc_2021_x64_dvd_b0887275.iso)           |
| Bulgarian              | x86  | [bg-bg_windows_10_enterprise_ltsc_2021_x86_dvd_8beb279f.iso](https://drive.massgrave.dev/bg-bg_windows_10_enterprise_ltsc_2021_x86_dvd_8beb279f.iso)           |
| Czech                  | x64  | [cs-cz_windows_10_enterprise_ltsc_2021_x64_dvd_d624c653.iso](https://drive.massgrave.dev/cs-cz_windows_10_enterprise_ltsc_2021_x64_dvd_d624c653.iso)           |
| Czech                  | x86  | [cs-cz_windows_10_enterprise_ltsc_2021_x86_dvd_2afa1afb.iso](https://drive.massgrave.dev/cs-cz_windows_10_enterprise_ltsc_2021_x86_dvd_2afa1afb.iso)           |
| Danish                 | x64  | [da-dk_windows_10_enterprise_ltsc_2021_x64_dvd_6ec511bb.iso](https://drive.massgrave.dev/da-dk_windows_10_enterprise_ltsc_2021_x64_dvd_6ec511bb.iso)           |
| Danish                 | x86  | [da-dk_windows_10_enterprise_ltsc_2021_x86_dvd_de761707.iso](https://drive.massgrave.dev/da-dk_windows_10_enterprise_ltsc_2021_x86_dvd_de761707.iso)           |
| German                 | x64  | [de-de_windows_10_enterprise_ltsc_2021_x64_dvd_71796d33.iso](https://drive.massgrave.dev/de-de_windows_10_enterprise_ltsc_2021_x64_dvd_71796d33.iso)           |
| German                 | x86  | [de-de_windows_10_enterprise_ltsc_2021_x86_dvd_6317aaff.iso](https://drive.massgrave.dev/de-de_windows_10_enterprise_ltsc_2021_x86_dvd_6317aaff.iso)           |
| Greek                  | x64  | [el-gr_windows_10_enterprise_ltsc_2021_x64_dvd_c83eab34.iso](https://drive.massgrave.dev/el-gr_windows_10_enterprise_ltsc_2021_x64_dvd_c83eab34.iso)           |
| Greek                  | x86  | [el-gr_windows_10_enterprise_ltsc_2021_x86_dvd_c7850ec0.iso](https://drive.massgrave.dev/el-gr_windows_10_enterprise_ltsc_2021_x86_dvd_c7850ec0.iso)           |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_ltsc_2021_x64_dvd_7fe51fe8.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_ltsc_2021_x64_dvd_7fe51fe8.iso)           |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_ltsc_2021_x86_dvd_baa2b09f.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_ltsc_2021_x86_dvd_baa2b09f.iso)           |
| English                | x64  | [en-us_windows_10_enterprise_ltsc_2021_x64_dvd_d289cf96.iso](https://drive.massgrave.dev/en-us_windows_10_enterprise_ltsc_2021_x64_dvd_d289cf96.iso)           |
| English                | x86  | [en-us_windows_10_enterprise_ltsc_2021_x86_dvd_9f4aa95f.iso](https://drive.massgrave.dev/en-us_windows_10_enterprise_ltsc_2021_x86_dvd_9f4aa95f.iso)           |
| Spanish                | x64  | [es-es_windows_10_enterprise_ltsc_2021_x64_dvd_51d721ea.iso](https://drive.massgrave.dev/es-es_windows_10_enterprise_ltsc_2021_x64_dvd_51d721ea.iso)           |
| Spanish                | x86  | [es-es_windows_10_enterprise_ltsc_2021_x86_dvd_243c83eb.iso](https://drive.massgrave.dev/es-es_windows_10_enterprise_ltsc_2021_x86_dvd_243c83eb.iso)           |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2021_x64_dvd_f6aaf384.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2021_x64_dvd_f6aaf384.iso)           |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2021_x86_dvd_93a5debe.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2021_x86_dvd_93a5debe.iso)           |
| Estonian               | x64  | [et-ee_windows_10_enterprise_ltsc_2021_x64_dvd_012a5c50.iso](https://drive.massgrave.dev/et-ee_windows_10_enterprise_ltsc_2021_x64_dvd_012a5c50.iso)           |
| Estonian               | x86  | [et-ee_windows_10_enterprise_ltsc_2021_x86_dvd_292aa316.iso](https://drive.massgrave.dev/et-ee_windows_10_enterprise_ltsc_2021_x86_dvd_292aa316.iso)           |
| Finnish                | x64  | [fi-fi_windows_10_enterprise_ltsc_2021_x64_dvd_551582d9.iso](https://drive.massgrave.dev/fi-fi_windows_10_enterprise_ltsc_2021_x64_dvd_551582d9.iso)           |
| Finnish                | x86  | [fi-fi_windows_10_enterprise_ltsc_2021_x86_dvd_15e0eeb9.iso](https://drive.massgrave.dev/fi-fi_windows_10_enterprise_ltsc_2021_x86_dvd_15e0eeb9.iso)           |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2021_x64_dvd_2770e649.iso)           |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2021_x86_dvd_5237961d.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2021_x86_dvd_5237961d.iso)           |
| French                 | x64  | [fr-fr_windows_10_enterprise_ltsc_2021_x64_dvd_bda01eb0.iso](https://drive.massgrave.dev/fr-fr_windows_10_enterprise_ltsc_2021_x64_dvd_bda01eb0.iso)           |
| French                 | x86  | [fr-fr_windows_10_enterprise_ltsc_2021_x86_dvd_53f189f9.iso](https://drive.massgrave.dev/fr-fr_windows_10_enterprise_ltsc_2021_x86_dvd_53f189f9.iso)           |
| Hebrew                 | x64  | [he-il_windows_10_enterprise_ltsc_2021_x64_dvd_3a55ecd6.iso](https://drive.massgrave.dev/he-il_windows_10_enterprise_ltsc_2021_x64_dvd_3a55ecd6.iso)           |
| Hebrew                 | x86  | [he-il_windows_10_enterprise_ltsc_2021_x86_dvd_3b560f44.iso](https://drive.massgrave.dev/he-il_windows_10_enterprise_ltsc_2021_x86_dvd_3b560f44.iso)           |
| Croatian               | x64  | [hr-hr_windows_10_enterprise_ltsc_2021_x64_dvd_f5085b75.iso](https://drive.massgrave.dev/hr-hr_windows_10_enterprise_ltsc_2021_x64_dvd_f5085b75.iso)           |
| Croatian               | x86  | [hr-hr_windows_10_enterprise_ltsc_2021_x86_dvd_bd52180e.iso](https://drive.massgrave.dev/hr-hr_windows_10_enterprise_ltsc_2021_x86_dvd_bd52180e.iso)           |
| Hungarian              | x64  | [hu-hu_windows_10_enterprise_ltsc_2021_x64_dvd_d541ddb3.iso](https://drive.massgrave.dev/hu-hu_windows_10_enterprise_ltsc_2021_x64_dvd_d541ddb3.iso)           |
| Hungarian              | x86  | [hu-hu_windows_10_enterprise_ltsc_2021_x86_dvd_a8cb11dd.iso](https://drive.massgrave.dev/hu-hu_windows_10_enterprise_ltsc_2021_x86_dvd_a8cb11dd.iso)           |
| Italian                | x64  | [it-it_windows_10_enterprise_ltsc_2021_x64_dvd_0c1aa034.iso](https://drive.massgrave.dev/it-it_windows_10_enterprise_ltsc_2021_x64_dvd_0c1aa034.iso)           |
| Italian                | x86  | [it-it_windows_10_enterprise_ltsc_2021_x86_dvd_46e4f7e1.iso](https://drive.massgrave.dev/it-it_windows_10_enterprise_ltsc_2021_x86_dvd_46e4f7e1.iso)           |
| Japanese               | x64  | [ja-jp_windows_10_enterprise_ltsc_2021_x64_dvd_ef58c6a1.iso](https://drive.massgrave.dev/ja-jp_windows_10_enterprise_ltsc_2021_x64_dvd_ef58c6a1.iso)           |
| Japanese               | x86  | [ja-jp_windows_10_enterprise_ltsc_2021_x86_dvd_ac893196.iso](https://drive.massgrave.dev/ja-jp_windows_10_enterprise_ltsc_2021_x86_dvd_ac893196.iso)           |
| Korean                 | x64  | [ko-kr_windows_10_enterprise_ltsc_2021_x64_dvd_6d26f398.iso](https://drive.massgrave.dev/ko-kr_windows_10_enterprise_ltsc_2021_x64_dvd_6d26f398.iso)           |
| Korean                 | x86  | [ko-kr_windows_10_enterprise_ltsc_2021_x86_dvd_dff1cb4e.iso](https://drive.massgrave.dev/ko-kr_windows_10_enterprise_ltsc_2021_x86_dvd_dff1cb4e.iso)           |
| Lithuanian             | x64  | [lt-lt_windows_10_enterprise_ltsc_2021_x64_dvd_9ffbbd5b.iso](https://drive.massgrave.dev/lt-lt_windows_10_enterprise_ltsc_2021_x64_dvd_9ffbbd5b.iso)           |
| Lithuanian             | x86  | [lt-lt_windows_10_enterprise_ltsc_2021_x86_dvd_fefed947.iso](https://drive.massgrave.dev/lt-lt_windows_10_enterprise_ltsc_2021_x86_dvd_fefed947.iso)           |
| Latvian                | x64  | [lv-lv_windows_10_enterprise_ltsc_2021_x64_dvd_6c89d2e0.iso](https://drive.massgrave.dev/lv-lv_windows_10_enterprise_ltsc_2021_x64_dvd_6c89d2e0.iso)           |
| Latvian                | x86  | [lv-lv_windows_10_enterprise_ltsc_2021_x86_dvd_41041cfd.iso](https://drive.massgrave.dev/lv-lv_windows_10_enterprise_ltsc_2021_x86_dvd_41041cfd.iso)           |
| Norwegian-Bokmal       | x64  | [nb-no_windows_10_enterprise_ltsc_2021_x64_dvd_c65c51a5.iso](https://drive.massgrave.dev/nb-no_windows_10_enterprise_ltsc_2021_x64_dvd_c65c51a5.iso)           |
| Norwegian-Bokmal       | x86  | [nb-no_windows_10_enterprise_ltsc_2021_x86_dvd_6f625462.iso](https://drive.massgrave.dev/nb-no_windows_10_enterprise_ltsc_2021_x86_dvd_6f625462.iso)           |
| Dutch-Netherlands      | x64  | [nl-nl_windows_10_enterprise_ltsc_2021_x64_dvd_88f53466.iso](https://drive.massgrave.dev/nl-nl_windows_10_enterprise_ltsc_2021_x64_dvd_88f53466.iso)           |
| Dutch-Netherlands      | x86  | [nl-nl_windows_10_enterprise_ltsc_2021_x86_dvd_231b3321.iso](https://drive.massgrave.dev/nl-nl_windows_10_enterprise_ltsc_2021_x86_dvd_231b3321.iso)           |
| Polish                 | x64  | [pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso](https://drive.massgrave.dev/pl-pl_windows_10_enterprise_ltsc_2021_x64_dvd_eff40776.iso)           |
| Polish                 | x86  | [pl-pl_windows_10_enterprise_ltsc_2021_x86_dvd_4b0aed09.iso](https://drive.massgrave.dev/pl-pl_windows_10_enterprise_ltsc_2021_x86_dvd_4b0aed09.iso)           |
| Portuguese-Brazil      | x64  | [pt-br_windows_10_enterprise_ltsc_2021_x64_dvd_f318268e.iso](https://drive.massgrave.dev/pt-br_windows_10_enterprise_ltsc_2021_x64_dvd_f318268e.iso)           |
| Portuguese-Brazil      | x86  | [pt-br_windows_10_enterprise_ltsc_2021_x86_dvd_d4aea182.iso](https://drive.massgrave.dev/pt-br_windows_10_enterprise_ltsc_2021_x86_dvd_d4aea182.iso)           |
| Portuguese-Portugal    | x64  | [pt-pt_windows_10_enterprise_ltsc_2021_x64_dvd_f2e9b6a0.iso](https://drive.massgrave.dev/pt-pt_windows_10_enterprise_ltsc_2021_x64_dvd_f2e9b6a0.iso)           |
| Portuguese-Portugal    | x86  | [pt-pt_windows_10_enterprise_ltsc_2021_x86_dvd_2ed38b71.iso](https://drive.massgrave.dev/pt-pt_windows_10_enterprise_ltsc_2021_x86_dvd_2ed38b71.iso)           |
| Romanian               | x64  | [ro-ro_windows_10_enterprise_ltsc_2021_x64_dvd_ae2284d6.iso](https://drive.massgrave.dev/ro-ro_windows_10_enterprise_ltsc_2021_x64_dvd_ae2284d6.iso)           |
| Romanian               | x86  | [ro-ro_windows_10_enterprise_ltsc_2021_x86_dvd_e68b65bc.iso](https://drive.massgrave.dev/ro-ro_windows_10_enterprise_ltsc_2021_x86_dvd_e68b65bc.iso)           |
| Russian                | x64  | [ru-ru_windows_10_enterprise_ltsc_2021_x64_dvd_5044a1e7.iso](https://drive.massgrave.dev/ru-ru_windows_10_enterprise_ltsc_2021_x64_dvd_5044a1e7.iso)           |
| Russian                | x86  | [ru-ru_windows_10_enterprise_ltsc_2021_x86_dvd_cdf355eb.iso](https://drive.massgrave.dev/ru-ru_windows_10_enterprise_ltsc_2021_x86_dvd_cdf355eb.iso)           |
| Slovak                 | x64  | [sk-sk_windows_10_enterprise_ltsc_2021_x64_dvd_d6c64c5f.iso](https://drive.massgrave.dev/sk-sk_windows_10_enterprise_ltsc_2021_x64_dvd_d6c64c5f.iso)           |
| Slovak                 | x86  | [sk-sk_windows_10_enterprise_ltsc_2021_x86_dvd_10ed79ca.iso](https://drive.massgrave.dev/sk-sk_windows_10_enterprise_ltsc_2021_x86_dvd_10ed79ca.iso)           |
| Slovenian              | x64  | [sl-si_windows_10_enterprise_ltsc_2021_x64_dvd_ec090386.iso](https://drive.massgrave.dev/sl-si_windows_10_enterprise_ltsc_2021_x64_dvd_ec090386.iso)           |
| Slovenian              | x86  | [sl-si_windows_10_enterprise_ltsc_2021_x86_dvd_5e0e48a8.iso](https://drive.massgrave.dev/sl-si_windows_10_enterprise_ltsc_2021_x86_dvd_5e0e48a8.iso)           |
| Serbian-Latin          | x64  | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x64_dvd_2d2f8815.iso](https://drive.massgrave.dev/sr-latn-rs_windows_10_enterprise_ltsc_2021_x64_dvd_2d2f8815.iso) |
| Serbian-Latin          | x86  | [sr-latn-rs_windows_10_enterprise_ltsc_2021_x86_dvd_248407e2.iso](https://drive.massgrave.dev/sr-latn-rs_windows_10_enterprise_ltsc_2021_x86_dvd_248407e2.iso) |
| Swedish                | x64  | [sv-se_windows_10_enterprise_ltsc_2021_x64_dvd_9a28bb6b.iso](https://drive.massgrave.dev/sv-se_windows_10_enterprise_ltsc_2021_x64_dvd_9a28bb6b.iso)           |
| Swedish                | x86  | [sv-se_windows_10_enterprise_ltsc_2021_x86_dvd_9081ef5b.iso](https://drive.massgrave.dev/sv-se_windows_10_enterprise_ltsc_2021_x86_dvd_9081ef5b.iso)           |
| Thai                   | x64  | [th-th_windows_10_enterprise_ltsc_2021_x64_dvd_b7ed34d6.iso](https://drive.massgrave.dev/th-th_windows_10_enterprise_ltsc_2021_x64_dvd_b7ed34d6.iso)           |
| Thai                   | x86  | [th-th_windows_10_enterprise_ltsc_2021_x86_dvd_df412841.iso](https://drive.massgrave.dev/th-th_windows_10_enterprise_ltsc_2021_x86_dvd_df412841.iso)           |
| Turkish                | x64  | [tr-tr_windows_10_enterprise_ltsc_2021_x64_dvd_e55b1896.iso](https://drive.massgrave.dev/tr-tr_windows_10_enterprise_ltsc_2021_x64_dvd_e55b1896.iso)           |
| Turkish                | x86  | [tr-tr_windows_10_enterprise_ltsc_2021_x86_dvd_36fc55f4.iso](https://drive.massgrave.dev/tr-tr_windows_10_enterprise_ltsc_2021_x86_dvd_36fc55f4.iso)           |
| Ukranian               | x64  | [uk-ua_windows_10_enterprise_ltsc_2021_x64_dvd_816da3c3.iso](https://drive.massgrave.dev/uk-ua_windows_10_enterprise_ltsc_2021_x64_dvd_816da3c3.iso)           |
| Ukranian               | x86  | [uk-ua_windows_10_enterprise_ltsc_2021_x86_dvd_aa372ed6.iso](https://drive.massgrave.dev/uk-ua_windows_10_enterprise_ltsc_2021_x86_dvd_aa372ed6.iso)           |
| Chinese-Simplified     | x64  | [zh-cn_windows_10_enterprise_ltsc_2021_x64_dvd_033b7312.iso](https://drive.massgrave.dev/zh-cn_windows_10_enterprise_ltsc_2021_x64_dvd_033b7312.iso)           |
| Chinese-Simplified     | x86  | [zh-cn_windows_10_enterprise_ltsc_2021_x86_dvd_30600d9c.iso](https://drive.massgrave.dev/zh-cn_windows_10_enterprise_ltsc_2021_x86_dvd_30600d9c.iso)           |
| Chinese-Taiwan         | x64  | [zh-tw_windows_10_enterprise_ltsc_2021_x64_dvd_80dba877.iso](https://drive.massgrave.dev/zh-tw_windows_10_enterprise_ltsc_2021_x64_dvd_80dba877.iso)           |
| Chinese-Taiwan         | x86  | [zh-tw_windows_10_enterprise_ltsc_2021_x86_dvd_03be1c20.iso](https://drive.massgrave.dev/zh-tw_windows_10_enterprise_ltsc_2021_x86_dvd_03be1c20.iso)           |

---

</TabItem>
<TabItem value="Windows 10 LTSC 2019" label="Windows 10 LTSC 2019" default>

**Windows 10 IoT Enterprise LTSC 2019**

(Build - 17763.107)  
It doesn't have the actual IotEnterpriseS edition, it's just EnterpriseS with OEM key (generic, not-activated) installed.

| Language | Arch | Link                                                                                                                                                   |
| :------- | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| English  | x64  | [en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso](https://drive.massgrave.dev/en_windows_10_iot_enterprise_ltsc_2019_x64_dvd_a1aa819f.iso) |
| English  | x86  | [en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso](https://drive.massgrave.dev/en_windows_10_iot_enterprise_ltsc_2019_x86_dvd_2255a237.iso) |

---

**Windows 10 Enterprise LTSC 2019**

(Build - 17763.316)

| Language               | Arch | Link                                                                                                                                                 |
| :--------------------- | :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arabic                 | x64  | [ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_ltsc_2019_x64_dvd_a1f42c56.iso)       |
| Arabic                 | x86  | [ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_ltsc_2019_x86_dvd_8faea15c.iso)       |
| Bulgarian              | x64  | [bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_ltsc_2019_x64_dvd_65c7e0c3.iso)       |
| Bulgarian              | x86  | [bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_ltsc_2019_x86_dvd_73c555b7.iso)       |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_ltsc_2019_x64_dvd_9c09ff24.iso)       |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_ltsc_2019_x86_dvd_1814dbab.iso)       |
| Czech                  | x64  | [cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_ltsc_2019_x64_dvd_b15b47cf.iso)       |
| Czech                  | x86  | [cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_ltsc_2019_x86_dvd_b3b102f8.iso)       |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_ltsc_2019_x64_dvd_c301154f.iso)       |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_ltsc_2019_x86_dvd_9096dec8.iso)       |
| Danish                 | x64  | [da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso](https://drive.massgrave.dev/da_windows_10_enterprise_ltsc_2019_x64_dvd_772bd569.iso)       |
| Danish                 | x86  | [da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso](https://drive.massgrave.dev/da_windows_10_enterprise_ltsc_2019_x86_dvd_54ea3b7c.iso)       |
| German                 | x64  | [de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso](https://drive.massgrave.dev/de_windows_10_enterprise_ltsc_2019_x64_dvd_34efbe54.iso)       |
| German                 | x86  | [de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso](https://drive.massgrave.dev/de_windows_10_enterprise_ltsc_2019_x86_dvd_b003dc50.iso)       |
| Greek                  | x64  | [el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso](https://drive.massgrave.dev/el_windows_10_enterprise_ltsc_2019_x64_dvd_25ea66b9.iso)       |
| Greek                  | x86  | [el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso](https://drive.massgrave.dev/el_windows_10_enterprise_ltsc_2019_x86_dvd_d8746855.iso)       |
| English-United Kingdom | x64  | [en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso](https://drive.massgrave.dev/en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso) |
| English-United Kingdom | x86  | [en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso](https://drive.massgrave.dev/en-uk_windows_10_enterprise_ltsc_2019_x86_dvd_ae3afea1.iso) |
| English                | x64  | [en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso](https://drive.massgrave.dev/en_windows_10_enterprise_ltsc_2019_x64_dvd_5795bb03.iso)       |
| English                | x86  | [en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso](https://drive.massgrave.dev/en_windows_10_enterprise_ltsc_2019_x86_dvd_892869c9.iso)       |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2019_x64_dvd_686cdfbe.iso) |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_ltsc_2019_x86_dvd_a706f07d.iso) |
| Spanish                | x64  | [es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso](https://drive.massgrave.dev/es_windows_10_enterprise_ltsc_2019_x64_dvd_44a5b896.iso)       |
| Spanish                | x86  | [es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso](https://drive.massgrave.dev/es_windows_10_enterprise_ltsc_2019_x86_dvd_84f6ff1d.iso)       |
| Estonian               | x64  | [et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso](https://drive.massgrave.dev/et_windows_10_enterprise_ltsc_2019_x64_dvd_509e0d4c.iso)       |
| Estonian               | x86  | [et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso](https://drive.massgrave.dev/et_windows_10_enterprise_ltsc_2019_x86_dvd_56908605.iso)       |
| Finnish                | x64  | [fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_ltsc_2019_x64_dvd_8e6aaf2c.iso)       |
| Finnish                | x86  | [fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_ltsc_2019_x86_dvd_8016a99b.iso)       |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2019_x64_dvd_a77dd2c4.iso) |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_ltsc_2019_x86_dvd_21e007a6.iso) |
| French                 | x64  | [fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_ltsc_2019_x64_dvd_d64b363d.iso)       |
| French                 | x86  | [fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_ltsc_2019_x86_dvd_6718a277.iso)       |
| Hebrew                 | x64  | [he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso](https://drive.massgrave.dev/he_windows_10_enterprise_ltsc_2019_x64_dvd_a5032f00.iso)       |
| Hebrew                 | x86  | [he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso](https://drive.massgrave.dev/he_windows_10_enterprise_ltsc_2019_x86_dvd_e35105b4.iso)       |
| Croatian               | x64  | [hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_ltsc_2019_x64_dvd_0154a57e.iso)       |
| Croatian               | x86  | [hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_ltsc_2019_x86_dvd_978cda23.iso)       |
| Hungarian              | x64  | [hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_ltsc_2019_x64_dvd_7afb1447.iso)       |
| Hungarian              | x86  | [hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_ltsc_2019_x86_dvd_c59bde73.iso)       |
| Italian                | x64  | [it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso](https://drive.massgrave.dev/it_windows_10_enterprise_ltsc_2019_x64_dvd_e8629a2f.iso)       |
| Italian                | x86  | [it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso](https://drive.massgrave.dev/it_windows_10_enterprise_ltsc_2019_x86_dvd_0908d54b.iso)       |
| Japanese               | x64  | [ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_ltsc_2019_x64_dvd_c67b830b.iso)       |
| Japanese               | x86  | [ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_ltsc_2019_x86_dvd_72e8b031.iso)       |
| Korean                 | x64  | [ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_ltsc_2019_x64_dvd_67887e3e.iso)       |
| Korean                 | x86  | [ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_ltsc_2019_x86_dvd_4df783b1.iso)       |
| Lithuanian             | x64  | [lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_ltsc_2019_x64_dvd_5f505ee8.iso)       |
| Lithuanian             | x86  | [lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_ltsc_2019_x86_dvd_d3df66d2.iso)       |
| Latvian                | x64  | [lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_ltsc_2019_x64_dvd_410d73cd.iso)       |
| Latvian                | x86  | [lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_ltsc_2019_x86_dvd_c4ab014e.iso)       |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_ltsc_2019_x64_dvd_512b1b80.iso)       |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_ltsc_2019_x86_dvd_4411d908.iso)       |
| Dutch                  | x64  | [nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_ltsc_2019_x64_dvd_6b4c874e.iso)       |
| Dutch                  | x86  | [nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_ltsc_2019_x86_dvd_7de5cbe9.iso)       |
| Polish                 | x64  | [pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_ltsc_2019_x64_dvd_e896167a.iso)       |
| Polish                 | x86  | [pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_ltsc_2019_x86_dvd_83c5bbde.iso)       |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_ltsc_2019_x64_dvd_c8d2470d.iso)       |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_ltsc_2019_x86_dvd_206310fd.iso)       |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_ltsc_2019_x64_dvd_d43dcbad.iso)       |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_ltsc_2019_x86_dvd_208df283.iso)       |
| Romanian               | x64  | [ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_ltsc_2019_x64_dvd_47b6116b.iso)       |
| Romanian               | x86  | [ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_ltsc_2019_x86_dvd_d1a09b2f.iso)       |
| Russian                | x64  | [ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_ltsc_2019_x64_dvd_78e7853a.iso)       |
| Russian                | x86  | [ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_ltsc_2019_x86_dvd_196b5dad.iso)       |
| Slovak                 | x64  | [sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_ltsc_2019_x64_dvd_47437358.iso)       |
| Slovak                 | x86  | [sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_ltsc_2019_x86_dvd_dede1f66.iso)       |
| Slovenian              | x64  | [sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_ltsc_2019_x64_dvd_05f349aa.iso)       |
| Slovenian              | x86  | [sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_ltsc_2019_x86_dvd_3b3b7261.iso)       |
| Serbian-Latin          | x64  | [sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso](https://drive.massgrave.dev/sr_windows_10_enterprise_ltsc_2019_x64_dvd_8b47ec8a.iso)       |
| Serbian-Latin          | x86  | [sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso](https://drive.massgrave.dev/sr_windows_10_enterprise_ltsc_2019_x86_dvd_973a9911.iso)       |
| Swedish                | x64  | [sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_ltsc_2019_x64_dvd_4b25e231.iso)       |
| Swedish                | x86  | [sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_ltsc_2019_x86_dvd_5618a7ff.iso)       |
| Thai                   | x64  | [th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso](https://drive.massgrave.dev/th_windows_10_enterprise_ltsc_2019_x64_dvd_ae87916a.iso)       |
| Thai                   | x86  | [th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso](https://drive.massgrave.dev/th_windows_10_enterprise_ltsc_2019_x86_dvd_5e37c638.iso)       |
| Turkish                | x64  | [tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_ltsc_2019_x64_dvd_f2b90518.iso)       |
| Turkish                | x86  | [tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_ltsc_2019_x86_dvd_1d5513a0.iso)       |
| Ukrainian              | x64  | [uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_ltsc_2019_x64_dvd_d40a905a.iso)       |
| Ukrainian              | x86  | [uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_ltsc_2019_x86_dvd_e3b4eb4d.iso)       |

---

</TabItem>
<TabItem value="Windows 10 LTSB 2016" label="Windows 10 LTSB 2016" default>

**Windows 10 IoT Enterprise LTSB 2016**

(Build - 14393)  
It doesn't have the actual IotEnterpriseS edition, it's just EnterpriseS with OEM key (generic, not-activated) installed.  
This ISO file is taken from the Microsoft's OEM portal.  
Rename the .IMG extension to .iso.

| Language | Arch | Link                                                                                                                                                                                   |
| :------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| English  | x64  | [SW_DVD5_Win10_IoT_Enterprise_LTSB_1607_64-bit_EMB_English_OEM_X21-05293.IMG](https://drive.massgrave.dev/SW_DVD5_Win10_IoT_Enterprise_LTSB_1607_64-bit_EMB_English_OEM_X21-05293.IMG) |
| English  | x86  | [SW_DVD5_Win10_IoT_Enterprise_LTSB_1607_32-bit_EMB_English_OEM_X21-05294.IMG](https://drive.massgrave.dev/SW_DVD5_Win10_IoT_Enterprise_LTSB_1607_32-bit_EMB_English_OEM_X21-05294.IMG) |

---

**Windows 10 Enterprise LTSB 2016**

(Build - 14393)

| Language               | Arch | Link                                                                                                                                                   |
| :--------------------- | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arabic                 | x64  | [ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2016_ltsb_x64_dvd_9059481.iso)           |
| Arabic                 | x86  | [ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2016_ltsb_x86_dvd_9060006.iso)           |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2016_ltsb_x64_dvd_9060109.iso)           |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2016_ltsb_x86_dvd_9060079.iso)           |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2016_ltsb_x64_dvd_9060409.iso)           |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2016_ltsb_x86_dvd_9057089.iso)           |
| Czech                  | x64  | [cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2016_ltsb_x64_dvd_9058277.iso)           |
| Czech                  | x86  | [cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2016_ltsb_x86_dvd_9058253.iso)           |
| Chinese-Traditional    | x64  | [ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_2016_ltsb_x64_dvd_9057374.iso)           |
| Chinese-Traditional    | x86  | [ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso](https://drive.massgrave.dev/ct_windows_10_enterprise_2016_ltsb_x86_dvd_9057437.iso)           |
| Danish                 | x64  | [da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2016_ltsb_x64_dvd_9058601.iso)           |
| Danish                 | x86  | [da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2016_ltsb_x86_dvd_9058895.iso)           |
| German                 | x64  | [de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2016_ltsb_x64_dvd_9058605.iso)           |
| German                 | x86  | [de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2016_ltsb_x86_dvd_9058899.iso)           |
| Greek                  | x64  | [el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2016_ltsb_x64_dvd_9059317.iso)           |
| Greek                  | x86  | [el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2016_ltsb_x86_dvd_9059530.iso)           |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2016_ltsb_x64_dvd_9060114.iso)     |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2016_ltsb_x86_dvd_9060085.iso)     |
| English                | x64  | [en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2016_ltsb_x64_dvd_9059483.iso)           |
| English                | x86  | [en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2016_ltsb_x86_dvd_9060010.iso)           |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2016_ltsb_x64_dvd_9060115.iso)     |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2016_ltsb_x86_dvd_9060090.iso)     |
| Spanish                | x64  | [es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2016_ltsb_x64_dvd_9059485.iso)           |
| Spanish                | x86  | [es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2016_ltsb_x86_dvd_9060020.iso)           |
| Estonian               | x64  | [et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2016_ltsb_x64_dvd_9060433.iso)           |
| Estonian               | x86  | [et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2016_ltsb_x86_dvd_9057091.iso)           |
| Finnish                | x64  | [fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2016_ltsb_x64_dvd_9057376.iso)           |
| Finnish                | x86  | [fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2016_ltsb_x86_dvd_9057439.iso)           |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2016_ltsb_x64_dvd_9058278.iso)     |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2016_ltsb_x86_dvd_9058259.iso)     |
| French                 | x64  | [fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2016_ltsb_x64_dvd_9057871.iso)           |
| French                 | x86  | [fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2016_ltsb_x86_dvd_9058127.iso)           |
| Hebrew                 | x64  | [he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2016_ltsb_x64_dvd_9059484.iso)           |
| Hebrew                 | x86  | [he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2016_ltsb_x86_dvd_9060012.iso)           |
| Croatian               | x64  | [hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2016_ltsb_x64_dvd_9057884.iso)           |
| Croatian               | x86  | [hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2016_ltsb_x86_dvd_9058120.iso)           |
| Hungarian              | x64  | [hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2016_ltsb_x64_dvd_9060111.iso)           |
| Hungarian              | x86  | [hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2016_ltsb_x86_dvd_9060087.iso)           |
| Italian                | x64  | [it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2016_ltsb_x64_dvd_9060446.iso)           |
| Italian                | x86  | [it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2016_ltsb_x86_dvd_9057094.iso)           |
| Japanese               | x64  | [ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2016_ltsb_x64_dvd_9057377.iso)           |
| Japanese               | x86  | [ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2016_ltsb_x86_dvd_9057438.iso)           |
| Korean                 | x64  | [ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2016_ltsb_x64_dvd_9057889.iso)           |
| Korean                 | x86  | [ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2016_ltsb_x86_dvd_9058162.iso)           |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2016_ltsb_x64_dvd_9058606.iso)           |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2016_ltsb_x86_dvd_9058906.iso)           |
| Latvian                | x64  | [lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2016_ltsb_x64_dvd_9058289.iso)           |
| Latvian                | x86  | [lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2016_ltsb_x86_dvd_9058263.iso)           |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2016_ltsb_x64_dvd_9059319.iso)           |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2016_ltsb_x86_dvd_9059535.iso)           |
| Dutch                  | x64  | [nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2016_ltsb_x64_dvd_9059312.iso)           |
| Dutch                  | x86  | [nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2016_ltsb_x86_dvd_9059526.iso)           |
| Polish                 | x64  | [pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2016_ltsb_x64_dvd_9059490.iso)           |
| Polish                 | x86  | [pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2016_ltsb_x86_dvd_9060015.iso)           |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2016_ltsb_x64_dvd_9060465.iso)           |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2016_ltsb_x86_dvd_9057097.iso)           |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2016_ltsb_x64_dvd_9060113.iso)           |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2016_ltsb_x86_dvd_9060088.iso)           |
| Romanian               | x64  | [ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2016_ltsb_x64_dvd_9057388.iso)           |
| Romanian               | x86  | [ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2016_ltsb_x86_dvd_9057443.iso)           |
| Russian                | x64  | [ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2016_ltsb_x64_dvd_9057886.iso)           |
| Russian                | x86  | [ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2016_ltsb_x86_dvd_9058173.iso)           |
| Slovak                 | x64  | [sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2016_ltsb_x64_dvd_9058612.iso)           |
| Slovak                 | x86  | [sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2016_ltsb_x86_dvd_9058908.iso)           |
| Slovenian              | x64  | [sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2016_ltsb_x64_dvd_9059321.iso)           |
| Slovenian              | x86  | [sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2016_ltsb_x86_dvd_9059531.iso)           |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2016_ltsb_x64_dvd_9058293.iso) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2016_ltsb_x86_dvd_9058276.iso) |
| Swedish                | x64  | [sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2016_ltsb_x64_dvd_9060456.iso)           |
| Swedish                | x86  | [sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2016_ltsb_x86_dvd_9057114.iso)           |
| Thai                   | x64  | [th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2016_ltsb_x64_dvd_9057403.iso)           |
| Thai                   | x86  | [th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2016_ltsb_x86_dvd_9057441.iso)           |
| Turkish                | x64  | [tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2016_ltsb_x64_dvd_9057891.iso)           |
| Turkish                | x86  | [tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2016_ltsb_x86_dvd_9058186.iso)           |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2016_ltsb_x64_dvd_9058295.iso)           |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2016_ltsb_x86_dvd_9058286.iso)           |

---

</TabItem>
<TabItem value="Windows 10 LTSB 2015" label="Windows 10 LTSB 2015" default>

**Windows 10 IoT Enterprise LTSB 2015**

(Build - 10240)  
It doesn't have the actual IotEnterpriseS edition, it's just EnterpriseS with OEM key (generic, not-activated) installed.  
This ISO file is taken from the Microsoft's OEM portal.  
Rename the .IMG extension to .iso.  
Enter `FWN7H-PF93Q-4GGP8-M8RF3-MDWWW` key while installing Windows.

| Language | Arch | Link                                                                                                                                                                                   |
| :------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| English  | x64  | [SW_DVD5_Win_10_IOT_Enterprise_2015_LTSB_64Bit_EMB_English_OEM_X20-20063.IMG](https://drive.massgrave.dev/SW_DVD5_Win_10_IOT_Enterprise_2015_LTSB_64Bit_EMB_English_OEM_X20-20063.IMG) |
| English  | x86  | [SW_DVD5_Win_10_IOT_Enterprise_2015_LTSB_32Bit_EMB_English_OEM_X20-20064.IMG](https://drive.massgrave.dev/SW_DVD5_Win_10_IOT_Enterprise_2015_LTSB_32Bit_EMB_English_OEM_X20-20064.IMG) |

---

**Windows 10 Enterprise LTSB 2015**

(Build - 10240)

| Language               | Arch | Link                                                                                                                                                   |
| :--------------------- | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arabic                 | x64  | [ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2015_ltsb_x64_dvd_6848420.iso)           |
| Arabic                 | x86  | [ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso](https://drive.massgrave.dev/ar_windows_10_enterprise_2015_ltsb_x86_dvd_6848421.iso)           |
| Bulgarian              | x64  | [bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2015_ltsb_x64_dvd_6848422.iso)           |
| Bulgarian              | x86  | [bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso](https://drive.massgrave.dev/bg_windows_10_enterprise_2015_ltsb_x86_dvd_6848424.iso)           |
| Chinese-Simplified     | x64  | [cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2015_ltsb_x64_dvd_6848425.iso)           |
| Chinese-Simplified     | x86  | [cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso](https://drive.massgrave.dev/cn_windows_10_enterprise_2015_ltsb_x86_dvd_6848426.iso)           |
| Czech                  | x64  | [cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2015_ltsb_x64_dvd_6848435.iso)           |
| Czech                  | x86  | [cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso](https://drive.massgrave.dev/cs_windows_10_enterprise_2015_ltsb_x86_dvd_6848437.iso)           |
| Danish                 | x64  | [da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2015_ltsb_x64_dvd_6848440.iso)           |
| Danish                 | x86  | [da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso](https://drive.massgrave.dev/da_windows_10_enterprise_2015_ltsb_x86_dvd_6848441.iso)           |
| German                 | x64  | [de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2015_ltsb_x64_dvd_6848473.iso)           |
| German                 | x86  | [de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso](https://drive.massgrave.dev/de_windows_10_enterprise_2015_ltsb_x86_dvd_6848474.iso)           |
| Greek                  | x64  | [el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2015_ltsb_x64_dvd_6848475.iso)           |
| Greek                  | x86  | [el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso](https://drive.massgrave.dev/el_windows_10_enterprise_2015_ltsb_x86_dvd_6848476.iso)           |
| English-United Kingdom | x64  | [en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2015_ltsb_x64_dvd_6848456.iso)     |
| English-United Kingdom | x86  | [en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso](https://drive.massgrave.dev/en-gb_windows_10_enterprise_2015_ltsb_x86_dvd_6848457.iso)     |
| English                | x64  | [en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2015_ltsb_x64_dvd_6848446.iso)           |
| English                | x86  | [en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso](https://drive.massgrave.dev/en_windows_10_enterprise_2015_ltsb_x86_dvd_6848454.iso)           |
| Spanish-Mexico         | x64  | [es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2015_ltsb_x64_dvd_6850897.iso)     |
| Spanish-Mexico         | x86  | [es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso](https://drive.massgrave.dev/es-mx_windows_10_enterprise_2015_ltsb_x86_dvd_6850898.iso)     |
| Spanish                | x64  | [es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2015_ltsb_x64_dvd_6850876.iso)           |
| Spanish                | x86  | [es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso](https://drive.massgrave.dev/es_windows_10_enterprise_2015_ltsb_x86_dvd_6850896.iso)           |
| Estonian               | x64  | [et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2015_ltsb_x64_dvd_6848458.iso)           |
| Estonian               | x86  | [et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso](https://drive.massgrave.dev/et_windows_10_enterprise_2015_ltsb_x86_dvd_6848460.iso)           |
| Finnish                | x64  | [fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2015_ltsb_x64_dvd_6848462.iso)           |
| Finnish                | x86  | [fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso](https://drive.massgrave.dev/fi_windows_10_enterprise_2015_ltsb_x86_dvd_6848464.iso)           |
| French-Canada          | x64  | [fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2015_ltsb_x64_dvd_6848470.iso)     |
| French-Canada          | x86  | [fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso](https://drive.massgrave.dev/fr-ca_windows_10_enterprise_2015_ltsb_x86_dvd_6848472.iso)     |
| French                 | x64  | [fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2015_ltsb_x64_dvd_6848466.iso)           |
| French                 | x86  | [fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso](https://drive.massgrave.dev/fr_windows_10_enterprise_2015_ltsb_x86_dvd_6848468.iso)           |
| Hebrew                 | x64  | [he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2015_ltsb_x64_dvd_6848477.iso)           |
| Hebrew                 | x86  | [he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso](https://drive.massgrave.dev/he_windows_10_enterprise_2015_ltsb_x86_dvd_6850760.iso)           |
| Chinese-Hong Kong SAR  | x64  | [hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso](https://drive.massgrave.dev/hk_windows_10_enterprise_2015_ltsb_x64_dvd_6848427.iso)           |
| Chinese-Hong Kong SAR  | x86  | [hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso](https://drive.massgrave.dev/hk_windows_10_enterprise_2015_ltsb_x86_dvd_6848428.iso)           |
| Croatian               | x64  | [hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2015_ltsb_x64_dvd_6848433.iso)           |
| Croatian               | x86  | [hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso](https://drive.massgrave.dev/hr_windows_10_enterprise_2015_ltsb_x86_dvd_6848434.iso)           |
| Hungarian              | x64  | [hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2015_ltsb_x64_dvd_6850770.iso)           |
| Hungarian              | x86  | [hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso](https://drive.massgrave.dev/hu_windows_10_enterprise_2015_ltsb_x86_dvd_6850771.iso)           |
| Italian                | x64  | [it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2015_ltsb_x64_dvd_6850772.iso)           |
| Italian                | x86  | [it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso](https://drive.massgrave.dev/it_windows_10_enterprise_2015_ltsb_x86_dvd_6850773.iso)           |
| Japanese               | x64  | [ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2015_ltsb_x64_dvd_6850774.iso)           |
| Japanese               | x86  | [ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso](https://drive.massgrave.dev/ja_windows_10_enterprise_2015_ltsb_x86_dvd_6850775.iso)           |
| Korean                 | x64  | [ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2015_ltsb_x64_dvd_6850776.iso)           |
| Korean                 | x86  | [ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso](https://drive.massgrave.dev/ko_windows_10_enterprise_2015_ltsb_x86_dvd_6850777.iso)           |
| Lithuanian             | x64  | [lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2015_ltsb_x64_dvd_6850780.iso)           |
| Lithuanian             | x86  | [lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso](https://drive.massgrave.dev/lt_windows_10_enterprise_2015_ltsb_x86_dvd_6850781.iso)           |
| Latvian                | x64  | [lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2015_ltsb_x64_dvd_6850778.iso)           |
| Latvian                | x86  | [lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso](https://drive.massgrave.dev/lv_windows_10_enterprise_2015_ltsb_x86_dvd_6850779.iso)           |
| Norwegian-Bokmal       | x64  | [nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2015_ltsb_x64_dvd_6850782.iso)           |
| Norwegian-Bokmal       | x86  | [nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso](https://drive.massgrave.dev/nb_windows_10_enterprise_2015_ltsb_x86_dvd_6850783.iso)           |
| Dutch                  | x64  | [nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2015_ltsb_x64_dvd_6848442.iso)           |
| Dutch                  | x86  | [nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso](https://drive.massgrave.dev/nl_windows_10_enterprise_2015_ltsb_x86_dvd_6848443.iso)           |
| Polish                 | x64  | [pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2015_ltsb_x64_dvd_6850784.iso)           |
| Polish                 | x86  | [pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso](https://drive.massgrave.dev/pl_windows_10_enterprise_2015_ltsb_x86_dvd_6850785.iso)           |
| Portuguese-Portugal    | x64  | [pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2015_ltsb_x64_dvd_6850808.iso)           |
| Portuguese-Portugal    | x86  | [pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso](https://drive.massgrave.dev/pp_windows_10_enterprise_2015_ltsb_x86_dvd_6850818.iso)           |
| Portuguese-Brazil      | x64  | [pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2015_ltsb_x64_dvd_6850787.iso)           |
| Portuguese-Brazil      | x86  | [pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso](https://drive.massgrave.dev/pt_windows_10_enterprise_2015_ltsb_x86_dvd_6850798.iso)           |
| Romanian               | x64  | [ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2015_ltsb_x64_dvd_6850828.iso)           |
| Romanian               | x86  | [ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso](https://drive.massgrave.dev/ro_windows_10_enterprise_2015_ltsb_x86_dvd_6850837.iso)           |
| Russian                | x64  | [ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2015_ltsb_x64_dvd_6850847.iso)           |
| Russian                | x86  | [ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso](https://drive.massgrave.dev/ru_windows_10_enterprise_2015_ltsb_x86_dvd_6850858.iso)           |
| Slovak                 | x64  | [sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2015_ltsb_x64_dvd_6850870.iso)           |
| Slovak                 | x86  | [sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso](https://drive.massgrave.dev/sk_windows_10_enterprise_2015_ltsb_x86_dvd_6850871.iso)           |
| Slovenian              | x64  | [sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2015_ltsb_x64_dvd_6850872.iso)           |
| Slovenian              | x86  | [sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso](https://drive.massgrave.dev/sl_windows_10_enterprise_2015_ltsb_x86_dvd_6850873.iso)           |
| Serbian-Latin          | x64  | [sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2015_ltsb_x64_dvd_6850868.iso) |
| Serbian-Latin          | x86  | [sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso](https://drive.massgrave.dev/sr-latn_windows_10_enterprise_2015_ltsb_x86_dvd_6850869.iso) |
| Swedish                | x64  | [sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2015_ltsb_x64_dvd_6850899.iso)           |
| Swedish                | x86  | [sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso](https://drive.massgrave.dev/sv_windows_10_enterprise_2015_ltsb_x86_dvd_6850900.iso)           |
| Thai                   | x64  | [th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2015_ltsb_x64_dvd_6850901.iso)           |
| Thai                   | x86  | [th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso](https://drive.massgrave.dev/th_windows_10_enterprise_2015_ltsb_x86_dvd_6850902.iso)           |
| Turkish                | x64  | [tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2015_ltsb_x64_dvd_6850904.iso)           |
| Turkish                | x86  | [tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso](https://drive.massgrave.dev/tr_windows_10_enterprise_2015_ltsb_x86_dvd_6850915.iso)           |
| Chinese-Taiwan         | x64  | [tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso](https://drive.massgrave.dev/tw_windows_10_enterprise_2015_ltsb_x64_dvd_6848430.iso)           |
| Chinese-Taiwan         | x86  | [tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso](https://drive.massgrave.dev/tw_windows_10_enterprise_2015_ltsb_x86_dvd_6848432.iso)           |
| Ukrainian              | x64  | [uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2015_ltsb_x64_dvd_6850925.iso)           |
| Ukrainian              | x86  | [uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso](https://drive.massgrave.dev/uk_windows_10_enterprise_2015_ltsb_x86_dvd_6850935.iso)           |

</TabItem>

<TabItem value="Windows LTSC ARM64" label="Windows LTSC ARM64" default>

**Windows 10/11 IoT Enterprise LTSC ARM64**

Check [here](windows_arm_links.md).

---

</TabItem>
</Tabs>
