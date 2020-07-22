loader.define(function(require, exports, module) {

    var uiList = null,
        uiDialog = null;
    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            lists: [] // 默认是数组时,只能通过 bui.array 之类的操作触发, 如果是Null,则可以通过 等于赋值的操作
        },
        // log: true,
        methods: {
            open: function() {
                uiDialog.open();
            },
            refresh: function() {
                uiDialog.open();
                // 修改请求地址
                uiList.modify({
                    url: "json/shop.json"
                });
                // 刷新自动把分页改回1
                uiList.refresh();
            }
        },
        templates: {
            tplList: function(data) {
                var html = "";
                if (data && data.length) {
                    data.forEach(function(el, index) {
                        // 演示传参,标准JSON才能转换
                        var param = { "id": index, "title": el.name };
                        var paramStr = JSON.stringify(param);

                        html += `<li class="bui-btn bui-box" href="pages/ui/article.html" param='${paramStr}'>
                            <div class="bui-thumbnail" ><img src="${el.image}" alt=""></div>
                            <div class="span1">
                                <h3 class="item-title">${el.name}</h3>
                                <p class="item-text">${el.address}</p>
                                <p class="item-text">${el.distance}公里</p>
                            </div>
                            <span class="price"><i>￥</i>${el.price}</span>
                        </li>`
                    })
                }

                return html;
            }
        },
        mounted: function(argument) {
            var _self = this;

            uiDialog = bui.dialog({
                id: "#uiDialog",
                fullscreen: true,
                effect: "fadeInRight"
            }).on("open", function() {
                if (uiList) {
                    return;
                }
                // zeptojs 隐藏元素里面获取不到高度,需要打开以后才获取
                var listHeight = $(window).height() - router.$(".bui-dialog-head").height();
                uiList = bui.list({
                    id: "#listStore",
                    url: "http://www.easybui.com/demo/json/shop.json",
                    page: 1,
                    pageSize: 5,
                    height: listHeight,
                    //如果分页的字段名不一样,通过field重新定义
                    field: {
                        page: "page",
                        size: "pageSize",
                        data: "data"
                    },
                    onRefresh: function(scroll, datas) {
                        // 合并新的数据
                        bui.array.replace(_self.lists, datas.data);
                    },
                    onLoad: function(scroll, datas) {
                        bui.array.merge(_self.lists, datas.data)
                    }
                });
            })

        }
    })

})