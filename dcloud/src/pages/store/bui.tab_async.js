loader.define(function(require, exports, module) {

  // 选项卡 js 初始化:
  var tab = bui.tab({
      id:"#tabDynamic",
      menu:"#tabDynamicNav",
      // 1: 声明是动态加载的tab
      autoload: true,
  })

  // TAB 的状态值, 只初始化一次
  var firstTabInit = false,
      secondTabInit = false;
  // 2: 监听跳转的时候触发
  tab.on("to",function (index) {
      // 根据索引加载对应的脚本
      switch(index){
          case 0:
          loader.require(["pages/store/bui.tab_list_async"],function(mod){
              // 传父层id区分不同的list控件, 并且通过状态控制, 第一次进来才初始化,切换tab不做处理.
              !firstTabInit && mod.init("#tab1","http://www.easybui.com/demo/json/shop.json");

              firstTabInit = true;
          })
          break;
          case 1:
          loader.require(["pages/store/bui.tab_list_async"],function(mod){
              !secondTabInit && mod.init("#tab2","http://www.easybui.com/demo/json/shop.json");
              secondTabInit = true;
          })
      }
  }).to(0);



})
