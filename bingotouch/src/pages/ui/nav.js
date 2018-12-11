loader.define(function(require,exports,module){

    var pageview = {};

    // 页面初始化定义
    pageview.init = function(){

    	// 底部菜单
        var uiDialogNav = bui.dialog({
            id: "#uiDialogNav",
            position: "bottom",
            effect: "fadeInUp",
            mask: false
        });

        $(".bui-btn-more").on("click",function (e) {
        	if(uiDialogNav.isOpen()){
        		uiDialogNav.close();
        		return;
        	}
        	uiDialogNav.open();
        })
    };
    
    // 初始化
    pageview.init();

    return pageview;
})