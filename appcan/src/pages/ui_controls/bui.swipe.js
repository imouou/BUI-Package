loader.define(function(require, exports, module) {

    var uiMask = bui.mask({
        appendTo: ".bui-page",
        callback: function(argument) {
            uiSwipe.close();
            uiMask.hide();
        }
    });
    var uiSwipe = bui.swipe({
        id: "#uiSwipe",
        handle: ".bui-page",
        zoom: true,
        direction: "x",
    });

    uiSwipe.on("open", function(e, touch) {
        console.log(e)
        uiMask.show();
    })
    uiSwipe.on("close", function(e) {
        console.log(e)
        uiMask.hide();
    })

    // uiSwipe.on("swipeleft", function(argument) {
    //     console.log("swipeleft")
    // })

})