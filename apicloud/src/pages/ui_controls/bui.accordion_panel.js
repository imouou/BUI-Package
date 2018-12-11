loader.define(function(require,exports,module) {

    //折叠面板
    var uiAccordion = bui.accordion({
            id:".bui-panel",    //必须
            handle: ".bui-panel-head",  //默认,除非修改才需要加
            target: ".bui-panel-main"  //被控制的目标
        });

    
    //默认全部展开
    uiAccordion.showAll();
})
