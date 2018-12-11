loader.define(function(require,exports,module) {

   bui.on("pageready",function(){
        // 如果需要对ready多处调用,可以监听ready事件
    })
    // 事件监听
    bui.on("pagebefore",function (argument) {
        console.log("pagebefore")
    })
    bui.on("pageinit",function (argument) {
        console.log("pageinit")
    })
    bui.on("onload",function (argument) {
        console.log("onload")
    })
    bui.on("pageready",function (argument) {
        console.log("pageready")
    })
})
