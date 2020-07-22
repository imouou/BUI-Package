loader.define(function(require, exports, module) {

    // 初始化数据行为存储
    var bs = bui.store({
        scope: "page",
        data: {
            a: {
                b: 123
            }
        },
        needCompile: false,
        log: true,
        compiled: function() {
            // 数据解析后执行
            console.log(333)
        }
    })

    console.log(bs)

    return bs;
})