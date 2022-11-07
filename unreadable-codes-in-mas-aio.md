# Unreadable Codes In MAS AIO

(Applies to MAS AIO 1.7)

------------------------------------------------------------------------

MAS requires some of Microsoft's official files in order to perform activation. In order to make an all-in-one version, it's required that we need to include those files in our AIO .cmd file somehow.

To do that, MAS uses AveYo's [Compressed2TXT](https://github.com/AveYo/Compressed2TXT). It can convert files to text format and Vice-Versa. However, if you are not feeling comfortable using it then you can use MAS separate files version.

------------------------------------------------------------------------

**1st block** of compressed2TXT code contains the below files.

    cleanosppx64.exe        SHA-1: d30a0e4e5911d3ca705617d17225372731c770e2
    cleanosppx86.exe        SHA-1: 39ed8659e7ca16aaccb86def94ce6cec4c847dd6

These files are taken from the old version of Microsoft's official tool `O15CTRRemove.diagcab`

     File: O15CTRRemove.diagcab (Digitally Signed)
     Link: https://app.box.com/s/n8qpb5ljmv6djp77w5p6fk043dm6s3r1 (Unofficial Link)
    SHA-1: 56c6ca76993a96cf9a255463b90db96cb9d24464
