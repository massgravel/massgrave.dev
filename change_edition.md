# Change Windows Edition

------------------------------------------------------------------------

-   You can find this option in the MAS extras section.

-   It can change the Windows 10-11 / Server Editions (Build 10240 and higher).

-   It uses official methods for changing editions.

-   Available editions are shown in the script basis on\
    `dism /online /english /Get-TargetEditions`

-   The script is future proof, which means on the release of new Windows / Server editions, the script doesn't need an update and can get the required key from the system itself.

-   Script blocks the change to/from CountrySpecific and CloudEdition editions since it's officially not supported and the user may face issues.

-   Internet needs to be turned off and a restart is required while changing from Core (Home) to Non-Core (Pro, Enterprise, etc) edition.

-   The script can not change the Non-Core (Pro, Enterprise, etc) to Core (Home) edition.

------------------------------------------------------------------------
