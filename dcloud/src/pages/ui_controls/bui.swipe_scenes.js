loader.define(function(require,exports,module) {

    var uiMask = bui.mask({
            appendTo:"#swipePage",
            callback: function (argument) {
                uiSwipe.close();
                uiMask.hide();
            }
        });
    var uiSwipe = bui.swipe({
        id: "#sidebarWrap",
        handle: ".bui-page",
        zoom: true,
        direction: "xy",
    });

    uiSwipe.on("open",function (e,touch) {
        uiMask.show();
    })
    uiSwipe.on("close",function (argument) {
        uiMask.hide();
    })

    // 侧滑列表
    var uiListview = bui.listview({
        id: "#uiListview",
        callback: function (e,ui) {
            // this 滑动出来的操作按钮
            var text = $(this).text();
            if( text == "删除" ){
                //do something
            }
            ui.close();
        }
    });
    
    // 焦点图
    var uiSlide = bui.slide({
        id:"#slide",
        height:380,
        autopage: true,
        // 如果焦点图的高度要保持跟设计稿一致,需要设置zoom:true
        zoom: true,
        // autoplay: true
    })

})
