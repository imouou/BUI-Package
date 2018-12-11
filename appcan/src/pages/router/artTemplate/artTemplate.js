
// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 示例数据,正常由请求返回
    window.data = [{
            name: "hello"
        },{
            name: "bui"
        }];


    // 主要业务初始化
    pageview.init = function() {

        // 结合数据返回模板 script id="tpl-list"
        var html = template("tpl-list",{ listData: data});

    　　　　$("#listArt").html(html);
                        
    }

    // 事件绑定
    pageview.bind = function() {
        
    }

    // 如果所有页面都依赖于百度模板,那这个模板应该在index.html加载更好
    loader.import("js/plugins/template-web.js",function(){
        
        // 初始化
        pageview.init();
        
        // 绑定事件
        pageview.bind();
    });

    return pageview;
})
