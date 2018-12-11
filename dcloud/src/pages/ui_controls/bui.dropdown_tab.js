loader.define(function(require,exports,module) {

    var uiMask = bui.mask({
      appendTo: router.$(".main"),
      zIndex: 1,
      callback: function (argument) {
        uiDoropdown.hide();
      }
    });

    var tabSide = null;
    //下拉菜单在底部相对父层宽度
    var uiDoropdown = bui.dropdown({
        id: "#uiDoropdown",
        // showArrow: false,
        autoClose: false,
        targetHandle: ".bui-tab-main .bui-list li",
        stopPropagation: true,
        //设置relative为false,二级菜单继承父层宽度
        relative: false,
        callback: function (e) {
          // 控制多个分类只能选择一个
            $(".bui-dropdown .bui-tab-main .bui-list li").removeClass("active");
            $(e.target).addClass("active");
            uiDoropdown.hide();
        }
    })

    uiDoropdown.on("show",function (argument) {
        uiMask.show();

        // 去掉页面滚动条
        router.$("main").css("overflow","hidden");

        if( tabSide ){
            return;
        }
        // zepto 对隐藏元素拿不到宽高, 需要在显示的时候处理
        var tabWidth = $(window).width() - $("#tabSideNav").width();

        //按钮在tab外层,需要传id
        tabSide = bui.tab({
          id:"#tabSide",
          menu:"#tabSideNav",
          width: tabWidth,
          animate: false,
          swipe: false,
          height: 200
        })  
    })
    // 隐藏遮罩
    uiDoropdown.on("hide",function (argument) {
        uiMask.hide();  
    })


})
