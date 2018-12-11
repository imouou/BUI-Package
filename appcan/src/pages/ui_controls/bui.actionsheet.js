loader.define(function(require,exports,module) {

    // 示例
    var uiActionsheet = bui.actionsheet({
        trigger: "#btnOpen",
        buttons: [{ name:"分享到微博",value:"weibo" },{ name:"分享到微信",value:"weixin" },{ name:"分享到QQ",value:"QQ" }],
        callback: todo
    })

    function todo(e) {
        var val = $(e.target).attr("value");

        if( val == "cancel"){
            this.hide();
        }
    }
})
