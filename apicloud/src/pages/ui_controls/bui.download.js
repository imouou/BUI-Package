loader.define(function(require, exports, module) {
    // 以下示例为 bingotouch 独有, 其它平台不要用. index.js bui.isWebapp = false; 才能在debugtool调试.
    var $output = $("#output");

    loader.import(["js/platform/cordova.js", "js/platform/bingotouch.js"], function() {
        // 初始化文件管理控件
        var uiFile = bui.file();
        // 初始化控件
        var uiDownload = bui.download();

        // 下载图片
        $("#downloadImage").on("click", function(argument) {
                // 开始下载
                uiDownload.start({
                    url: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1208/24/c2/13179846_1345796441964.jpg",
                    fileName: "customName.jpg",
                    onSuccess: function(url, file) {
                        // 获得文件路径
                        $output.text(url);
                        // 插入图片
                        // this.toBase64({
                        //     data: url,
                        //     onSuccess: function (url) {
                        //         $output.append('<img src="'+url+'" width="100%"/>')
                        //     },
                        //     onFail: function (data) {
                        //         bui.alert(data)
                        //     }
                        // })
                    },
                    onFail: function(data) {
                        // bui.alert(data)
                    }
                })

            })
            // 下载视频
        $("#downloadVideo").on("click", function(argument) {
                // 
                uiDownload.start({
                    url: "http://vjs.zencdn.net/v/oceans.mp4",
                    onSuccess: function(url, file) {
                        $output.text(url);
                    },
                    onFail: function(data) {
                        // bui.alert(data)
                    }
                })

            })
            // 下载APP
        $("#getDownloadApp").on("click", function(argument) {
            // 
            uiDownload.start({
                url: "http://10.200.199.117:81/externalPlugin/plugin.apk",
                onSuccess: function(url, file) {
                    $output.text(url);
                    // 打开以后安装
                    app.openFile(url, "apk", function(argument) {
                        bui.hint("打开成功")
                    })
                },
                onFail: function(data) {
                    // bui.alert(data)
                }
            })

        })

        // 停止下载
        $("#stopDownload").on("click", function(argument) {
            uiDownload.stop();
        })

        // 打开下载的图片,找不到则下载, uiDownload.getFile 跟 uiFile.getFile 功能不一样
        $("#getDownloadOpen").on("click", function(argument) {
                uiDownload.getFile({
                    url: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1208/24/c2/13179846_1345796441964.jpg",
                    fileName: "customName.jpg",
                    onSuccess: function(url) {
                        $output.text(url);
                        // 打开
                        uiFile.open({
                            url: url
                        });
                    }
                })
            })
            // 插入图片
        $("#getDownloadShow").on("click", function(argument) {
                uiDownload.getFile({
                    url: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1208/24/c2/13179846_1345796441964.jpg",
                    fileName: "customName.jpg",
                    onSuccess: function(data) {
                        // 插入图片
                        uiDownload.toBase64({
                            data: data,
                            onSuccess: function(url) {
                                $output.append('<img src="' + url + '" width="100%"/>')
                            },
                            onFail: function(data) {
                                bui.alert(data)
                            }
                        })
                    }
                })
            })
            // 删除下载的文件
        $("#removeDownload").on("click", function(argument) {
                // 下载的文件默认保存在 download 目录下
                uiFile.removeFile({
                    folderName: "download",
                    fileName: "customName.jpg",
                    onSuccess: function(data) {
                        bui.alert("删除成功")
                    },
                    onFail: function(err) {
                        bui.alert(err)
                    }
                })
            })
            // 删除所有下载文件
        $("#removeAllDownload").on("click", function(argument) {
            // 下载的文件默认保存在 download 目录下
            uiFile.removeFolder({
                folderName: "download",
                onSuccess: function(data) {
                    bui.alert("删除目录成功")
                },
                onFail: function(err) {
                    bui.alert(err)
                }
            })
        })
    });


})