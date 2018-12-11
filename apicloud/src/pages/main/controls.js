// 控件初始化都需要在define里面
loader.define(function(require, exports, module) {

    var pageview = {};
    var uiAccordion = null;
    pageview.init = function(argument) {
        var accordionHeight = $(window).height() - $(".intro").height() - $("#tabDynamic > .bui-tab-head").height();
        // 初始化折叠菜单
        uiAccordion = bui.accordion({
            id: "#controls",
            height: accordionHeight,
            single: true,
            callback: function(e) {
                controls.scrollTop = e.target.offsetTop - 5;
            }
        });

        uiAccordion.showFirst()
    }


    pageview.init();

    return pageview;

})