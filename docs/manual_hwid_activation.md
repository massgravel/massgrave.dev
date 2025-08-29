# HWID

This page is for people who do not want to use the script for any reason and would rather perform the HWID activation process themselves. If you'd like to use a tool for this, please check [here](intro.md#how-to-activate-windows--office--extended-updates-esu).

:::info
HWID activation is only supported on Windows 10/11.
:::

## Manually Activate Windows
To manually activate Windows, follow these steps:
-   Make sure you have a working internet connection.
-   Determine your Windows Edition. You can find this by searching for "About your PC" in the start menu.
-   Download the appropriate ticket file from the table below; the ticket file must match your Windows edition.
-   Copy the downloaded ticket file to:  
    `C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket`    
    The `ProgramData` folder is hidden by default. You can access it directly by pasting the full path above into the Windows Explorer address bar.
-   Open the Windows Activation settings and click the "Change product key" button.
-   Copy the corresponding product key from the table below and paste it into the product key field.
-   After waiting for a few seconds, Windows should be activated.

:::tip
If you're seeing error `0x803fa067` while trying to change the product key, disconnect your PC from the internet and try changing the product key again.   
After you have done that, connect to the internet again and Windows should be activated.
:::

### Windows 10/11

| Edition                               | Key                           | Ticket                                                                                                                      |
|---------------------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Education                             | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.xml)                             |
| Education N                           | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.N.xml)                           |
| Enterprise                            | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.xml)                            |
| Enterprise N                          | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.xml)                          |
| Enterprise LTSB 2015                  | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2015.xml)                  |
| Enterprise LTSB 2016                  | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2016.xml)                  |
| Enterprise LTSC 2019                  | 43TBQ-NH92J-XKTM7-KT3KK-P39PB | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSC.2019.xml)                  |
| Enterprise N LTSB 2015                | NTX6B-BRYC2-K6786-F6MVQ-M7V2X | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2015.xml)                |
| Enterprise N LTSB 2016                | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2016.xml)                |
| Home                                  | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.xml)                                  |
| Home N                                | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.N.xml)                                |
| Home China                            | N2434-X9D7W-8PF6X-8DV9T-8TYMD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.China.xml)                            |
| Home Single Language                  | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.Single.Language.xml)                  |
| IoT Enterprise                        | XQQYW-NFFMW-XJPBH-K8732-CKFFD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.xml)                        |
| IoT Enterprise Subscription           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.Subscription.xml)           |
| IoT Enterprise LTSC 2021              | QPM6N-7J2WJ-P88HH-P3YRH-YY74H | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2021.xml)              |
| IoT Enterprise LTSC 2024              | CGK42-GYN6Y-VD22B-BX98W-J8JXD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2024.xml)              |
| IoT Enterprise LTSC Subscription 2024 | N979K-XWD77-YW3GB-HBGH6-D32MH | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.Subscription.2024.xml) |
| Pro                                   | VK7JG-NPHTM-C97JM-9MPGT-3V66T | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.xml)                                   |
| Pro N                                 | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.xml)                                 |
| Pro Education                         | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.xml)                         |
| Pro Education N                       | GJTYN-HDMQY-FRR76-HVGC7-QPF8P | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.N.xml)                       |
| Pro for Workstations                  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.for.Workstations.xml)                  |
| Pro N for Workstations                | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.for.Workstations.xml)                |
| S                                     | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.xml)                               |
| S N                                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.N.xml)                             |
| SE                                    | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.xml)                       |
| SE N                                  | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.N.xml)                     |
| Team                                  | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y | [Link](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Team.xml)                                  |

## Troubleshooting

Check [here](troubleshoot.md) for links to our support channels.