---
title: DumbVersion Patches
description: How to use DumbVersion patch files (.dvp) to generate ISOs.
---

We use **DumbVersion Patch files (`.dvp`)** to efficiently store different localizations and variations of existing ISOs.

These files contain only the exact differences between a base ISO and your target ISO. This helps us with hosting a large amount of ISOs efficiently, without having issues with speed or reliability.

## Prerequisites

Before you begin, make sure you have the following:

* **The latest version of the [DumbVersion Patcher](https://github.com/thecatontheceiling/DumbVersion/releases/):** Download the latest release that matches your operating system and architecture (Windows, MacOS, or Linux and x64 or ARM64).
* **A base ISO:** This is the source file the patch will be applied to.
* **A patch file:** The `.dvp` file you downloaded from our website.

:::info
For most patches on our site, the required base ISO is the standard **English (`en-us`)** version that matches the architecture of the patch. The Patcher will tell you if you are using an incorrect base ISO.      
:::

## How to Apply a Patch

1. **Create a new, empty folder and place all of the downloaded files inside it:** the patcher executable, any amount of base ISOs, and any amount of `.dvp` files.

2. **Execute the DumbVersion Patcher.** It will scan the folder and automatically detect both the ISOs and the patch files.     
    *(If you want to process multiple patches, you can also drag-and-drop `.dvp` files onto the patcher.)*

3. **Wait for the Patcher to complete.** The Patcher will process the files and generate new ISOs in the same folder.

:::tip
Your original base ISO is strictly read-only during this process. It will **not** be modified, overwritten, or deleted.
:::


## Video Tutorial

import ReactPlayer from 'react-player'

<ReactPlayer controls width='100%' height='auto' src='/dumbversion_tutorial.mp4' />

## Need help?

* Double-check that your base ISO is fully downloaded, uncorrupted, and matches the exact version expected by the patch (usually the `en-us` ISO).
* If you're still having issues, feel free to [contact us](contactus.md).