loader.define(function(require,exports,module) {

    loader.import(["js/plugins/vue.min.js"],function(){
        // 绑定list的数据
        var listApp = new Vue({
          el: '#list',
          data: {
            datas: []
          },
          update: function (argument) {
              // body...
          }
        });

        var uiList = bui.list({
            id: "#scroll",
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

                // console.log( this.option("page") );
                //刷新的时候执行
                listApp.datas = [];
                listApp.datas = datas.data;
                
            },
            onLoad: function (scroll,datas) {
                // 这里通过vue 设置的数据,会偏慢一点,导致页面高度不足,直接请求了2页数据再进行渲染
                listApp.datas = listApp.datas.concat(datas.data);

            },
            callback: function (e) {
                // 点击整行的时候执行
            }
        });

        uiListviewInit();

    })

    function uiListviewInit(argument) {
        //加载初始化列表侧滑控件
        bui.listview({
            id: "#list",
            // data: [{ "text": "修改", "classname":"primary"}],
            callback: function (e,menu) {
                console.log("listview callback")

                //关闭菜单
                menu.close();
            }
        });
    }
})
