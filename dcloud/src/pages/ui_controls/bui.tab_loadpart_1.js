loader.define(function(require, exports, module) {

    // 获取最后一个加载的模块的参数,也可以指定某个ID的参数
    var partParam = router.getPartParams();

    console.log(partParam)

})