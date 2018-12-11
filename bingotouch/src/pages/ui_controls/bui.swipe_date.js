loader.define(function(require,exports,module) {

    var mainHeight = router.$("main").height();

    var uiSwipe = bui.swipe({
            id: "#uiSwipeDown",
            handle: ".todo",
            movingDistance: 700,
            height: mainHeight,
            // handle初始化位置
            initDistance: 200,
            // 滑动的目标不要跟着滑动
            targetMove: false,
            //采用缩放才能保证不同终端的高度距离正确
            zoom: true,
            direction: "y",
        });

        uiSwipe.on("open",function (argument) {
            // 禁止滚动条
            $(".todo").css({"overflow":"hidden"})

        })
        uiSwipe.on("close",function (argument) {
            // 允许滚动条
            $(".todo").css({"overflow":"auto"})
        })

        // 默认打开状态
        // uiSwipe.open({
        //     target:"swipedown",
        //     transition:"none"
        // })

        

})
