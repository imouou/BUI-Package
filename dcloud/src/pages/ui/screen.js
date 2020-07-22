loader.define(function(require, exports, module) {

    var ratio = window.devicePixelRatio;
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    console.log(ratio)
    console.log(width)
    console.log(height)

    router.$("#vWidth").html(width)
    router.$("#vHeight").html(height)
    router.$("#vDpi").html(ratio)
})