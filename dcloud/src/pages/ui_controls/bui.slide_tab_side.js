loader.define(function(require,exports,module) {

    var tabWidth = $(window).width() - $("#tabSideNav").width();

        //按钮在tab外层,需要传id
        var tab = bui.slide({
            id:"#tabSide",
            menu:"#tabSideNav",
            children:".bui-tab-main > ul",
            width: tabWidth,
            scroll: true,
            animate: false,
            delay: true
        })
})
