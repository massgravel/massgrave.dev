# Online KMS Activation

## Overview

-   How to use it? Please find the instructions [here](intro.md#how-to-activate-windows--office--extended-updates-esu).
-   KMS activates Windows / Office for 180 Days. For Windows Core / ProWMC editions it is 30 / 45 Days.
-   This script can activate both Retail and Volume Windows installation.
-   This script can activate C2R Retail and VL Office, UWP Office, but not 2010 / 2013 MSI Retail Office.
-   This script skips the activation if Windows is permanently / KMS38 activated.
-   As mentioned, KMS activates only for a limited period and it's not permanent, read below on how to achieve lifetime activation.

------------------------------------------------------------------------

## Activation Renewal

By design in the genuine [KMS](https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview) activation method, the system contacts the registered server every 7 days, and if contacted successfully it will automatically renew and reset the activation for the full period of 180 days again, starting from the day of successful contact. If the system cannot contact the server, it will be deactivated after 180 days and it will remain deactivated until contact can be restored.

To get the lifetime activation, script by default creates auto renewal task.  
It creates the following two files,  
`C:\Program Files\Activation-Renewal\Activation_task.cmd`  
`C:\Program Files\Activation-Renewal\Info.txt`  

And creates a scheduled task `\Activation-Renewal` to run the script every 7 days. This task registers the working KMS server and triggers activation commands only for the installed Volume products. The scheduled task runs only if the system is connected to the Internet.

If you don't want to install this renewal task, you can turn off the "Renewal Task With Activation" option in script menu.
 
------------------------------------------------------------------------

## Remarks

-   With KMS Activation, you can update Windows/Office without any issues.
-   What is left in the system in the activation process?
    -   **If Renewal Task is installed:** After activation, it leaves the KMS Server IP in the registry, which helps you to get the global activation feature whereby the system auto-renews the activation. About files and scheduled tasks, it has been mentioned above.
    -   **If Renewal Task is NOT installed:** It leaves a non-existent IP 10.0.0.10 to avoid the Office Not Genuine Banner issue.
-   This script includes the most-stable KMS servers (16) list from all over the world. The server selection process is fully automatic. Script randomly selects a server, tests if it's online, if yes then apply the activation command, if fails, then retry this process maximum of total 3 times for a product. Such redundancy makes sure that we get the working KMS server at any time.
-   If your system date is incorrect (beyond 180 days) and you are offline, the system will be deactivated, but will automatically reactivate when you correct the system date.
-   The advantage of Online KMS activation is that it doesn't need any KMS binary file and the system can be activated using some manual commands or transparent batch script files. So this is for those who don't like/have difficulties/trust issues in offline KMS because of its binary files and antivirus detections.
    But if you prefer offline KMS then checkout an open-source activator, abbodi1406's [KMS_VL_ALL](https://github.com/abbodi1406/KMS_VL_ALL_AIO/)

------------------------------------------------------------------------

## Supported Products

### Windows 10 / 11
| Product Names                                          | EditionID                | Generic Volume License Key    |
|--------------------------------------------------------|--------------------------|-------------------------------|
| Education                                              | Education                | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Education N                                            | EducationN               | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Enterprise                                             | Enterprise               | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N                                           | EnterpriseN              | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Enterprise G                                           | EnterpriseG              | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Enterprise G N                                         | EnterpriseGN             | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
| Enterprise LTSB 2016                                   | EnterpriseS              | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Enterprise LTSC 2019                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2021                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2024                                   | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise N LTSB 2016                                 | EnterpriseSN             | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Enterprise N LTSC 2019                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2021                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2024                                 | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br /> (19044.2788 and later) | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| IoT Enterprise LTSC 2024                               | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Home                                                   | Core                     | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N                                                 | CoreN                    | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home China                                             | CoreCountrySpecific      | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
| Home Single Language                                   | CoreSingleLanguage       | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Lean                                                   | CloudE                   | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
| Enterprise multi-session <br /> (17763 and later)      | ServerRdsh               | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
| Enterprise multi-session <br /> (17134 and before)     | ServerRdsh               | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
| Pro                                                    | Professional             | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N                                                  | ProfessionalN            | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Pro Education                                          | ProfessionalEducation    | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Pro Education N                                        | ProfessionalEducationN   | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Pro for Workstations                                   | ProfessionalWorkstation  | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Pro N for Workstations                                 | ProfessionalWorkstationN | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| SE                                                     | CloudEdition             | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
| SE N                                                   | CloudEditionN            | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

### Windows Server 2025 (LTSC)
| Product Names                        | EditionID        | Generic Volume License Key    |
|--------------------------------------|------------------|-------------------------------|
| Windows Server 2025 Standard         | ServerStandard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter       | ServerDatacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Azure Core       | ServerAzureCor   | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter | ServerTurbine    | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

### Windows Server 2022 (LTSC)
| Product Names                        | EditionID        | Generic Volume License Key    |
|--------------------------------------|------------------|-------------------------------|
| Windows Server 2022 Datacenter       | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard         | ServerStandard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Azure Core       | ServerAzureCor   | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter | ServerTurbine    | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

### Windows Server 2019 (LTSC)
| Product Names                  | EditionID        | Generic Volume License Key    |
|--------------------------------|------------------|-------------------------------|
| Windows Server 2019 Datacenter | ServerDatacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | ServerStandard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | ServerSolution   | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core | ServerAzureCor   | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
| Windows Server 2019 ARM64      | ServerARM64      | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

### Windows Server 2016 (LTSC)
| Product Names                     | EditionID          | Generic Volume License Key    |
|-----------------------------------|--------------------|-------------------------------|
| Windows Server 2016 ARM64         | ServerARM64        | K9FYF-G6NCK-73M32-XMVPY-F9DRR |
| Windows Server 2016 Datacenter    | ServerDatacenter   | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard      | ServerStandard     | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials    | ServerSolution     | JCKRF-N37P4-C2D82-9YXRT-4M63B |
| Windows Server 2016 Cloud Storage | ServerCloudStorage | QN4C6-GBJD2-FB422-GHWJK-GJG2R |
| Windows Server 2016 Azure Core    | ServerAzureCor     | VP34G-4NPPG-79JTQ-864T4-R3MQX |

### Windows Server 23H2 (Annual Channel)
| Product Names             | EditionID        | Generic Volume License Key    |
|---------------------------|------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

### Windows Server 20H2, 2004, 1909, 1903, and 1809 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | ServerStandardACor   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

### Windows Server 1803 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | ServerStandardACor   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

### Windows Server 1709 (Semi-Annual Channel)
| Product Names             | EditionID            | Generic Volume License Key    |
|---------------------------|----------------------|-------------------------------|
| Windows Server Datacenter | ServerDatacenterACor | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | ServerStandardACor   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |

### Windows 8.1
| EditionID                    | Generic Volume License Key    |
|------------------------------|-------------------------------|
| Enterprise                   | MHF9N-XY6XB-WVXMC-BTDCT-MKKG7 |
| EnterpriseN                  | TT4HM-HN7YT-62K67-RGRQJ-JFFXW |
| Professional                 | GCRJD-8NW9H-F2CDX-CCM8D-9D6T9 |
| ProfessionalN                | HMCNV-VVBFX-7HMBH-CTY9B-B4FXY |
| EmbeddedIndustryA            | VHXM3-NR6FT-RY6RT-CK882-KW2CJ |
| EmbeddedIndustry             | NMMPB-38DD4-R2823-62W8D-VXKJB |
| EmbeddedIndustryE            | FNFKF-PWTVT-9RC8H-32HB2-JB34X |
| CoreARM                      | XYTND-K6QKT-K2MRH-66RTM-43JKP |
| CoreN                        | 7B9N3-D94CG-YTVHR-QBPX3-RJP64 |
| CoreCountrySpecific          | NCTT7-2RGK8-WMHRF-RY7YQ-JTXG3 |
| CoreSingleLanguage           | BB6NG-PQ82V-VRDPW-8XVD2-V8P66 |
| Core                         | M9Q9P-WNJJT-6PXPY-DWX8H-6XWKK |
| ProfessionalWMC              | 789NJ-TQK6T-6XTH8-J39CJ-J8D3P |
| CoreConnected                | 3PY8R-QHNP9-W7XQD-G6DPH-3J2C9 |
| CoreConnectedN               | Q6HTR-N24GM-PMJFP-69CD8-2GXKR |
| CoreConnectedSingleLanguage  | KF37N-VDV38-GRRTV-XH8X6-6F3BB |
| CoreConnectedCountrySpecific | R962J-37N87-9VVK2-WJ74P-XTMHR |
| ProfessionalStudent          | MX3RK-9HNGX-K3QKC-6PJ3F-W8D7B |
| ProfessionalStudentN         | TNFGH-2R6PB-8XM3K-QYHX2-J4296 |

### Windows Server 2012 R2
| EditionID          | Generic Volume License Key    |
|--------------------|-------------------------------|
| ServerStandard     | D2N9P-3P6X9-2R39C-7RTCD-MDVJX |
| ServerDatacenter   | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9 |
| ServerSolution     | KNC87-3J2TX-XB4WP-VCPJV-M4FWM |
| ServerCloudStorage | 3NPTF-33KPT-GGBPR-YX76B-39KDD |

### Windows 8
| EditionID           | Generic Volume License Key    |
|---------------------|-------------------------------|
| Enterprise          | 32JNW-9KQ84-P47T8-D8GGY-CWCK7 |
| EnterpriseN         | JMNMF-RHW7P-DMY6X-RF3DR-X2BQT |
| Professional        | NG4HW-VH26C-733KW-K6F98-J8CK4 |
| ProfessionalN       | XCVCF-2NXM9-723PB-MHCB7-2RYQQ |
| EmbeddedIndustry    | RYXVT-BNQG7-VD29F-DBMRY-HT73M |
| EmbeddedIndustryE   | NKB3R-R2F8T-3XCDP-7Q2KW-XWYQ2 |
| CoreARM             | DXHJF-N9KQX-MFPVR-GHGQK-Y7RKV |
| CoreN               | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY |
| CoreCountrySpecific | 4K36P-JN4VD-GDC6V-KDT89-DYFKP |
| CoreSingleLanguage  | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ |
| Core                | BN3D2-R7TKB-3YPBD-8DRP2-27GG4 |
| ProfessionalWMC     | GNBB8-YVD74-QJHX6-27H4K-8QHDG |

### Windows Server 2012
| EditionID                | Generic Volume License Key    |
|--------------------------|-------------------------------|
| ServerStandard           | XC9B7-NBPP2-83J2H-RHMBY-92BT4 |
| ServerDatacenter         | 48HP8-DN98B-MYWDG-T2DCC-8W83P |
| ServerSolution           | HTDQM-NBMMG-KGYDT-2DTKT-J2MPV |
| ServerMultiPointStandard | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ |
| ServerMultiPointPremium  | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G |

### Windows 7
| EditionID         | Generic Volume License Key    |
|-------------------|-------------------------------|
| Enterprise        | 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH |
| EnterpriseN       | YDRBP-3D83W-TY26F-D46B2-XCKRJ |
| Professional      | FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 |
| ProfessionalN     | MRPKT-YTG23-K7D7T-X2JMM-QY7MG |
| Embedded_POSReady | YBYF6-BHCR3-JPKRB-CDW7B-F9BK4 |
| Embedded_ThinPC   | 73KQT-CD9G6-K7TQG-66MRP-CQ22C |
| ProfessionalE     | W82YF-2Q76Y-63HXB-FGJG9-GF7QX |
| EnterpriseE       | C29WB-22CC8-VJ326-GHFJW-H9DH4 |

### Windows Server 2008 R2
| EditionID              | Generic Volume License Key    |
|------------------------|-------------------------------|
| ServerStandard         | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| ServerDatacenter       | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| ServerEnterprise       | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| ServerDatacenterCore   | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| ServerStandardCore     | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| ServerEnterpriseCore   | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| ServerEnterpriseIA64   | GT63C-RJFQ3-4GMB6-BRFB9-CB83V |
| ServerWeb              | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| ServerHPC              | TT8MH-CG224-D3D7Q-498W2-9QCTX |
| ServerWebCore          | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| ServerEmbeddedSolution | 736RG-XDKJK-V34PF-BHK87-J6X3K |

### Windows Vista
| EditionID   | Generic Volume License Key    |
|-------------|-------------------------------|
| Enterprise  | VKK3X-68KWM-X2YGT-QR4M6-4BWMV |
| Business    | YFKBB-PQJJV-G996G-VWGXY-2V3X8 |
| BusinessN   | HMBQG-8H2RH-C77VX-27R82-VMQBT |
| EnterpriseN | VTC42-BM838-43QHV-84HX6-XJXKV |

### Windows Server 2008
| EditionID            | Generic Volume License Key    |
|----------------------|-------------------------------|
| ServerStandard       | TM24T-X9RMF-VWXK6-X8JC9-BFGM2 |
| ServerDatacenter     | 7M67G-PC374-GR742-YH8V4-TCBY3 |
| ServerEnterprise     | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V |
| ServerEnterpriseIA64 | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK |
| ServerWeb            | WYR28-R7TFJ-3X2YQ-YCY4H-M249D |
| ServerComputeCluster | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP |
| ServerStandardV      | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ |
| ServerDatacenterV    | 22XQ2-VRXRG-P8D42-K34TD-G3QQC |
| ServerEnterpriseV    | 39BXF-X8Q23-P2WWT-38T2F-G3FPG |

### Office 2010
| EditionID        | Generic Volume License Key    |
|------------------|-------------------------------|
| AccessVL         | V7Y44-9T38C-R2VJK-666HK-T7DDX |
| ExcelVL          | H62QG-HXVKF-PP4HP-66KMR-CW9BM |
| GrooveVL         | QYYW6-QP4CB-MBV6G-HYMCJ-4T3J4 |
| InfoPathVL       | K96W8-67RPQ-62T9Y-J8FQJ-BT37T |
| MondoVL          | YBJTT-JG6MD-V9Q7P-DBKXJ-38W9R |
| OneNoteVL        | Q4Y4M-RHWJM-PY37F-MTKWH-D3XHX |
| OutlookVL        | 7YDC2-CWM8M-RRTJC-8MDVC-X3DWQ |
| PowerPointVL     | RC8FX-88JRY-3PF7C-X8P67-P4VTT |
| ProjectProVL     | YGX6F-PGV49-PGW3J-9BTGG-VHKC6 |
| ProjectStdVL     | 4HP3K-88W3F-W2K3D-6677X-F9PGB |
| ProPlusVL        | VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB |
| PublisherVL      | BFK7F-9MYHM-V68C7-DRQ66-83YTP |
| SmallBusBasicsVL | D6QFG-VBYP2-XQHM7-J97RH-VVRCK |
| StandardVL       | V7QKV-4XVVR-XYV4D-F7DFM-8R6BM |
| VisioSIVL        | D9DWC-HPYVV-JGF4P-BTWQB-WX8BJ |
| WordVL           | HVHB3-C6FV7-KQX9W-YQG79-CRY7T |

### Office 2013
| EditionID        | Generic Volume License Key    |
|------------------|-------------------------------|
| AccessVolume     | NG2JY-H4JBT-HQXYP-78QH9-4JM2D |
| ExcelVolume      | VGPNG-Y7HQW-9RHP7-TKPV3-BG7GB |
| GrooveVolume     | H7R7V-WPNXQ-WCYYC-76BGV-VT7GH |
| InfoPathVolume   | DKT8B-N7VXH-D963P-Q4PHY-F8894 |
| LyncVolume       | 2MG3G-3BNTT-3MFW9-KDQW3-TCK7R |
| MondoRetail      | CWH2Y-NPYJW-3C7HD-BJQWB-G28JJ |
| MondoVolume      | 42QTK-RN8M7-J3C4G-BBGYM-88CYV |
| OneNoteVolume    | TGN6P-8MMBC-37P2F-XHXXK-P34VW |
| OutlookVolume    | QPN8Q-BJBTJ-334K3-93TGY-2PMBT |
| PowerPointVolume | 4NT99-8RJFH-Q2VDH-KYG2C-4RD4F |
| ProjectProVolume | FN8TT-7WMH6-2D4X9-M337T-2342K |
| ProjectStdVolume | 6NTH3-CW976-3G3Y2-JK3TX-8QHTT |
| ProPlusVolume    | YC7DK-G2NP3-2QQC3-J6H88-GVGXT |
| PublisherVolume  | PN2WF-29XG2-T9HJ7-JQPJR-FCXK4 |
| StandardVolume   | KBKQT-2NMXY-JJWGP-M62JB-92CD4 |
| VisioProVolume   | C2FG9-N6J68-H8BTJ-BW3QX-RM3B3 |
| VisioStdVolume   | J484Y-4NKBF-W2HMG-DBMJC-PGWR7 |
| WordVolume       | 6Q7VD-NX8JD-WJ2VH-88V73-4GBJ7 |

### Office 2016
| EditionID              | Generic Volume License Key    |
|------------------------|-------------------------------|
| AccessVolume           | GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW |
| ExcelVolume            | 9C2PK-NWTVB-JMPW8-BFT28-7FTBF |
| MondoRetail            | DMTCJ-KNRKX-26982-JYCKT-P7KB6 |
| MondoVolume            | HFTND-W9MK4-8B7MJ-B6C4G-XQBR2 |
| OneNoteVolume          | DR92N-9HTF2-97XKM-XW2WJ-XW3J6 |
| OutlookVolume          | R69KK-NTPKF-7M3Q4-QYBHW-6MT9B |
| PowerPointVolume       | J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6 |
| ProjectProVolume       | YG9NW-3K39V-2T3HJ-93F3Q-G83KT |
| ProjectProXVolume      | WGT24-HCNMF-FQ7XH-6M8K7-DRTW9 |
| ProjectStdVolume       | GNFHQ-F6YQM-KQDGJ-327XX-KQBVC |
| ProjectStdXVolume      | D8NRQ-JTYM3-7J2DX-646CT-6836M |
| ProPlusVolume          | XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 |
| PublisherVolume        | F47MM-N3XJP-TQXJ9-BP99D-8K837 |
| SkypeforBusinessVolume | 869NQ-FJ69K-466HW-QYCP2-DDBV6 |
| StandardVolume         | JNRGM-WHDWX-FJJG3-K47QV-DRTFM |
| VisioProVolume         | PD3PC-RHNGV-FXJ29-8JK7D-RJRJK |
| VisioProXVolume        | 69WXN-MBYV6-22PQG-3WGHK-RM6XC |
| VisioStdVolume         | 7WHWN-4T7MP-G96JF-G33KR-W8GF4 |
| VisioStdXVolume        | NY48V-PPYYH-3F4PX-XJRKJ-W4423 |
| WordVolume             | WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6 |

### Office 2019
| EditionID                  | Generic Volume License Key    |
|----------------------------|-------------------------------|
| Access2019Volume           | 9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT |
| Excel2019Volume            | TMJWT-YYNMB-3BKTF-644FC-RVXBD |
| Outlook2019Volume          | 7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK |
| PowerPoint2019Volume       | RRNCX-C64HY-W2MM7-MCH9G-TJHMQ |
| ProjectPro2019Volume       | B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B |
| ProjectStd2019Volume       | C4F7P-NCP8C-6CQPT-MQHV9-JXD2M |
| ProPlus2019Volume          | NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP |
| Publisher2019Volume        | G2KWX-3NW6P-PY93R-JXK2T-C9Y9V |
| SkypeforBusiness2019Volume | NCJ33-JHBBY-HTK98-MYCV8-HMKHJ |
| Standard2019Volume         | 6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK |
| VisioPro2019Volume         | 9BGNQ-K37YR-RQHF2-38RQ3-7VCBB |
| VisioStd2019Volume         | 7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2 |
| Word2019Volume             | PBX3G-NWMT6-Q7XBW-PYJGG-WXD33 |

### Office 2021
| EditionID                  | Generic Volume License Key    |
|----------------------------|-------------------------------|
| Access2021Volume           | WM8YG-YNGDD-4JHDC-PG3F4-FC4T4 |
| Excel2021Volume            | NWG3X-87C9K-TC7YY-BC2G7-G6RVC |
| Outlook2021Volume          | C9FM6-3N72F-HFJXB-TM3V9-T86R9 |
| PowerPoint2021Volume       | TY7XF-NFRBR-KJ44C-G83KF-GX27K |
| ProjectPro2021Volume       | FTNWT-C6WBT-8HMGF-K9PRX-QV9H8 |
| ProjectStd2021Volume       | J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T |
| ProPlus2021Volume          | FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH |
| Publisher2021Volume        | 2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ |
| SkypeforBusiness2021Volume | HWCXN-K3WBT-WJBKY-R8BD9-XK29P |
| Standard2021Volume         | KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3 |
| VisioPro2021Volume         | KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4 |
| VisioStd2021Volume         | MJVNY-BYWPY-CWV6J-2RKRT-4M8QG |
| Word2021Volume             | TN8H9-M34D3-Y64V9-TR72V-X79KV |

### Office 2024
| EditionID                    | Generic Volume License Key    |
|------------------------------|-------------------------------|
| ProPlus2024Volume-Preview    | 2TDPW-NDQ7G-FMG99-DXQ7M-TX3T2 |
| ProjectPro2024Volume-Preview | D9GTG-NP7DV-T6JP3-B6B62-JB89R |
| VisioPro2024Volume-Preview   | YW66X-NH62M-G6YFP-B7KCT-WXGKQ |
| Access2024Volume             | 82FTR-NCHR7-W3944-MGRHM-JMCWD |
| Excel2024Volume              | F4DYN-89BP2-WQTWJ-GR8YC-CKGJG |
| Outlook2024Volume            | D2F8D-N3Q3B-J28PV-X27HD-RJWB9 |
| PowerPoint2024Volume         | CW94N-K6GJH-9CTXY-MG2VC-FYCWP |
| ProjectPro2024Volume         | FQQ23-N4YCY-73HQ3-FM9WC-76HF4 |
| ProjectStd2024Volume         | PD3TT-NTHQQ-VC7CY-MFXK3-G87F8 |
| ProPlus2024Volume            | XJ2XN-FW8RK-P4HMP-DKDBV-GCVGB |
| SkypeforBusiness2024Volume   | 4NKHF-9HBQF-Q3B6C-7YV34-F64P3 |
| Standard2024Volume           | V28N4-JG22K-W66P8-VTMGK-H6HGR |
| VisioPro2024Volume           | B7TN8-FJ8V3-7QYCP-HQPMV-YY89G |
| VisioStd2024Volume           | JMMVY-XFNQC-KK4HK-9H7R3-WQQTV |
| Word2024Volume               | MQ84N-7VYDM-FXV7C-6K7CC-VFW9J |

:::info

-   Systems in all architectures (x86, x64 and arm64) are supported.
-   Office C2R retail products are converted to thier corresponding Volume products to enable KMS activation.
-   These editions are only KMS-activatable for *45* days at max:  
    -   Windows 10/11 Home edition variants
    -   Windows 8.1 Core edition variants, Pro with Media Center, Pro for Students  
    These editions are only KMS-activatable for *30* days at max:
    -   Windows 8 Core edition variants, Pro with Media Center

:::

------------------------------------------------------------------------

## Unsupported Products

-   Office MSI Retail 2010/2013, Office 2010 C2R Retail
-   Any Evaluation version of Windows (i.e. 'EVAL' LTSB/C) [cannot be activated](evaluation_editions.md) beyond the evaluation period. You can use TSforge option in MAS to reset the activation any given time.
-   Server Azure Datacenter (ServerTurbine) edition does not support activation on non-azure systems.
-   KMS activation on Windows 7 has a limitation related to OEM Activation 2.0 and Windows marker. For more info, see [here](https://support.microsoft.com/en-us/help/942962) and [here](https://technet.microsoft.com/en-us/library/ff793426(v=ws.10).aspx#activation-of-windows-oem-computers).
-   Windows editions that do not support KMS activation by design:  
    Windows Evaluation Editions  
    Windows 7 (Starter, HomeBasic, HomePremium, Ultimate)  
    Windows 10 (Cloud "S", IoTEnterprise, ProfessionalSingleLanguage... etc)  
    Windows Server (Server Foundation, Storage Server, Home Server 2011... etc)

------------------------------------------------------------------------

## How does it work?

-   **What is KMS activation?**  
    Key Management Service (KMS) is a genuine activation method provided by Microsoft for volume licensing customers (organizations, schools, or governments). The machines in those environments (called KMS clients) are activated via the Environment KMS Host Server (authorized Microsoft's licensing key), instead of Microsoft activation servers. By design, the KMS activation period lasts up to 180 Days (6 Months) at max, with the ability to renew and reinstate the period at any time. Activation renewal automatically happens every 7 days if the client can connect to the KMS host server. For more info, see [here](https://www.microsoft.com/en-us/Licensing/servicecenter/Help/FAQDetails.aspx?id=201#215) and [here](https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview).

-   **How are we getting it for free?**  
    Developers reverse-engineered the KMS Host Server setup, so now anyone can host a KMS server and activate the systems without any limitations. KMS activators such as KMSpico, MTK, KMS_VL_ALL, etc., locally create an emulated KMS Host Server and activate Windows and Office.  
    This locally-emulated KMS server requires you to run binary files which often cause anti-virus alerts (false positives).  
    Another method of KMS activation is a publicly-available Online KMS Host Server. In this method, the site hosts the emulated KMS server, and anyone can simply use this server to activate their systems, there is no requirement for running any software on your system.

-   **Is Online KMS activation safe?**  
    Yes.  
    Let's go into the details. In the KMS protocol, there is a relationship between host and client. The client system asks the host system to grant the activation, and the host system grants the activation if it's eligible. In this process, the client system shares some of the system's data, which is not sensitive in nature. According to the [Microsoft document](https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview), the client system shares the following data with the host system: Client FQDN, CMID, time-stamp, Product license state, expiration time, and IP address
    In this shared info, the important part is your IP address. Below are some things regarding it which you should know.
    -   Sharing your IP while going online is not a security concern. You can not go online to visit any website without having to share your IP address.
    -   IP addresses do not necessarily represent a specific person. Internet Service Providers (ISPs) mostly use dynamic IP, which means the same IP address can be used by many different persons, and a dynamic IP address is periodically reassigned to different people all the time. But a static IP address is permanently assigned to a unique subscriber. The Internet Service Provider (ISP) won't reveal that information unless there is a legal reason to do so.
    -   Microsoft has never tried to go after Home users in legal cases for using a few pirated activations (not talking about stolen legal keys) simply because the cost of legal actions would be much higher than the amount of money gained by forcing a few people to purchase activations.
    -   No law enforcement is going to take action based on IPs from all over the world without the consent of Microsoft itself.

Feel free to contact us in case you have a contradictory point of view.

------------------------------------------------------------------------

## How to remove Online KMS?

-   In MAS, goto Online KMS activation and apply Uninstall option.
-   After that, In MAS, goto Troubleshoot and apply Fix Licensing option.
-   Done.

------------------------------------------------------------------------

## Office 'Non-genuine' Banner

-   Office Click-to-Run builds (since February 2021) that are activated with KMS check the existence of the KMS server name in the registry.
-   If KMS server is not present, a banner is shown in Office programs notifying that "Office isn't licensed properly", see [here](/img/office-license-is-not-genuine.png).
-   Therefore in manual mode, `KeyManagementServiceName` value containing a non-existent IP address 10.0.0.10 will be kept in the below registry keys:  
```
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
```
-   This is perfectly fine to keep, and it does not affect Windows or Office activation. For more explanation, visit [here](office-license-is-not-genuine.md)

------------------------------------------------------------------------

## Office Retail to Volume

Office Retail must be converted to Volume first before it can be activated with KMS.  
By default, this activation script will convert Office C2R Retail to Volume.

-   Supported Click-to-Run products: Office 365 (Microsoft 365 Apps), Office 2024 / 2021 / 2019 / 2016, Office 2013
-   Office 365 itself does not have volume licenses, therefore it will be converted to Office Mondo licenses
-   Office Professional suite will be converted with Office Professional Plus licenses
-   Office HomeBusiness/HomeStudent suites will be converted with Office Standard licenses
-   Office 2013 products follow the same logic

If you don't want the script to convert the Retail Office to Volume, you can turn off "Change Edition If Needed" option in the script.

------------------------------------------------------------------------

## Command line Switches

-   Check [here](command_line_switches.md).

------------------------------------------------------------------------

## Setup Preactivate

-   Check the Extract OEM option in the MAS `Extras` section if you want pre-activated Windows installation.
-   Further read [here](oem-folder.md).

------------------------------------------------------------------------

## Troubleshooting

-   Check [here](troubleshoot.md).
