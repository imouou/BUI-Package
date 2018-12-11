loader.define(function(require,exports,module) {

    //自定义弹出菜单初始化
    var dialog = bui.dialog({
            id: "#actionsheet",
            position:"bottom",
            effect:"fadeInUp",
            onMask: function (argument) {
                dialog.close();
            }
        });
    
    router.$('#btnOpen2').on("click",function (argument) {
        dialog.open();
    })
})
