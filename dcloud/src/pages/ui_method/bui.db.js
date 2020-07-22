loader.define(function(require, exports, module) {
    var db = bui.db({
        table: ["id", "name", "begin", "end", "person", "remark"]
    })

    setTimeout(function() {
        db.add([{
            id: "12",
            name: "test",
            begin: "2019-04-12",
            end: "2019-04-21",
            person: "王小o",
            remark: "没有",
        }])
    }, 1000)

})