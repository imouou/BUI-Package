/**
 * 导航TAB模板
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};
    // 模块初始化定义
    pageview.init = function() {
        navTab();
    }

    // 底部导航
    function navTab() {

        //menu在tab外层,menu需要传id
        var tab = bui.tab({
            id: "#tabDynamic",
            animate: false,
            // 1: 声明是动态加载的tab
            autoload: true,
        })

        tab.lock();

        // 2: 监听加载后的事件
        tab.on("to", function(index) {
            switch (index) {
                case 0:
                    loader.require(["pages/main/controls"])
                    break;
                case 1:
                    loader.require(["pages/main/form"])
                    break;
                case 2:
                    loader.require(["pages/main/method"])
                    break;
            }

        }).to(0);

    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;

})