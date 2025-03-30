# Activation Methods Chart

Below is a comparison of activation methods offered by Microsoft Activation Scripts.

Basics
------
| | HWID | Ohook | KMS38 | Online KMS | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: | Works offline | ❌ | ✅ | ✅ | ❌ | ✅ |
| Activation is permanent | ✅ | ✅ | ✅[^1] | ✅[^2] | ✅ |
| Does not leave any files in the system to maintain activation status | ✅ | ❌ | ✅ | ❌ | ✅ |

Persistence
-----------
| | HWID | Ohook | KMS38 | Online KMS | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Persists between hardware changes | ❌ | ✅ | ❌ | ✅ | ✅ |
| Persists between clean installations on the same hardware | ✅ | ❌ | ❌ | ❌ | ❌ |
| Persists between Windows 10 / 11 feature upgrades | ✅ | ✅ | ✅ | ✅ | ❌ |

Support
-------
| | HWID | Ohook | KMS38 | Online KMS | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Windows 7 / 8 / 8.1 | ❌ | ❌ | ❌ | ✅[^3] | ✅ |
| Windows 10 / 11 | ✅ | ❌ | ✅[^3] | ✅[^3] | ✅ |
| Windows Server 2008 R2 / 2012 / 2012 R2 | ❌ | ❌ | ❌ | ✅ | ✅ |
| Windows Server 2016 and later | ❌ | ❌ | ✅ | ✅ | ✅ |
| Office 2010 | ❌ | ❌ | ❌ | ✅[^3] | ❌ |
| Office 2013 and later | ❌ | ✅[^4] | ❌ | ✅[^3] | ✅[^5] |
| Windows / Office KMS Host | ❌ | ❌ | ❌ | ❌ | ✅ |
| Windows Extended Security Updates | ❌ | ❌ | ❌ | ❌ | ✅ |
| OCUR / RP / APPXLOB addons | ❌ | ❌ | ❌ | ❌ | ✅ |

---

[^1]: Valid until the year 2038.
[^2]: Valid for 180 days by default. Permanent with renewal task installed.
[^3]: Volume activation capable editions only.
[^4]: Supported only on Windows 8 and later.
[^5]: Supported only on Windows 8 and later; subscription editions are not supported.
