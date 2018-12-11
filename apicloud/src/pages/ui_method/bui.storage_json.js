loader.define(function(require,exports,module) {
    
    // 可以保存2条数据
    var storage = bui.storage(2);
        //初始化第1条数据
        storage.set("userinfo",{"id":"n1","name":"王伟深"},"id");

    $("#setOne").on("click",function(argument) {
        //增加第2条数据
        storage.set("userinfo",{"id":"n2","name":"区柏荣"},"id");
    })
    $("#removeOne").on("click",function(argument) {
        //删除一条 name==王伟深 的数据
        storage.remove("userinfo","王伟深","name");
    })
    $("#getOne").on("click",function(argument) {
        // 获取多条数据
        // var data = storage.get("userinfo");
        var data = storage.get("userinfo");
        // 获取某条数据在name字段里匹配
        // var data = storage.get("userinfo","区柏荣","name");
        bui.alert(data);
    })
    $("#clear").on("click",function(argument) {
        storage.clear();
    })
})
