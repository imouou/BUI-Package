// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        console.log("loadPart.js was loaded");

    }

    // 事件绑定
    pageview.bind = function() {

        router.$("#btnLoadPart").on("click", function() {
            router.loadPart({
                id: "#loadPart",
                url: "pages/router/loadPart_part/index.html?id=345",
                param: {
                    test: 123
                }
            }).then(function(res) {
                // 在外部执行里面的方法,意味着可以分离式加载
                // res.init()
                console.log(res)
            })

            // console.log(router.$(".bui-page"))
        })

        // 事件委托去绑定异步加载进来的模块的dom
        router.$(".bui-router").on("click", ".panel-part", function() {
            console.log("click panel")
        })

        // 全局事件写在当前模块里面监听,当cache=false时,需要先off掉,如果cache=true,相同模板只执行1次,则不需要off
        router.on("loadpart", function(page) {
            console.log(page)
        })

    }

    // 初始化
    pageview.init();

    // 绑定事件
    pageview.bind();

    return pageview;
})