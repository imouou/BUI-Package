// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要内容
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("replace.js was loaded");
        
    }

    // 事件绑定
    pageview.bind = function() {
        // 替换示例
        $("#replace").on("click",function () {
            router.replace({url:"pages/ui_controls/index.html"});
            bui.hint("替换成功")
        })
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})