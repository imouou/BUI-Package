loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {
            loader.load({
                id: "#searchbar",
                url: "pages/components/searchbar/index.html"
            })

            // // 加载延迟组件
            loader.load({
                id: "#tabList",
                url: "pages/components/tab-list/index.html",
                param: {
                    tablistdata: [
                        { "name": "待办", "type": "todo", "listtemplate": "templateTodo" },
                        { "name": "已办", "type": "done", "listtemplate": "templateDone" }
                    ]
                }
            })
        }
    };

    pageview.init();

    return pageview;
})