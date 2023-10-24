---
pagetitle: Change Windows Edition
---

# Change Windows Edition

------------------------------------------------------------------------

-   You can find this option in the MAS extras section.

-   It can change the Windows 7-8-8.1-10-11 and equivalent Server Editions.

-   The script incorporates 4 methods for edition change:

    -   Alex (aka may, ave9858) DISM Api Method (Based on changepk.exe method but better)\
    -   slmgr /ipk Method\
    -   DISM Method\
    -   [CBS Upgrade method](https://github.com/asdcorp/Set-WindowsCbsEdition)

-   Available editions for change are shown in the script based on all these 4 options.

-   The script is future-proof, which means that upon the release of new Windows / Server editions, the script won't need an update and can get the required key from the system itself.

-   The script blocks the change to CountrySpecific, ServerRdsh and to/from CloudEdition editions since it's officially not supported and the user may face issues.

-   The script cannot change the Non-Core (Pro, Enterprise, etc) to Core (Home) edition.

------------------------------------------------------------------------
