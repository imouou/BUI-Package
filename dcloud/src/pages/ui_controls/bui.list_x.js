loader.define(function(require, exports, module) {

    var uiList = bui.list({
        id: "#scrollList",
        url: "http://www.easybui.com/demo/json/shop.json",
        children: ".bui-list-pic",
        pageSize: 6, // 当pageSize 小于返回的数据大小的时候,则认为是最后一页,接口返回的数据最好能返回空数组,而不是null
        data: {},
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        direction: "x",
        scrollTips: {
            start: "",
            end: '<div class="bui-loading-cell pause" style="width:20px;height:20px;"></div>',
            nodata: "",
            last: "",
            fail: ""
        },
        refresh: false,
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

                html += `<li>
                    <div class="bui-pic">
                        <div class="bui-pic-img"><img src="${el.image}" alt=""></div>
                        <h3 class="bui-pic-title">${el.name}</h3>
                    </div>
                </li>`
            });

            return html;
        },
        onLoad: function() {
            // 刷新以后执行
            console.log("loaded")
        }
    })



})