loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // 获取子组件
            // loader.wait(["searchbar", "tabList"], function(search, tabList) {
            //     console.log(search)
            //     console.log(tabList)

            // })

            // 点击搜索的时候触发其它业务
            loader.on("btnsearch", function(keyword) {
                console.log(keyword)
            })

            var params = bui.history.getParams(module.id);

            // 延迟加载把父级参数替换默认数据
            loader.delay({
                id: "#tabList",
                param: {
                    tablistdata: params.tablistdata || [{ "name": "新闻", "type": "news", "listtemplate": "templateNews" }, { "name": "图片", "type": "photo", "listtemplate": "templateNews" }]
                }
            })
        }

    }

    pageview.init();

    return pageview;
})