loader.define(function(require, exports, module) {

    var bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {},
            watch: {},
            templates: {},
            mounted: function () {
                var _self = this;
                // 初始化
                this.uiSlide = bui.slide({
                   id:"#slide",
                   height:380,
                   autopage: true
                 })

                // 模拟请求成功以后数据更新
                 bui.ajax({
                     url: "http://www.easybui.com/demo/json/userlist.json",
                     data: {},//接口请求的参数
                     // 可选参数
                     method: "GET"
                 }).then(function(result){
                    // 合并并触发视图更新
                     _self.uiSlide.option("data",[{
                       title: "标题1",
                       image: "images/banner01.png"
                     },{
                       title: "标题2",
                       image: "images/banner02.png"
                     }])
                 });
            }
        })


})
