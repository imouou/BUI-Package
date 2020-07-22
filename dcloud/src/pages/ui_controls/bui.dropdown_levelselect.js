loader.define(function(require, exports, module) {

    var citySelect;

    var uiMask = bui.mask({
        appendTo: router.$(".main"),
        zIndex: 1,
        callback: function(argument) {
            uiDoropdown.hide();
        }
    });

    //下拉菜单在底部相对父层宽度
    var uiDoropdown = bui.dropdown({
            id: "#uiDoropdown",
            // showArrow: false,
            autoClose: false,
            target: ".bui-dropdown-content",
            targetHandle: ".bui-tab-main .bui-list li",
            stopPropagation: true,
            //设置relative为false,二级菜单继承父层宽度
            relative: true,
            callback: function(e) {

                this.hide();
            }
        })
        // 绑定数据
    loader.import("js/plugins/citys.js", function() {

        // 普通初始化
        citySelect = bui.levelselect({
            appendTo: "#level",
            data: citys,
            trigger: ".select-val",
            showValue: false,
            height: 200,
            popup: false,
            title: "所在地区",
            visibleNum: 2,
            level: 3,
            field: {
                name: "n",
                data: ["c", "a"],
            }
        })

        citySelect.on("lastchange", function(e) {
            uiDoropdown.hide();
        })
    })
    uiDoropdown.on("show", function(argument) {
            uiMask.show();

            // 去掉页面滚动条
            router.$("main").css("overflow", "hidden");
        })
        // 隐藏遮罩
    uiDoropdown.on("hide", function(argument) {
        uiMask.hide();
    })

    router.$(".select-val").on("click", function(e) {

        citySelect.prev();

        e.stopPropagation()
    })

})