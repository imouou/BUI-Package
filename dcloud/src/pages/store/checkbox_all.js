/**
 * 空模块, xxx 为创建时候起的模块名
 * 默认模块名为路径: pages/xxx/xxx
 * @return {[object]}  [ 返回一个对象, 可以通过loader加载模块的方法.]
   @example

   loader.require(["pages/xxx/xxx"],function(mod){
      // mod 指向xxx 抛出的方法
      mod.init()
   })
 */
loader.define(function(require, exports, module) {

    // 初始化数据行为存储
    var bs = bui.store({
        scope: "filter",
        data: {
            "fromChecked": [],
            "froms": []
        },
        methods: {
            reset: function() {
                this.selectNoneFrom();
            },
            handleData: function(data, field) {
                // 处理数组的返回
                var datas = [];
                data.forEach(function(item, i) {
                    if (item.name.length == 1 || item.name == "已进入城市") {
                        // 字符串,分割的字段处理成数组
                        item.datas = item[field].split(",") || [];
                        // 删除多余字段
                        delete item[field];
                        datas.push(item)
                    }
                })

                return datas;
            },
            selectAllFrom: function() {
                // this.$data.froms
                var datas = []
                this.$data.froms.forEach(function(item, index) {
                    bui.array.merge(datas, item.datas);
                })

                this.fromChecked.$replace(datas);
            },
            selectReverse: function() {
                // this.$data.froms
                var that = this;
                var datas = []
                    // 扁平化数组先
                this.$data.froms.forEach(function(item, index) {
                    bui.array.merge(datas, item.datas);
                })

                // 获取没有被选中的值
                var data = [];
                datas.forEach(function(item, index) {
                    var uncheck = !bui.array.compare(that.$data.fromChecked, item);
                    if (uncheck) {
                        data.push(item);
                    }
                })

                this.fromChecked.$replace(data);
            },
            selectNoneFrom: function() {
                this.fromChecked.$empty();
            }
        },
        watch: {},
        computed: {},
        templates: {
            templateFrom: function(data) {
                // data:[{name: "B", source: "百度,北京市规划和自然资源委员会", type: "按拼音"}]
                var html = "";
                data.forEach(function(item, index) {
                    html += `<div class="tag-item">
								<div class="section-title">${item.name}</div>
									<div class="bui-fluid-space-3">`;
                    item.datas.forEach(function(sitem, i) {
                        html += `<div class="span1"><input type="checkbox" name="from" class="bui-check" uncheck="${sitem}" check="${sitem}" value="${sitem}" b-model="filter.fromChecked"></div>`
                    })
                    html += `</div></div>`;
                })
                return html;
            }
        },
        beforeMount: function() {
            // 数据解析前执行, 修改data的数据示例
            // this.$data.a = 2
            // bui.array.merge(this.$data.froms, [{ name: "B", datas: ["滨江集团", "滨江集团2", "滨江集团3"] }, { name: "C", datas: ["滨江集团4", "滨江集团5", "滨江集团6"] }]);

        },
        mounted: function() {
            // 数据解析后执行
            var that = this;

            this.$data.froms.$merge([{ name: "B", datas: ["滨江集团", "滨江集团2", "滨江集团3"] }, { name: "C", datas: ["滨江集团4", "滨江集团5", "滨江集团6"] }]);
        }
    })

    return bs;
})