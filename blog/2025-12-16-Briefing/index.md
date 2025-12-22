---
slug: briefing
title: Moving Forward
authors: [lyssa]
tags:
  - MAS
image: /img/blog_card.png
---

## Introduction

We are constantly looking for ways to improve the reliability, usability, and efficiency of the script, as per our goal of creating the best Windows activator out there. As such, we'd like to announce some changes that we want to make sometime in the future.

<!-- truncate -->

## Future Plans

The vast majority of MAS has been written in batch since its inception. As the project grew, however, it became increasingly harder to maintain, read, and debug the code. In many parts of MAS, we have to invoke PowerShell as a new process whenever batch can't accommodate what we want to do. The batch script has really started showing its age, and it's about time we move on to something better.

We have finally decided to begin work on a complete port of the script to PowerShell. This will allow us to achieve things that were previously impossible or infeasible:

- **Better Performance:** MAS is currently severely bottlenecked by the frequent need to start separate PowerShell processes. PowerShell takes a while to fully initialize; when you have to invoke it frequently, it wastes a lot of time.
- **Feature Set:** It will allow us to add new features that would have been difficult to implement using batch.
- **Readable Codebase:** Porting the script to PowerShell will allow us to adhere to modern standards for code organization, allowing more of our users to explore or audit the code much more comfortably.

## Changes to Operating System Support

The current version of MAS is to be considered "feature-complete." It has full support for Windows Vista onwards, and at this point, the only updates it receives are related to maintenance or minor improvements.

As such, we have decided that it's best for the PowerShell port **to not include support for Windows 8.1 and older**. By focusing on modern Windows versions, we can cut down on the bloat of the current script considerably and reduce the time needed to complete the port's development.

We do understand that this script is very important to some of you for activating older versions of Windows, which is why the legacy batch version will still be available for download on our GitHub. This does not mean that we will continue to support it after the PowerShell port comes to fruition. However, by the time the PowerShell port is completed, support from Microsoft for these old versions will be completely gone. This means that the legacy script should continue to work on these old versions without requiring future updates from us, as no new system changes will be introduced that could break it.

## When?

We don't have a concrete date for when the PowerShell port will be released to the public. We are all people who work on the project for free in our spare time, and many factors can drastically affect development time. Until the new version is ready, the batch version of the script will continue to be fully supported.

It is likely that we will have a brief public beta-testing period before deprecating the batch version for good, so the switch won't be too swift.

We really appreciate your patience while we work towards our goal of making the script even better than it already is. Take care.