loader.define(function(require, exports, module) {


    // 可以在路由init以后,作为整个应用的联动数据处理
    var store = bui.store({
        scope: "app", // 标识符,用于区分不同的数据源
        isPublic: false, // 在模块里面默认是false, 在index.js 需要改为true
        data: {
            message: "Hello bui.js",
            showName: true,
            firstName: "wang",
            lastName: "wei",
            attrs: {
                title: "这是动态标题"
            },
            className: {
                active: true,
            }
        },
        computed: {
            fullName: function() {
                return this.firstName + this.lastName;
            }
        }
    })

    router.$("#reverseMessage").on("click", function(e) {
        var a = store.message.split(' ').reverse().join(' ')
        store.message = a;
    })

})