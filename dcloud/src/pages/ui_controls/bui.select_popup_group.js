loader.define(function(require, exports, module) {

    //动态绑定
    var uiSelect = bui.select({
        trigger: "#select",
        title: "请选择区域",
        type: "checkbox",
        data: [{
            "name": "南方",
            "type": "group"
        }, {
            "name": "广州",
            "value": "11"
        }, {
            "name": "深圳",
            "value": "22"
        }, {
            "name": "东莞",
            "value": "55"
        }, {
            "name": "北方",
            "type": "group"
        }, {
            "name": "北京",
            "value": "44"
        }, {
            "name": "上海",
            "value": "33"
        }, {
            "name": "郑州",
            "value": "66"
        }],
        needSearch: true,
        value: ["广州", "上海"],
        //如果需要点击再进行操作,增加按钮
        buttons: [{ name: "重置", className: "" }, { name: "确定", className: "primary-reverse" }],
        callback: function(e) {

            var text = $(e.target).text();
            if (text == "重置") {
                uiSelect.selectNone();
            } else {
                uiSelect.hide();
            }
        },
        template: function(data) {
            var html = '';
            // 1.5.2 需要加这行, 1.5.2 以前,这行是不需要的, 正常不需要自己自定义模板. 
            html += '<div class="bui-list bui-list-select">';
            data.forEach(function(item, i) {
                if (item.type) {
                    html += `<div class="bui-btn bui-btn-title">${item.name}</div>`
                } else {
                    html += `<div class="bui-btn bui-btn-line bui-box">
                                <div class="span1">${item.name}</div>
                                <input type="checkbox" name="test" class="bui-choose" value="${item.value}" text="${item.name}">
                            </div>`
                }
            })
            html += '</div>';

            return html;
        }
    })


})