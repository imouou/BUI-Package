loader.define(function(require, exports, module) {
    console.log(module)

    var uiList = bui.scroll({
        id: "#scrollList",
        children: ".panel-list",
        handle: ".bui-panel"
    })


    router.$("#nav li").click(function() {
        var index = $(this).index() + 1;
        uiList.to(index);
        router.$("#nav li").removeClass("active");
        $(this).addClass("active");
    })

    // 步骤条 js 初始化:
    var uiStepbar = bui.stepbar({
        id: "#uiStepbar",
        data: [{
            title: "预立项申请",
            subtitle: "2016-04-2 10:30",
            content: "成功创建申请,已经提交至XX部门经理审批,请耐心等待"
        }, {
            title: "立项审批",
            subtitle: "2016-04-21 10:30",
            content: "审批完成,资料递交中"
        }]
    });

    return uiList;
})