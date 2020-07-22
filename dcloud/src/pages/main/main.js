/**
 * 导航TAB模板
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    // bui.page({ url: "index.html#pages/components/list/index.html", iframe: true })
    var pageview = {};
    // 存储tab实例
    var distance = [];
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
                    // 有回调的时候, 会每次都执行. 
                    loader.require(["pages/main/controls"], function(mod) {
                        // 避免tab切换多次执行初始化
                        if (distance[index]) {
                            return;
                        }
                        // 执行一次初始化
                        mod.init();
                        distance[index] = 1;
                    })
                    break;
                case 1:
                    // 没有回调只加载一次
                    loader.require(["pages/main/form"])
                    break;
                case 2:
                    loader.require(["pages/main/store"])
                    break;
                case 3:
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