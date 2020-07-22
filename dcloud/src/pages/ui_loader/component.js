loader.define(function(require, exports, module) {
    var pageview = {
        init: function() {

            loader.wait(["searchbar"], function(searchbar) {
                    console.log(searchbar)
                })
                // // 加载延迟组件
            loader.delay({
                id: "#tabList",
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