loader.define(function(require, exports, module) {
    console.log("独立头部1")

    var pageview = {};
    var mainHeight = $(window).height() - router.$("#tabDynamicNav").height();

    pageview.init = function() {

        // main初始化高度
        bui.init({
            id: "#page1",
            height: mainHeight,
        });
    }

    return pageview;
})