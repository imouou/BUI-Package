loader.define(function(require,exports,module) {
        //初始化控件
        var uiStepbar = bui.stepbar({
            id: "#step",
            data: [{
                title: "预立项申请",
                subtitle: "2016-04-2 10:30",
                content: "成功创建申请,已经提交至XX部门经理审批,请耐心等待"
            },{
                title: "立项审批",
                subtitle: "2016-04-21 10:30",
                content: "审批完成,资料递交中"
            },{
                title: "项目立项",
                subtitle: "2016-04-30 10:30",
                content: "&nbsp;"
            },{
                title: "部门审批",
                subtitle: "2016-05-10 10:30",
                content: "&nbsp;"
            },{
                title: "项目立项",
                subtitle: "2016-05-21 10:30",
                content: "&nbsp;"
            }]
        });

        //激活第2步
        uiStepbar.value(0);

        uiStepbar.on("change",function (i) {
            console.log(i)
        })
        var index = uiStepbar.next();

})
