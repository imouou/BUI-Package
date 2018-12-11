loader.define(function(require, exports, module) {

    //按钮在tab外层,需要传id
    var tab = bui.tab({
        id: "#tabDynamic",
        // 1: 声明是动态加载的tab
        autoload: true,
    })

    // 2: 监听加载后的事件, load 只加载一次
    tab.on("to", function(index) {
        switch (index) {
            case 0:
                loader.require(["pages/ui_controls/bui.tab_dynamic_page1"])
                break;
            case 1:
                // 这里是加载脚本第一次的时候触发
                loader.require(["pages/ui_controls/bui.tab_dynamic_page2"])
                break;
            case 2:
                loader.require(["pages/ui_controls/bui.tab_dynamic_page1"])
                break;
            case 3:
                loader.require(["pages/ui_controls/bui.tab_dynamic_page1"])
                break;
        }
    }).to(0)

})