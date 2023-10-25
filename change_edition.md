---
pagetitle: Change Windows Edition
---

# Change Windows Edition

------------------------------------------------------------------------

-   You can find this option in the MAS extras section.

-   It can change the Windows 7-8-8.1-10-11 and their Server equivalent editions.

-   The script incorporates 4 methods for edition changing:

    -   Alex (aka may, ave9858) DISM Api Method (Based on changepk.exe method but better)\
    -   slmgr /ipk Method\
    -   DISM Method\
    -   [CBS Upgrade method](https://github.com/asdcorp/Set-WindowsCbsEdition)

-   Available editions that can be changed to are shown in the script based on all these 4 options.

-   The script is future-proof, which means that upon the release of new Windows / Server editions, the script won't need an update and can get the required product key from the system itself.

-   The script blocks changing to CountrySpecific, ServerRdsh and to/from CloudEdition editions since it's officially not supported and the user may face issues.

-   The script cannot change Windows edition to Home-level editions. 

------------------------------------------------------------------------
