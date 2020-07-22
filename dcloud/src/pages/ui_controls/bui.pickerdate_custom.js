loader.define(function(require, exports, module) {

    // 带按钮
    var uiPickerdateStart = bui.pickerdate({
        id: "#pickergroupstart",
        popup: false,
        // handle: "#datepicker_input",
        // bindValue: true, // 1.5.3 新增, 修改的值会自动绑定到 handle, 不再需要自己去绑定
        // input 显示的日期格式
        formatValue: "yyyy-MM-dd",
        cols: {
            hour: "none",
            minute: "none",
            second: "none"
        },
        onChange: function(value) {},
        callback: function(e) {
                console.log(e.target)
                console.log(this.value())
            }
            // 如果不需要按钮,设置为空
            // buttons: [{name:"取消"}]
    });
    var uiPickerdateEnd = bui.pickerdate({
        id: "#pickergroupend",
        popup: false,
        // handle: "#datepicker_input",
        // bindValue: true, // 1.5.3 新增, 修改的值会自动绑定到 handle, 不再需要自己去绑定
        // input 显示的日期格式
        formatValue: "yyyy-MM-dd",
        cols: {
            hour: "none",
            minute: "none",
            second: "none"
        },
        onChange: function(value) {},
        callback: function(e) {
                console.log(e.target)
                console.log(this.value())
            }
            // 如果不需要按钮,设置为空
            // buttons: [{name:"取消"}]
    });
    // 初始化以后清空默认值,部分展示需要
    // uiPickerdate.empty()

})