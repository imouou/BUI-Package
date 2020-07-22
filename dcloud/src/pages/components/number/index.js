loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // 获取参数
            var params = bui.history.getParams(module.id)

            this.number = this.numberInit(params);
        },
        numberInit: function(opt) {
            var distance = bui.number({
                id: `#${module.id} .bui-number`
            })
            return distance;
        }
    }

    pageview.init();

    return pageview;
})