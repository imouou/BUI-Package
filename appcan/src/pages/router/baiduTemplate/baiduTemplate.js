
// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 这里写main模块的业务
    var data={
        "title":'欢迎使用baiduTemplate',
        "list":[
            'test1:默认支持HTML转义，如输出<script>，也可以关掉，语法<:=value> 详见API',
            'test2:',
            'test3:',
            'test4:list[5]未定义，模板系统会输出空'
        ]
    };

    // 主要业务初始化
    pageview.init = function() {

        //使用baidu.template命名空间
        var bt=baidu.template;

        //最简使用方法
        var html=bt('t:_1234-abcd-1',data);

        //渲染
        document.getElementById('result').innerHTML=html;
                        
    }

    // 事件绑定
    pageview.bind = function() {
        
    }

    // 如果所有页面都依赖于百度模板,那这个模板应该在index.html加载更好
    loader.import("js/plugins/baiduTemplate.js",function(){
        
        // 初始化
        pageview.init();
        
        // 绑定事件
        pageview.bind();
    });

    return pageview;
})
