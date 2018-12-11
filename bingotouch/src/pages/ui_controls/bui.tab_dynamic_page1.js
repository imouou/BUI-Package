loader.define(function(require,exports,module){
// 模块业务在这里写
    var page = {}

    page.init = function (e) {
        console.log("这里是动态加载的页面")

    }
    return page;
})