loader.define(function(require, exports, module) {

    // 获取参数
    var params = bui.history.getParams(module.id);

    // 初始化数据行为存储
    var bs = bui.store({
        el: `#${module.id}`,
        scope: "tabList",
        data: {
            menu: [],
        },
        methods: {
            tabInit: function(opt) {
                // 选项卡 js 初始化:
                var uiTabList = bui.tab({
                    id: `#${module.id} .bui-tab`
                });
                // 触发第一个延迟加载的list
                uiTabList.on("to", function() {
                    // 获取索引
                    var index = this.index();
                    // 延迟加载组件
                    loader.delay({
                        id: "#tabList" + index,
                        param: {
                            name: "test"
                        }
                    })
                }).to(0, "none")

                return uiTabList;
            }
        },
        templates: {
            tplMenu: function(data) {
                var html = "";
                data.forEach(function(item, index) {
                    html += `<li class="bui-btn">${item.name}</li>`
                })
                return html;
            },
            tplTab: function(data) {
                var html = "";
                data.forEach(function(item, index) {
                    html += `<li>
                            <component id="tabList${index}" name="pages/components/list/index" type="${item.type}" listtemplate="${item.listtemplate}" delay="true"></component>
                        </li>`
                })
                return html;
            }
        },
        mounted: function() {
            // 数据解析后执行
            // console.log(params)
            var tabdata = params.tablistdata || [
                { "name": "新闻", "type": "news", "listtemplate": "templateBuy" },
                { "name": "图片", "type": "photo", "listtemplate": "templateNews" }
            ];
            // 修改tab菜单
            this.menu.$replace(tabdata);
            // 初始化tab
            this.tab = this.tabInit(params);
        }
    })


    return bs;
})