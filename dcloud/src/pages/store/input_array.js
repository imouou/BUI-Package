loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            message: [{
                name: "hello bui"
            }]
        },
        // log: true,
        methods: {
            reverseMessage: function(e) {

                var a = this.$data.message[0]["name"].split(' ').reverse().join(' ')

                this.set("message.0.name", a)
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 加载后执行
        }
    })

})