loader.define(function(require, exports, module) {

    var bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {
                selectData: null
            },
            watch: {
                selectData: function (newVal,oldVal) {
                    var _self = this;
                    // 1. 监听数据变更的时候,改变数据
                    this.uiSelect.option("data",_self.selectData)
                }
            },
            templates: {},
            mounted: function () {
              var _self = this;
                // 初始化select 动态绑定
                this.uiSelect = bui.select({
                    trigger: "#select",
                    title: "请选择区域",
                    type: "checkbox",
                    data: null,
                    height: 300,
                    //如果需要点击再进行操作,增加按钮
                    buttons: [{ name: "重置", className: "" }, { name: "确定", className: "primary-reverse" }],
                    callback: function(e) {

                        var text = $(e.target).text();
                        if (text == "重置") {
                            this.selectNone();
                        } else {
                            this.hide();
                        }
                    },
                    onChange: function(argument) {
                        console.log("312312")
                    }
                })

                // 模拟请求成功以后数据更新
                 bui.ajax({
                     url: "http://www.easybui.com/demo/json/userlist.json",
                     data: {},//接口请求的参数
                     // 可选参数
                     method: "GET"
                 }).then(function(result){

                    // var data = result.data;
                    var data = [{
                        "name": "广东",
                        "value": "11"
                    }, {
                        "name": "广西",
                        "value": "22"
                    }, {
                        "name": "上海",
                        "value": "33"
                    }, {
                        "name": "北京",
                        "value": "44"
                    }, {
                        "name": "深圳",
                        "value": "55"
                    }, {
                        "name": "南京",
                        "value": "66"
                    }];
                    // 合并并触发视图更新
                     _self.selectData = data;

                 });
            }
        })


})
