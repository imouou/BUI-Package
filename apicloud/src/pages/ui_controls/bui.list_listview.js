loader.define(function(require, exports, module) {

    var uiList = bui.list({
        id: "#scrollListview",
        url: "http://www.easybui.com/demo/json/userlist.json",
        children: ".bui-listview",
        handle: "li",
        pageSize: 9,
        template: function(data) {
            var html = "";
            $.each(data, function(index, el) {
                // status=1 手动拼接侧滑菜单,这样可以避免再次dom操作
                // 设置高度可以少遍历一次
                html += `<li status="1" style="height:46px;">
                            <div class="bui-btn bui-box" href="pages/ui_controls/bui.list_listview.html?id=11">
                                <div class="span1">${el.name} </div>
                                <i class="icon-listright"></i>
                            </div>
                            <div class="bui-listview-menu swipeleft">
                                <div class="bui-btn primary">修改</div>
                                <div class="bui-btn danger">删除</div>
                            </div>
                        </li>`;
            });

            return html;
        },
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        onRefresh: function(scroll) {
            //初始化listview
            // uiListviewInit();
            console.log(this.option("page"));

        },
        onLoad: function(scroll) {
            console.log(this.option("page"));
            //初始化listview
        },
        callback: function(e) {
            // 找到整行li
            var $line = $(e.target).closest("li")
            console.log("点击整行", $line)
        }
    });

    //加载初始化列表侧滑控件,模板里面已经静态渲染
    var uiListview = bui.listview({
        id: "#scrollList2",
        //data: [{ "text": "修改", "classname":"primary"}],
        callback: function(e, menu) {
            // 输出点击的按钮
            console.log(e.target)
                //关闭菜单
            menu.close();
            // 阻止冒泡
            e.stopPropagation();
        }
    });

})