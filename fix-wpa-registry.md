---
pagetitle: Fix WPA Registry
---

# Fix WPA Registry

------------------------------------------------------------------------

-   In some cases, the system may have corrupt WPA registry keys at `HKEY_LOCAL_MACHINE\SYSTEM\WPA` which can cause `sppsvc` to not work and activation to fail.

-   The activation scripts in MAS can detect this issue and will inform you accordingly when to run this option. We suggest running this only when the script asks you to do so. If you are not sure whether you need to do it, you can get help from [here](troubleshoot.html).

-   This registry key is protected by the Kernel and cannot be deleted normally. That is why we need to follow some more steps below to clear it.

------------------------------------------------------------------------

## Steps To Fix WPA Registry

-   Download <https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip>

-   Extract this zip file.

-   Copy `rearm.cmd` file to the root of the C drive, like `C:\rearm.cmd`.

-   Open the command prompt as administrator and enter the below command\
    `Shutdown /f /r /o /t 0`

-   After the system restarts, select Troubleshoot \> Advanced Options \> Command Prompt.

-   Enter the following command\
    `C:\rearm.cmd`

-   If it says the command is not recognized, enter\
    `bcdedit | find "osdevice"`

-   It will show you the OS drive letter. Use that drive letter in the command, for example -\
    `E:\rearm.cmd`

-   Wait for it to finish. When it's finished, you will be able to type in the command prompt, If not then wait.

-   Once done, exit and then normally boot into Windows.

-   Let [us know](contactus.html) if it doesn't help.

------------------------------------------------------------------------
