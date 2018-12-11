loader.define(function(require,exports,module) {

    // pullRefresh 初始化
    var uiPullRefresh = bui.pullrefresh({
            id: "#pullrefresh",
            onRefresh : getData
        });

//刷新数据
    function getData () {
        var _self = this;

        bui.ajax({
            url: "http://www.easybui.com/demo/json/shop.json",
            data: {
                pageindex:1,
                pagesize:4
            }
        }).done(function(res) {
            var html = templateList(res.data);

            $("#pullrefreshList").html(html);

            //还原刷新前状态
            uiPullRefresh.reverse();

        }).fail(function (res) {

            //请求失败变成点击刷新
            uiPullRefresh.fail();
            
        })
    }

    //生成列表模板
    function templateList (data) {
        var html = "";
        $.each(data,function(index, el) {

            // 处理角标状态
            var sub = '' , subClass = '' ;
            switch(el.status){
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

            html +=`<li class="bui-btn bui-box">
                <div class="bui-thumbnail ${subClass}" data-sub="${sub}"><img src="${el.image}" alt=""></div>
                <div class="span1">
                    <h3 class="item-title">${el.name}</h3>
                    <p class="item-text">${el.address}</p>
                    <p class="item-text">${el.distance}</p>
                </div>
                <span class="price"><i>￥</i>${el.price}</span>
            </li>`
        });

        return html;
    }
})
