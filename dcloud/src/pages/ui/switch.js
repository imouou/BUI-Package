loader.define(function(require, exports, module) {

    // 示例确认的时候执行某些业务
    $("#canOpen").on("change", function() {
        var $that = $(this);
        var hasChecked = $that.prop("checked");

        if (hasChecked) {
            bui.confirm("确定要开启蓝牙吗", function(e) {
                var text = $(e.target).text();
                if (text == "确定") {
                    // 确定的时候不用做操作,checkbox会继续之前的事情
                    return;
                } else {
                    $that.prop("checked", !hasChecked)
                    return;
                }
                this.close();
            });
        } else {
            bui.confirm("确定要关闭蓝牙吗", function(e) {
                var text = $(e.target).text();
                if (text == "确定") {
                    //do something
                    return;
                } else {
                    $that.prop("checked", !hasChecked)
                    return;
                }
                this.close();
            });
        }


    })

})