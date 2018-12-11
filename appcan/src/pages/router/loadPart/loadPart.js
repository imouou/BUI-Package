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

        $("#btnLoadPart").on("click",function () {
            router.loadPart({
                id: "#loadPart",
                url: "pages/router/loadPart_part/loadPart_part.html",
                param:{
                    test:123
                }
            }).then(function (res) {
                console.log(res)
            })
        })

        // 全局事件写在当前模块里面监听,当cache=false时,需要先off掉,如果cache=true,相同模板只执行1次,则不需要off
        router.on("loadpart",function (page) {
          console.log(page)
        })

    }

    // 初始化
    pageview.init();

    // 绑定事件
    pageview.bind();
    
    return pageview;
})