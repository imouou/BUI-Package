loader.define(function(require, exports, module) {

    var uiScroll = bui.scroll({
        id: "#scrollListview",
        children: ".bui-listview li",
        page: 1,
        pageSize: 5,
        onRefresh: function() {

            page = 1;
            pagesize = 5;

            getData(page, pagesize, "html");
        },
        onLoad: getData,
        height: 0
    })

    //滚动加载下一页
    function getData(start, pagesize, command) {

        command = command || "append";

        bui.ajax({
            url: "http://www.easybui.com/demo/json/userlist.json",
            data: {
                pageindex: start,
                pagesize: pagesize
            }
        }).done(function(res) {

            //生成html
            var html = "";
            $.each(res.data, function(index, el) {
                // listview的按钮静态结构渲染, 需要声明 status=1 
                html += `<li status="1" style="height:46px;">
                    <div class="bui-btn bui-box">
                        <div class="span1">${el.name} </div>
                        <i class="icon-listright"></i>
                    </div>
                    <div class="bui-listview-menu swipeleft">
                        <div class="bui-btn primary">修改</div>
                        <div class="bui-btn danger">删除</div>
                    </div>
                </li>`;

            });

            $("#scrollList")[command](html);

            //更新分页信息,如果高度不足会自动请求下一页
            uiScroll.updateCache(start, res.data);
            // 返回顶部
            uiScroll.reverse();

        }).fail(function(res) {

            // 可以点击重新加载
            uiScroll.fail(start, pagesize, res);
        })
    }


    //初始化列表控件
    var listView = bui.listview({
        id: "#scrollList",
        callback: function(e, menu) {
            //关闭菜单
            menu.close();
            // 阻止冒泡
            e.stopPropagation();
        }
    });
})