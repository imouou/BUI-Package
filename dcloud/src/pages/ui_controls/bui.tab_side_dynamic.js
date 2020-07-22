loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // html:
            // <div id="uiTabLeft" class="bui-tab"></div>
            var uiTabLeft = bui.tab({
                id: "#uiTabLeft",
                position: "left",
                iconPosition: "left",
                sideWidth: 90,
                data: [{
                    id: "uiTabLeft0",
                    icon: "icon-menu",
                    title: "热门",
                    name: "pages/ui_controls/bui.tab_dynamic_page1",
                    param: { type: "news" }
                }, {
                    id: "uiTabLeft1",
                    icon: "icon-menu",
                    title: "分类",
                    name: "pages/ui_controls/bui.tab_dynamic_page2",
                    param: { type: "photo" },
                }]
            })
        }
    }

    pageview.init();

})