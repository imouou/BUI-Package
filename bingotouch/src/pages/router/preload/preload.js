// 默认已经定义了main模块
loader.define(function() {

    // 路由预加载几个首页,有助于网络较慢时,或者网络不通时,点击无法跳转响应等问题.
    var uiLoading = bui.loading();
    uiLoading.start();

    router.preload([{
        url:"pages/ui/index.html"
    },{
        url:"pages/ui_loader/index.html"
    }]).then(function () {
        // 全部预加载完以后关闭进度条
        uiLoading.stop();
    })
    
})