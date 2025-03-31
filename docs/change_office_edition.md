# Change Office Edition

This option is available in the main menu of MAS. You can use this script with Office C2R (Ver 16.0.9029.2167 and later) to change, add, and remove editions or change the current Office update channel.

## How does it work?

Office C2R (Click To Run) has a unified installation system, meaning that whether you download a single app like Word 2021 or a full package like ProPlus2021, the core files installed are nearly identical.

The main management program for Office C2R is located at `C:\Program Files\Common Files\microsoft shared\ClickToRun\OfficeClickToRun.exe`

The script leverages this program to add, remove, or change Office editions. Because of Office's unified installation and delta updates, adding new editions or apps does not require a large download.

---

## Change Office update channel

This script can also change the current Office update channel.

```
5440FD1F-7ECB-4221-8110-145EFAA6372F  -  Insider Fast [Beta]  -  Insiders::DevMain
64256AFE-F5D9-4F86-8936-8840A6A4F5BE  -  Monthly Preview      -  Insiders::CC
492350F6-3A01-4F97-B9C0-C7C6DDF67D60  -  Monthly [Current]    -  Production::CC
55336B82-A18D-4DD6-B5F6-9E5095C314A6  -  Monthly Enterprise   -  Production::MEC
B8F9B850-328D-4355-9145-C59439A0C4CF  -  Semi Annual Preview  -  Insiders::FRDC
7FFBC6BF-BC32-4F92-8982-F9DD17FD3114  -  Semi Annual          -  Production::DC
EA4A4090-DE26-49D7-93C1-91BFF9E53FC3  -  DevMain Channel      -  Dogfood::DevMain
B61285DD-D9F7-41F2-9757-8F61CBA4E9C8  -  Microsoft Elite      -  Microsoft::DevMain
F2E724C1-748F-4B47-8FB8-8E0D210E9208  -  Perpetual2019 VL     -  Production::LTSC
1D2D2EA6-1680-4C56-AC58-A441C8C24FF9  -  Microsoft2019 VL     -  Microsoft::LTSC
5030841D-C919-4594-8D2D-84AE4F96E58E  -  Perpetual2021 VL     -  Production::LTSC2021
86752282-5841-4120-AC80-DB03AE6B5FDB  -  Microsoft2021 VL     -  Microsoft::LTSC2021
7983BAC0-E531-40CF-BE00-FD24FE66619C  -  Perpetual2024 VL     -  Production::LTSC2024
C02D8FE6-5242-4DA8-972F-82EE55E00671  -  Microsoft2024 VL     -  Microsoft::LTSC2024
```

- The script has the above list in its database and only offers officially supported upgrades.
- Learn more about Office update channels here https://learn.microsoft.com/microsoft-365-apps/updates/overview-update-channels  
- You can fetch the latest Office build numbers here https://github.com/ItzLevvie/Office16/blob/master/defconfig  
- The script uses an official method to change the update channel:  
https://techcommunity.microsoft.com/t5/office-365-blog/how-to-manage-office-365-proplus-channels-for-it-pros/ba-p/795813

### VL (LTSC) channel limitations
(Applicable to 2019/21/24 VL)

Officially, the update channel can not be changed to or from a VL (LTSC) channel, so if the installed channel is a VL (LTSC) channel, only that channel will appear in the script.  
Also, if the installed channel is not an LTSC channel, the script won't offer to change to LTSC.

### Windows 7/8/8.1 limitations

Office C2R is no longer supported on Windows [7](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-7-support), [8](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-8-support), and [8.1](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-81-support).  
The last available build is fixed and won't get any updates. VL (LTSC) channels are not supported on these Windows versions so they won't appear in the script.

---

## Troubleshooting

-   Check [here](troubleshoot.md).
