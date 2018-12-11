loader.define(function(require,exports,module) {
    
    // 保存1条数据
    var storage = bui.storage();
        storage.set("username","王伟深");

    $("#setOne").on("click",function(argument) {
        storage.set("username","区柏荣");
    })
    $("#removeOne").on("click",function(argument) {
        storage.remove("username","区柏荣");
    })
    $("#getOne").on("click",function(argument) {
        // 获取数据
        var data = storage.get("username");
         // 默认只存储一条数据,所以第一条数据会被覆盖
        bui.alert(data);
    })
        

    $("#clear").on("click",function(argument) {
        storage.clear();
    })
})
