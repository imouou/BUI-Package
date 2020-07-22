loader.define(function(require, exports, module) {

    // 评分
    var uiRating = bui.rating({
        id: "#rating",
        value: 3
    });

    // 展示
    var uiRating3 = bui.rating({
        id: "#rating3",
        disabled: true,
        value: 4
    });

    // 展示星星的百分比
    // uiRating3.show(3.4);
})