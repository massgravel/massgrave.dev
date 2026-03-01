# Fix WPA Registry

-   In some cases, the system may have corrupt WPA registry keys at `HKEY_LOCAL_MACHINE\SYSTEM\WPA` which can cause `sppsvc` to not work and activation to fail, it can also cause high CPU usage in `sppsvc` service.
-   If you are not sure whether you need to do it or not, you can get help from [here](troubleshoot.md).
-   This registry key is protected by the kernel and cannot be deleted normally. That is why we need to follow some more steps below to clear it.

------------------------------------------------------------------------

## Steps To Fix WPA Registry

-   Download https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip
-   Extract this zip file.
-   Copy `rearm.cmd` file to the root of the C drive, like `C:\rearm.cmd`
-   Open Command Prompt as administrator and enter the below command  
    `Shutdown /f /r /o /t 0`
-   After the system restarts, select Troubleshoot > Advanced Options > Command Prompt.
-   Enter the following command  
    `C:\rearm.cmd`
-   If it says the command is not recognized, enter  
    `bcdedit | find "osdevice"`
-   It will show you the OS drive letter. Use that drive letter in the command, for example,  
    `E:\rearm.cmd`
-   Wait for it to finish. When it's finished, you will be able to type in the command prompt, If not then wait.
-   Once done, exit and then normally boot into Windows.
-   If it doesn't help, you can [connect with us](troubleshoot.md) for help.

------------------------------------------------------------------------

## Video Tutorial

import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' height='auto' src='/Fix_WPA_Registry.mp4' />
