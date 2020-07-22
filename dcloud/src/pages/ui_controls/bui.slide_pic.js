loader.define(function(require,exports,module) {

    // 快速初始化
    var uiSlide = bui.slide({
        id:"#slidePic",
        height:300
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
