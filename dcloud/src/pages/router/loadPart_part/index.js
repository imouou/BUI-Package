// 默认已经定义了main模块
loader.define(function(r, e, module) {

    var pageview = {};
    var getParams = router.getPartParams();
    console.log(getParams, 111);
    console.log(module, 111);
    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        bui.hint("loadPart_part.js was loaded");

    }

    router.loadPart({
        id: "#loadPart2",
        url: "pages/router/loadPart_part2/index.html?id=456",
        param: {
            test: 234
        }
    }).then(function(res) {
        // 在外部执行里面的方法,意味着可以分离式加载
        // res.init()
        console.log(res)
    })

    return pageview;
})