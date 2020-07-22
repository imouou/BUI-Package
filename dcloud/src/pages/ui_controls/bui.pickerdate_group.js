loader.define(function(require, exports, module) {

    // 多个日期初始化
    var uiPickerdate = bui.pickerdate({
        handle: ".pickerdate",
        formatValue: "yyyy-MM-dd hh:mm",
        bindValue: true,
        onChange: function(value) {
            console.log(value)
        }
    });

})