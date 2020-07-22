loader.define(function(require, exports, module) {

    var tab = bui.tab({
        id: "#tabList",
        menu: "#tabListNav",
        scroll: false,
        onBeforeTo: function(e) {
            console.log(e)
                // return false;
        }
    })

    var uiList = bui.list({
        id: "#tabListScroll",
        url: "http://www.easybui.com/demo/json/userlist.json",
        data: {},
        page: 1,
        pageSize: 5,
        field: {
            data: "data",
        },
        template: template,
        onLoad: function(res, result) {
            console.log(res)
            console.log(result)
        }
    });
    var uiList2 = bui.list({
        id: "#tabListScroll2",
        url: "http://www.easybui.com/demo/json/userlist.json",
        data: {},
        page: 1,
        pageSize: 5,
        field: {
            data: "data",
        },
        template: template,
        onLoad: function(argument) {

        }
    });

    //生成模板
    function template(data) {
        var html = "";

        $.each(data, function(index, el) {

            html += '<li class="bui-btn" href="bui.slide_tab_list.html?id=' + index + '"><i class="icon-facefill"></i>' + el.name + '</li>';
        });

        return html;
    }
})