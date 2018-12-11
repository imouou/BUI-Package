// 默认已经定义了main模块
loader.define(function() {
    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("getPageParams.js was loaded");

        // 接收页面参数
        var getParams = bui.getPageParams();
            getParams.done(function(result){
                bui.hint(result.page+"页面传值过来");
            })
    }

    // 事件绑定
    pageview.bind = function() {
        $("#backToMain").on("click",function (e) {
            // 后退到首页并刷新
            bui.back({
                // 指定后退到哪个模块, 这个页面的层级不确定在第几层,所以需要通过模块名称指定跳转
                name: "pages/router/index",
                // index: -4,  // -4 已经超出历史记录最大值,所以会退到第一页
                callback: function () {
                    // 获取main模块
                    loader.require(["pages/router/index"],function(main){
                        // 刷新首页
                        main.init();
                        bui.hint("刷新成功")
                    })
                }
            })
        })
        
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})