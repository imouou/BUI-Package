loader.define(function(require,exports,module) {

  var tabWidth = $(window).width() - $("#tabSideNav").width();

    //按钮在tab外层,需要传id
    var uiTab = bui.tab({
        id:"#tabSide",
        menu:"#tabSideNav",
        width: tabWidth,
        direction: "y",
        animate: false,
        autoload: true,
        template: function (data) {
          var html ="";
          // 渲染内容
          html +=`<div class="bui-tab-main"><ul>`
              data.forEach(function (item,i) {
                html +=`<li><img src="${item.image}" alt=""></li>`
              })
          html +=`</ul></div>`
          return html;
        }
    })
    // 菜单的渲染
    function menuTpl(data) {
      var html = "";
      data.forEach(function (item,i) {
        html +=`<li class="bui-btn" href="${item.url}">${item.title}</li>`
      })

      return html;
    }

  // 2: 监听加载后的事件
  uiTab.on("to",function (index) {
      switch(index){
          case 0:
          loader.require(["pages/ui_controls/bui.tab_dynamic_page1"],function (mod) {
              // 有回调的话是每次切换都会触发
              mod.init();
          })
          break;
          case 1:
          // 没回调时,加载脚本只在第一次的时候触发
          loader.require(["pages/ui_controls/bui.tab_dynamic_page2"])
          break;
          case 2:
          loader.require(["pages/ui_controls/bui.tab_dynamic_page1"])
          break;
          case 3:
          loader.require(["pages/ui_controls/bui.tab_dynamic_page1"])
          break;
      }
  })
  // 模拟异步请求的数据处理
    bui.ajax({
        url: "http://easybui.com/demo/json/shop.json",
    }).then(function(result){
      var data = [{
          title: "课程",
          image: "images/placeholder-list.png",
          url: "pages/ui_controls/bui.tab_dynamic_page1.html"
        },{
          title: "观点",
          image: "images/placeholder-page.png",
          url: "pages/ui_controls/bui.tab_dynamic_page2.html"
        }]

      // 渲染分离式菜单模板
      var menuHtml = menuTpl(data);
      router.$("tabSideNav").html(menuHtml);
      
      // 分离式渲染
      uiTab.option("data",data)

      // 触发第一次的模板及脚本渲染
      uiTab.to(0);

    },function(result,status){
        // 失败 console.log(status)
    });

})
