loader.define(function(require,exports,module) {

    var tab = bui.slide({
            id:"#tabList",
            menu:"#tabListNav",
            children:".bui-tab-main > ul",
            //scroll: true, // scroll 如果设置true可能会导致list的滚动出现问题
        })

        var uiList = bui.list({
            id: "#tabListScroll",
            url: siteDir + "userlist.json",
            data: {},
            page:1,
            pageSize:5,
            field:{
                data: "data",
            },
            template: template,
            onLoad: function (argument) {
                
            }
        });
        var uiList2 = bui.list({
            id: "#tabListScroll2",
            url: siteDir+"userlist.json",
            data: {},
            page:1,
            pageSize:5,
            field:{
                data: "data",
            },
            template: template,
            onLoad: function (argument) {
               
            }
        });

        //生成模板
    function template (data) {
        var html = "";

        $.each(data,function(index, el) {

            html += '<li class="bui-btn" href="bui.slide_tab_list.html?id='+index+'"><i class="icon-facefill"></i>'+el.name+'</li>';
        });

        return html;
    }
})
