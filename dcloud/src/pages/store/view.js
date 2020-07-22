loader.define(["pages/store/views/form/index",
        "pages/store/views/article/index",
        "pages/store/views/attach/index"
    ],
    function(form, article, attach, require, exports, module) {

        // 初始化数据行为存储
        var bs = bui.store({
            el: ".bui-page",
            scope: "page",
            data: {
                title: "测试标题"
            },
            mixins: [form, article, attach],
            methods: {
                floor: function(opt) {
                    // 楼层初始化
                    // 初始化
                    var uiFloor = bui.floor(opt)

                    return uiFloor;
                },
                callhim2: function(phone) {
                    // 打电话
                    bui.unit.tel(phone);
                },
            },
            watch: {},
            computed: {},
            templates: {},
            beforeMount: function() {
                // 数据解析前执行, 修改data的数据示例
                // this.$data.a = 2
            },
            mounted: function() {
                var that = this;
                // 数据解析后执行
                var floor = this.floor({
                    id: "#floor",
                    menu: "#floorNav",
                    floorItem: "view"
                })
                var isDelayViewLoad = true;
                // 延迟加载
                floor.on("scrollto", function(e) {
                    if ((e.index > 0) && isDelayViewLoad) {
                        // 延迟加载view
                        loader.delay({
                            id: ".delayview",
                            loaded: function(item) {
                                // 延迟加载view以后还要重新挂载数据
                                that.$mount(item.el);
                                // 重新初始化楼层插件
                                floor.init();
                            }
                        });

                        isDelayViewLoad = false;
                    }
                })
            }
        })


        return bs;
    })