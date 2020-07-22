loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            active: true,
            activeClass: "active",
            tabClass: {
                active: true,
                hasActive: true,
            },
            tabClassNames: ["tab", "active"],
            styles: {
                color: "red"
            },
            color: "green",
        },
        mounted: function() {
            // 加载后执行
        }
    })

})