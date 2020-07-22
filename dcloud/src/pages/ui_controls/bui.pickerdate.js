loader.define(function(require, exports, module) {

    // 带按钮
    var uiPickerdate = bui.pickerdate({
        handle: "#datepicker_input",
        bindValue: true, // 1.5.3 新增, 修改的值会自动绑定到 handle, 不再需要自己去绑定
        // input 显示的日期格式
        formatValue: "yyyy-MM-dd hh:mm",
        onChange: function(value) {},
        callback: function(e) {
            console.log(e.target)
            console.log(this.value())

        },
        // 如果不需要按钮,设置为空
        // buttons: [{name:"取消"}]
    });
    // 初始化以后清空默认值,部分展示需要
    // uiPickerdate.empty()

    // 初始化默认值
    // input.val("请选择日期");
    // 设置控件的值
    // uiPickerdate.value("2017-04-20 12:00");
    // 中文显示
    $("#show1").click(function(argument) {
        uiPickerdate.formatValue("yyyy年MM月dd hh时mm分ss秒");
        // 需要重置列数,因为其它按钮会做列数的更改
        uiPickerdate.cols()
    })

    // 个位不要补零
    $("#show2").click(function(argument) {
            uiPickerdate.formatValue("yyyy-M-d h:m:s");
            // 需要重置列数,因为其它按钮会做列数的更改
            uiPickerdate.cols()
        })
        // 显示日期
    $("#show3").click(function(argument) {
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
    $("#show4").click(function(argument) {
            // 弹出的时候,也不要显示对应的时分秒
            uiPickerdate.formatValue("yyyy-MM-dd hh:00:00");
            uiPickerdate.cols({
                minute: "none",
                second: "none"
            })

        })
        // 显示时间
    $("#show5").click(function(argument) {


            // 弹出的时候,也不要显示对应的时分秒
            uiPickerdate.formatValue("hh:mm:ss");
            // cols 在初始化的时候设定, 不使用调用方法的方式
            uiPickerdate.cols({
                year: "none",
                month: "none",
                date: "none",
            })

        })
        // 显示年份
    $("#show6").click(function(argument) {


        // 弹出的时候,也不要显示对应的时分秒
        uiPickerdate.formatValue("yyyy");
        // cols 在初始化的时候设定, 不使用调用方法的方式
        uiPickerdate.cols({
            month: "none",
            date: "none",
            hour: "none",
            minute: "none",
            second: "none"
        })
    })

    // 星期示例
    var weeks = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    var uiPickerdateWeek = bui.pickerdate({
        handle: "#datepicker_week",
        bindValue: true, // 1.5.3 新增, 修改的值会自动绑定到 handle, 不再需要自己去绑定
        // input 显示的日期格式
        formatValue: "yyyy-MM-dd",
        onChange: function(value) {
            var date = new Date(value);
            var index = date.getDay();

            router.$("#week").text(weeks[index])
                // 修改列
            this.cols({
                hour: "none",
                minute: "none",
                second: {
                    values: [index],
                    displayValues: [weeks[index]]
                }
            })
        },
        callback: function(e) {
            console.log(e.target)
            console.log(this.value())
        },
        // 如果不需要按钮,设置为空
        // buttons: null
    });
    // 初始化星期
    var date = new Date();
    var index = date.getDay();
    uiPickerdateWeek.cols({
        hour: "none",
        minute: "none",
        second: {
            values: [index],
            displayValues: [weeks[index]]
        }
    })

    // 一种自定义自定义取值示例,最多60个
    var arrs = ['设置1', '设置2', '设置3', '设置4', '设置5', '设置6'];
    // 检测设置的值在哪个索引
    var valIndex = bui.array.index(arrs, "设置3")
    var input2 = router.$("#datepicker_input2");

    var uiPickerdate2 = bui.pickerdate({
        handle: "#datepicker_input2",
        // input 显示的日期格式
        formatValue: "ss",
        cols: {
            year: "none",
            month: "none",
            date: "none",
            hour: "none",
            minute: "none",
            second: {
                values: [0, 1, 2, 3, 4, 5],
                displayValues: arrs
            }
        },
        value: "2019-01-01 01:00:" + valIndex, // 最后秒数的02 则是设置在第3个值
        onChange: function(value) {
            var index = parseInt(value);
            var val = arrs[index];
            input2.val(val);
        },
        callback: function(e) {
            console.log(e.target)
            console.log(this.value())
        },
        // 如果不需要按钮,设置为空
        buttons: null
    });
})