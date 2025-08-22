# Download Windows / Office

:::info

- All download links on our website lead only to genuine files.
- Slow download? Use a download manager like [FDM](https://www.freedownloadmanager.org/).
- Download link not working? Try the [WARP](https://one.one.one.one/) VPN to unblock it.

:::

## Download Windows
-  [Windows 11](windows_11_links.md)                                                                                                                                                              
-  [Windows 10](windows_10_links.md)                                                                                                                                                              
-  [Windows 10 / 11 Enterprise **LTSC**](windows_ltsc_links.md)                                                                                                                                   
-  [Windows ARM64](windows_arm_links.md)                                                                                                                                                          
-  [Windows 8.1](windows_8.1_links.md)                                                                                                                                                            
-  [Windows 7](windows_7_links.md)                                                                                                                                                                
-  [Windows Vista](windows_vista__links.md)    
-  [Windows XP](windows_xp_links.md)                                                                                                                                                              
-  [Windows Server](windows-server-links.md)                                                                                                                                                      
-  Windows Insider [10-11](https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso) - [Server](https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewserver) / [Registration](https://www.microsoft.com/en-us/windowsinsider/getting-started) is needed to download.

## Download Office
Activation with [MAS](intro.md#how-to-activate-windows--office) is required after installing Office.

-  [Office C2R Installers](https://gravesoft.dev/office_c2r_links) ❤️ (O365, 2024, 2021, 2019, 2016, 2013)  
-  [Office C2R Custom Install](https://gravesoft.dev/office_c2r_custom) (O365, 2024, 2021, 2019, 2016)
-  [Office MSI VL (Old versions)](office_msi_links.md) (2016, 2013, 2010, 2007)
-  [Office For **Mac**](office_for_mac.md)                             

---

## FAQ

#### Guides
- [Clean Install Windows](https://gravesoft.dev/clean_install_windows)
- [In-place Repair Upgrade (Keeping files and apps)](https://gravesoft.dev/in-place_repair_upgrade)
- [Windows 11 on Unsupported Hardware](https://gravesoft.dev/clean_install_windows#windows-11-on-unsupported-hardware)
- [Edition List During Windows Installation](https://gravesoft.dev/clean_install_windows#edition-list-during-windows-installation)
- [Bypass Windows 11 Internet and Microsoft Account Requirements](https://gravesoft.dev/clean_install_windows#bypass-windows-11-internet-and-microsoft-account-requirements)
- [Windows 10 Updates After End-Of-Life](windows10_eol.md)

#### Why are we hosting files on our server when we can download them from Microsoft?

<details>
<summary>Click here for info</summary>

Microsoft provides consumer ISOs for free on its [site](https://www.microsoft.com/en-us/software-download), but business, enterprise, and older ISOs are behind paywalls such as [MVS](https://visualstudio.microsoft.com/subscriptions/) and the [M365 Admin Center](https://learn.microsoft.com/en-us/licensing/vlsc-faqs-home-page). That's why we need to host files on our servers.

</details>

#### How to ensure that these files are genuine?

<details>
<summary>Click here for info</summary>

You can check [here](genuine-installation-media.md#verify-authenticity-of-files) to learn how to confirm that files are genuine by verifying the checksum on the official Microsoft website.

</details>


#### There are both consumer and business ISOs listed here. What is the difference between them?

<details>
<summary>Click here for info</summary>

For Windows 10/11 General Availability Channel (GAC) releases (i.e., Home and Pro), Microsoft produces two types of ISO files: Consumer and Business. 

The Consumer ISO includes all editions, such as Home, Pro, and Education, but excludes the Enterprise edition. In contrast, the Business ISO contains all editions except the Home-level editions; these ISO files come with a KMS key preinstalled (not activated) by default.

</details>


#### How can I obtain an official Microsoft ISO that is not available here?

<details>
<summary>Click here for info</summary>

You can request the file [here](https://discord.gg/FajfGaH3nD).

</details>

---

## Verify Authenticity of Files

You can use [file hashing](https://en.wikipedia.org/wiki/File_verification) to verify whether a file is genuine. This can be done using tools like [7-Zip](https://7-zip.org/).  
After installing 7-Zip, right-click the ISO file and go to 7-Zip > CRC SHA > SHA-256.

There are many places where you can find checksums for verification. Examples are listed below.

 -  [files.rg-adguard](https://files.rg-adguard.net/search) (the most complete collection)
 -  [MVS dump](https://awuctl.github.io/mvs/)
 -  [genuine-iso-verifier](https://genuine-iso-verifier.weebly.com/)
 -  [msdn.rg-adguard](https://msdn.rg-adguard.net/)
 -  [sha1.rg-adguard](https://sha1.rg-adguard.net/)
 -  Google

#### Microsoft's official free links for checksums:

 -	[MVS](https://my.visualstudio.com/Downloads)
 -	[Windows 11](https://www.microsoft.com/en-us/software-download/windows11)
 -	[Windows 10](https://www.microsoft.com/en-us/software-download/windows10)

<details>
  <summary>More info on Official links!</summary>

**MVS**  
On MVS, you need to log in and click the 'All Downloads' button, then search for the product name.  

**MVS Limitations:**  
 -	They used to publish only SHA-1, later publishing both SHA-1 and SHA-256, and since 2022 they publish only SHA-256.  
 -	However, they removed all the SHA-1 data; as a result, old files' checksums are simply not available on the MVS site.  
 -	Also, around the time when they were publishing both SHA-1 and SHA-256, they messed up some SHA-256 data. For example: 
 	```
 	Incorrect SHA-256 example
 	SHA256: BDB3D0C5C933B201ECE736A172FB604AA5D7D0705DD75681F9FCC4B1EE79FAC8
 	File name: en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso
 	```
 -	So it's useful only for the latest files.

**Windows 11**  
The SHA-256 list will appear if you download the ISO file.

**Windows 10**  
Microsoft doesn't allow you to download the ISO file directly if the browser's user agent is a Windows OS. You need to change it to something else, like Android or iOS, and then download the ISO file to see the list.

</details>

---

#### Video Tutorial

import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' height='auto' src='/how_to_verify_files.mp4' />

---

## Need help?

Contact us [here](contactus.md).
