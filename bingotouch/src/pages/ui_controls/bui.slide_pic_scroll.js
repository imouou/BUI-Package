loader.define(function(require,exports,module) {

    // 快速初始化
    var uiSlidePic = bui.slide({
        id:"#uiSlidePic",
        height:200,
        visibleNum: 2,
        autopage: true
    })

    $("#prev").on("click",function () {
        uiSlidePic.prev();
    })
    $("#next").on("click",function () {
        uiSlidePic.next();
    })
})
