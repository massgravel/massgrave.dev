---
title: FAQ
---

# Frequently Asked Questions

#### How to use it?
Check the [guide here](intro.md#how-to-activate-windows--office--extended-updates-esu).

---

#### How does it work?  
See the [Docs section](hwid.md#how-does-it-work) for details on how the activation process works.

---

#### How to activate Windows / Office permanently?
Choose the green-highlighted options in [MAS](intro.md#how-to-activate-windows--office--extended-updates-esu) to activate Windows or Office.

---

#### How to download Windows and Office?
Check the [downloading page](genuine-installation-media.md) for links.

---

#### MAS script is not working or activation failed, what should I do?
Check the [troubleshooting guide](troubleshoot.md) for help.

---

#### Windows 10 ESU (Extended Security Updates)
- #### How to receive security updates for Windows 10 after October 2025?
  You can use [TSforge option in MAS](intro.md#how-to-activate-windows--office--extended-updates-esu) to activate 3 Years ESU (Oct 2025 to Oct 2028). [More info](windows10_eol.md).

- #### How can I check if TSforge ESU is activated?   
  Check the [TSforge Doc](tsforge.md#windows-10-esu-faq) for details.
  
---

#### Is MAS safe?
- #### How can I know if there is any malware?
  MAS is fully [open-source](intro.md#mas-latest-release), with over 150K stars on [GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) and millions of users worldwide. You can open the batch files in Notepad to review the code yourself, or ask ChatGPT for help if you don’t understand something in the scripts.  
  You can also perform the activation manually, see [this page](manual_hwid_activation.md) for instructions.

- #### Why is my antivirus flagging the MAS script as a virus or Trojan?
  Antivirus programs often flag piracy-related software as malicious, even when it’s safe. These are called [false positives](https://www.malwarebytes.com/blog/news/2017/09/explained-false-positives).  
  You can add an exception in your third-party antivirus, or use the [manual activation steps](manual_hwid_activation.md) to avoid any alerts.

  > **Note:**  
  > **Windows Defender** won’t trigger any alerts if you are using the [PowerShell method](intro.md#how-to-activate-windows--office--extended-updates-esu) to launch MAS or the download links listed in Method 2.
- #### Will I receive updates? How is it different from an official license?
  MAS does not interfere with Windows or Office updates. It functions in the same way as official licensing methods.

- #### Will Microsoft ban my account if I use MAS?
  No. Windows and Office piracy has existed for decades, and Microsoft has never banned accounts solely for this reason.

- #### Is it legal? Can I face any consequences?
  - By using MAS, you are bypassing official licensing methods and not paying Microsoft, so technically it is not legal.
  - Is it safe?  
    - **Home users:** Yes, it's safe. Piracy has existed for decades, and Microsoft does not take action against individuals who pirate Windows or Office. Pursuing a home user over a $100-$200 license costs more in legal fees than it would recover and risks bad publicity. At most, you may see notifications that your license is not genuine (with MAS, these notifications do not appear). 
    - **Businesses:** We do not recommend that businesses use MAS. Microsoft conducts audits on business entities to verify licenses. While small businesses might be less likely to face audits, the risk is still yours. If you work in IT at a college or university, consult experienced senior staff about the chances of Microsoft audits at your institution.

---

#### How to remove MAS?
MAS uses different activation methods, see the link below for removal instructions for each one.  
[HWID](hwid.md#how-to-remove-hwid), [Ohook](ohook.md#how-to-remove-ohook), [TSforge](tsforge.md#how-to-remove-tsforge), [KMS38](kms38.md#how-to-remove-kms38), [Online KMS](online_kms.md#how-to-remove-online-kms)

---

#### How to change the Windows edition from Home to Pro?
In MAS, select the Change Windows Edition option.

---

#### Will I lose any data in changing the Windows edition from Home to Pro with MAS?
No.

---

#### I changed my Windows edition from Home to Pro and now Windows is deactivated.
Run HWID activation to activate Pro. Each edition requires separate activation.

---

#### Can I link my Microsoft account safely with MAS activation methods?
Yes.

---

#### Can I update Windows/Office after activation?
Yes.

---

#### I'm in Russia and Office is not downloading.
Check this [guide](https://gravesoft.dev/bypass-microsoft-geoblocking).

---

#### Office is showing: "It looks like your stored credentials are out of date. Please sign in as so we can verify your subscription."

1. Sign out of all accounts in Office (if any are currently signed in).  
2. Activate Office using the [latest MAS version](intro.md#how-to-activate-windows--office--extended-updates-esu).  
3. Sign back into your Office account (if needed).  

Still seeing this message? [Connect with us](troubleshoot.md) for help.

---

#### Can I activate Office 365?
Yes, use the Ohook activation option. However, you can't get server-side O365-specific features such as 1TB storage in OneDrive, though almost all other features and 5GB storage in a free OneDrive account would work fine.

Some features require signing in with a Microsoft account (free) in the Office apps.

---

#### Can I get the Copilot feature in Office with MAS activation?
No. [Copilot](https://www.microsoft.com/en-us/microsoft-365/microsoft-copilot) is an additional plan that can be added to existing subscriptions of Microsoft 365.

---

#### Can I get Python in Excel with MAS activation?
No. [Python in Excel](https://support.microsoft.com/en-us/office/introduction-to-python-in-excel-55643c2e-ff56-4168-b1ce-9428c8308545) is a server-side feature. To get this, you need to have a Microsoft 365 subscription.

---

#### Can I delete the MAS folder after activation?
Yes.

---

#### Does MAS work for Windows Vista/7/8.1?
Yes, TSforge, Ohook, and online KMS options work on Windows Vista/7/8.1.

---

#### How can I donate or contribute to the project?
The MASSGRAVE project doesn't accept donations and it's free.  
It's because it's a community project and involves many contributors, splitting donations is not practical, and also because profiting from piracy is not good.

However, if you would like to contribute in non-financial ways, please visit [this page](contribute.md) for more information.

---

:::tip

If you have any other questions, feel free to connect with us [here](contactus.md).

:::
