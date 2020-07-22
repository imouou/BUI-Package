﻿loader.define(function(require, exports, module) {
    var uiScroll;

    uiScroll = bui.scroll({
        id: "#scroll",
        children: ".bui-list", //循环遍历的数据的父层,如果不对,会出现无限滚动的情况
        page: 1,
        pageSize: 5,
        onBeforeRefresh: function() {
            console.log("brefore refresh")
        },
        onBeforeLoad: function() {
            console.log("brefore load")
        },
        onRefresh: refresh,
        onLoad: getData,

        callback: function(argument) {

        }
    });

    //刷新数据
    function refresh() {

        var page = 1;
        var pagesize = 5;

        getData.call(this, page, pagesize, "html");
    }
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

            // 演示传参,标准JSON才能转换
            var param = { "id": index, "title": el.name };
            var paramStr = JSON.stringify(param);

            // 处理角标状态
            var sub = '',
                subClass = '';
            switch (el.status) {
                case 1:
                    sub = '新品';
                    subClass = 'bui-sub';
                    break;
                case 2:
                    sub = '热门';
                    subClass = 'bui-sub danger';
                    break;
                default:
                    sub = '';
                    subClass = '';
                    break;
            }

            html += `<li class="bui-btn bui-box" href="pages/ui/article.html" param='${paramStr}'>
                <div class="bui-thumbnail ${subClass}" data-sub="${sub}" ><img src="${el.image}" alt=""></div>
                <div class="span1">
                    <h3 class="item-title">${el.name}</h3>
                    <p class="item-text">${el.address}</p>
                    <p class="item-text">${el.distance}公里</p>
                </div>
                <span class="price"><i>￥</i>${el.price}</span>
            </li>`
        });

        return html;
    }
})