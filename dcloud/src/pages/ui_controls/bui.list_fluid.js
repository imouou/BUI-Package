loader.define(function(require, exports, module) {
    var uiList = bui.list({
        id: "#scrollList",
        url: "http://www.easybui.com/demo/json/shop.json",
        pageSize: 6, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        data: {},
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

                var height = 100 + (Math.random() * 300);

                html += `<li class="bui-btn" href="pages/ui/article.html?id=${index}&title=${el.name}" style="width:50%;text-align:center;margin-bottom:.2rem;">
                    <div class="bui-box-vertical" style="background:#ccc;height:${parseInt(height)}px;">
                    <div class="bui-thumbnail" style="margin:0 auto;"><img src="${el.image}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.name}</h3>
                    </div>
                    </div>
                </li>`
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


    return uiList;
})