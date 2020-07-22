loader.define(function(require, exports, module) {

    loader.require("css/style.css", function(res) {
        // 加载某个模块r
        console.log(res);
    })
})