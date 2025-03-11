# Download Windows / Office

:::info[Note]

All download links available on our website lead to genuine files only.

:::

## Download Windows
-  [Windows 11](windows_11_links.md)                                                                                                                                                              
-  [Windows 10](windows_10_links.md)                                                                                                                                                              
-  [Windows 10 / 11 Enterprise **LTSC**](windows_ltsc_links.md)                                                                                                                                   
-  [Windows ARM64](windows_arm_links.md)                                                                                                                                                          
-  [Windows 8.1](windows_8.1_links.md)                                                                                                                                                            
-  [Windows 7](windows_7_links.md)                                                                                                                                                                
-  [Windows Vista](windows_vista_links.md)                                                                                                                                                        
-  [Windows XP](windows_xp_links.md)                                                                                                                                                              
-  [Windows Server](windows_server_links.md)                                                                                                                                                      
-  Windows Insider [10-11](https://www.microsoft.com/software-download/windowsinsiderpreviewiso) - [Server](https://www.microsoft.com/software-download/windowsinsiderpreviewserver) / [(Registration)](https://www.microsoft.com/windowsinsider/getting-started)

## Download Office
-  [Office C2R Installers](https://gravesoft.dev/office_c2r_links) ❤️  
-  [Office C2R Custom Install](https://gravesoft.dev/office_c2r_custom)
-  [Office MSI VL (Old versions)](office_msi_links.md)                 
-  [Office For **Mac**](office_for_mac.md)                             

---

## FAQ

#### Guides
- [How to perform a clean installation of Windows?](https://gravesoft.dev/clean_install_windows)
- [How to upgrade while keeping your files and apps?](https://gravesoft.dev/in-place_repair_upgrade)
- [How to officially install Windows 11 on unsupported hardware without issues in future feature updates?](https://gravesoft.dev/clean_install_windows#windows-11-on-unsupported-hardware)
- [Why is the edition list not appearing during the installation, and why is it automatically installing the Home edition?](https://gravesoft.dev/clean_install_windows#edition-list-during-windows-installation)

#### Why are we hosting files on our server when we can download them from Microsoft?
Microsoft provides consumer ISOs for free on their [site](https://www.microsoft.com/software-download), but business, enterprise, and older ISOs are behind paywalls such as [MVS](https://visualstudio.microsoft.com/subscriptions/) and [M365 Admin Center](https://learn.microsoft.com/licensing/vlsc-faqs-home-page). That's why we need to host files on our servers.

#### How to ensure that these files are genuine?
You can check [here](genuine-installation-media.md#verify-authenticity-of-files) on how to be sure that files are genuine by verifying the checksum available on the official Microsoft website.

#### There are both consumer and business ISOs listed here. What is the difference between them?
For Windows 10/11 General Availability Channel (GAC) releases (i.e., Home and Pro), Microsoft produces two types of ISO files: Consumer and Business. 

The Consumer ISO includes all editions such as Home, Pro, and Education, but excludes the Enterprise edition. In contrast, the Business ISO contains all editions except for the Home-level editions, and these ISO files come with a KMS key pre-installed (not activated) by default.

#### Why are the official monthly ISOs no longer updated on the site?
It takes too much effort and resources when users can and should simply run Windows updates (cumulative) themselves. We have decided to maintain the same build number as the consumer ISOs publicly provided by Microsoft unless there are issues with them. For example, we provide updated ISOs for Windows 10 to resolve the issue where Windows update may fail to install [KB5028997](https://support.microsoft.com/topic/kb5028997-instructions-to-manually-resize-your-partition-to-install-the-winre-update-400faa27-9343-461c-ada9-24c8229763bf) when using Microsoft’s official public ISO.

#### How can I obtain an official Microsoft ISO that is not available here?
You can request the file [here](https://discord.gg/NpuNEUS2Sh).

---

## Verify Authenticity Of Files

You can use the [file hashing method](https://en.wikipedia.org/wiki/File_verification) to verify if a file is genuine. This can be done using tools like [7-Zip](https://7-zip.org/) (After installing 7-Zip, right-click on the ISO file and go to 7-Zip > CRC SHA).

There are many places where you can find these checksums for verification. Examples can be found below.

 -  [files.rg-adguard](https://files.rg-adguard.net/search) (the most complete collection)
 -  [MVS dump](https://awuctl.github.io/mvs/)
 -  [genuine-iso-verifier](https://genuine-iso-verifier.weebly.com/)
 -  [msdn.rg-adguard](https://msdn.rg-adguard.net/)
 -  [sha1.rg-adguard](https://sha1.rg-adguard.net/)
 -  Google

Microsoft's Official free links for checksums:

 -	[MVS](https://my.visualstudio.com/Downloads)
 -	[Windows 11](https://www.microsoft.com/software-download/windows11)
 -	[Windows 10](https://www.microsoft.com/software-download/windows10)

<details>
  <summary>More info on Official links!</summary>

**MVS**  
On MVS, you need to login and click on 'All Downloads' button and then search the product name.  

**MVS Limitations:**  
 -	They used to publish only SHA-1, but later started publishing SHA-1 and SHA-256 both and from 2022 they now publish only SHA-256.  
 -	However they removed all the SHA-1 data and as a result, old files checksums are simply not available on MVS site.  
 -	Also, around the time when they were publishing SHA-1 and SHA-256 both, they messed up some SHA-256 data, for example 
 	```
 	Incorrect SHA-256 example
 	SHA256: BDB3D0C5C933B201ECE736A172FB604AA5D7D0705DD75681F9FCC4B1EE79FAC8
 	File name: en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso
 	```
 -	So its useful only for the latest files.

**Windows 11**  
SHA-256 list will appear if you download the ISO file.

**Windows 10**  
Microsoft doesn't allow you to download ISO file directly if browser's useragent is Windows OS. So you need to change it to something else like Android or IOS and then download the ISO file to see the list.

</details>

---

#### Video Tutorial

import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' height='auto' url='/how_to_verify_files.mp4' />

---

## Need help?

Check [here](contactus.md).
