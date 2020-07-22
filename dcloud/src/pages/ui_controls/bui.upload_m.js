loader.define(function(require, exports, module) {

    // 拍照上传
    var $facePhoto = router.$(".upload-photo");
    var $uploadBtn = null,
        // 区分上传的图片在哪个位置
        uploadType = "";

    var uiUpload = bui.upload();

    // 上拉菜单 js 初始化:
    var uiActionsheet = bui.actionsheet({
        buttons: [{ name: "拍照上传", value: "camera" }, { name: "从相册选取", value: "photo" }],
        callback: function(e) {
            var ui = this;
            var val = $(e.target).attr("value");

            switch (val) {
                case "camera":
                    ui.hide();
                    uiUpload.add({
                        "from": "camera",
                        "onSuccess": function(val, data) {
                            // 修改图片数据的图片的类型, 所有的图片都在一个数组里
                            data[data.length - 1]["uploadType"] = uploadType;
                            console.log(this.data())
                                // 展示base64本地图片 建议直接调用start方法上传以后再展示远程地址,避免应用崩溃

                            this.toBase64({
                                onSuccess: function(url) {
                                    $uploadBtn.before(templatePhoto(url))

                                }
                            });
                            // 新的展示本地图片方式,部分手机不支持
                            // var url = window.URL.createObjectURL(val[0]);
                            // $uploadBtn.before(templatePhoto(url))

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
                case "photo":
                    ui.hide();
                    uiUpload.add({
                        "from": "",
                        "onSuccess": function(val, data) {
                            // 修改图片数据的图片的类型, 所有的图片都在一个数组里
                            data[data.length - 1]["uploadType"] = uploadType;

                            // 展示base64本地图片 建议直接调用start方法上传以后再展示远程地址,避免应用崩溃
                            this.toBase64({
                                onSuccess: function(url) {
                                    $uploadBtn.before(templatePhoto(url))

                                }
                            });
                            // 新的展示本地图片方式,部分手机不支持
                            // var url = window.URL.createObjectURL(val[0]);
                            // $uploadBtn.before(templatePhoto(url))

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

    router.$("#btnUpload,#faceUpload").on("click", function() {
        var type = $(this).attr("data-type");
        $uploadBtn = $(this).parent();
        uiActionsheet.show();
        // 上传的图片类型
        uploadType = type;
    })

    // 选择图片文件
    $facePhoto.on("click", ".icon-removefill", function(e) {
        var $item = $(this).parents(".span1");
        var name = $item.attr("data-name");
        // 删除对应的上传数据
        uiUpload.remove(name);
        // 删除dom显示
        $item.remove();
        e.stopPropagation();

    })


    // 上传图片
    $("#uploadAll").on("click", function(argument) {
        uiUpload.startAll({
            url: "http://10.201.76.223:8060/comservice/psbNewsReport/uploadPictureFile.do",
            needFileinfo: true, // 1.5.3新增, 把每个图片的基本信息一起上传, name,size,type, 包含修改的 uploadType 
            onSuccess: function(data) {
                console.log(data)
                    //显示上传以后的图片
            },
            onFail: function(data) {
                bui.alert(data)
            }
        })

    })

})