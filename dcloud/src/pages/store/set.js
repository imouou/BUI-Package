loader.define(function(require, exports, module) {


    var bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {
                value: "Hello bui.js",
                attrs: {
                    title: "这是动态标题",
                    test: {
                        title: "这是动态标题22",
                    }
                },
                title: "<h1>html标题</h1>",
            },
            methods: {},
            watch: {},
            computed: {},
            templates: {},
            mounted: function () {
                // 加载后执行
            }
        })

})
