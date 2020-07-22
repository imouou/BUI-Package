loader.define(function(require, exports, module) {

  // 初始化数据行为存储
  var bs = bui.store({
      scope: "page",
      data: {
          lists: [],
          lists2: [],
          listDistance: []  // 存储控件实例
      },
      templates: {
          tplList: function (data) {
              var html = "";
              data && data.forEach(function(el, index) {

                  html += `<li class="bui-btn bui-box" href="pages/ui/article.html?id=${index}&title=${el.name}">
                      <div class="bui-thumbnail" ><img src="${el.image}" alt=""></div>
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
      },
      methods: {},
      watch: {},
      computed: {},
      beforeMount: function(){
          // 数据解析前执行, 修改data的数据示例
          // this.$data.a = 2
      },
      mounted: function(){
        // 数据解析后执行

          var _self = this;

          var tab = bui.tab({
              id:"#tabDynamic",
              menu:"#tabDynamicNav",
          })

          tab.on("to",function (index) {

            // 初始化一次就够了
            if( _self.listDistance[index] ){
              return;
            }

            var id = "#tab"+index+ " .bui-scroll";

            _self.listDistance[index] = bui.list({
                id: id,
                url: "http://www.easybui.com/demo/json/shop.json",
                data: {
                  index: index
                },
                page:1,
                pageSize:6,
                height:0,
                //如果分页的字段名不一样,通过field重新定义
                field: {
                    page: "page",
                    size: "pageSize",
                    data: "data"
                },
                onRefresh: function (scroll,datas) {

                    switch(index){
                      case 0:
                      // 清空数据
                      bui.array.empty(_self.lists);
                      // 合并新的数据
                      bui.array.merge(_self.lists,datas.data);
                      break;
                      case 1:
                      // 清空数据
                      bui.array.empty(_self.lists2);
                      // 合并新的数据
                      bui.array.merge(_self.lists2,datas.data);
                      break;
                    }
                },
                onLoad: function (scroll,datas) {
                  switch(index){
                    case 0:
                    // 合并新的数据
                    bui.array.merge(_self.lists,datas.data);
                    break;
                    case 1:
                    // 合并新的数据
                    bui.array.merge(_self.lists2,datas.data);
                    break;
                  }

                }
            });
          }).to(0)
      }
  })


})
