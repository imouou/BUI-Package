loader.define(function(require, exports, module) {
    //折叠菜单示例
    var uiAccordion = bui.accordion({
        id: "#accordion"
    })
    var uiList = bui.list({
        id: "#scrollList",
        url: "http://www.easybui.com/demo/json/shop.json",
        pageSize: 6, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        data: {},
        children: ".bui-accordion",
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        callback: function(e) {
            // e.target 为你当前点击的元素
            // e.currentTarget 为你当前点击的handle 整行
        },
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<dt class="bui-btn bui-box">
                <div class="span1">${el.name}</div>
                <i class="icon-accordion"></i>
            </dt>
            <dd>
                <img src="${el.image}" alt="占位图">
            </dd>`
            });

            return html;
        },
        onBeforeRefresh: function() {
            console.log("brefore refresh")
        },
        onBeforeLoad: function() {
            console.log("brefore load")
        },
        onRefresh: function() {
            // 刷新以后执行
            console.log("refreshed")
        },
        onLoad: function() {
            // 刷新以后执行
            console.log("loaded")


        }
    })



})