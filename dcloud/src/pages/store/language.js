loader.define(function(require, exports, module) {


    var language = {
            cn: {
                home: "首页",
                cate: "分类",
            },
            en: {
                home: "Home",
                cate: "Category",
            }
        }
        // 初始化数据行为存储
    window.bs = bui.store({
        scope: "page",
        data: {
            local: "en",
            language: language
        },
        methods: {
            lang: function(str) {
                console.log(str)
                return this.language[this.local][str]
            }
        },
        log: true,
        watch: {
            local: function(newVal) {
                // 手动执行lang方法
                this.trigger("lang", { value: this.lang });
            }
        },
        computed: {},
        templates: {},
        beforeMount: function() {
            // 数据解析前执行, 修改data的数据示例
            // this.$data.a = 2
        },
        mounted: function() {
            // 数据解析后执行
            // console.log(this.language[this.local].home)
        }
    })


})