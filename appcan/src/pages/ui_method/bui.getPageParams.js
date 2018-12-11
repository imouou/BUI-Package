loader.define(function(require,exports,module) {
    
    var getParams = bui.getPageParams();
        getParams.done(function (result) {
            // result 是一个对象
            router.$("#btn").on("click",function () {
                bui.alert(result)
            })
        })
})
