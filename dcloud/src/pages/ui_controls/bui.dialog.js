loader.define(function(require, exports, module) {
    // 自定义居中弹出框
    var uiDialog = bui.dialog({
        id: "#dialogCenter",
        height: 300,
        // mask: false,
        callback: function(e) {
            console.log(e.target)
        }
    });

    router.$('#btnOpen').on("click", function() {
        uiDialog.open();
    })

    // 右边出来对话框
    var uiDialogRight = bui.dialog({
        id: "#dialogRight",
        effect: "fadeInRight",
        position: "right",
        width: 200,
        fullscreen: false,
        style: {
            left: "auto"
        },
        buttons: []
    });

    // 自定义确定按钮事件
    router.$("#makeSure").on("click", function() {
        uiDialogRight.close();
    });

    router.$('#btnOpenFilter').on("click", function() {
        uiDialogRight.open();
    })


    // 左边出来对话框
    var uiDialogLeft = bui.dialog({
        id: "#dialogLeft",
        effect: "fadeInLeft",
        position: "left",
        fullscreen: true,
        buttons: []
    });

    router.$('#btnOpenLeft').on("click", function() {
        uiDialogLeft.open();
    })
    router.$("#makeSure2").on("click", function() {
        uiDialogLeft.close();
    });


    // 底部出来对话框
    var uiDialogDown = bui.dialog({
        id: "#dialogDown",
        effect: "fadeInUp",
        position: "bottom",
        fullscreen: false,
        buttons: []
    });

    router.$('#btnOpenDown').on("click", function() {
        uiDialogDown.open();
    })


    // 全屏
    var uiDialogFull = bui.dialog({
        id: "#dialogFull",
        position: "top",
        fullscreen: true,
        useBox: true,
        buttons: []
    });

    router.$('#btnOpenFull').on("click", function() {
        uiDialogFull.open();
    })

    return {
        init: function() {
            console.log(router.$('#btnOpenDown').length)
        }
    }
})