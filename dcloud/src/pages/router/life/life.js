loader.define({
    beforeCreate: function() {
        // 只创建一次
        console.log(this.moduleName + " before create")
    },
    created: function() {
        // 只创建一次
        console.log(this.moduleName + " createed")
    },
    beforeLoad: function() {
        console.log(this.moduleName + " before load")
    },
    loaded: function(req, ext, mod) {
        console.log(this.moduleName + " loaded")
        this.pageview = {};

        // // 初始化
        this.pageview.init = function() {}
            // 局部刷新
        this.pageview.refresh = function() {
            console.log("触发局部刷新")
        }
        return this.pageview;
    },
    show: function(e) {
        console.log(e.type)
            // 页面每次跳转后退都会执行当前模块的触发
        console.log(this.moduleName + " show")
            // 后退才触发刷新操作
        if (e.type == "back") {
            this.pageview.refresh();
        }
    },
    hide: function(e) {
        // 页面每次跳转后退都会执行当前模块的触发
        console.log(this.moduleName + " hide")
    },
    beforeDestroy: function() {
        console.log(this.moduleName + " before destroy")
    },
    destroyed: function() {
        console.log(this.moduleName + " destroyed")
    }
})