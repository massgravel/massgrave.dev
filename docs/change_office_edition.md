# Change Office Edition

This option can be used to add, remove or modify editions or change the update channel of Office Click To Run (C2R).

:::tip

Office C2R version `16.0.9029.2167` or later is required for this option.

:::

## How does it work?

`C:\Program Files\Common Files\microsoft shared\ClickToRun\OfficeClickToRun.exe`

This program allows us to add and remove Office editions. It can do this efficiently (with minimal data usage) for two reasons.

### Unified installers

Office C2R installers are unified, meaning that all the apps come as a bundle. Whether you install a single app like Word 2021 or a full package like ProPlus2021, 
the installers contain the same apps.  

### Delta updates

Office C2R installers employ [delta updates](https://en.m.wikipedia.org/wiki/Delta_update), a type of update that only downloads the new code from the update, instead of the entire file again.

---

## Change Office update channel

This option also allows for changing the Office update channel. 

```
5440FD1F-7ECB-4221-8110-145EFAA6372F  -  Insider Fast [Beta]  -    Insiders::DevMain
64256AFE-F5D9-4F86-8936-8840A6A4F5BE  -  Monthly Preview      -    Insiders::CC
492350F6-3A01-4F97-B9C0-C7C6DDF67D60  -  Monthly [Current]    -  Production::CC
55336B82-A18D-4DD6-B5F6-9E5095C314A6  -  Monthly Enterprise   -  Production::MEC
B8F9B850-328D-4355-9145-C59439A0C4CF  -  Semi Annual Preview  -    Insiders::FRDC
7FFBC6BF-BC32-4F92-8982-F9DD17FD3114  -  Semi Annual          -  Production::DC
EA4A4090-DE26-49D7-93C1-91BFF9E53FC3  -  DevMain Channel      -     Dogfood::DevMain
B61285DD-D9F7-41F2-9757-8F61CBA4E9C8  -  Microsoft Elite      -   Microsoft::DevMain
F2E724C1-748F-4B47-8FB8-8E0D210E9208  -  Perpetual2019 VL     -  Production::LTSC
1D2D2EA6-1680-4C56-AC58-A441C8C24FF9  -  Microsoft2019 VL     -   Microsoft::LTSC
5030841D-C919-4594-8D2D-84AE4F96E58E  -  Perpetual2021 VL     -  Production::LTSC2021
86752282-5841-4120-AC80-DB03AE6B5FDB  -  Microsoft2021 VL     -   Microsoft::LTSC2021
7983BAC0-E531-40CF-BE00-FD24FE66619C  -  Perpetual2024 VL     -  Production::LTSC2024
C02D8FE6-5242-4DA8-972F-82EE55E00671  -  Microsoft2024 VL     -   Microsoft::LTSC2024
```

The script has the above list of all officially-supported paths for changing update channels, so you can't do anything unsupported that will break Office.  

- [Learn more about Office update channels here](https://learn.microsoft.com/microsoft-365-apps/updates/overview-update-channels)  
- [You can fetch the latest Office build numbers here](https://github.com/ItzLevvie/Office16/blob/master/defconfig)  
- [The official method to change the update channel is from here](https://learn.microsoft.com/en-us/microsoft-365-apps/updates/change-update-channels)    

### VL (LTSC) channel limitations

(Applies to 2019, 2021 and 2024 VL)

The VL (LTSC) channel and any other channel are separate. You cannot switch from the VL (LTSC) channel to any other channel and vice versa.  

For example, if the Office installer or update channel is VL (LTSC), only VL (LTSC) options will appear in the script.  

If your update channel is *not* from the VL (LTSC) channel, the script will not offer you the option to change the channel to VL (LTSC).

### Windows 7/8/8.1 limitations

Office C2R is not supported on Windows [7](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-7-support), [8](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-8-support) or [8.1](https://learn.microsoft.com/microsoft-365-apps/end-of-support/windows-81-support) anymore.  

The last available build is forever on that build and will not receive updates.  

VL (LTSC) channels are not supported on these Windows versions, so they aren't shown in the options.  

---

## Troubleshooting

-   Check [here](troubleshoot.md).
