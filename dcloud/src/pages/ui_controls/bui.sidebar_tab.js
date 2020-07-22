loader.define(function(require, exports, module) {

    //示例代码
    var uiSidebar = bui.sidebar({
        id: "#sidebarWrap", //菜单的ID(必须)
        width: 644,
        trigger: "#menu"
    });

    // 选项卡 js 初始化:
    var uiTab = bui.tab({
        id: "#uiTab",
    });

})