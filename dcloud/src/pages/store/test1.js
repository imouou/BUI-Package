loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            users: [],
            test: {
                list2: [],
                list: ""
            },
            watchList: "",
        },
        methods: {},
        log: true,
        watch: {
            "test.list2": function(val) {
                // 二级数组的长度需要通过watch监听
                if (this.$data.test.list2.length) {
                    this.watchList = "active"
                } else {
                    this.watchList = ""
                }
            }
        },
        methods: {
            addList: function() {
                this.test.list2.push("123")
            },
            delList: function() {
                this.test.list2.pop()
            }
        },
        computed: {
            active: function() {
                // 一级数组的长度可以通过computed监听触发
                return this.users.length
            },
            hasList2: function() {
                // 二级对象数组的长度可以通过computed监听触发,行为指令要加上 b-linked
                return this.test.list2.length;
            },
            hasList: function() {
                // 二级对象非数组的长度可以通过computed监听触发
                return this.test.list;
            }
        },
        templates: {},
        mounted: function() {
            this.test.list = "active"
                // this.test.list = ""
                // 加载后执行
        }
    })

})