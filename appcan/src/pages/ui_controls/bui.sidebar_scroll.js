loader.define(function(require,exports,module) {

    //示例代码
    var sidebar = bui.sidebar({
        id: "#sidebarScroll" //菜单的ID(必须)
    });


    var uiList = bui.list({
        id: "#scroll",
        url: "http://www.easybui.com/demo/json/userlist.json",
        data: {},
        page:1,
        pageSize:5,
        field:{
            data:"data"
        },
        template: template,
        callback: function(argument) {
            console.log($(this).text())
        }
    });

    //生成模板
    function template (data) {
        var html = "";

        $.each(data,function(index, el) {

            html += '<li class="bui-btn"><i class="icon-facefill"></i>'+el.name+'</li>';
        });

        return html;
    }
})
