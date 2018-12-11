loader.define(function(require,exports,module) {

    // 1. 初始化需要一个高度,不然会自动减去页面中header footer 标签剩余的高度
        var clientHeight = document.documentElement.clientHeight;
        var uiTab = bui.tab({
            id:"#tabRouter",
            height: clientHeight,
            // 1.1: 不要滑动
            swipe: false
        })

        // 加载第一个页面
        uiTab.load({
            url: "pages/ui_controls/bui.tab_router_page1.html"
        })
        // 2. 监听公共加载后的事件, load 只加载一次
        uiTab.on("load",function (res) {
            var index = uiTab.index();
            // 初始化每个动态页面的main高度
            bui.init();
            if( index < 1 ){ return; }
            // 修改头部页面示例
            $(".bui-page").eq(index).find(".bui-bar-main").text("第"+index+"个页面")
        })

        // 3. 绑定第1个页面的按钮,带传参
        $("#tabRouter").on("click",".btn-load1",function (argument) {
            uiTab.load({
                url: "pages/ui_controls/bui.tab_router_page2.html",
                param: {id: "123"},
                success: function () {
                    // 获取页面参数
                    var param = uiTab.getPageParams();
                    console.log(param)
                }
            })
        })

        // 4. 后退
        $("#tabRouter").on("click",".btn-back-tab",function () {
            // 后退两层
            if( uiTab.index() == 2 ){
                uiTab.to(0);
                return;
            }
            if( uiTab.index() > 0 ){
                uiTab.prev();
            }else{
                bui.back();
            }
        })

        // 5. 绑定动态按钮的加载事件
        $("#tabRouter").on("click",".btn-load",function () {
            uiTab.load({
                url: "pages/ui_controls/bui.tab_router_page2.html"
            })
        })
})
