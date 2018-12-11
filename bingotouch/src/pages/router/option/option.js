// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("option.js was loaded");
    }

    // 事件绑定
    pageview.bind = function() {
        $(".btn-load-effect").on("click",function (argument) {
            var effect = $(this).attr("data-effect");

            // 全局修改
            // router.option("effect",effect)

            // 指定某个页面跳转效果
            bui.load({
                url: "pages/router/load/load.html",
                effect: effect
            })
        })
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})