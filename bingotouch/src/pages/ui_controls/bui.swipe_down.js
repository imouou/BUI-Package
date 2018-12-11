loader.define(function(require,exports,module) {

    // Tab:
        var tab = bui.tab({
            id:"#tabNews",
            menu:"#tabNav",
            scroll: true
        });
        // 日历:
        var uiSlide = bui.slide({
            id:"#uiSlide",
            height:700,
            zoom: true
        })

        // 日历隐藏一半交互
        var uiSwipe = bui.swipe({
                id: "#uiSwipeDate",
                handle: ".todo",
                movingDistance: 700,
                // handle初始化位置
                initDistance: 200,
                // 滑动的目标不要跟着滑动
                targetMove: false,
                //采用缩放才能保证不同终端的高度距离正确
                zoom: true,
                direction: "y",
            });

        var todoHeight = $(window).height() - $("header").height() - bui.unit.remToPx(1.5);

            $(".todo").height(todoHeight);

        // 日历的事件列表
        var uiListview = bui.listview({
                id: "#listview",
                data: [{ "text": "修改", "classname":"primary"},{ "text": "删除", "classname":"danger"}],
                position:"right",   //默认就是右边,所以可以不用传
                callback: function (e,ui) {
                    // this 为滑动出来的操作按钮
                    var text = $(this).text();
                        if( text == '删除' ){
                            //do something
                        }
                        ui.close();
                }
            });

})
