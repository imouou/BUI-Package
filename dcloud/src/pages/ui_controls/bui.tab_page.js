loader.define(function(require, exports, module) {

    // tab 的目标索引,
    var currentIndex = 0;
    // 用户的登录状态
    var isLogin = false;
    var uiTab = null;
    var loginPage = null;

    var pageview = {
        init: function() {
            // 初始化tab
            this.tabInit();
            // 检测登录
            this.watchLogin();
        },
        tabInit: function() {
            if (uiTab) {
                return this;
            }
            // 初始化tab
            uiTab = bui.tab({
                id: "#uiTab",
                menu: "#uiTabNav",
                onBeforeTo: function(e) {
                    // 要跳转的索引
                    currentIndex = e.currentIndex;
                    // 如果要跳转的目标未登录,则打开登录窗口
                    if (currentIndex == 3 && !isLogin) {
                        loginPage.open();
                        return false;
                    } else {
                        // 跳转前索引
                        currentIndex = e.preIndex;
                    }
                }
            });
        },
        watchLogin: function() {
            if (loginPage) {
                return this;
            }
            loginPage = bui.page({
                url: "pages/login/login.html",
                autoload: false, // 不自动打开
                close: true, // 可以手动关闭
            });

            // 关闭的时候,判断是否已经登录, 修改状态, 这个状态应该使用 bui.storage 来存储, 这里测试使用变量.
            loginPage.on("close", function() {
                uiTab.to(currentIndex);
            });

            // 登录成功的自定义事件
            bui.on("loginsuccess", function(e) {
                // 拿到用户信息
                console.log(e)
                    // 关闭登录页面
                loginPage.close();
                isLogin = true;
            });

        }
    }

    pageview.init();

})