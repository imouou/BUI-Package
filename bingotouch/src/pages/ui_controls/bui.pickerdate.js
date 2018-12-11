loader.define(function(require,exports,module) {

    // 带按钮
        var input = $("#datepicker_input");
        var uiPickerdate = bui.pickerdate({
            handle:"#datepicker_input",
            // input 显示的日期格式
            // formatValue: "yyyy-MM-dd hh:mm",
            onChange: function(value) {
                input.val(value);
            }
            // 如果不需要按钮,设置为空
            // buttons: null
        });

        //设置分栏
           uiPickerdate.cols({
               year: {
                   values: [2013, 2014, 2015],
               },
               hour: {
                   values: [8, 9, 10, 11, 13, 14, 15, 16, 17]
               },
               minute: {
                   values: [0, 30],
                   displayValues: ['00', '30']
               },
               second: 'none'
           });
        // 初始化默认值
        // input.val("请选择日期");
        // 设置控件的值
        // uiPickerdate.value("2017-04-20 12:00");
        var input2 = $("#datepicker_input2");

        // 渲染在页面上,默认展开的状态
        var uiPickerdate2 = bui.pickerdate({
            id:"#datepicker",
            popup: false,
            onChange: function(value) {
                input2.val(value);
            }
        });

        // 中文显示
        $("#show1").on("click",function (argument) {
            uiPickerdate.formatValue("yyyy年MM月dd hh时mm分ss秒");
            // 需要重置列数,因为其它按钮会做列数的更改
            uiPickerdate.cols()
        })

        // 个位不要补零
        $("#show2").on("click",function (argument) {
            uiPickerdate.formatValue("yyyy-M-d h:m:s");
            // 需要重置列数,因为其它按钮会做列数的更改
            uiPickerdate.cols()
        })
        // 显示日期
        $("#show3").on("click",function (argument) {
            // 弹出的时候,也不要显示对应的时分秒
            uiPickerdate.formatValue("yyyy-MM-dd");
            // 修改列数
            uiPickerdate.cols({
                hour: "none",
                minute: "none",
                second: "none"
            })
            
        })
        // 显示固定分秒
        $("#show4").on("click",function (argument) {
            // 弹出的时候,也不要显示对应的时分秒
            uiPickerdate.formatValue("yyyy-MM-dd hh:00:00");
            uiPickerdate.cols({
                minute: "none",
                second: "none"
            })
            
        })
})
