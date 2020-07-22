loader.define(function(require, exports, module) {

    // 可以在路由init以后,作为整个应用的联动数据处理
    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            attr: {
                "test": "123",
                "title": "这是动态标题",
                "obj": {
                    "test1": "222"
                }
            },
            attrs: [{
                "title": "这是数组对象",
                "test": "111"
            }]
        },
        methods: {},
        watch: {
            // attr: {
            //     handler: function(val) {
            //         console.log(val, 111)
            //     },
            //     // immediate: true,
            //     deep: true
            // },
            // "attr.test": function(val) {
            //     console.log(val, "对象字段监听")
            // },
            // "attrs.0.title": function(val) {
            //     // 只能通过 this.set("attrs.0.title","new value") 触发
            //     console.log(val, "数组对象字段监听")
            // },
            // "attrs": function(val) {
            //     console.log(val, "数组对象字段监听")
            // }
            "attrs": {
                handler: function(val) {
                    console.log(val, "数组对象字段深度监听")
                },
                deep: true
            }
        },
        computed: {},
        templates: {},
        mounted: function() {

        }
    })

})