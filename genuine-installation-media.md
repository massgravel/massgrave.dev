## Genuine Installation Media

All download links leads to genuine files only.

| **Windows**                                |                                                                                                                                                                                                         |
|:--------------------------------------|:--------------------------------|
| Windows 11/10/8.1                          | [Link1](https://www.microsoft.com/software-download) - [Link2](https://tb.rg-adguard.net/)                                                                                                              |
| Windows 7                                  | [Link1](https://stuff.mtt-m1.workers.dev/Windows%207/) - [Link2](https://isofiles.bd581e55.workers.dev/Windows%207/)                                                                                    |
| Windows 10 Enterprise LTSB/LTSC            | [Link1](https://opendirectory.luzea.de/luzea/Windows_10_Enterprise_LTSC_2021/) - [Link2](https://stuff.mtt-m1.workers.dev/Windows%2010/) - [Link3](https://isofiles.bd581e55.workers.dev/Windows%2010/) |
| **Office**                                 |                                                                                                                                                                                                         |
| Office 2019/2021 C2R VL                    | No .ISO available, check below guide                                                                                                                                                                    |
| Office 2013/2016/2019/2021/O365 C2R Retail | [All](https://tb.rg-adguard.net/public.php) - [O365](https://pastebin.com/raw/f7Bvub9g) - [2021](https://pastebin.com/raw/gtua34VH) - [2019](https://pastebin.com/raw/PLhB7UnK)                         |
| Office 2010/2013/2016 MSI VL               | [Link1](https://opendirectory.luzea.de/Enthousiast/Office/)                                                                                                                                             |

Full Collection Through SVF Files can be found [here](https://opendirectory.luzea.de/GezoeSloog/).\
Thanks to GezoeSloog, microtechton, Luzea, Enthousiast, rg-adguard for providing download links.

------------------------------------------------------------------------

## Download Office 2019/2021 VL

If below guide is confusing to you then simplest option for you to use link for `Office C2R Retail`.

Please note that in the official C2R VL office installation method, there is no ISO or any one click solution available. Below is the simplest guide to install VL office.

-   Download [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)

-   Copy the downloaded `setup.exe` file to the root of the C drive, i.e. `C:\setup.exe`

-   Goto [config.office.com](https://config.office.com/deploymentsettings)

-   Select `Office LTSC Professional Plus 2021 - Volume License` in the office suites section. You can add Visio and Project apps if you need. Customize other things and leave as default where you don't understand something.

-   Once you go through all the options, click on the export button and it will download a file named `Configuration.xml`

-   Copy the downloaded `Configuration.xml` file to the root of the C drive, i.e. `C:\Configuration.xml`

-   Open the command prompt as admin and run the below commands

        cd /d C:\
        setup.exe /configure Configuration.xml

It will now download and install Office. You can activate it with your preferred method.

------------------------------------------------------------------------

## How to use .svf files?

As an example, if you want to download an .iso file of a French language version of Office 2010 SP1 Pro Vl, you will need to do the followings.

-   Download a full-size English .iso file

-   Download a small-size French .svf file

-   Put English .iso and French svf file and tool [SVF-extractor](https://www.softpedia.com/get/System/Back-Up-and-Recovery/SVF-eXtractor.shtml) into a folder all together.

-   Then use the extract option in the tool, and it will generate an original French language full .iso file.

------------------------------------------------------------------------

## How to verify genuinity of files?

-   We can use [file hashing method](https://en.wikipedia.org/wiki/File_verification) to verify if a file is tempered or not.

-   But we must first know the actual checksum of the file.

-   Microsoft does not publish checksums list on public links for their files, however it's available to paid subscribers of [MVS](https://visualstudio.microsoft.com/subscriptions/).

-   There are many places where we can find the checksums for Microsoft files and compare it with our files with tools like [OpenHashTab](https://github.com/namazso/OpenHashTab/releases). Below is a list of sites containing checksums.

    1.  [files.rg-adguard](https://files.rg-adguard.net/) (most complete collection)
    2.  [genuine-iso-verifier](https://genuine-iso-verifier.weebly.com/)
    3.  [msdn.rg-adguard](https://msdn.rg-adguard.net/)
    4.  [sha1.rg-adguard](https://sha1.rg-adguard.net/)

------------------------------------------------------------------------

## Need help?

-   Reach out on our [Discord](https://discord.gg/gjJEfq7ux8) (signup not required).
