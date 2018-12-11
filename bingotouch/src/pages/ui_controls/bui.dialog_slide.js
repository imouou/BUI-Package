loader.define(function(require,exports,module) {
    
    var uiDialog = bui.dialog({
            id: "#dialog3",
            width: 320,
            height: 300,
            // mask: false,
            callback: function () {
                uiDialog.close();
            }
        });
    // 打开的时候再初始化slide一次
    var uiSlideTab = null;

    uiDialog.on("open",function () {
        if( uiSlideTab ){
            return;
        }
        uiSlideTab = bui.slide({
            id:"#uiSlideDialog",
            menu:".bui-nav",
            width: 320,
            height: 300,
            children:".bui-tab-main ul",
            scroll: true
        })
    })
    // uiDialog.on("close",function () {
    //  console.log()
    // })
    // uiDialog.option("fullscreen",true);
    $('#btnOpen').on("click",function (argument) {
        uiDialog.open();
    })
})
