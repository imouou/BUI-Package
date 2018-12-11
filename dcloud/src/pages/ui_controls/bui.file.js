loader.define(function(require,exports,module) {

    var $output = $("#output");

    loader.import(["js/platform/cordova.js","js/platform/bingotouch.js"],function(){

        var uiFile = bui.file();

        // 创建download文件夹
        $("#createFolder").on("click",function (argument) {

            uiFile.getFolder({
                folderName: "download",
                create: true,
                onSuccess: function (folder) {
                    $output.text(folder.fullPath);
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })
        })
        // 创建download文件夹
        $("#getFolder").on("click",function (argument) {

            uiFile.getFolder({
                folderName: "download",
                onSuccess: function (folder) {
                    $output.text(folder.fullPath);
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })
        })
        //删除整个文件夹
        $("#removeFolder").on("click",function (argument) {

            uiFile.removeFolder({
                folderName: "download",
                onSuccess: function (data) {
                    $output.text("");
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })

        })
        // 创建bui.jpg文件
        $("#createFile").on("click",function (argument) {

            uiFile.getFile({
                folderName: "download",
                fileName: "bui.jpg",
                create: true,
                onSuccess: function (data) {
                    $output.text(data.fullPath);
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })
        })
        // 打开bui.jpg文件
        $("#getFile").on("click",function (argument) {

            uiFile.getFile({
                folderName: "download",
                fileName: "bui.jpg",
                onSuccess: function (data) { 
                    
                    // // 打开图片
                    this.open({
                        url: data.fullPath
                    });
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })
        })
        // 删除bui.jpg文件
        $("#removeFile").on("click",function (argument) {

            uiFile.removeFile({
                folderName: "download",
                fileName: "bui.jpg",
                onSuccess: function (data) {
                    $output.text("");
                },
                onFail: function (err) {
                    bui.alert(err)
                }
            })
        })
    })
})
