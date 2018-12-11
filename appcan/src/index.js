// 网站配置
var sitePath = "http://www.easybui.com",
    siteDir = sitePath + "/demo/json/";

// 路由初始化给全局变量,必须是router
window.router = bui.router();

bui.ready(function() {
    // 第3步: 初始化路由
    router.init({
        id: "#bui-router",
        progress: true,
        // firstAnimate: true,
        // webapp部署的时候改为true, 这样物理刷新缓存还在
        // reloadCache: false
    })

    // 绑定事件
    bind();
})


// 原生方法
appcan.ready(function() {
    // 拦截后退按键
    bindBack();
});
/**
 * [bind 绑定页面事件]
 * @return {[type]} [description]
 */
function bind() {

    // 绑定应用的所有按钮有href跳转, 增加多个按钮监听则在hangle加逗号分开.
    bui.btn({ id: "#bui-router", handle: ".bui-btn" }).load();

    // 统一绑定应用所有的后退按钮
    $("#bui-router").on("click", ".btn-back", function(e) {
        // 支持后退多层,支持回调
        bui.back();
    })
}


// 绑定手机后退按键
function bindBack() {
    // 监听后退按钮
    var flag = 0,
        quickClick = 0,
        timeout;
    try {

        var isAndroid = bui.platform.isAndroid();
        //如果是Android平台，则监听返回按钮事件
        if (isAndroid) {
            // 拦截后退按键
            uexWindow.setReportKey(0, 1);
            uexWindow.onKeyPressed = function(keyCode) {
                if (keyCode == 0) {
                    if (router.getHistory().length > 1) {
                        // 防止快速点击导致历史记录错乱
                        if (quickClick == 0) {
                            bui.back();
                            quickClick = 1;
                            //.5s后重新设置回去
                            timeout = setTimeout(function() {
                                quickClick = 0;
                            }, 500);
                        }
                    } else {
                        if (flag == 0) {
                            bui.hint("再按一次就退出应用了!");
                            flag = flag + 1;
                            //2s后重新设置回去
                            timeout = setTimeout(function() {
                                flag = 0;
                            }, 2000);
                        } else if (flag == 1) {
                            // 退出应用
                            uexWidgetOne.exit(0);
                            // 隐藏到后台
                            // uexWidget.moveToBack();
                        }
                    }
                }
            }
        }

    } catch (e) {}
}