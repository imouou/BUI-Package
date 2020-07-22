/*-----------------------------------
 打包需要设置isWebapp为false 才能绑定后退按键
------------------------------------------- */

bui.isWebapp = false;
// 原生方法
bui.on("pageready", function() {
    // 绑定手机后退按键
    bindBack();
});

// 绑定手机后退按键
function bindBack() {
    // 监听后退按钮
    var flag = 0,
        quickClick = 0,
        timeout;
    try {
        // 隐藏滚动条
        plus.webview.currentWebview().setStyle({ scrollIndicator: 'none' });

        plus.key.addEventListener('backbutton', function() {
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
                    plus.runtime.quit();

                }
            }

        }, false);
    } catch (e) {}
}


// 网站配置
var sitePath = "http://www.easybui.com",
    siteDir = sitePath + "/demo/json/";

var isLogin = false;

// 路由初始化给全局变量,必须是router
window.router = bui.router();

// 1.6.2新增 定义全局方法, 避免被编译, 具体查看 loader.global的使用
loader.global(function() {

    return {
        test: function() {
            console.log("test", this);
        },
        test2: function() {
            console.log("test2");
        }
    }
})


bui.ready(function() {

    // 数据行为存储器
    window.store = bui.store({
        scope: "app",
        isPublic: true, // 在模块里面默认是false, 在index.js 需要改为true
        data: {
            message: "Hello bui.js",
            message2: "Hello",
            firstName: "Img",
            lists: ["12"],
            attrs: {
                title: "这是动态标题",
            },
            objSource: {
                title: "我的对象的标题",
                datas: {
                    aa: [1312]
                },
                data: [11]
            },
            showName: true,
            tabClass: {
                active: true,
                hasActive: true,
            },
            styles: {
                color: "red"
            }
        },
        // log: true,
        templates: {
            tplLists: function(data) {
                var html = "";
                data.forEach((item) => {
                    html += "<li>" + item + "</li>";
                })
                return html;
            }
        }
    })

    // 第3步: 初始化路由
    router.init({
        id: "#bui-router",
        // 挂载公共 store 可以解析公共数据的 {{app.firstName}} 之类的数据, 可以使用 router.store.firstName 读取跟修改
        store: store
    })

    // 绑定事件
    bind();
})

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

    // demo生成源码
    router.on("complete", function(e) {
        var historyLength = router.history.get().length;
        // 针对微信ios跳转以后,底部增加了原生导航,导致高度不对的处理,只在跳转到第2个页面的时候重新计算
        if (bui.platform.isIos() && bui.platform.isWeiXin() && historyLength > 1 && historyLength < 3) {
            // 让控件计算的时候拿新的高度
            window.viewport = bui.viewport();
            // 重新计算路由
            router.resize();
            // 重新计算页面
            bui.init()
        }
        $("#" + e.target.id).find(".bui-page .bui-bar-right").append('<a class="bui-btn preview-source">源码</a>')
    })


    $("#bui-router").on("click", ".preview-source", function(e) {
        var hash = window.location.hash,
            rule = /^#.+\?/ig,
            wenhaoIndex = hash.indexOf("?"),
            url = wenhaoIndex > -1 ? hash.substring(1, wenhaoIndex) : hash.substr(1);
        window.open('http://www.easybui.com/demo/source.html?url=' + url + '&code=html,js,result')
    })

}