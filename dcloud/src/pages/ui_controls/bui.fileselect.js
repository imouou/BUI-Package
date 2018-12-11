loader.define(function(require,exports,module) {

    var $output = $("#output");

    loader.import(["js/platform/cordova.js","js/platform/bingotouch.js"],function(){
    
        var uiFileSelect = bui.fileselect();
        
        
        // 选择图片文件
        $("#select").on("click",function (argument) {

            uiFileSelect.add({
                "onSuccess": function (val,data) {
                    // $output.text(val);
                    // 插入本地图片
                    this.toBase64({
                        onSuccess: function (url) {
                        $("#output").append('<img src="'+url+'" alt="" />')
                        },
                        onFail: function (argument) {
                            alert(123)
                        }
                    });

                }
            })

        })
        // 选择图片文件
        $("#getSelect").on("click",function (argument) {

            bui.alert( uiFileSelect.data() );

        })

        // 删除选择的文件
        $("#removeSelect").on("click",function (argument) {

            // 安卓选择后的文件名会自动改名为 resize.jpg 
            uiFileSelect.remove("resize.jpg");

        })
        // 删除选择的文件
        $("#removeAllSelect").on("click",function (argument) {

            uiFileSelect.clear();

        })
    })
})
