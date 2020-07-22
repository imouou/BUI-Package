loader.define(function(require, exports, module) {
    // 新闻地址：http://news.163.com/photoview/00AP0001/2290581.html?from=ph_ss#p=DB5RBC4Q00AP0001NOS

    // json数据地址：https://c.3g.163.com/photo/api/set/0001%2F2290581.json
    var uiList = bui.list({
        id: "#scrollList",
        url: "http://c.m.163.com/nc/article/headline/T1348649580692/(page)-(size).html",
        urlrule: true,
        // url: "https://c.3g.163.com/photo/api/set/0001%2F2290581.json",
        page: 0,
        pageSize: 10, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        data: {},
        //如果分页的字段名不一样,通过field重新定义
        field: {
            data: "T1348649580692"
        },
        transformResponse: function(res) {
            console.log(res)
        },
        callback: function(e) {
            // e.target 为你当前点击的元素
            // e.currentTarget 为你当前点击的handle 整行
        },
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li class="bui-btn bui-box" href="pages/ui/article.html?id=${index}&title=${el.title}">
                    <div class="bui-thumbnail"><img src="${el.imgsrc}" alt=""></div>
                    <div class="span1">
                        <h3 class="item-title">${el.title}</h3>
                        <p class="item-text">${el.source}</p>
                        <p class="item-text">${el.mtime}</p>
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