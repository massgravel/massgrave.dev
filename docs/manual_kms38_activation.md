# KMS38

This page is intended for users who do not want to use the script for any reason and would rather perform the KMS38 activation process themselves. If you'd like to use a tool for this instead, please check [here](intro.md#download--how-to-use-it).

## Manually Activate Windows
To manually activate Windows, follow these steps:
-   Open Windows Powershell as administrator and enter the below commands.
-   Install the generic key which matches your Windows edition and version:   
    `slmgr /ipk <key>`  
    *(Refer to the table below for the appropriate key.)*
-   Download the [KMS38 ticket file](https://github.com/massgravel/hwid-kms38-tickets/releases/download/2.0/KMS38.xml).
-   Copy the downloaded ticket file to the folder:  
    `C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket`
-   Migrate the ticket to a license and activate Windows by running the commands:    
    `clipup -v -o`  
    `slmgr /ato`
-   After waiting for a few seconds, Windows should be activated.

**Notes:**
-   For Windows Server Cor/Acor editions, the system does not have the `clipup.exe` file..  
    To activate it using KMS38, download the missing `ClipUp.exe` file from [this link](https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o).  
    `File: ClipUp.exe`  
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`  
    The file is digitally signed and verifiable. You can also obtain this file from the official [Windows Server 2016 x64 RTM ISO](https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO).  
    Place the `ClipUp.exe` file in the `C:\Windows\System32` folder and perform the KMS38 activation process. Once the activation is complete, you can remove the file.

### Windows 10 / 11
| Product Names                                          | Generic Volume License Key    |
|--------------------------------------------------------|-------------------------------|
| Education                                              | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Education N                                            | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Enterprise                                             | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N                                           | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Enterprise G                                           | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Enterprise G N                                         | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
| Enterprise LTSB 2016                                   | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Enterprise LTSC 2019                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2021                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2024                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise N LTSB 2016                                 | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Enterprise N LTSC 2019                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2021                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2024                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br /> (19044.2788 and later) | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| IoT Enterprise LTSC 2024                               | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Home                                                   | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N                                                 | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home China                                             | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
| Home Single Language                                   | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Lean                                                   | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
| Enterprise multi-session <br /> (17763 and later)      | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
| Enterprise multi-session <br /> (17134 and before)     | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
| Pro                                                    | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N                                                  | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Pro Education                                          | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Pro Education N                                        | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Pro for Workstations                                   | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Pro N for Workstations                                 | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| SE                                                     | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
| SE N                                                   | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

### Windows Server 2025 (LTSC)
| Product Names                        | Generic Volume License Key    |
|--------------------------------------|-------------------------------|
| Windows Server 2025 Standard         | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter       | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Azure Core       | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

### Windows Server 2022 (LTSC)
| Product Names                        | Generic Volume License Key    |
|--------------------------------------|-------------------------------|
| Windows Server 2022 Datacenter       | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard         | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Azure Core       | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

### Windows Server 2019 (LTSC)
| Product Names                  | Generic Volume License Key    |
|--------------------------------|-------------------------------|
| Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
| Windows Server 2019 ARM64      | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

### Windows Server 2016 (LTSC)
| Product Names                     | Generic Volume License Key    |
|-----------------------------------|-------------------------------|
| Windows Server 2016 ARM64         | K9FYF-G6NCK-73M32-XMVPY-F9DRR |
| Windows Server 2016 Datacenter    | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard      | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials    | JCKRF-N37P4-C2D82-9YXRT-4M63B |
| Windows Server 2016 Cloud Storage | QN4C6-GBJD2-FB422-GHWJK-GJG2R |
| Windows Server 2016 Azure Core    | VP34G-4NPPG-79JTQ-864T4-R3MQX |

### Windows Server 23H2 (Annual Channel)
| Product Names             | Generic Volume License Key    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

### Windows Server 20H2, 2004, 1909, 1903, and 1809 (Semi-Annual Channel)
| Product Names             | Generic Volume License Key    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

### Windows Server 1803 (Semi-Annual Channel)
| Product Names             | Generic Volume License Key    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

### Windows Server 1709 (Semi-Annual Channel)
| Product Names             | Generic Volume License Key    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |


## Troubleshooting

Check [here](troubleshoot.md) for links to our support channels.