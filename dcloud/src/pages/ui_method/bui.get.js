loader.define(function(require, exports, module) {

    // get
    var uiAjax = bui.get(siteDir + "userlist.json")

    // post
    var uiAjax2 = bui.post(siteDir + "versionUpdate.json", { type: "new" });

    // GET请求
    $("#get").click(function() {
        uiAjax.then(function(res) {
            console.log(res, "success")
        }, function(res) {
            console.log(res, "fail")
        })
    });
    // POST请求
    $("#post").click(function() {
        uiAjax2.then(function(res) {
            console.log(res, "success")
        }, function(res) {
            console.log(res, "fail")
        })
    });
    // 停止请求
    $("#abort").click(function() {
        uiAjax.abort()
    });

    // 按顺序依赖请求
    // 请求uiAjax结束以后才执行 uiAjax3
    var uiAjax3 = uiAjax.then(function(res) {
        return bui.get(siteDir + "versionUpdate.json", { data: res.data[0] });
    })

    $("#order").click(function() {

        uiAjax3.then(function(res) {
            console.log(res);
        })
    });

    // 多个依赖的请求
    $("#when").click(function() {
        // 如果2个请求都成功,则进入then, 如果有一个请求失败,则会进入always
        bui.all([uiAjax, uiAjax3]).then(function(res, res2) {
            console.log(res);
            console.log(res2);
        }).always(function(res, res2) {
            console.log(res, "always");
            console.log(res2, "always");
        })
    });

    // PUT请求 示例里面请求静态文件所以返回405
    $("#put").click(function() {
        var uiAjaxPut = bui.put(siteDir + "userlist.json", { type: "new" }).then(function(res) {
            console.log(res)
        }, function(res) {
            console.log(res)
        })
    });

    // delete请求 示例里面请求静态文件所以返回405
    $("#delete").click(function() {
        var uiAjaxPut = bui.delete(siteDir + "userlist.json", { type: "delete" }).then(function(res) {
            console.log(res)
        }, function(res) {
            console.log(res)
        })
    });

})