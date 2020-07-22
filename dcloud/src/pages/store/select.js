loader.define(function(require, exports, module) {


    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            selected: "B", // 单个select初始化的值
            multipleSelectes: ["A", "B"], // 多选select初始化的值是一个数组
            options: [ // 单选多选的数据源
                { text: 'One', value2: 'A' },
                { text: 'Two', value2: 'B' },
                { text: 'Three', value2: 'C' }
            ],
            selectA: [ // 联动select的数据源
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            selectB: [],
        },
        methods: {
            addToB: function(index) {
                // index 是点击传过来的动态索引
                this.selectB.push(this.selectA[index]);
                this.selectA.splice(index, 1);
            },
            addToA: function(index) {
                // index 是点击传过来的动态索引
                this.selectA.push(this.selectB[index]);
                this.selectB.splice(index, 1);
            }
        },
        watch: {},
        computed: {},
        templates: {
            // 单选多选共用模板
            tplSelect: function(data) {
                var html = '';
                data.forEach(function(item, i) {
                    // value 属性必须有
                    html += `<option value="${item.value2}">${item.text}</option>`
                })
                return html;
            },
            // 联动的示例,增加了事件绑定, 如果传 this 是当前点击的dom对象, 传index 是当前点击是索引
            tplSelectA: function(data) {
                var html = '';
                data.forEach(function(item, i) {
                    // value 属性必须有, index 参数是当前的动态索引,如果传i,这是不一样的效果
                    html += `<option value="${item.value}" b-click='page.addToB($index)'>${item.text}</option>`
                })
                return html;
            },
            tplSelectB: function(data) {
                var html = '';
                data.forEach(function(item, i) {
                    // value 属性必须有, index 参数是当前的动态索引,如果传i,这是不一样的效果
                    html += `<option value="${item.value}" b-click='page.addToA($index)'>${item.text}</option>`
                })
                return html;
            }
        }
    })

})