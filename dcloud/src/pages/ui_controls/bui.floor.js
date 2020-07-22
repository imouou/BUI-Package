/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

        // 初始化
        var uiFloor = bui.floor({
            id: "#floor",
            menu: "#floorNav", // id两个单词必须驼峰氏写法,不能中横杠
            floorItem: ".bui-floor-item", // 默认,可不填
        })

    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})