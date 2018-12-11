loader.define(function(require,exports,module) {

   // 初始化折叠菜单
    var uiAccordion = bui.accordion();

        uiAccordion.on("show",function () {
            console.log("展开时状态")
        });

        uiAccordion.on("hide",function () {
            console.log("关闭时触发")
        });
})
