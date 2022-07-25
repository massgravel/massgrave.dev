# Unreadable Codes In MAS AIO

(Applies to MAS AIO 1.6)

------------------------------------------------------------------------

MAS requires some Microsoft's official files in order to perform activation's. In order to make an all-in-one version, it's required that we need to include those files in our AIO .cmd file somehow.

To do that, MAS uses AveYo's [Compressed2TXT](https://github.com/AveYo/Compressed2TXT). It can convert files to text format and Vice-Versa. However if you are not feeling comfortable in using it then you can use MAS separate files version.

------------------------------------------------------------------------

**1st block** of compressed2TXT code contains below file.

     File: gatherosstate.exe
    SHA-1: FABB5A0FC1E6A372219711152291339AF36ED0B5 

It's taken from [Windows 10 Version 1607 ADK](https://go.microsoft.com/fwlink/p/?LinkId=526740) (Section: User State Migration Tool)

------------------------------------------------------------------------

**2nd block** of compressed2TXT code contains below files.

    cleanosppx64.exe        SHA-1: d30a0e4e5911d3ca705617d17225372731c770e2
    cleanosppx86.exe        SHA-1: 39ed8659e7ca16aaccb86def94ce6cec4c847dd6

These files are taken from the old version of Microsoft official tool `O15CTRRemove.diagcab`

     File: O15CTRRemove.diagcab (Digitally Signed)
     Link: https://app.box.com/s/n8qpb5ljmv6djp77w5p6fk043dm6s3r1 (Unofficial Link)
    SHA-1: 56c6ca76993a96cf9a255463b90db96cb9d24464
