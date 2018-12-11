loader.define(function(require,exports,module) {
    
    //toggle动画示例
    var uiToggle = bui.toggle({id:"#animate",effect:"fadeInRight",inOrder:true});

        
    $("#fadeIn").on("click",function () {
        uiToggle.show();
    })

    $("#fadeOut").on("click",function () {
        uiToggle.hide();
    })
    $("#showIn").on("click",function () {
        uiToggle.show("showIn");
    })

    $("#showOut").on("click",function () {
        uiToggle.hide("showOut");
    })

    $("#fadeInLeft").on("click",function () {
        uiToggle.show("fadeInLeft");
    })

    $("#fadeOutLeft").on("click",function () {
        uiToggle.hide("fadeOutLeft");
    })
    $("#fadeInRight").on("click",function () {
        uiToggle.show("fadeInRight");
    })

    $("#fadeOutRight").on("click",function () {
        uiToggle.hide("fadeOutRight");
    })
    $("#fadeInUp").on("click",function () {
        uiToggle.show("fadeInUp");
    })

    $("#fadeOutUp").on("click",function () {
        uiToggle.hide("fadeOutUp");
    })

    $("#fadeInDown").on("click",function () {
        uiToggle.show("fadeInDown");
    })

    $("#fadeOutDown").on("click",function () {
        uiToggle.hide("fadeOutDown");
    })

    $("#lightSpeedIn").on("click",function () {
        uiToggle.show("lightSpeedIn");
    })

    $("#lightSpeedOut").on("click",function () {
        uiToggle.hide("lightSpeedOut");
    })
        
    $("#zoomIn").on("click",function () {
        uiToggle.show("zoomIn");
    })

    $("#zoomOut").on("click",function () {
        uiToggle.hide("zoomOut");
    })
    $("#rollIn").on("click",function () {
        uiToggle.show("rollIn");
    })

    $("#rollOut").on("click",function () {
        uiToggle.hide("rollOut");
    })

    $("#bounceIn").on("click",function () {
        uiToggle.show("bounceIn");
    })

    $("#bounceOut").on("click",function () {
        uiToggle.hide("bounceOut");
    })
        
    $("#flipInX").on("click",function () {
        uiToggle.show("flipInX");
    })

    $("#flipOutX").on("click",function () {
        uiToggle.hide("flipOutX");
    })

    $("#flipInY").on("click",function () {
        uiToggle.show("flipInY");
    })

    $("#flipOutY").on("click",function () {
        uiToggle.hide("flipOutY");
    })
})
