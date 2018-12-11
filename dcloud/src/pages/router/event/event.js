// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("load.js was loaded");
        
    }

    // 事件绑定
    pageview.bind = function() {
        
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();
    
    return pageview;
})