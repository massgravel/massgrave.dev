---
pagetitle: Fix WPA Registry
---

# Fix WPA Registry

------------------------------------------------------------------------

-   In some cases, system may have corrupt WPA registry keys `HKEY_LOCAL_MACHINE\SYSTEM\WPA` which can cause `sppsvc` to not work and activation will fail.

-   The activation scripts in MAS can detect this issue and will inform you accordingly when to run this option. We suggest to run this only when script asks you to do it. If you are not sure if you need to do it, you can take the help from [here](troubleshoot.html).

-   This registry key is protected by the Kernal and can not be deleted normally. That is why we need to follow some more below steps to clear it.

------------------------------------------------------------------------

## Steps To Fix WPA Registry

-   Download <https://github.com/Gamers-Against-Weed/rearm/archive/refs/heads/principalis.zip>

-   Extract this zip file

-   Copy `rearm.cmd` file to the root of the C drive like `C:\rearm.cmd`

-   Press shift and click on the restart button in the start menu

-   After system restart, you will find Troubleshoot \> Advanced Option, select Command Prompt option

-   Now enter the below command\
    `C:\rearm.cmd`

-   If it says the command is not recognized then enter\
    `bcdedit | find "osdevice"`

-   It will show you the OS drive letter, use that drive letter in the command, for example -\
    `E:\rearm.cmd`

-   Wait for it to finish. When it's finished, you will be able to type in the command prompt, if not then wait.

-   Once done, exit and then normally boot into windows.

-   Let [us know](contactus.html) if it doesn't help.

------------------------------------------------------------------------
