loader.define(function(require,exports,module) {
    
    // 动态绑定
    $("#load").on("click", function (argument) {
        bui.load({
            url: "pages/ui_method/bui.getPageParams.html",
            param: {
                "id": "123"
            }
        });
    });
})
