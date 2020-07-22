loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#uiTab"
    })

    // tab有多种操作跳转,滑动,点击,都会触发to事件, 在这里拿到对应的索引, 执行加载.
    uiTab.on("to", function() {
        var index = this.index();
        // 加载delay属性的组件
        loader.delay({
            id: `#tab${index}`
        })
    })
})