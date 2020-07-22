loader.define(function(require, exports, module) {


    var bs = bui.store({
        scope: "page", 
        data: {
            dropdownData: {
                placeholder: "分类",
                value: "",
                items: [{
                    name: "全部",
                    value: "dropdownData.0",
                },{
                    name: "兑换券",
                    value: "dropdownData.1",
                },{
                    name: "代金券",
                    value: "dropdownData.2",
                },{
                    name: "提货券",
                    value: "dropdownData.3",
                },{
                    name: "会员卡",
                    value: "dropdownData.4",
                }]
            },
            dropdownData2: {
                placeholder: "地市",
                value: "",
                items: [{
                    name: "全广州",
                    value: "dropdownData2.0",
                },{
                    name: "天河区",
                    value: "dropdownData2.1",
                },{
                    name: "海珠区",
                    value: "dropdownData2.2",
                },{
                    name: "白云区",
                    value: "dropdownData2.3",
                },{
                    name: "越秀区",
                    value: "dropdownData2.4",
                }]
            }
        },
        watch: {
            "dropdownData.value": function(newVal,oldVal){
                // 当值改变以后, 可以执行搜索类的事情
                console.log(newVal);
            },
            "dropdownData2.value": function(newVal,oldVal){
                // 当值改变以后, 可以执行搜索类的事情
                console.log(newVal);
            }
        },
        computed: {
            dropdownValue: function () {
                return this.dropdownData.value || this.dropdownData.placeholder;
            },
            dropdownValue2: function () {
                return this.dropdownData2.value || this.dropdownData2.placeholder;
            }
        },
        templates: {
            tplDropdown: function (data) {
                var html = "";
                data.forEach(function (item,i) {
                    html += `<li class="bui-btn" value="${item.value}">${item.name}</li></li>`;
                })
                return html;
            }
        },
        mounted: function () {
            var _self = this;

            // 初始化多个dropdown
            this.dropdown = bui.dropdown({
                id: ".bui-dropdown",
                //设置relative为false,二级菜单继承父层宽度
                relative: false,
                callback: function(e) {
                    // 分解value,取出 所在字段
                    var val = this.value().split(".")[0]; 
                    // 设置选中值
                    _self[val].value = this.text();
                }
            })
        }
    })

    return bs;
})