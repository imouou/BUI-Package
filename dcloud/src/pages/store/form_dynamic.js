loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            users: [{
                name: "",
                id: ""
            }],
        },
        methods: {
            submitForm: function(e) {
                console.log(this.users)
                    // return true 会刷新表单,提交到另外一个页面
                return false;
            },
            add: function() {
                this.users.push({
                    name: "",
                    id: ""
                })
            },
            remove: function(index) {
                console.log(index)
                bui.array.deleteIndex(this.users, index);
            }
        },
        watch: {},
        computed: {},
        templates: {
            tplUser: function(data) {
                var html = `<ul class="bui-list">`;
                var that = this;
                data.forEach(function(item, index) {
                    let length = that.users.length - 1;
                    html += `<li class="bui-btn-title bui-box clearactive">表单${length}<div class="span1"></div><div class="bui-btn" b-click="page.remove($index)" b-target="ul"><i class="icon-remove"></i></div></li><li class="bui-btn bui-box clearactive">
                    <label class="bui-label">姓名</label>
                    <div class="span1">
                        <div class="bui-value"><input type="text" name="fname" b-model="page.users.$index.name" b-target="ul"></div>
                    </div>
                </li>
                <li class="bui-btn bui-box clearactive">
                    <label class="bui-label">身份证</label>
                    <div class="span1">
                        <div class="bui-value"><input type="text" name="fname" b-model="page.users.$index.id" b-target="ul"></div>
                    </div>
                </li>`
                })
                html += `</ul>`

                return html;
            }
        },
        mounted: function() {
            // 加载后执行
        }
    })

})