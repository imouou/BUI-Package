// 默认已经定义了main模块
loader.define(function(r, e, module) {

    var pageview = {};
    var getParams = router.getPartParams("loadPart");
    console.log(getParams);
    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        bui.hint("loadPart_part.js was loaded");

    }

    // 事件绑定
    pageview.bind2 = function() {

    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind2();

    return pageview;
})