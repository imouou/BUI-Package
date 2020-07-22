loader.define(function(require, exports, module) {


    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            items: [{
                id: "guangzhou",
                name: "广州",
            }, {
                id: "shenzhen",
                name: "深圳",
            }, {
                id: "dongguan",
                name: "东莞",
            }],
            checked: ["shenzhen"], //缓存选中的值
            checkedObj: [{
                id: "shenzhen",
                name: "深圳",
            }],
        },
        // log: true,
        methods: {
            open: function() {
                this.uiDialog.open();
            }
        },
        watch: {
            checked: function(val) {
                var _self = this;
                // 获取的使用 this.$data.xxx
                var items = bui.array.getAll(_self.$data.items, val, "id");

                // 替换新的值 this.xxx
                bui.array.replace(this.checkedObj, items);
            }
        },
        computed: {},
        templates: {
            tplItem: function(data) {
                var html = "";

                data.forEach(function(item, i) {
                    html += `<li class="bui-btn" id="${item.id}">${item.name}</li>`
                })

                return html;
            },
            tplCity: function(data) {
                var html = "";
                var _self = this;
                data.forEach(function(item, i) {
                    // 渲染已经选择的城市
                    var hasChoose = _self.checkedObj && bui.array.compare(_self.checkedObj, item.id, "id");
                    var hasChecked = hasChoose ? "checked" : "";
                    html += `<li class="bui-btn bui-box bui-btn-line">
                      <div class="span1">
                          <label for="interest+${i}">${item.name}</label>
                      </div>
                      <input id="interest+${i}" type="checkbox" class="bui-choose" name="interest" value="${item.id}" text="" ${hasChecked} b-model="page.checked">
                  </li>`
                })

                return html;
            }
        },
        mounted: function() {
            // 加载后执行

            this.uiDialog = bui.dialog({
                id: "#uiDialog"
            });

        }
    })

})