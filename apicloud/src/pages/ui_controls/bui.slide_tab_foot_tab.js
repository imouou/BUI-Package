loader.define(function(require,exports,module) {

    //按钮在tab外层,需要传id
    var tab = bui.slide({
        id:"#tabFoot",
        menu:"#tabFootNav",
        children:".bui-tab-main > ul",
        scroll: true

    })

    var uiSlideTab = bui.slide({
        id:"#uiSlideTabChild",
        menu:".bui-nav",
        children:".bui-tab-main > ul",
        scroll: true
    })

    $(".btn-scrolltop").on("click",function(e){
        document.querySelector("#scrollMain").scrollTop = 0;
    })
})
