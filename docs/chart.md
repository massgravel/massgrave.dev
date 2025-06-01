# Activation Methods Chart

Below is a comparison of activation methods offered by Microsoft Activation Scripts.

Basics
------
| | HWID | Ohook | KMS38 | Online KMS | ZeroCID[^1] | StaticCID[^1] | KMS4k[^1] |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Works offline | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Activation is permanent | ✅ | ✅ | ✅[^2] | ✅[^3] | ✅ | ✅ | ✅[^4] |
| Does not leave any files in the system to maintain activation status | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |

Persistence
-----------
| | HWID | Ohook | KMS38 | Online KMS | ZeroCID[^1] | StaticCID[^1] | KMS4k[^1] |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Persists between hardware changes | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅
| Persists between clean installations on the same hardware | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Persists between Windows 10 / 11 feature upgrades | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

Support
-------
| | HWID | Ohook | KMS38 | Online KMS | ZeroCID[^1] | StaticCID[^1] | KMS4k[^1] |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows Vista / 7 | ❌ | ❌ | ❌ | ✅[^5] | ✅ | ❌ | ✅[^5] |
| Windows 8 / 8.1 | ❌ | ❌ | ❌ | ✅[^5] | ✅ | ✅ | ✅[^5] |
| Windows 10 / 11 | ✅ | ❌ | ✅[^5] | ✅[^5] | ✅ | ✅ | ✅[^5] |
| Windows 11 (26100.4188 and later)  | ✅ | ❌ | ✅[^5] | ✅[^5] | ❌ | ✅ | ✅[^5] |
| Windows Server 2008 / 2008 R2 | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ |
| Windows Server 2012 / 2012 R2 | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Windows Server 2016 and later | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Office 2010 | ❌ | ✅ | ❌ | ✅[^5] | ❌ | ❌ | ❌ |
| Office 2013 and later | ❌ | ✅ | ❌ | ✅[^5] | ✅[^6] | ✅[^6] |✅[^5] [^6] |
| Windows / Office KMS Host | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Windows Extended Security Updates | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| OCUR / RP / APPXLOB addons | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |

---

[^1]: Provided by [TSforge](tsforge.md).
[^2]: Valid until the year 2038.
[^3]: Valid for 180 days by default. Permanent with renewal task installed.
[^4]: Valid for 4083 years.
[^5]: Volume activation capable editions only.
[^6]: Supported only on Windows 8 and later; subscription editions are not supported.
