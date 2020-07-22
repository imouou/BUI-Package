loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            message: [{
                name: "hello"
            }, {
                name: "bui"
            }]
        },
        // log: true,
        methods: {},
        watch: {},
        computed: {},
        templates: {
            tplList: function(data) {
                var html = "";
                data.forEach(function(item, i) {
                    html += `<li class="bui-btn bui-box">
                <div class="span1"><input type="text" value="" placeholder="请输入关键字" b-model="page.message.$index.name" b-target=".bui-btn" /></div>
            </li>`
                })

                return html
            }
        },
        mounted: function() {
            // 加载后执行
            this.nextTick(function(e) {
                if (e.keyname === "message") {
                    this.compile(".bui-list")
                }
            })
        }
    })

})