loader.define(function(require, exports, module) {

    // appendTo 为空则添加在整个页面
    var uiMask = bui.mask({
        appendTo: "#mask",
        callback: function() {
            console.log("mask1")
        },
        autoClose: true
    });
    //移除
    $('#remove').on("click", function() {
            uiMask.remove();
        })
        //显示
    $('#show').on("click", function(argument) {
            uiMask.show();
        })
        //隐藏
    $('#hide').on("click", function(argument) {
        uiMask.hide();
    })
})