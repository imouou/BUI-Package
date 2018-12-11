loader.define(function(require,exports,module) {

    //动态渲染
    var uiDoropdown = bui.dropdown({
        id: "#uiDoropdownArea",
        data: [{
            name:"广州",
            value:"gz"
        },{
            name:"广东",
            value:"gd"
        }],
        //设置relative为false,二级菜单继承父层宽度
        relative: false,
        callback: function (e) {
            console.log( this.value() )
            console.log( this.text() )
        }
    })

    //静态渲染
    var uiDoropdown2 = bui.dropdown({
        id: "#uiDoropdownClass",
        //设置relative为false,二级菜单继承父层宽度
        relative: true,
        callback: function (e) {
            console.log( this.value() )
        }
    })

    

})
