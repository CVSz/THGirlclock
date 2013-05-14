function downloadFile()
{
    window.requestFileSystem(        LocalFileSystem.PERSISTENT, 0,
        function onFileSystemSuccess(fileSystem) {
            fileSystem.root.getFile(
            "dummy.html", {create: true, exclusive: false},

            function gotFileEntry(fileEntry) {
                var sPath = fileEntry.fullPath.replace("dummy.html","");
                var fileTransfer = new FileTransfer();

                fileEntry.remove();
                fileTransfer.download(
                    "url file ที่จะ download",
                    sPath + "ชื่อไฟล์ปลายทาง",
                    function(theFile) {
                        console.log("download complete: " + theFile.toURI());
                        //เราจะได้ที่อยู่ไฟล์ในรูปแบบ url ให้เอาที่อยู่นี้ไปใช้ต่อในโปรแกรมได้เลย);
                    },
                    function(error) {
                        console.log("download error source " + error.source);
                        console.log("download error target " + error.target);
                        console.log("upload error code: " + error.code);
                    }
                );
            }, fail);
        }, fail);
    };
}