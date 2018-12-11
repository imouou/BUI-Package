loader.define(function(require,exports,module) {

    // 快速初始化
    var uiSlide = bui.slide({
        id:"#slide",
        height:380,
        autopage: true,
        fullscreen: true,
        // autoplay: true
    })
    
    // 倒计时
    var timer = bui.timer({
        target: ".bui-btn-jump",
        onEnd: function (e) {
            $(e.target).text("跳过").click(function () {
                uiSlide.option("fullscreen",false);
                $(this).hide();
            })
        },
        times: 10
    })

    timer.start()

    // 退出全屏
    router.$("#enter").on("click",function (e) {
        uiSlide.option("fullscreen",false);

        // 停止计时
        timer.stop();
        $(".bui-btn-jump").hide();
    })

})
