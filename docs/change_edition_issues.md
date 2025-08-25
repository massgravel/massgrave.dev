# Change Edition Issues

If the script encounters an error during the Windows edition change, follow the points listed below in this order.

---

## Restart System

-   Press the restart button to reboot the system.
-	Try changing the edition now. If it doesn’t work, follow the next step listed below.

---

## Update Windows

-	Open the Windows settings, navigate to the Windows Update section, and ensure that Windows is fully updated.
-	Try changing the edition now. If it doesn’t work, follow the next step listed below.

---

## Dism RestoreHealth & SFC Scannow

-	In the MAS script, go to the Troubleshoot option and select `DISM RestoreHealth`.
- 	Restart the system using the restart button.
-	After that, select `SFC Scannow` option.
-	Restart the system using the restart button.
-	Try changing the edition now. If it doesn’t work, follow the next step listed below.

---

## In-Place Repair Upgrade

-   If none of the solutions worked, please follow the guide below to fix the system corruption.
-   https://gravesoft.dev/in-place_repair_upgrade

---

:::tip

If you need any help, feel free to connect with us [here](troubleshoot.md).

:::
