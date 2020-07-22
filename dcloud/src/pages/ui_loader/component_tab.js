loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            this.tab = this.tabInit();
        },
        tabInit: function() {
            var uiTab = bui.tab({
                id: "#uiTab",
                scroll: false
            });

            // component 自动编译延迟加载的component, 所以无需 to(0)
            uiTab.on("to", function() {
                var index = this.index();
                // 延迟加载有delay属性的列表,跳到tab才加载
                loader.delay({
                    id: "#list" + index
                })
            })

            return uiTab;
        }
    };

    pageview.init();

    return pageview;
})