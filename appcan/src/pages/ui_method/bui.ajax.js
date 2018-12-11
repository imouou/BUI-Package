loader.define(function(require,exports,module) {
    
        // get
        var uiAjax = bui.ajax({
            url: siteDir + "userlist.json",
            // 可选参数
            method: "GET"
        })
        
        // post
        var uiAjax2 = bui.ajax({
            url: siteDir+"versionUpdate.json",
            data: "",
            // 可选参数
            method: "POST"
        });

        // GET请求
        $("#get").click(function() {
            uiAjax.then(function(res) {
                console.log(res,"success")
            },function(res) {
                console.log(res,"fail")
            })
        });
        // POST请求
        $("#post").click(function() {
            uiAjax2.then(function(res) {
                console.log(res)
            },function(res) {
                console.log(res)
            })
        });
        // 停止请求
        $("#abort").click(function() {
            uiAjax.abort()
        });

        // 按顺序依赖请求
        // 请求uiAjax结束以后才执行 uiAjax3
        var uiAjax3 = uiAjax.then(function(res){
            return bui.ajax({
                url: siteDir+"versionUpdate.json",
                data: { data: res }
            });
        })

        $("#order").click(function() {
            
            uiAjax3.then(function(res){
                console.log(res);
            })
        });

        // 相互依赖的请求
        $("#when").click(function() {
            
            $.when(uiAjax,uiAjax3).then(function(res,res2){
                console.log(res);
                console.log(res2);
            })
        });

        // PUT请求 示例里面请求静态文件所以返回405
        $("#put").click(function() {
            var uiAjaxPut = bui.ajax({
                    url: siteDir + "userlist.json",
                    method: "PUT",
                    // 强制使用web, BT的原生请求不支持Restful API的接口 
                    native: false
                }).then(function(res) {
                    console.log(res)
                },function(res) {
                    console.log(res)
                })
        });

})
