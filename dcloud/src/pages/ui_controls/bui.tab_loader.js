loader.define(function(require, exports, module) {

    //按钮在tab外层,需要传id
    var tab = bui.tab({
        id: "#tabDynamic",
        menu: "#tabDynamicNav"
    })

    // 2: 监听加载后的事件
    tab.on("to", function(index) {
        console.log(index, "parent")
        switch (index) {
            case 0:
                loader.load({
                    id: "#tab1",
                    url: "pages/ui_controls/bui.tab_dynamic_page1.html",
                    onLoaded: function(mod) {
                        // 有回调的话是每次切换都会触发
                        mod.init();
                    }
                })

                break;
            case 1:
                loader.load({
                    id: "#tab2",
                    url: "pages/ui_controls/bui.tab_dynamic_page2.html",
                })
                break;
            case 2:
                loader.load({
                    id: "#tab3",
                    url: "pages/ui_controls/bui.tab_dynamic_page1.html",

                })

                break;
            case 3:
                loader.load({
                    id: "#tab4",
                    url: "pages/ui_controls/bui.tab_dynamic_page2.html",

                })
                break;
        }
    }).to(0);

})