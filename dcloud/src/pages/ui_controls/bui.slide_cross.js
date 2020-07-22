loader.define(function(require, exports, module) {

    // 快速初始化
    var uiSlide = bui.slide({
        id: "#slide",
        height: 300,
        autopage: true,
        loop: true,
        cross: true,
        data: [{
            image: "images/banner01.png",
            url: "pages/ui/article.html",
            page: true
        }, {
            image: "images/banner02.png",
            url: "pages/ui/article.html",
        }, {
            image: "images/banner03.png",
            url: "pages/ui/article.html",
        }]
    })


    router.$("#prev").on("click", function() {
        uiSlide.prev();
    })
    router.$("#next").on("click", function() {
        uiSlide.next();
    })
    router.$("#autoplay").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.start();
        } else {
            uiSlide.stop();
        }
    })
    router.$("#unlock").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.unlock();
        } else {
            uiSlide.lock();
        }
    })
})