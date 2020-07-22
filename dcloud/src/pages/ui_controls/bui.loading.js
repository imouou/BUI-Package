loader.define(function(require,exports,module) {

    // 默认效果2:
        var uiLoading = bui.loading({
            appendTo:"#loading",
            width: 40,
            height: 40,
            callback: function (argument) {
                console.log("clickloading")
            }
        });

        //移除
        $('#remove').on("click",function (argument) {
            uiLoading.stop();
        })
        //显示
        $('#show').on("click",function (argument) {
            uiLoading.show();
        })
        //隐藏
        $('#hide').on("click",function (argument) {
            uiLoading.hide();
        })
        //修改文本
        $('#text').on("click",function (argument) {
            uiLoading.text("修改文本");
        })

})
