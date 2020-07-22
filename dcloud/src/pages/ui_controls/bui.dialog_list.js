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
    var uiList = null;
    var uiDialogRight = bui.dialog({
        id: "#dialogRight",
        effect: "fadeInRight",
        position: "right",
        fullscreen: true,
        buttons: []
    }).on("open", function() {

        // 只要初始化一次
        if (uiList) { return; }
        // zeptojs 拿不到隐藏元素的高度, list需要自己计算对应的高度进去.
        var listHeight = $(window).height() - router.$(".bui-dialog-head").height() - router.$(".bui-dialog-foot").height();

        // 列表控件 js 初始化: 
        uiList = bui.list({
            id: "#uiList",
            url: "http://rap2api.taobao.org/app/mock/84605/example/getNews",
            pageSize: 5,
            data: {},
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "data"
            },
            height: listHeight,
            callback: function(e) {},
            template: function(data) {
                var html = "";
                data.map(function(el, index) {

                    html += `<li class="bui-btn bui-box">
                        <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                        <div class="span1">
                            <h3 class="item-title">${el.name}</h3>
                            <p class="item-text">${el.address}</p>
                            <p class="item-text">${el.distance}公里</p>
                        </div>
                        <span class="price"><i>￥</i>${el.price}</span>
                    </li>`
                });

                return html;
            }
        });

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

})