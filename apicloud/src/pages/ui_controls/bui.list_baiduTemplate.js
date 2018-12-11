loader.define(function(require,exports,module) {

    loader.import(["js/plugins/baiduTemplate.js"],function(){
        var uiList = bui.list({
                id: "#scrollBaidu",
                url: siteDir + "userlist.json",
                page:1,
                pageSize:5,
                height: 300,
                template: template,
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

        //手动刷新
        // uiList.widget("scroll").refresh();

        //生成模板
        function template (data) {

            // 生成百度模板
            var html = baidu.template('test1',{list:data});
            return html;
        }
    })
})
