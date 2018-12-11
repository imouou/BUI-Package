loader.define(function(require,exports,module) {

    var uiDialog = bui.dialog({
            id: "#dialog3",
            fullscreen:true,
            position: "center",
            effect : "zoomIn",
            mask: false
        });
    
    $('#btnOpen').on("click",function () {
        uiDialog.open();
    })
    $('#dialog3').on('click','.img',function () {
        uiDialog.close();
    })

})
