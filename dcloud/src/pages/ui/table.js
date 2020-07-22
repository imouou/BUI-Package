loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            var uiDropdown = bui.dropdown({
                id: "#uiDropdown",
                data: [{
                    name: "1",
                    value: "1"
                }, {
                    name: "2",
                    value: "2"
                }, {
                    name: "3",
                    value: "3"
                }, {
                    name: "4",
                    value: "4"
                }],
                position: "top",
                //设置relative为false,二级菜单继承父层宽度
                relative: false,
                callback: function(e) {}
            });
        }
    };

    pageview.init();

    return pageview;
})