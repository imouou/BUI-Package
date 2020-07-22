loader.define(function(require, exports, module) {
    var localData = {
    "data": [
        {
            "uid": "1",
            "name": "幸福西饼生日蛋糕",
            "image": "http://www.easybui.com/demo/images/list-img1.png",
            "phone": "13800138000",
            "address": "天河区岑村",
            "price": 50,
            "status": 0,
            "distance": "3公里"
        },
        {
            "uid": "2",
            "name": "王品台塑牛排",
            "image": "http://www.easybui.com/demo/images/list-img2.png",
            "phone": "13800138000",
            "address": "体育西路191号佳兆业广场F3",
            "price": 680,
            "status": 1,
            "distance": "5公里"
        },
        {
            "uid": "3",
            "name": "丰源轩",
            "image": "http://www.easybui.com/demo/images/list-img1.png",
            "phone": "13800138000",
            "address": "广州大道北2035号金铂广场5层",
            "price": 85,
            "status": 2,
            "distance": "30公里"
        },
        {
            "uid": "4",
            "name": "容禧御贡茶(江南新地店)",
            "image": "http://www.easybui.com/demo/images/list-img2.png",
            "phone": "13800138000",
            "address": "江南西路46号",
            "price": 15,
            "status": 0,
            "distance": "50公里"
        },
        {
            "uid": "5",
            "name": "起滋源麻辣香锅(花城汇店)",
            "image": "http://www.easybui.com/demo/images/list-img1.png",
            "phone": "13800138000",
            "address": "花城汇南区汉堡王20米处左手边",
            "price": 96,
            "status": 1,
            "distance": "50公里"
        },
        {
            "uid": "6",
            "name": "日式料理",
            "image": "http://www.easybui.com/demo/images/list-img2.png",
            "phone": "13800138000",
            "address": "花城汇南区135号",
            "price": 126,
            "status": 0,
            "distance": "50公里"
        }
    ],
    "info": "获取成功",
    "status": 0
}
    var uiList = bui.list({
        id: "#scrollList",
        pageSize: 2,
        data: {},
        //如果分页的字段名不一样,通过field重新定义
        field: {
            page: "page",
            size: "pageSize",
            data: "data"
        },
        localData: localData,
        callback: function(e) {
            // e.target 为你当前点击的元素
            // $(e.target).closest(".bui-btn") 可以找到你当前点击的一整行,可以把一些属性放这里
            console.log($(e.target).closest(".bui-btn").attr("class"))
        },
        template: function(data) {
          console.log(data)
            var html = "";
            data.map(function(el, index) {
                // 演示传参,标准JSON才能转换
                var param = {"id":index,"title":el.name};
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
    });



})
