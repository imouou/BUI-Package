loader.define(function(require,exports,module) {

    var uiList = bui.list({
            id: "#scrollNews",
            url: "http://www.easybui.com/demo/json/chuangyi/article-list.json",
            page:1,
            pageSize:9,
            //height:300,
            template: template,
            data: {
                args: { id: 123}
            },
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: ""
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
                // 点击整行的时候执行
            }
        });

        //手动刷新
        // uiList.widget("scroll").refresh();
        // 

    //生成模板
    function template (data) {
        var html = "";
        $.each(data,function(index, el) {
            html +='<li class="bui-btn bui-box"><div class="thumbnail"><img src="'+el.ImgPath+'" alt=""></div><div class="span1"><h3 class="item-title">'+el.Name+'</h3><p class="item-text">'+el.ExInforSources+'</p></div><i class="icon-listright"></i></li>';
            
        });

        return html;
    }

})
