loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            this.searchbar = this.searchbarInit();

            // list1为id
            var distace = bui.history.getParentComponent();
            console.log(distace)
        },
        searchbarInit: function(opt) {
            //搜索条的初始化
            var uiSearchbar = bui.searchbar({
                id: `#${module.id} .bui-searchbar`,
                callback: function(e, keyword) {
                    // 获取同级实例, 如果有tab, 根据tab索引来处理不同list
                    var tabDistance = bui.history.getComponent("tabList");
                    var currentIndex = tabDistance && tabDistance.tab && tabDistance.tab.index() || 0;
                    // 根据索引获取对应的list实例,重新请求关键字, 如果只有一个list, 则使用 tabList0 就会绑定
                    var components = bui.history.getComponent("tabList" + currentIndex);
                    components.list.empty();
                    components.list.init({
                        page: 1,
                        data: {
                            keyword: keyword
                        }
                    });

                    // 点击搜索的时候触发其它业务
                    loader.trigger("btnsearch", keyword);
                },
                onInput: function(e, keyword) {
                    //实时搜索
                    // console.log(++n)
                },
                onRemove: function(e, keyword) {
                    //删除关键词需要做什么其它处理
                    // console.log(keyword);
                }
            });
            return uiSearchbar;
        }
    }

    pageview.init();

    return pageview;
})