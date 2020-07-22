loader.define(function(require, exports, module) {

    var uiList = bui.list({
        id: "#scrollSearch",
        url: "http://www.easybui.com/demo/json/shop.json",
        field: {
            data: "data"
        },
        data: {
            "keyword": ''
        },
        page: 1,
        pageSize: 5,
        template: function(data) {
            var html = "";
            data.forEach(function(el, index) {

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

                html += `<li class="bui-btn bui-box">
                        <div class="bui-thumbnail ${subClass}" data-sub="${sub}"><img src="${el.image}" alt=""></div>
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
    });

    // var n = 0;
    //搜索条的初始化
    var uiSearchbar = bui.searchbar({
        id: "#searchbar",
        onInput: function(e, keyword) {
            //实时搜索
            // console.log(++n)
        },
        onRemove: function(e, keyword) {
            //删除关键词需要做什么其它处理
            // console.log(keyword);
        },
        callback: function(e, keyword) {

            if (uiList) {

                //点击搜索清空数据
                uiList.empty();
                // 重新初始化数据
                uiList.init({
                    page: 1,
                    data: {
                        "keyword": keyword
                    }
                });

            }
        }

    });

})