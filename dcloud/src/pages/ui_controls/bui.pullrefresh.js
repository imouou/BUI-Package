loader.define(function(require,exports,module) {

    // pullRefresh 初始化
    var uiPullRefresh = bui.pullrefresh({
            id: "#pullrefresh",
            onBeforeRefresh : function () {
              console.log("brefore")
            },
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
        data.forEach(function(el,index) {

            html +=`<li class="bui-btn bui-box">
                <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
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
