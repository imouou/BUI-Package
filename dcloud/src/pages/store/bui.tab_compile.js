loader.define(function(require, exports, module) {

    // 数据解析后执行

    var _self = this;

    var tab = bui.tab({
        id: "#tabDynamic",
        menu: "#tabDynamicNav",
        autoload: true
    })

    tab.on("to", function(index) {
        switch (index) {
            case 0:
                loader.require(["pages/store/bui.tab_compile_async"], function(mod) {
                    mod.$mount("#tab0")
                    console.log(mod.handle)
                        // 加载某个模块
                })
                break;
        }

    }).to(0)

})