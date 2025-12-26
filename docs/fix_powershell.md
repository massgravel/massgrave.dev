# Fix PowerShell

Scripts may show an error related to Powershell not working.

---

## ConstrainedLanguage

-  If the script is showing `ConstrainedLanguage` in error output then open the command prompt as admin and enter,

```
reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v "__PSLockdownPolicy" /f
```

-  Retry the script, the error should be fixed.

---

## Other Errors

Please connect with us [here](troubleshoot.md).
