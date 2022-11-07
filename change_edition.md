# Change Windows Edition

------------------------------------------------------------------------

-   You can find this option in the MAS extras section.

-   It can change the Windows 7-8-8.1-10-11 and equivalent Server Editions.

-   On Windows 7, script requires [Windows Management Framework 5.1](https://aka.ms/wmf5download) to be installed.

-   Script incorporates 4 methods for edition change:\
    - Changepk.exe Method\
    - slmgr /ipk Method\
    - DISM Method\
    - [CBS Upgrade method](https://github.com/Gamers-Against-Weed/Set-WindowsCbsEdition)

-   Available editions for change are shown in the script basis on all these 4 options.

-   The script is future proof, which means on the release of new Windows / Server editions, the script doesn't need an update and can get the required key from the system itself.

-   Script blocks the change to/from CountrySpecific and CloudEdition editions since it's officially not supported and the user may face issues.

-   Internet needs to be turned off and a restart is required while changing from Core (Home) to Non-Core (Pro, Enterprise, etc) edition with Changepk.exe method.

-   The script can not change the Non-Core (Pro, Enterprise, etc) to Core (Home) edition.

------------------------------------------------------------------------
