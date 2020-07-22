
// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        
        var map = new AMap.Map('container', {
            resizeEnable: true,
            zoom:11,
            center: [116.397428, 39.90923]
        });

    }

    // 动态加载地图资源,再初始化,高德的这些路径需要在index首页引入才不会报错
    loader.import([
        "http://cache.amap.com/lbs/static/main1119.css",
        "http://cache.amap.com/lbs/static/es5.min.js",
        "http://webapi.amap.com/maps?v=1.4.5&key=c7c60f79d6b323835ee696ef855f10ca"],
        function(){
            // 高度的地图初始化在这个工具里面
            loader.import(["http://cache.amap.com/lbs/static/addToolbar.js"],function(){
              // 初始化
                pageview.init();

            });
    });
    
    return pageview;
})
