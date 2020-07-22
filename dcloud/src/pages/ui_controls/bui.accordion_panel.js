loader.define(function(require, exports, module) {

    //折叠面板
    var uiAccordion = bui.accordion({
        id: ".bui-panel", //必须
        handle: ".bui-panel-head", //默认,除非修改才需要加
        target: ".bui-panel-main" //被控制的目标
    });


    //默认全部展开
    uiAccordion.showAll();

    // 取值
    var service = $('input[name="service"]').val();
    console.log(service)
        // 选中
        // $('input[name="service"]').eq(1).prop("checked",true)
})