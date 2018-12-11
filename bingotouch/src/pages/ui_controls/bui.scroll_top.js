

loader.define(function(require,exports,module) {
    var uiScroll;

    uiScroll = bui.scroll({
            id: "#scroll",
        });

    // 点击的时候跳转到某个对象
    $("#bui-router").on("click","header",function (argument) {
        uiScroll.scrollTop("#test")
    })
})
