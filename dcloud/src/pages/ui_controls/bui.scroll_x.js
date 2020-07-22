loader.define(function(require, exports, module) {
    var uiScroll;

    uiScroll = bui.scroll({
        id: "#scroll",
        children: ".bui-list", //循环遍历的数据的父层,如果不对,会出现无限滚动的情况
        page: 1,
        pageSize: 5,
        direction: "x",
        scrollTips: {
            start: "",
            end: '<div class="bui-loading-cell pause" style="width:20px;height:20px;"></div>',
            nodata: "",
            last: "",
            fail: ""
        },
        refresh: false,
        onLoad: getData,
        callback: function(argument) {

        }
    });

    //滚动加载下一页
    function getData(page, pagesize, command) {
        var _self = this;

        //跟刷新共用一套数据
        var command = command || "append";

        bui.ajax({
            url: "http://www.easybui.com/demo/json/shop.json",
            data: {
                pageindex: page,
                pagesize: pagesize
            }
        }).done(function(res) {

            //生成html
            var html = template(res.data);

            router.$("#scrollList")[command](html);

            // 更新分页信息,如果高度不足会自动请求下一页
            _self.updatePage(page, res.data);

            // 刷新的时候返回位置
            _self.reverse();

        }).fail(function(res) {

            // 可以点击重新加载
            _self.fail(page, pagesize, res);
        })
    }

    //生成模板
    function template(data) {
        var html = "";
        data.forEach(function(el, index) {

            html += `<li href="pages/ui/article.html">
                        <div class="bui-pic">
                            <div class="bui-pic-img"><img src="${el.image}" alt="" ></div>
                            <div class="bui-pic-title">${el.name}</div>
                        </div>
                    </li>`
        });

        return html;
    }
})