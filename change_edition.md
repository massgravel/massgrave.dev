# Change Windows Edition

------------------------------------------------------------------------

-   You can find this option in MAS extras section.

-   It can change the Windows 10-11 / Server Editions (Build 10240 and higher).

-   It uses official methods for changing editions.

-   Available editions are shown in script basis on\
    `dism /online /english /Get-TargetEditions`

-   Script is future proof, means on the release of new Windows / Server editions, script doesn't need an update and can get the required key from the system itself.

-   Script blocks the change to/from CountrySpecific and CloudEdition editions, since it's offically not supported and user may face issues.

-   Internet needs to be turned off and a restart is required while changing from Core (Home) to Non-Core (Pro, Enterprise etc) edition.

-   Script can not change the Non-Core (Pro, Enterprise etc) to Core (Home) edition.

------------------------------------------------------------------------
