// 默认已经定义了main模块
loader.define(function(r, e, module) {

    var pageview = {};
    var getParams = router.getPartParams();
    console.log(getParams, 222);

    console.log(module, 222);
    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        bui.hint("loadPart_part2.js was loaded");

    }

    // 初始化
    // pageview.init();
    // 绑定事件
    // pageview.bind2();

    return pageview;
})