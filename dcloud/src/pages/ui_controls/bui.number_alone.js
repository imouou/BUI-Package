loader.define(function(require, exports, module) {

    //动态创建, 如果模板已经渲染, 修改参数 render:false, 初始化加上id, 则针对某一个控件操作.
    var uiNumber = bui.number({
        id: "#product01",
    })
    var uiNumber2 = bui.number({
        id: "#product02",
    })


    // 单个获取
    $('#getValue').on("click", function(argument) {

        var val = uiNumber.value();
        console.log(val)
    })

    //批量设置值
    $('#setValue').on("click", function(argument) {

        var val = uiNumber.value(9);
    })


    // 多个取值
    $('#getValues').on("click", function(argument) {

        var val = uiNumber.values();

        console.log(val)
    })

    // 多个设置值
    $('#setValues').on("click", function(argument) {

        uiNumber.values([{
            id: "product01",
            value: 7
        }, {
            id: "product02",
            value: 4
        }])
    })


})