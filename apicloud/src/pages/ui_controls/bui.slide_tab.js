loader.define(function(require,exports,module) {

    var uiSlideTab = bui.slide({
            id:"#uiSlideTab",
            menu:"#nav",
            children:".bui-tab-main > ul",
        // 如果slide 里面有 bui.list 则 scroll 不需要设置
            scroll: true
        });
    
     // 让顶部导航滚动到可视位置
     uiSlideTab.on("to",function (index) {
            var left = $("#nav li")[index].offsetLeft;
            document.getElementById("uiSlideNavbar").scrollLeft = left;
     })
})
