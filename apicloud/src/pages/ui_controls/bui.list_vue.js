loader.define(function(require,exports,module) {

    loader.import(["js/plugins/vue.min.js"],function(){
      // 绑定list的数据
        var listApp = new Vue({
          el: '#listvue',
          data: {
            datas: []
          }
        });

        var uiList = bui.list({
            id: "#scrollVue",
            url: "http://www.easybui.com/demo/json/userlist.json",
            page:1,
            pageSize:5,
            height:300,
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "data"
            },
            onRefresh: function (scroll,datas) {
                //刷新的时候执行
                listApp.datas = datas.data;
                
            },
            onLoad: function (scroll,datas) {
                // 这里通过vue 设置的数据,会偏慢一点,导致页面高度不足,直接请求了2页数据再进行渲染
                console.log( this.option("page") );
                listApp.datas = listApp.datas.concat(datas.data);
            },
            callback: function (e) {

                // 点击整行的时候执行
            }
        });
    });
    
})
