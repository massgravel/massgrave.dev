---
pagetitle: Changelog
---

# MAS Changelog

------------------------------------------------------------------------

## 2.2

**A New Hope For HWID**

#### HWID:

-   A new method is discovered to activate with HWID. <https://massgrave.dev/hwid.html>\
    Thanks a lot to the [asdcorp](https://github.com/asdcorp) and team for the discovery.

------------------------------------------------------------------------

## 2.1

**HWID Activation is not working**

------------------------------------------------------------------------

#### HWID:

-   Added info for activation not working issue.\
    It's not working because of server-side changes at Microsoft. Use the KMS38 option for now. Your previously established HWID is safe. This happened because of [recent change](https://devicepartner.microsoft.com/en-us/communications/comm-windows-ends-installation-path-for-free-windows-7-8-upgrade) to not allow Windows 7/8 free upgrades.

#### Ohook:

-   Change the key preference for Office products in this order `Retail:TB:Sub > Retail > OEM:NONSLP > Volume:MAK > Volume:GVLK`
-   Fixed a few bugs

------------------------------------------------------------------------

## 2.0

-   Minor update: Add info in check activation scripts to ignore ospp.vbs /dstatus results if Ohook install is found.

------------------------------------------------------------------------

## 1.9

**Added Permanent Activation for Office**

------------------------------------------------------------------------

#### Ohook:

-   Added Ohook activation method, it can activate Office permanently on Windows 8 and higher and their Server equivalent except Office 2010 and Office UWP apps. Thanks to @asdcorp for this new method. More info <https://massgrave.dev/ohook.html> <https://github.com/asdcorp/ohook>

#### HWID/KMS38:

-   HWID activation is added for IotEnterpriseS 2024. At the moment, the 2024 version of IotEnterpriseS and IotEnterpriseSK have HWID activation, EnterpriseS/SN don't
-   More checks are added to find better error details for: Internet issue WMI issue SvcRestartTask issue Services issue
-   Some codes are optimized

#### Online KMS:

-   Script will create schduled task files in `C:\Program Files\Activation-Renewal` instead of `C:\ProgramData\Activation-Renewal` due to security reasons
-   The script is updated as per @abbodi1406 KVA v50. Changes:
    -   Fixed conversion for Office 2016 C2R Retail previously, the first run mistakenly said conversion had failed, even though it was successful (due to confusion with Office 2019 licenses/location detection)
    -   Added support for activating Windows 10 IoT Enterprise LTSC 2021 (LCU 19044.2788 or later)

#### Change Windows Edition:

-   Script will use @ave9858 (Alex) DISM API method instead of changepk.exe method to change from Windows 10/11 Core to Non-core (e.g. Home to Pro) Advantages: Internet doesn't need to be disabled, all OEM/GVLK key restrictions are removed, and better error output
-   Script will only use best methods to change edition instead of showing multiple choices

#### Troubleshoot:

-   Script will compress large log files to cab instead of deleting and creating them fresh in DISM restore and SFC scan options
-   WMI fix is improved

#### All:

-   Insert HWID key script is removed because it's not important and causes confusion
-   Scripts will now disable quick edit mode temporarily because users often click inside the script window and it pauses the script
-   Check is added for Null service at the start of the script because corrupt service crashes the script
-   Codes are optimized and fixed a few bugs
-   [Gitlab](https://gitlab.com/massgrave/microsoft-activation-scripts) repo was taken down, we have created a repo on [Bitbucket](https://bitbucket.org/WindowsAddict/microsoft-activation-scripts) as a replacement. Also revived the [Subreddit](https://www.reddit.com/r/MAS_Activator/).

------------------------------------------------------------------------

## 1.8

**Goodbye to Cleanospp.exe / MAS is now 100% naked**

------------------------------------------------------------------------

#### HWID/KMS38:

-   Checks are added to find issues in:
    -   Connection to MS licensing servers. Thanks to \@ave9858 (Alex)
    -   SPP permissions in files and registry
    -   WPA registry keys. Thanks to \@ave9858 (Alex)
    -   KeyIso service which affects ticket installation. Thanks to \@ave9858 (Alex)
    -   Store apps blocking registries
    -   Windows updates
    -   Many more
-   Fixed a few bugs

#### Online KMS:

-   Replaced cleanospp.exe with powershell script [CleanOffice.ps1](https://gist.github.com/ave9858/9fff6af726ba3ddc646285d1bbf37e71) Thanks to \@ave9858 (Alex)
-   Fixed an issue where script may stuck in server port check
-   Script is updated as per \@abbodi1406 KVA v49. Changes:
    -   Enhanced Office 15.0 C2R detection to differentiate Retail\<\>Volume products
    -   Added fallback if Office 16.0 C2R licenses integrator.exe failed, to install them the old way (using slmgr.vbs/ospp.vbs)

#### Troubleshoot:

-   Fix WMI option is improved
-   Fix licensing option now will fix ClipSVC, Office vNext, SPP and OSPP licenses and SPP permissions in files and registry. Thanks to \@ave9858 (Alex)

#### Change Windows Edition:

-   Script now [supports](https://github.com/asdcorp/Set-WindowsCbsEdition/commit/2b3c50024d58e9d9eb158fd538afd98e5345140c) default Win 7 RTM, WMF requirement is removed. Thanks to \@ave9858 (Alex)

#### All:

-   All C# code is changed to Powershell reflection code to avoid temp files and AV detections. Thanks to \@ave9858 (Alex)
-   Keys are a bit obfuscated in scripts to reduce AV detections
-   `irm https://massgrave.dev/get | iex` code to launch MAS via Powershell will now create uniquely named/hash files on each run to reduce AV detections
-   A detailed page is added for [Office C2R retail installers](https://massgrave.dev/office_c2r_links.html)
-   Error messages and instructions are improved in all scripts
-   [MAS legacy methods](https://github.com/massgravel/MAS-Legacy-Methods) scripts are updated as well
-   We are now on [Twitter](https://twitter.com/massgravel) and a [Telegram group](https://t.me/Microsoft_Activation_Scripts) is created for MAS-related queries and activation issues

------------------------------------------------------------------------

## 1.7

**Goodbye to Gatherosstate.exe**

------------------------------------------------------------------------

#### HWID/KMS38:

-   Gatherosstate.exe is replaced by [universal tickets](https://massgrave.dev/hwid.html#Types_of_Tickets). Thanks to \@ave9858 (Alex).
-   Legacy HWID methods are now preserverd in another repo [MAS-Legacy-Methods](https://github.com/massgravel/MAS-Legacy-Methods).
-   HWID key is added for Windows 11 IoTEnterpriseSK edition.
-   To avoid errors due to unsupported Windows region, HWID script will change it to US and revert it back.
-   HWID script will delete a IdentityCRL registry key to resolve issues caused by changed hardware ID. Thanks to @awuctl
-   KMS38 script will now apply the KMS38 protection by default. Powershell code for it is now simplified.
-   ClipUp.exe for Server CorAcor editions is removed from separate files version as well. Users will need to follow [this](https://massgrave.dev/kms38.html#KMS38_-_Server_CorAcor) to KMS38 activate them.
-   Scripts will enable Windows Script Host if it's disabled.
-   More checks are added to find the cause of activation failure.

#### Online KMS:

-   Script is updated as per @abbodi1406 KVA v48 (Major change: optional behavior to override Office C2R vNext license (subscription or lifetime) or its residue (which may prevent proper KMS activation).
-   Scripts will enable Windows Script Host if it's disabled.
-   More checks are added to find the cause of activation failure.

#### Activation Troubleshoot:

-   Added more options: Rebuild WMI Repository, Fix issues Caused By Gaming Spoofers, Fix issues Caused By KB971033 In Windows 7, Export Event Viewer Logs.

#### Change Windows Edition:

-   Support for Windows 7/8//8.1 and their server equivalent editions are added and alternative method is added for Windows 10/11 and their server equivalent. Thanks to Anomalous Software Deterioration Corporation for [CBS Upgrade method](https://github.com/asdcorp/Set-WindowsCbsEdition).

#### Check Activation Status WMI:

-   Thanks to @abbodi1406 for fixing a cosmetic [issue](https://github.com/MicrosoftDocs/OfficeDocs-DeployOffice/issues/1100) in Office vNext Status (vNextDiag.ps1).

#### MAS AIO:

-   Command line [switches](https://massgrave.dev/command_line_switches.html) are added for unattended mode. It can be utilized in Powershell One-Liner code to execute it as well.
-   Exit and Go Back options are set to 0 key in all the cases.

------------------------------------------------------------------------

## 1.6

#### **Future-proofing / Goodbye to slc.dll**

------------------------------------------------------------------------

#### **HWID/KMS38:**

-   slc.dll is removed, we will patch the original gatherosstate.exe on the fly with Powershell. (Thanks to [Anomalous Software Deterioration Corporation](https://github.com/asdcorp))

-   arm64 files are removed, now x86 gatherosstate.exe can work in all

-   Scripts can now activate future editions by getting the key from the system. (Thanks to [**\@awuctl**](https://github.com/awuctl) and [**\@abbodi1406**](https://github.com/abbodi1406))

-   More detailed diagnostic checks in case of failed Activation

-   Windows product name is now taken from winbrand.dll instead of registry/wmi for accurate results (Thanks to [**\@abbodi1406**](https://github.com/abbodi1406))

-   Fixed an issue when in Eval edition, non-eval edition key and certs are installed but the script will show Eval edition error

-   HWID Lockbox method is now removed in UI due to some issues with this method in certain builds.

-   The ticket generation option is removed in UI since people rarely need it and it creates confusion

-   Fixed an issue in registry ownership snippet where it would fail if path name has special characters

-   clipup.exe is removed from AIO but exists in the separate file's version.\
    Users very rarely need it (server cor/acor) and less size of AIO would help in download & execution in Powershell

-   Bug fixes and lots of improvements

#### **Online KMS:**

-   The script is updated as per KVA v47 (major change: improved office C2R-R2V conversion)

-   The script will now set the KMS server to private IP (non-existent) 10.0.0.10 instead of 0.0.0.0 to avoid the non-genuine banner issues in the office

-   The desktop context menu option is removed, not very useful

-   Renewal task, file, and directory name are changed to remove the "KMS" word to avoid antivirus detection

-   Skip KMS38 and Convert C2R-R2V on-off options are removed from UI since people rarely need them and it creates confusion

-   Some changes have been done to avoid possible antivirus detection

#### **Activation Troubleshoot:**

-   Token rebuilding options will now clear SPP-OSPP data.dat, tokens.dat, cache.dat\
    and Office repair option will be launched to fix the license issue

-   Added an option to clear Office vNext License, it helps when KMS activation fails due to remnants of vNext licenses

-   Rearm option is removed since a full token rebuild is enough

-   Clean ClipSVC Licences option is removed since it may create some issues in licensing in older builds

#### **Change Windows Edition:**

-   Added feature to change Windows Server editions

-   Scripts can now change the future editions by getting the key from the system

-   The script now blocks the change to/from CountrySpecific and CloudEdition editions, since it's officially not supported and users may face issues

-   Improved the way available editions are presented to choose

#### **Insert Windows HWID Key:**

-   Scripts can now install the HWID key for future editions by getting the key from the system

#### **All:**

-   Fixed an issue when the script wouldn't launch if the path have certain special characters

-   Fixed an issue when files couldn't be extracted in AIO compressed2txt if the username has accent characters. Thanks to [**\@AveYo**](https://github.com/AveYo) for the fix.

-   Fixed an issue when the script would start looping while getting the correct arch process in rare cases

-   Added a check to detect if the file is in Unix (LF) format, if yes then the script would stop

-   Homepage <https://windowsaddict.ml/> is changed to <https://massgrave.dev/> because of the DNS issue with the free domain (Thanks to [**\@luzea9903**](https://github.com/luzea9903) for Server hosting)

-   Homepage <https://massgrave.dev/> is updated with a better readable format

-   Added an option to download and execute MAS from Powershell\
    `iwr -useb https://massgrave.dev/get | iex`

------------------------------------------------------------------------

## 1.5

```         
# All

- Support added for Windows build 22483 and later (No wmic.exe issue)
- Support added for ARM64 architecture in all the scripts
- Made sure script run fine where path variables are misconfigured in system
- Made sure script run fine from UNC path
- Improved text coloring method
- Script would show an error if ran directly from archive files
- Scripts would make sure to start from the system's main architecture process
- All read me files are shifted to online for better update
- New discord channel https://discord.gg/gjJEfq7ux8 and new main homepage https://windowsaddict.ml/ added
- Various cosmetic improvements and bug fixes

# HWID / KMS38

- HWID Support added for CloudEdition/N, IoTEnterpriseS editions. (IoTEnterpriseS key will be used to activate EnterpriseS 2021)
- KMS38 support added for all new Windows 10-11 and Server's, KMS capable edition's including core and acor editions
- HWID with Lockbox ticket option is added
  x86-x64 Lockbox slc.dll is created by @mspaintmsi, @qxkqf ported it to ARM64 slc.dll
- KMS38 Protection and KMS38 uninstall option is added
- Ticket generation option is added
- Improved key detection logic, now it can support custom build editions
- Fixed issues where in certain languages OS's, script would show incorrect status of services
- Improved script options if required key is not found in script
- Improved script options if an edition is not supporting HWID currently but may support in future

# Online KMS

- All related scripts are merged in one in separate files version, with onscreen choice options
- KMS server selection process is improved to make it fail-proof, server numbers are increased to 16
- Improved error handling and display messages
- From now on, KMS server IP address will be used for activation instead of hostname to avoid detection by AV's and MS
- While using manual mode (no renewal task), a non-existent IP 0.0.0.0 will be left in registry to avoid Office non genuine banner issue
- For renewal task, a separate small script will be used to only renew activation, instead of running full script, every week
- Base script is updated to use @abbodi1406's latest KMS_VL_ALL-45u (09-Jan-2022)
  Major changes- 
  Support added for Windows 10 ARM64, Office 2021, all new Windows and Server editions
  VBS method will be used for WMI in Windows build 22483 and later
  Enhanced detection for Office C2R vNext subscriptions
  Check Activation Status [wmi] will show vNext subscriptions status using vNextDiag.ps1 (require Powershell / WMF 4 or later on Windows 7)
  Various fixes for Office activation
  
# Verify_Files-Clear_Zone.Identifier

- This new script is added in root folder to verify files with hashes and to remove Zone.Identifier from files (to prevent SmartScreen warnings)

# Activation Troubleshoot

- This new script is added in Extras section to deal with activation issues. Various options are added with proper onscreen info and warning's. 

# Change_W10_11_Edition

- Now it can change the Windows editions from Core to Non core too with proper error handling. Works on Windows build 10240 and later
```

------------------------------------------------------------------------

## 1.4

```         
- Now Microsoft support HWID (Digital License) for Windows 10 LTSC 2019, added key for it in the script.
- Some minor improvements.
```

------------------------------------------------------------------------

## 1.3

```         
# HWID / KMS38

 - Fixed a bug in Enterprise Edition activation.
 - Updated the ticket generation and applying process.

# All

 - Added a project mirror on github.
 - Some minor improvements
```

------------------------------------------------------------------------

## 1.2

```         
# HWID / KMS38

- Fixed the Edition ID mismatch issue of DISM / REG / WMIC, with the help of SKU ID.
- Fixed an issue where ticket installation would fail in case if the username has non-English characters or spaces in certain conditions.
- Now files would be copied to "%SystemRoot%\Temp\_Ticket_Work" to generate ticket to prevent any unforeseen issue caused by the pathname.
- Added the support for ARM64 systems, thanks to @mspaintmsi for providing the method and thanks to @Chibi ANUBIS and @smashed for testing the scripts.
- Various other minor improvements.

# Online KMS

- Updated the script to @abbodi1406's KMS_VL_ALL v37f, which includes various improvements and fixes, most notably automatic retail-to-volume conversion for Office C2R.
- Added official Microsoft's two .exe files for the Retail office C2R to volume conversion purpose.
- Now Renewal task and desktop context menu, both will share the same directory which is now changed to "%ProgramData%\Online_KMS_Activation\"
- Optimized the files/folder structure.
- Updated the KMS server list.
- Various other minor improvements.

# All

- Now all scripts can work from the directory which contains special characters in the pathname. Thanks to @abbodi1406 for the fix.
- Changed all the colored text part to powershell, so now it can support the non-English characters.
- Now every script can work in case the Windows Script Host is disabled.
- Now every script can work from the read only / protected directories.
- Added the offline ReadMe files since nsaneforum topic is only open to members.
- Removed the vbs check activation method since now @abbodi1406 made WMIC method better than vbs.
- Created a repository for this tool at Gitlab https://gitlab.com/massgrave/microsoft-activation-scripts
```

------------------------------------------------------------------------

## 1.1

```         
   HWID/KMS38:

 - Adopted a new ticket generation method, [The Integrated Patcher (with a modified version of SLSHIM 6.4)] 
   by *Anonymous and @mspaintmsi - Original (co)Authors of HWID and KMS38 Activation
   https://www.nsaneforums.com/topic/316668--/?do=findComment&comment=1497887
   This method works on all editions and versions of Windows 10 including LTSB2015 and older versions 
   which were known to return a wrong SkuId for some editions.
 - Added HWID activation for Windows 10 1903 IoTEnterprise. Thanks to @mspaintmsi for notifying.
 - Removed the ClipSVC tokens rebuilding part from the scripts, @sebus tests showed that it doesn't help in 
   activating another machines when same backup is used in restoring process.
 - gatherosstate.exe is changed to 14393 version, size is quite small. Also HWID/KMS38 scripts now shares 
   same "Files" folder files.
 - KMS38 protection script updated with latest changes made by @BAU in the reg_takeownership.bat
   pastebin.com/XTPt0JSC


   Online KMS:

 - Now top 3 KMS servers list is randomized in the script so that one server doesn't get all the load. Thanks to 
   @abbodi1406 for the help.
 - Script base is updated to the latest KMS_VL_ALL v34, Thanks to @abbodi1406
   https://forums.mydigitallife.net/threads/kms_vl_all-smart-activation-script.79535/
   Important change for the online KMS script part,
   Enhanced sppsvc/osppsvc detection to avoid script hang if the services are not functional
 - KMS server list is updated.
 - Now KMS servers are tested with powershell TcpClient instead of test-netconnection, to speed-up the process.
   Thanks to @abbodi1406 for the idea.
 - Now it's $OEM$ setupcomplete.cmd have choices to select which renewal mode you want.


   @ALL:

 - Switched to vbs from powershell for the script admin elevation to speed-up the process on low end systems.
   Thanks to @AveYo aka @BAU for self-elevate passing args and preventing loop (using temporary vbs file) and (using wsf).
 - Updated to Compressed 2 TXT 5.3 script by @AveYo aka @BAU https://github.com/AveYo/Compressed2TXT
 - Updated the admin rights detection code where it was failing in some (highly tweaked) systems. Thanks to @AveYo aka @BAU
 - Updated the codes for "Extract the text from batch script without character issue" Thanks to @AveYo aka @BAU
 - Added -NoProfile switch with every powershell code to speed-up the process. Thanks to @abbodi1406 for the idea.
 - In MAS Separate files version's $OEM$ folders are now removed, now I've added $OEM$ extraction script to remove the files redundancy.
```

------------------------------------------------------------------------

## 1.0

```         
 - (Re)added Online KMS renewal task with proper warnings.
 - Redirected all the read me's to online page for easy online translation.
 - Read Me's Grammatical errors has been fixed by the @BorrowedWifi
 - Some minor tweaks.
```

------------------------------------------------------------------------

## 0.9

```         
   HWID and KMS38

 - Modified file "gatherosstateLTSB15.exe" (For HWID) has been converted to text using 
   'Compressed 2 txt' by AveYo https://github.com/AveYo/Compressed2TXT to avoid
   the possible AV's detection. This file will be extracted in only LTSB 2015 Activation.
 - Added ClipSVC tokens Rebuilding (by default) (Thanks to @s1ave77 for the idea)
   (To solve the issue when system image is used on different machines)
 - Added service checks for ClipSVC, wlidsvc (Not in KMS38), and sppsvc (Thanks to @s1ave77 for the idea)
 - Added reattempts for ticket generation and activation.
 - Added new keys for 1903 server releases (For KMS38)
 - KMS38 script can now unlock the 180 days KMS lock without using full Rearm and Restart.
   Now it'll apply the SKU-APP ID rearm if required. (Idea taken from the @Ratiborus Tools)
 - Added a separate KMS38 protection script to protect the KMS38 activation from being overrun by 
   180 days KMS Activators by accident or even on purpose.
   (Thanks to @AveYo aka @BAU for the Reg_takeownership snippet pastebin.com/XTPt0JSC)


   Online KMS

 - Renewal task function has been removed to avoid the possible AV's detection.
   Because AV's suspect the background task but same codes can be run just fine in the foreground.
   In replacement I've added the Desktop context menu entry for the script for easy manual renewal in case if registered 
   server goes down, and just FYI added server in the script are running from approx 3 years without problems
   and user would need to run the script for renewal after 180 days when the registered server goes down.
 - Updated the script to KMS_VL_ALL 32 beta https://forums.mydigitallife.net/threads/kms_vl_all-smart-activation-script.79535/
   (Imp - Now script will retry to activate in case of failed activation, it increases it's reliability very much)
   (Thanks to @abbodi1406 for the update)
 - Now KMS servers will be tested on the Port 1688 with powershell instead of ping for more accuracy.
   (Thanks to @RPO for the codes)
 - Added appropriate colors in activation output.


   ALL

 - Added powershell codes for the admin auto elevation with parameters capability. 
   (Thanks to @AveYo aka @BAU for the codes)
 - Added /u parameter for the unattended run instead of changing the value in script.
 - For those scripts which may need to provide the long output, I've added powershell snippet 
   to keep the window height fixed with long buffer size capability.
   (Thanks to @dbenham for the codes https://stackoverflow.com/a/13351373)
 - Updated the ReadMe's with the Activation info regarding How it works? and Is it safe to use? and possible issues users might face.
 - Other minor improvements.


   MAS_AIO

 - Made an AIO script with the help from av friendly codes,
   Compressed2TXT https://github.com/AveYo/Compressed2TXT by @AveYo aka @BAU
   'Extract the text from script without character issue' https://forums.mydigitallife.net/posts/1221231/ by @Compo
```

------------------------------------------------------------------------

## 0.8

```         
- HWID and KMS38 activation now use the new slc.dll method which requires no registry and temp file.
  Thanks to @sponpa for the new ideas and codes https://tinyurl.com/y24dbdmw 
  and Thanks to @leitek8 for the further improvements http://tinyurl.com/y2a98rlk
  Users can easily compile the slc.dll file. Thanks to @leitek8 for providing the instructions.
- HWID and KMS38 activation now use the Windows 10 17134 ADK gatherosstate.exe file.Process is quite fast now. Thanks to @sponpa for the idea.
  For LTSB 2015, script uses the mod gatherosstate.exe file from the @angelkyo open source tool https://gitlab.com/angelkyo/w10-digitallicense
- Added following editions for the KMS38 activation.

  EnterpriseG
  EnterpriseGN  
  ServerCloudStorage     [Server 2016]
  ServerDatacenter       [Server 2016 & 2019]
  ServerDatacenterCor    [Server 2016 & 2019]
  ServerSolution         [Server 2016 & 2019]
  ServerSolutionCor      [Server 2016 & 2019]
  ServerStandard         [Server 2016 & 2019]
  ServerStandardCor      [Server 2016 & 2019]
  ServerDatacenterACor   [Server Version 1709 & 1803 & 1809]
  ServerStandardACor     [Server Version 1709 & 1803 & 1809]

- To activate server *cor and *acor editions with KMS38, added the required clipup.exe file from the server 2016 iso in the Files folder.
- In KMS38, instead of clearing global KMS IP, script now set specific KMS host IP to the localhost 127.0.0.2
  The advantage of doing this is that, It helps KMS38 remain untouched from the global KMS IP but other products can still use the global IP.
  Thanks to @abbodi1406 for the help.
- Digital license script now hide the Activation cmd error output. (Never show any useful info)
- Scripts now check the following problematic characters in the File Path Name. Thanks to @Jeb for the code and @abbodi1406 for the help.
` ! @ % ^ & ( ) + = ; ' ,
- Online KMS Script now hide the info about offline servers.
- Online KMS and clear KMS cache Script are now updated, Thanks to @abbodi1406 for the update https://forums.mydigitallife.net/posts/1511883
- Online KMS script now will attemmpt to activate maximum 2 times to prevent a loop in case of failed activation.
- Updated the KMS server list.
- Fixed a issue in online KMS where Task Scheduler will show incorrect last result report (cosmetic).
- Updated the Read Me and few cosmetic changes in the scripts.
- That's all i remember.
```

------------------------------------------------------------------------

## 0.7

```         
To further make sure that script is clean from av's, following changes were made,

- Multipurpose big scripts are not friendly to the AV's, so i've separated all the scripts.
- Now files are not converted to the text, they are added as they are. (because av's 'may' find text to file suspicious)
- Now scripts asks users to manually run the file as administrator .
- Made sure that all custom vbs use have been removed.

(Above changes reduced the user friendliness of the script, but my main priority in maintaining this fork is to 
create activators which are AV friendly, and these steps were required to achieve that.)

Some more changes - 

- Digital license script now checks for Internet and update service, and changes the update service status if required  
  and after the activation it put it back as it were previously.
- Changed the Mod gatherosstate files with the files from hwid.kms38.gen.mk6.exe v55.01 https://www.nsaneforums.com/topic/312871--/ 
  by @s1ave77.
  (p.s. To adopt the new files of v60.01, i should wait atleast a month to know the av's stable detection rate)
- KMS38 scripts now show a prompt to the users before applying rearm and restart.
- Errors are highlighted in red color in Digital license and KMS38 scripts.
- Removed the options, Insert Windows 10 GVLK and Change Windows 10 Edition (GVLK) (Not very useful)
- Removed the single file fork of C2R-Retail Office To VL, instead added the link to original tool in the read me.
- Online KMS script is updated to the v29 of Standalone Activate-Local.cmd https://forums.mydigitallife.net/posts/1501441 by @abbodi1406
- Added a script in Online KMS which leaves no remnants in the system after the activation.
- Online KMS Scripts now ping 3 servers (download.windowsupdate.com , Bing.com , baidu.com) to check internet connection to ensure
  scripts works fine in all parts of the world.
- Each script can be run in unattended mode, also have many more new switches in the scripts. (Use read me to know them)
- Many improvements in every script.
- Screen shots https://lookimg.com/images/2019/02/17/D8SkM.jpg
```

------------------------------------------------------------------------

## 0.6

```         
 - Fixed an issue where KMS task creation and deletion show incorrect msg in Non English OS's.
 - Fixed an issue in LTSB 2015 HWID activation. 
 - Added @abbodi1406's Office C2R-Retail2Volume Script https://forums.mydigitallife.net/posts/1150042
   files are converted to text using @BAU's File2batch [https://s.put.re/aiYbFHiP.7z (Unofficial Link)]
   and scripts are added as it is.
   (I didn't want to add this but since O2019, C2R-R2V is necessary to activate office, so its 
   convenient to have it in the activation script)

 - Minor changes
   - Expanded and categorized the Read Me section.Thanks to @BorrowedWifi for fixing the grammar errors.
   - Updated Run as admin elevation cmd.
   - Added more info in main and $OEM$ scripts.
   - :create_file function is changed, now $OEM$ extraction process is fast.
   - Added GUI options list in one place so its easy to navigate codes in the editor.
   - KMS server list is now easy to see and edit.
   - In change edition option, added minimum OS version requirement, W10_1803
   - In KMS38 option, added minimum OS version requirement, W10_1511
   - Cleaned the HWID/KMS38 activation and many other codes.
   - Replaced the MOD gatherosstate files (extracted from s1ave77's tool) with angelkyo's 
     open source tool's generated MOD files. https://gitlab.com/angelkyo/w10-digitallicense
   - Thats all i remember.
```

------------------------------------------------------------------------

## 0.5

```         
- Updated $OEM$ Folder scripts, so that users can use it easily with any edits and other scripts.
- Now Read Me and Credits details will open in notepad, for easy browsing.
- Added confirmation prompt before installing W10 Retail/OEM keys and GVLK option.
- Some cosmetic changes in Menu.
```

------------------------------------------------------------------------

## 0.4

```         
- Removed all the Graphic ASCII characters to avoid errors in editing and viewing of this script in non English os's.
- Added additional verification in creation and deletion of online KMS task(s).
- Added 'Create Activation Task' for kms in option, its useful if user ATM don't have Internet and want system to auto activate later.
- KMS servers will be tested in ping in all scenarios now.
- In os's older than windows 7, script will show an error in opening. (script is not compatible with older os's)
- Improved KMS logs.
- HWID and KMS38 process output improved in a way so that all errors can be spotted easily.
- Read Me improved and Some cosmetic changes.
```

------------------------------------------------------------------------

## 0.3

```         
- Abbodi1406 fixed an imp bug in his KMS_VL_ALL Script regarding KMS38, I copied those fix in online KMS script. It also fixes the error (only cosmetic, not imp) in last run result of scheduled task when KMS38 is applied. Now there is no error remains in last run result of scheduled task.
 (Reminder - This online kms script is a fork of abbodi1406's Standalone-Activate-Local.cmd, it was adjusted to work with multi kms server's and renewal task, preactivation, etc. see @credits)
```

------------------------------------------------------------------------

## 0.2

```         
- Added Windows OS checks in HWID, KMS38, and insert keys and change edition option, now these option will only work in Windows 10.
- Fixed an issue where in certain condition user needs to open the script again to fix non functioning option.
- Fixed an issue in Digital + KMS preactivation where it was not working correctly. (Critical)
- Fixed an issue in Digital and KMS38 Preactivation where it wouldn't delete itself after activation.
- Changed Some options location to make it more obvious.
- Changed jscript based text to file converter, to powershell. Although powershell based code is slow but it is more freindly to av's compared to jscript.Now there shouldn't be any possible issue of av's detection.
  Thanks to BAU (Aveyo)
- Some other minor changes.
```

------------------------------------------------------------------------

## 0.1

```         
MAS_0.1_BETA First release.

About-
 - Microsoft Activation Script.cmd
   [Windows /server and Office Activator, Open Source and clean from Antivirus Detection]
 - This script is the merger of my previous scripts which are,
   W10 Digital License Activation Script
   W10 LTSB 2015 Digital License Activation Script
   Online KMS Activation Script
   Digital + KMS Preactivation Script
   +
   (Added KMS38 Activation)
   (KMS38 + Online KMS Preactivation)
   (Plus many improvements overall)

   These previous scripts are now discontinued and from now on i'll only work on
   "Microsoft Activation Script"
```

------------------------------------------------------------------------
