loader.define(function(require,exports,module) {

    //按钮在tab外层,需要传id
    var tab = bui.slide({
        id:"#tabDynamic",
        menu:"#tabDynamicNav",
        children:".bui-tab-main > ul",
        scroll: true,
        // 1: 声明是动态加载的tab
        autoload: true,
    })
    
    // 2: 监听加载后的事件, load 只加载一次
    tab.on("to",function (index) {
        console.log(index,"to")
    }).to(0)

})
