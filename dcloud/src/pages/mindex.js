// 网站配置
var sitePath = "http://www.easybui.com",
    siteDir = sitePath + "/demo/json/";
// 设置当前应用模式
bui.isWebapp = true;

loader.define("index", ["pages/ui_controls/bui.listview"], function(listview) {
    console.log(listview)
})
bui.ready(function() {
    // 加载
    // loader.require(["pages/ui_controls/bui.listview"], function(listview) {
    //     console.log(listview)
    // })

    var getParams = bui.getPageParams();
    getParams.done(function(result) {
        bui.alert(result)
    })
    var params = bui.history.getParams();
    bui.alert(params)
    loader.require("index")

    var uiDropdown = bui.dropdown({
        id: "#uiDropdown",
        data: [{
            name: "广州",
            value: "广州"
        }],
        //设置relative为false,二级菜单继承父层宽度
        relative: false,
        callback: function(e) {}
    });
    // console.log(bui.hasRouter)

    // loader.load({
    //     id: "#list",
    //     url: "pages/components/list/index.html",
    //     param: {
    //         type: "news"
    //     }
    // })
})