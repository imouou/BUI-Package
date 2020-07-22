loader.define(function(require, exports, module) {

    //动态渲染
    var uiDoropdown = bui.dropdown({
        id: "#uiDoropdownArea",
        data: [{
            name: "广州",
            value: "gz"
        }, {
            name: "广东",
            value: "gd"
        }],
        //设置relative为false,二级菜单继承父层宽度
        relative: false,
        value: "广东",
        onChange: function(e) {
            console.log(this.value(), "change")
        },
        // callback: function(e) {
        //     console.log(this.value(), "click")
        //     console.log(this.text(), "click")
        //     console.log(this.values(), "click")
        // }
    })

    //静态渲染, 选中激活在列表的active样式
    var uiDoropdown2 = bui.dropdown({
        id: "#uiDoropdownClass",
        //设置relative为false,二级菜单继承父层宽度
        relative: true,
        value: "",
        callback: function(e) {
            console.log(this.value());

        }
    })



})