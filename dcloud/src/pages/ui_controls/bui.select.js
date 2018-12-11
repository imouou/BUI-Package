loader.define(function(require, exports, module) {

    //动态绑定
    var uiSelectCustom = bui.select({
        id: "#selectCustom",
        popup: false,
        type: "checkbox",
        direction: "right",
        data: [{
            "name": "广东",
            "image": "images/face.png",
            "value": "11",
        }, {
            "name": "广西",
            "image": "images/face.png",
            "value": "22"
        }, {
            "name": "上海",
            "image": "images/face.png",
            "value": "33"
        }, {
            "name": "北京",
            "image": "images/face.png",
            "value": "44"
        }, {
            "name": "深圳",
            "image": "images/face.png",
            "value": "55"
        }, {
            "name": "南京",
            "image": "images/face.png",
            "value": "66"
        }],
        onChange: function(e) {

        }
    })

    $("#selectAll").on("click", function(argument) {
        uiSelectCustom.selectAll();
    })

    $("#selectNone").on("click", function(argument) {
        uiSelectCustom.selectNone();
    })

    $("#unselect").on("click", function(argument) {
        uiSelectCustom.unselect();
    })

    $("#queding").on("click", function(argument) {

        console.log(uiSelectCustom.text());
    })

    //静态态绑定
    var uiSelectCustom2 = bui.select({
        id: "#selectCustom2",
        popup: false,
        type: "checkbox",
        onChange: function(e) {

        }
    });

    $("#selectAll2").on("click", function(argument) {
        uiSelectCustom2.selectAll();
    })

    $("#selectNone2").on("click", function(argument) {
        uiSelectCustom2.selectNone();
    })

    $("#unselect2").on("click", function(argument) {
        uiSelectCustom2.unselect();
    })

    $("#queding2").on("click", function(argument) {

        console.log(uiSelectCustom2.text());
    })
})