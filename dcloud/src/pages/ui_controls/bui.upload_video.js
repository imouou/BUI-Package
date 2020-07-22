loader.define(function(require, exports, module) {

    // 拍照上传
    var $facePhoto = router.$("#buiPhoto");
    var $uploadBtn = router.$("#btnUpload").parent();

    var uiUpload = bui.upload({
        showProgress: false,
        needNative: true,
    });

    // 上拉菜单 js 初始化:
    var uiActionsheet = bui.actionsheet({
        trigger: "#btnUpload",
        buttons: [{ name: "录像", value: "video" }, { name: "录音", value: "audio" }, { name: "拍照上传", value: "camera" }, { name: "从相册选取", value: "photo" }],
        callback: function(e) {
            var ui = this;
            var val = $(e.target).attr("value");

            switch (val) {
                case "camera":
                    ui.hide();
                    uiUpload.add({
                        "from": "camera",
                        "needCompress": true, // 1.5.3新增压缩
                        "width": 300,
                        "destinationType": "file", //  file | blob | data 
                        "onSuccess": function(val, data) {
                            bui.alert(val)
                                // 展示base64本地图片 建议直接调用start方法上传以后再展示远程地址,避免应用崩溃
                            this.toBase64({
                                onSuccess: function(url) {
                                    $uploadBtn.before(templatePhoto(url))
                                }
                            });
                            // 直接调用start上传图片

                            // this.start({
                            //     header: {},
                            //     url: "http://10.201.76.223:8060/comservice/psbNewsReport/uploadPictureFile.do",
                            //     onSuccess: function(data) {
                            //         console.log(data, "success");
                            //         // 成功
                            //     },
                            //     onFail: function(data) {
                            //         console.log(data, "fail");
                            //         // 失败
                            //     },
                            // })
                        }
                    })

                    break;
                case "photo":
                    ui.hide();
                    uiUpload.add({
                        "from": "",
                        "onSuccess": function(val, data) {

                            // 展示base64本地图片 建议直接调用start方法上传以后再展示远程地址,避免应用崩溃
                            this.toBase64({
                                onSuccess: function(url) {
                                    $uploadBtn.before(templatePhoto(url))

                                }
                            });
                            // 直接调用start上传图片
                            // this.start({
                            //     header: {},
                            //     url: "http://easybui.com/images/",
                            //     onSuccess: function(data) {
                            //         console.log(data, "success");
                            //         // 成功
                            //     },
                            //     onFail: function(data) {
                            //         console.log(data, "fail");
                            //         // 失败
                            //     },
                            // })
                        }
                    })

                    break;
                case "video":
                case "audio":
                    ui.hide();
                    uiUpload.add({
                        "mediaType": val,
                        "onSuccess": function(val, data) {

                            // 直接调用start上传图片
                            this.start({
                                header: {},
                                url: "http://easybui.com/images/",
                                onSuccess: function(data) {
                                    console.log(data, "success");
                                    // 成功
                                },
                                onFail: function(data) {
                                    console.log(data, "fail");
                                    // 失败
                                },
                            })
                        }
                    })
                    break;
                case "cancel":
                    ui.hide();
                    break;
            }
        }
    })

    function templatePhoto(url) {
        return `<div class="span1" data-index="${uiUpload.currentIndex()}" data-name="${uiUpload.currentName()}">
                <div class="bui-upload-thumbnail"><img src="${url}" alt="" /><i class="icon-removefill"></i></div>
            </div>`
    }



    // 选择图片文件
    $("#getSelect").on("click", function(argument) {

        bui.alert(uiUpload.data());

    })

    // 选择图片文件
    $facePhoto.on("click", ".icon-removefill", function(e) {
        var $item = $(this).parents(".span1");
        var index = $item.attr("data-index");
        var name = $item.attr("data-name");

        // 删除对应的上传数据
        uiUpload.remove(name);
        // 删除dom显示
        $item.remove();
        e.stopPropagation();

    })

    // 删除第一个选择的文件
    $("#removeSelect").on("click", function(argument) {
            if ($facePhoto.find(".span1").length > 1) {
                $facePhoto.find(".span1").eq(0).remove();
            }
            uiUpload.remove(0);
        })
        // 删除选择的文件
    $("#removeAllSelect").on("click", function(argument) {

        uiUpload.clear();

    })

    // 上传图片
    $("#upload").on("click", function(argument) {
            uiUpload.startAll({
                // url: "http://eid.bingosoft.net:83/share/apis/upload/image",
                url: "http://10.201.76.223:8060/comservice/psbNewsReport/uploadPictureFile.do",
                // url: "https://www.swla.com.cn/demo/upload.asp",
                // url:"http://10.201.78.23:81/dataservice.ashx?CommandName=Atd$ImgUpLoad",
                onSuccess: function(data) {
                    console.log(data)
                        //显示上传以后的图片
                        //清空已经选择的图片
                },
                onFail: function(data) {
                    bui.alert(data)
                }
            })

        })
        // 停止上传
    $("#stopUpload").on("click", function(argument) {

        uiUpload.stop();

    })


})