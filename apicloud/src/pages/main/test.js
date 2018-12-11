loader.define({
    beforeCreate: function() {
        console.log("before create", this)
    },
    created: function() {
        console.log("created", this)
    },
    beforeLoad: function() {
        console.log("before load", this)
    },
    loaded: function(e, ex, mod) {
        console.log("loaded")
        this.actionSheet = bui.actionsheet({
                trigger: "#btnOpen",
                appendTo: ".bui-page",
                buttons: [{ name: "分享到微博", value: "weibo" }, { name: "分享到微信", value: "weixin" }, { name: "分享到QQ", value: "QQ" }],
                callback: function(e) {

                    var val = $(e.target).attr("value");

                    if (val == "cancel") {
                        this.hide();
                    }
                }
            })
            // loader.destroy(mod.moduleName);
    },
    beforeDestroy: function() {
        console.log("before destroy", this)
        this.actionSheet.destroy(true);
    },
    destroyed: function() {
        console.log("destroyed", this)
    }
})