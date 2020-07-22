loader.define(function(require, exports, module) {


    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            selectAChecked: [], // A区选中暂存区
            selectBChecked: [], // B区选中暂存区
            selectA: [ // 联动select的数据源
                { text: 'One', value: 'A', selected: false },
                { text: 'Two', value: 'B', selected: false },
                { text: 'Three', value: 'C', selected: false }
            ],
            selectB: [],
        },
        // log: true,
        methods: {
            modifyStatusA: function(index) {
                var selectedItem = this.selectA[index],
                    selecteds = this.selectAChecked,
                    // 判断是否唯一
                    indexs = bui.array.index(this.selectA[index].value, selecteds, "value");

                // 选中暂存区的增加或减少
                if (indexs > -1) {
                    // 删除
                    selecteds.splice(indexs, 1);
                } else {
                    // 增加
                    selecteds.push(selectedItem);
                }

                // 修改选中状态
                this.selectA[index].selected = !this.selectA[index].selected;
                // 替换整条数据并触发数据变更
                bui.array.set(this.selectA, index, this.selectA[index]);
            },
            modifyStatusB: function(index) {
                var selectedItem = this.selectB[index],
                    selecteds = this.selectBChecked,
                    indexs = bui.array.index(this.selectB[index].value, selecteds, "value");

                // 选中暂存区的增加或减少
                if (indexs > -1) {
                    // 删除
                    selecteds.splice(indexs, 1);
                } else {
                    // 增加
                    selecteds.push(selectedItem);
                }

                // 更新字段
                this.selectB[index].selected = !this.selectB[index].selected;
                // 替换整条数据并触发数据变更
                bui.array.set(this.selectB, index, this.selectB[index]);
            },
            addToB: function(e) {
                // 删除选中状态
                this.selectAChecked.forEach(function(item, i) {
                        item.selected = false;
                    })
                    // 合并并触发 this.selectB
                bui.array.merge(this.selectB, this.selectAChecked);
                // 删除this.selectA选中数据,通过value字段比对,支持多个
                bui.array.remove(this.selectA, this.selectAChecked, "value")

                // 清空A暂存区数据
                bui.array.empty(this.selectAChecked);
            },
            addToA: function(e) {
                // 删除选中状态
                this.selectBChecked.forEach(function(item, i) {
                        item.selected = false;
                    })
                    // 合并并触发 this.selectA
                bui.array.merge(this.selectA, this.selectBChecked);

                // 删除选中数据,通过value字段比对
                bui.array.remove(this.selectB, this.selectBChecked, "value")
                    // 清空B暂存区数据
                bui.array.empty(this.selectBChecked);
            },
        },
        watch: {},
        computed: {},
        templates: {
            // 联动的示例,增加了事件绑定
            tplSelectA: function(data, te) {

                var html = '';
                data.forEach(function(item, i) {
                    var active = item.selected ? "active" : "";
                    html += `<li b-click='page.modifyStatusA($index)' class="bui-btn ${active}">${item.text}</li>`;
                })
                return html;
            },
            tplSelectB: function(data) {
                var html = '';
                data.forEach(function(item, i) {
                    var active = item.selected ? "active" : "";
                    html += `<li b-click='page.modifyStatusB($index)' class="bui-btn ${active}">${item.text}</li>`
                })
                return html;
            }
        },
        mounted: function() {
            // 加载后执行
        }
    })

})