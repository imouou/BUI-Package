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
    loaded: function() {
        console.log(this.moduleName + " loaded")
    },
    show: function() {
        // 页面每次跳转后退都会执行当前模块的触发
        console.log(this.moduleName + " show")
    },
    hide: function() {
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