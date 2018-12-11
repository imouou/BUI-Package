loader.define(function(require,exports,module) {

    //按钮在tab外层,需要传id
    var tab = bui.tab({
        id:"#tabDynamic",
        menu:"#tabDynamicNav",
        // 1: 声明是动态加载的tab
        autoload: true,
    })
    
    // 2: 监听加载后的事件
    tab.on("to",function (index) {
        console.log(index,"parent")
        switch(index){
            case 0:
            loader.require(["pages/ui_controls/bui.tab_dynamic_page1"],function (mod) {
                // 有回调的话是每次切换都会触发
                mod.init();
            })
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
    }).to(0);

})
