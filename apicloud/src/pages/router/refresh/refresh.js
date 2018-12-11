// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("refresh.js was loaded");
        
    }

    // 绑定事件
    pageview.bind = function() {
        // 刷新示例
        $("#refresh").on("click",function () {

            // 推荐: 利用模块加载以后返回的方法,可以实现主要部分刷新
            loader.require(["pages/router/refresh/refresh"],function (refresh) {
                refresh.init();
                bui.hint("刷新成功")
            })
        })
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})