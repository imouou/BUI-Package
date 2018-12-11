loader.define(function(require, exports, module) {

    //动态绑定
    var uiSelect = bui.select({
        trigger: "#select",
        title: "请选择区域",
        type: "checkbox",
        data: [{
            "name": "广东",
            "value": "11"
        }, {
            "name": "广西",
            "value": "22"
        }, {
            "name": "上海",
            "value": "33"
        }, {
            "name": "北京",
            "value": "44"
        }, {
            "name": "深圳",
            "value": "55"
        }, {
            "name": "南京",
            "value": "66"
        }],
        value: ["广东", "上海"],
        //如果需要点击再进行操作,增加按钮
        buttons: [{ name: "重置", className: "" }, { name: "确定", className: "primary-reverse" }],
        callback: function(e) {

            var text = $(e.target).text();
            if (text == "重置") {
                uiSelect.selectNone();
            } else {
                uiSelect.hide();
            }
        },
        onChange: function(argument) {
            console.log("312312")
        }
    })

    //静态自定义绑定
    var uiSelect2 = bui.select({
        id: "#select-dialog",
        trigger: "#select2",
        type: "checkbox",
        effect: "fadeInRight",
        position: "right",
        fullscreen: true,
        mask: false,
        buttons: []
    });

    // 自定义确定按钮事件
    router.$("#makeSure").on("click", function() {
        console.log(uiSelect2.value())
        uiSelect2.hide();
    });
})