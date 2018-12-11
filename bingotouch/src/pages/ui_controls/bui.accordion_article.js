loader.define(function(require,exports,module) {

    //折叠面板
    var uiAccordion = bui.accordion({
            handle: "#more",  //默认,除非修改才需要加
            target: "#section",  //被控制的目标
            callback: function (argument) {
                
            }
        });

    uiAccordion.on("show",function () {
        $("#more").text("收起更多内容")
    })
    uiAccordion.on("hide",function () {
        $("#more").text("点击查看更多")
    })
})
