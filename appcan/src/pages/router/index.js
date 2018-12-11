
var badges = 9;
// 默认已经定义了main模块
loader.define(function(require,exports,module) {
    var pageview = {};
    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("pages/router/index.js was loaded");
    }

    // 事件绑定
    pageview.bind = function() {
        $(".btn-iframe").on("click",function () {
            bui.load({url:"http://baidu.com",param:{"file":""},iframe: true });
        })
    }

    // 演示更新badges
    pageview.setBadges = function(badges) {
        $("#badges").text(badges);
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();


    return pageview;
})
