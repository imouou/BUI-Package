loader.define(function(require, exports, module) {

    // 文字提醒
    $('#btnTop').on("click", function() {
        bui.confirm("消息确认框", function(e) {
            //this 是指点击的按钮
            var text = $(e.target).text();

            if (text == "确定") {
                console.log("你点击了" + $(e.target).text())
            }
            // this.close()
        });

    })

    // 图标提醒
    $('#success').on("click", function(argument) {
        bui.confirm({
            "title": "",
            "height": 460,
            "content": '<div class="bui-box-center"><i class="icon-successfill success"></i><h3>预约成功</h3><p>请前往办证中心取号办理</p></div>',
            "buttons": [{ name: "我知道了", className: "primary-reverse" }]
        });
    })

})