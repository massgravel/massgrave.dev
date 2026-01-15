# Ohook

This page is intended for users who do not want to use the script for any reason and would rather perform the Ohook activation process themselves. If you'd like to use a tool for this instead, please check [here](intro.md).

:::info
The steps below only apply to Office 16.0 (2016, 2019, 2021 and 365) C2R x64 bit versions running on an x64 bit Windows 8+ machine.  
For older Office versions, please follow [this](intro.md) instead.
:::

## Manually Activate Office

To manually activate Office, follow these steps:

-   Download the Ohook sppc.dll files from [here](https://github.com/asdcorp/ohook/releases/download/0.5/ohook_0.5.zip) or compile the sppc.dll files yourself using [this guide](ohook#custom-sppcdll-info).
-   Create a new folder called `ohook` in the root of your C: drive and extract the zip file to it. The path to the folder should be `C:\ohook`.
-   Open Command Prompt as Administrator and enter the following command to create a symlink of the system's sppc.dll as sppcs.dll in the Office C2R System directory:  
    `mklink "%ProgramFiles%\Microsoft Office\root\vfs\System\sppcs.dll" "%windir%\System32\sppc.dll"`
-   Enter the following commands to copy the hook library `sppc64.dll` to the Office C2R system directory:    
    `cd /d C:\ohook`  
    `copy /y sppc64.dll "%ProgramFiles%\Microsoft Office\root\vfs\System\sppc.dll"`
-   Some Office 365 editions check the license status and display the banner "There was a problem checking this device's license status". To prevent this, enter the following command:  
    `reg add HKCU\Software\Microsoft\Office\16.0\Common\Licensing\Resiliency /v "TimeOfLastHeartbeatFailure" /t REG_SZ /d "2040-01-01T00:00:00Z" /f`
-   Install the generic key which matches your Office edition and version:  
    `slmgr /ipk <key>`  
    *(Refer to the table below for the appropriate key.)*
-   Office should be activated now.

### Office 365

| Office Product         | Generated Generic Key         |
|------------------------|-------------------------------|
| O365AppsBasicRetail    | 3HYJN-9KG99-F8VG9-V3DT8-JFMHV |
| O365BusinessRetail     | Y9NF9-M2QWD-FF6RJ-QJW36-RRF2T |
| O365EduCloudRetail     | W62NQ-267QR-RTF74-PF2MH-JQMTH |
| O365HomePremRetail     | 3NMDC-G7C3W-68RGP-CB4MH-4CXCH |
| O365ProPlusRetail      | H8DN8-Y2YP3-CR9JT-DHDR9-C7GP3 |
| O365SmallBusPremRetail | 2QCNB-RMDKJ-GC8PB-7QGQV-7QTQJ |

### Office 2016

| Office Product              | Generated Generic Key         |
|-----------------------------|-------------------------------|
| AccessRetail                | WHK4N-YQGHB-XWXCC-G3HYC-6JF94 |
| AccessRuntimeRetail         | RNB7V-P48F4-3FYY6-2P3R3-63BQV |
| AccessVolume                | JJ2Y4-N8KM3-Y8KY3-Y22FR-R3KVK |
| ExcelRetail                 | RKJBN-VWTM2-BDKXX-RKQFD-JTYQ2 |
| ExcelVolume                 | FVGNR-X82B2-6PRJM-YT4W7-8HV36 |
| HomeBusinessPipcRetail      | 2WQNF-GBK4B-XVG6F-BBMX7-M4F2Y |
| HomeBusinessRetail          | HM6FM-NVF78-KV9PM-F36B8-D9MXD |
| HomeStudentARMRetail        | PBQPJ-NC22K-69MXD-KWMRF-WFG77 |
| HomeStudentPlusARMRetail    | 6F2NY-7RTX4-MD9KM-TJ43H-94TBT |
| HomeStudentRetail           | PNPRV-F2627-Q8JVC-3DGR9-WTYRK |
| HomeStudentVNextRetail      | YWD4R-CNKVT-VG8VJ-9333B-RC3B8 |
| MondoRetail                 | VNWHF-FKFBW-Q2RGD-HYHWF-R3HH2 |
| MondoVolume                 | FMTQQ-84NR8-2744R-MXF4P-PGYR3 |
| OneNoteFreeRetail           | XYNTG-R96FY-369HX-YFPHY-F9CPM |
| OneNoteRetail               | FXF6F-CNC26-W643C-K6KB7-6XXW3 |
| OneNoteVolume               | 9TYVN-D76HK-BVMWT-Y7G88-9TPPV |
| OutlookRetail               | 7N4KG-P2QDH-86V9C-DJFVF-369W9 |
| OutlookVolume               | 7QPNR-3HFDG-YP6T9-JQCKQ-KKXXC |
| PersonalPipcRetail          | 9CYB3-NFMRW-YFDG6-XC7TF-BY36J |
| PersonalRetail              | FT7VF-XBN92-HPDJV-RHMBY-6VKBF |
| PowerPointRetail            | N7GCB-WQT7K-QRHWG-TTPYD-7T9XF |
| PowerPointVolume            | X3RT9-NDG64-VMK2M-KQ6XY-DPFGV |
| ProPlusRetail               | GM43N-F742Q-6JDDK-M622J-J8GDV |
| ProPlusVolume               | FNVK8-8DVCJ-F7X3J-KGVQB-RC2QY |
| ProfessionalPipcRetail      | CF9DD-6CNW2-BJWJQ-CVCFX-Y7TXD |
| ProfessionalRetail          | NXFTK-YD9Y7-X9MMJ-9BWM6-J2QVH |
| ProjectProRetail            | WPY8N-PDPY4-FC7TF-KMP7P-KWYFY |
| ProjectProVolume            | PKC3N-8F99H-28MVY-J4RYY-CWGDH |
| ProjectProXVolume           | JBNPH-YF2F7-Q9Y29-86CTG-C9YGV |
| ProjectStdRetail            | NTHQT-VKK6W-BRB87-HV346-Y96W8 |
| ProjectStdVolume            | 4TGWV-6N9P6-G2H8Y-2HWKB-B4G93 |
| ProjectStdXVolume           | N3W2Q-69MBT-27RD9-BH8V3-JT2C8 |
| PublisherRetail             | WKWND-X6G9G-CDMTV-CPGYJ-6MVBF |
| PublisherVolume             | 9QVN2-PXXRX-8V4W8-Q7926-TJGD8 |
| SkypeServiceBypassRetail    | 6MDN4-WF3FV-4WH3Q-W699V-RGCMY |
| SkypeforBusinessEntryRetail | 4N4D8-3J7Y3-YYW7C-73HD2-V8RHY |
| SkypeforBusinessRetail      | PBJ79-77NY4-VRGFG-Y8WYC-CKCRC |
| SkypeforBusinessVolume      | DMTCJ-KNRKR-JV8TQ-V2CR2-VFTFH |
| StandardRetail              | 2FPWN-4H6CM-KD8QQ-8HCHC-P9XYW |
| StandardVolume              | WHGMQ-JNMGT-MDQVF-WDR69-KQBWC |
| VisioProRetail              | NVK2G-2MY4G-7JX2P-7D6F2-VFQBR |
| VisioProVolume              | NRKT9-C8GP2-XDYXQ-YW72K-MG92B |
| VisioProXVolume             | G98Q2-B6N77-CFH9J-K824G-XQCC4 |
| VisioStdRetail              | NCRB7-VP48F-43FYY-62P3R-367WK |
| VisioStdVolume              | XNCJB-YY883-JRW64-DPXMX-JXCR6 |
| VisioStdXVolume             | B2HTN-JPH8C-J6Y6V-HCHKB-43MGT |
| WordRetail                  | P8K82-NQ7GG-JKY8T-6VHVY-88GGD |
| WordVolume                  | YHMWC-YN6V9-WJPXD-3WQKP-TMVCV |

### Office 2019

| Office Product                  | Generated Generic Key         |
|---------------------------------|-------------------------------|
| Access2019Retail                | WRYJ6-G3NP7-7VH94-8X7KP-JB7HC |
| Access2019Volume                | 6FWHX-NKYXK-BW34Q-7XC9F-Q9PX7 |
| AccessRuntime2019Retail         | FGQNJ-JWJCG-7Q8MG-RMRGJ-9TQVF |
| Excel2019Retail                 | KBPNW-64CMM-8KWCB-23F44-8B7HM |
| Excel2019Volume                 | 8NT4X-GQMCK-62X4P-TW6QP-YKPYF |
| HomeBusiness2019Retail          | QBN2Y-9B284-9KW78-K48PB-R62YT |
| HomeStudentARM2019Retail        | DJTNY-4HDWM-TDWB2-8PWC2-W2RRT |
| HomeStudentPlusARM2019Retail    | NM8WT-CFHB2-QBGXK-J8W6J-GVK8F |
| HomeStudent2019Retail           | XNWPM-32XQC-Y7QJC-QGGBV-YY7JK |
| Outlook2019Retail               | WR43D-NMWQQ-HCQR2-VKXDR-37B7H |
| Outlook2019Volume               | RN3QB-GT6D7-YB3VH-F3RPB-3GQYB |
| Personal2019Retail              | NMBY8-V3CV7-BX6K6-2922Y-43M7T |
| PowerPoint2019Retail            | HN27K-JHJ8R-7T7KK-WJYC3-FM7MM |
| PowerPoint2019Volume            | 29GNM-VM33V-WR23K-HG2DT-KTQYR |
| ProPlus2019Retail               | BN4XJ-R9DYY-96W48-YK8DM-MY7PY |
| ProPlus2019Volume               | T8YBN-4YV3X-KK24Q-QXBD7-T3C63 |
| Professional2019Retail          | 9NXDK-MRY98-2VJV8-GF73J-TQ9FK |
| ProjectPro2019Retail            | JDTNC-PP77T-T9H2W-G4J2J-VH8JK |
| ProjectPro2019Volume            | TBXBD-FNWKJ-WRHBD-KBPHH-XD9F2 |
| ProjectStd2019Retail            | R3JNT-8PBDP-MTWCK-VD2V8-HMKF9 |
| ProjectStd2019Volume            | RBRFX-MQNDJ-4XFHF-7QVDR-JHXGC |
| Publisher2019Retail             | 4QC36-NW3YH-D2Y9D-RJPC7-VVB9D |
| Publisher2019Volume             | K8F2D-NBM32-BF26V-YCKFJ-29Y9W |
| SkypeforBusiness2019Retail      | JBDKF-6NCD6-49K3G-2TV79-BKP73 |
| SkypeforBusiness2019Volume      | 9MNQ7-YPQ3B-6WJXM-G83T3-CBBDK |
| SkypeforBusinessEntry2019Retail | N9722-BV9H6-WTJTT-FPB93-978MK |
| Standard2019Retail              | NDGVM-MD27H-2XHVC-KDDX2-YKP74 |
| Standard2019Volume              | NT3V6-XMBK7-Q66MF-VMKR4-FC33M |
| VisioPro2019Retail              | 2NWVW-QGF4T-9CPMB-WYDQ9-7XP79 |
| VisioPro2019Volume              | 33YF4-GNCQ3-J6GDM-J67P3-FM7QP |
| VisioStd2019Retail              | 263WK-3N797-7R437-28BKG-3V8M8 |
| VisioStd2019Volume              | BGNHX-QTPRJ-F9C9G-R8QQG-8T27F |
| Word2019Retail                  | JXR8H-NJ3MK-X66W8-78CWD-QRVR2 |
| Word2019Volume                  | 9F36R-PNVHH-3DXGQ-7CD2H-R9D3V |

### Office 2021

| Office Product             | Generated Generic Key         |
|----------------------------|-------------------------------|
| Access2021Retail           | P286B-N3XYP-36QRQ-29CMP-RVX9M |
| AccessRuntime2021Retail    | MNX9D-PB834-VCGY2-K2RW2-2DP3D |
| Access2021Volume           | JBH3N-P97FP-FRTJD-MGK2C-VFWG6 |
| Excel2021Retail            | V6QFB-7N7G9-PF7W9-M8FQM-MY8G9 |
| Excel2021Volume            | WNYR4-KMR9H-KVC8W-7HJ8B-K79DQ |
| HomeBusiness2021Retail     | JM99N-4MMD8-DQCGJ-VMYFY-R63YK |
| HomeStudent2021Retail      | N3CWD-38XVH-KRX2Y-YRP74-6RBB2 |
| OneNoteFree2021Retail      | CNM3W-V94GB-QJQHH-BDQ3J-33Y8H |
| OneNote2021Retail          | NB2TQ-3Y79C-77C6M-QMY7H-7QY8P |
| OneNote2021Volume          | THNKC-KFR6C-Y86Q9-W8CB3-GF7PD |
| Outlook2021Retail          | 4NCWR-9V92Y-34VB2-RPTHR-YTGR7 |
| Outlook2021Volume          | JQ9MJ-QYN6B-67PX9-GYFVY-QJ6TB |
| Personal2021Retail         | RRRYB-DN749-GCPW4-9H6VK-HCHPT |
| PowerPoint2021Retail       | 3KXXQ-PVN2C-8P7YY-HCV88-GVM96 |
| PowerPoint2021Volume       | 39G2N-3BD9C-C4XCM-BD4QG-FVYDY |
| ProPlus2021Retail          | 8WXTP-MN628-KY44G-VJWCK-C7PCF |
| ProPlus2021Volume          | RNHJY-DTFXW-HW9F8-4982D-MD2CW |
| ProPlusSPLA2021Volume      | JRJNJ-33M7C-R73X3-P9XF7-R9F6M |
| Professional2021Retail     | DJPHV-NCJV6-GWPT6-K26JX-C7PBG |
| ProjectPro2021Retail       | QKHNX-M9GGH-T3QMW-YPK4Q-QRWMV |
| ProjectPro2021Volume       | HVC34-CVNPG-RVCMT-X2JRF-CR7RK |
| ProjectStd2021Retail       | 2B96V-X9NJY-WFBRC-Q8MP2-7CHRR |
| ProjectStd2021Volume       | 3CNQX-T34TY-99RH4-C4YD2-KW6WH |
| Publisher2021Retail        | CDNFG-77T8D-VKQJX-B7KT3-KK28V |
| Publisher2021Volume        | 2KXJH-3NHTW-RDBPX-QFRXJ-MTGXF |
| SkypeforBusiness2021Retail | DVBXN-HFT43-CVPRQ-J89TF-VMMHG |
| SkypeforBusiness2021Volume | R3FCY-NHGC7-CBPVP-8Q934-YTGXG |
| Standard2021Retail         | HXNXB-J4JGM-TCF44-2X2CV-FJVVH |
| Standard2021Volume         | 2CJN4-C9XK2-HFPQ6-YH498-82TXH |
| StandardSPLA2021Volume     | BQWDW-NJ9YF-P7Y79-H6DCT-MKQ9C |
| VisioPro2021Retail         | T6P26-NJVBR-76BK8-WBCDY-TX3BC |
| VisioPro2021Volume         | JNKBX-MH9P4-K8YYV-8CG2Y-VQ2C8 |
| VisioStd2021Retail         | 89NYY-KB93R-7X22F-93QDF-DJ6YM |
| VisioStd2021Volume         | BW43B-4PNFP-V637F-23TR2-J47TX |
| Word2021Retail             | VNCC4-CJQVK-BKX34-77Y8H-CYXMR |
| Word2021Volume             | BJG97-NW3GM-8QQQ7-FH76G-686XM |

### Office 2024

| Office Product             | Generated Generic Key         |
|----------------------------|-------------------------------|
| Access2024Retail           | P6NMW-JMTRC-R6MQ6-HH3F2-BTHKB |
| Access2024Volume           | CXNJT-98HPP-92HX7-MX6GY-2PVFR |
| Excel2024Retail            | 82CNJ-W82TW-BY23W-BVJ6W-W48GP |
| Excel2024Volume            | 7Y287-9N2KC-8MRR3-BKY82-2DQRV |
| Home2024Retail             | N69X7-73KPT-899FD-P8HQ4-QGTP4 |
| HomeBusiness2024Retail     | PRKQM-YNPQR-77QT6-328D7-BD223 |
| Outlook2024Retail          | 2CFK4-N44KG-7XG89-CWDG6-P7P27 |
| Outlook2024Volume          | NQPXP-WVB87-H3MMB-FYBW2-9QFPB |
| PowerPoint2024Retail       | CT2KT-GTNWH-9HFGW-J2PWJ-XW7KJ |
| PowerPoint2024Volume       | RRXFN-JJ26R-RVWD2-V7WMP-27PWQ |
| ProjectPro2024Retail       | GNJ6P-Y4RBM-C32WW-2VJKJ-MTHKK |
| ProjectPro2024Volume       | WNFMR-HK4R7-7FJVM-VQ3JC-76HF6 |
| ProjectStd2024Retail       | C2PNM-2GQFC-CY3XR-WXCP4-GX3XM |
| ProjectStd2024Volume       | F2VNW-MW8TT-K622Q-4D96H-PWJ8X |
| ProPlus2024Retail          | VWCNX-7FKBD-FHJYG-XBR4B-88KC6 |
| ProPlus2024Volume          | 4YV2J-VNG7W-YGTP3-443TK-TF8CP |
| SkypeforBusiness2024Volume | XKRBW-KN2FF-G8CKY-HXVG6-FVY2V |
| Standard2024Volume         | GVG6N-6WCHH-K2MVP-RQ78V-3J7GJ |
| VisioPro2024Retail         | HGRBX-N68QF-6DY8J-CGX4W-XW7KP |
| VisioPro2024Volume         | GBNHB-B2G3Q-G42YB-3MFC2-7CJCX |
| VisioStd2024Retail         | VBXPJ-38NR3-C4DKF-C8RT7-RGHKQ |
| VisioStd2024Volume         | YNFTY-63K7P-FKHXK-28YYT-D32XB |
| Word2024Retail             | XN33R-RP676-GMY2F-T3MH7-GCVKR |
| Word2024Volume             | WD8CQ-6KNQM-8W2CX-2RT63-KK3TP |

## Troubleshooting

Check [here](troubleshoot.md) for links to our support channels.