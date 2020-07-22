loader.define(function(require, exports, module) {

  var pageview = {};

    // 只定义,不执行, 给外层的tab调用才执行, 避免重复渲染
    pageview.init = function (id,url) {

      // 局部加载: 数据驱动要作为公共使用的模块的时候, 可以通过传父层id 过来, 这样可以避免多次渲染
      this.store = bui.store({
            el: id,
            scope: "page",
            data: {
                lists: []
            },
            templates: {
                tplList: function (data) {
                    var html = "";
                    data.map(function(el, index) {
                        // 演示传参,标准JSON才能转换
                        var param = {"id":index,"title":el.name};
                        var paramStr = JSON.stringify(param);

                        html += `<li class="bui-btn bui-box" href="pages/ui/article.html" param='${paramStr}'>
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
            mounted: function () {
                var _self = this;
                var list = bui.list({
                  id: id + " .bui-scroll",
                  url: url,
                  page:1,
                  pageSize:6,
                  height:0,
                  //如果分页的字段名不一样,通过field重新定义
                  field: {
                      page: "page",
                      size: "pageSize",
                      data: "data"
                  },
                  template: function (data) {
                      var html = "";
                      data.map(function(el, index) {
                          // 演示传参,标准JSON才能转换
                          var param = {"id":index,"title":el.name};
                          var paramStr = JSON.stringify(param);

                          html += `<li class="bui-btn bui-box" href="pages/ui/article.html" param='${paramStr}'>
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
                  },
                  onRefresh: function (scroll,datas) {
                      // 清空数据
                      bui.array.empty(_self.lists);
                      // 合并新的数据
                      bui.array.merge(_self.lists,datas.data);
                  },
                  onLoad: function (scroll,datas) {

                      bui.array.merge(_self.lists,datas.data);
                  }
              });
            }
        })
    }

    return pageview;
})
