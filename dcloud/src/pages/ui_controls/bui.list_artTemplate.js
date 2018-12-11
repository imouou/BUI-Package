loader.define(function(require,exports,module) {

    loader.import(["js/plugins/template.js"],function(){
      var uiList = bui.list({
            id: "#scrollArt",
            url: siteDir + "userlist.json",
            page:1,
            pageSize:5,
            height:300,
            template: template2,
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "data"
            },
            onRefresh: function (scroll) {
                //刷新的时候执行
            },
            onLoad: function (scroll) {
                console.log( this.option("page") );

            },
            callback: function (e) {
                // 点击整行的时候执行
            }
        });

        //生成模板 跟 artTemplate 重名
        function template2 (data) {

            var html = template('test', {"data":data});
            return html;
        }

    });
    
    
})
