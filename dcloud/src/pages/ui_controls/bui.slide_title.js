loader.define(function(require,exports,module) {

    // 静态初始化
    var uiSlide = bui.slide({
        id:"#slide",
        height:380,
        autopage: true,
        loop: true,
        data: [{
          title: "年底大片实时看",
          image: "images/banner01.png",
          url: "pages/ui/article.html",
        },{
          title: "走路跑步领红包",
          image: "images/banner02.png",
          url: "pages/ui/article.html",
        },{
          title: "每日推荐最新职位",
          image: "images/banner03.png",
          url: "pages/ui/article.html",
        }]
    })

    router.$("#prev").on("click",function () {
        uiSlide.prev();
    })
    router.$("#next").on("click",function () {
        uiSlide.next();
    })
    router.$("#autoplay").on("change",function () {
        var isChecked = $(this).is(":checked");
        if( isChecked ){
            uiSlide.start();
        }else{
            uiSlide.stop();
        }
    })
    router.$("#unlock").on("change",function () {
        var isChecked = $(this).is(":checked");
        if( isChecked ){
            uiSlide.unlock();
        }else{
            uiSlide.lock();
        }
    })
})
