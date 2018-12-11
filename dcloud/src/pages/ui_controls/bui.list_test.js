loader.define(function(require,exports,module) {
    var uiList = bui.list({
            id: "#scrollList",
            url: "http://120.77.171.17:8088/GZMDecauxApp-web/brand/autoComplate",
            pageSize:9,
            height:300,
            template: template,
            data: {
                isParent: 0,
                loginUserId: "3b6865473f4e4de287f63b3187988ed9",
                brandName : "大米"
            },
            headers: {
                Authorization: "3b6865473f4e4de287f63b3187988ed9_2d1fc054c4ad85a41f399c9f855e9cdf"
            },
            method: "POST",
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "content"
            },
            onRefresh: function (scroll) {
                //刷新的时候执行
                // alert(12)
            },
            onLoad: function (scroll) {
                
                // console.log( this.option("page") );
                // 可以在请求下一页的时候修改data参数
                // this.option("data",{
                //     "lastId":"123",
                // });

            },
            callback: function (e) {
                // 解决zepto的事件委托冲突 bui-btn 为整行的样式
                // if( $(e.target).hasClass("bui-btn") ){
                    // 点击整行的时候执行
                // }
            }
        });

        
    //生成模板
    function template (data) {
        var html = "";
        $.each(data,function(index, el) {

            html += '<li class="bui-btn"><i class="icon-facefill"></i>'+el.brandName+'</li>';
        });

        return html;
    }

})
