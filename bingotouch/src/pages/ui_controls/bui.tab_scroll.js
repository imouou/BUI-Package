loader.define(function(require,exports,module) {

    var uiTab = bui.tab({
            id:"#uiTabNavbar",
            menu:"#nav",
        });
    
     // 让顶部导航滚动到可视位置
     uiTab.on("to",function (index) {
            var left = $("#nav li")[index].offsetLeft;
            document.getElementById("uiNavbar").scrollLeft = left;
     })
})
