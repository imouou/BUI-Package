loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            show: true,
            citys: ["广州", "深圳"],
            sex: "女",
            user: "",
            has: "you",
            hascheck: "ON",
            // 多选对象
            users: [],
            names: "",
            test: {
                hasCheck: true
            }
        },
        // log: true,
        methods: {},
        watch: {
            users: function(val) {
                var names = [];
                // 多选对对象的转换
                val.forEach(function(item, index) {
                    var itemobj = JSON.parse(item);
                    names.push(itemobj.name);
                })
                this.names = names.join(",")
            }
        },
        // log: true,
        computed: {
            name: function() {
                // 单选对对象的转换
                return this.user && JSON.parse(this.user).name
            },
            active: function() {
                // 只支持第一层数据是数组的length读取
                return this.users.length;
            }
        },
        templates: {},
        mounted: function() {
            // 加载后执行
        }
    })

})