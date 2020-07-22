loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            // 获取参数
            var params = bui.history.getParams(module.id)
            console.log(params)
            this.list = this.listInit(params);
        },
        listInit: function(opt) {
            // 根据外部的类型,来区分不同的模板
            var template = this.template(opt);
            if (this.list) {
                return this.list;
            }
            // 列表控件 js 初始化:
            var uiList = bui.list({
                id: `#${module.id} .bui-scroll`,
                // url: "http://rap2api.taobao.org/app/mock/84605/example/getNews",
                url: opt.url || `${module.path}/index.json`,
                pageSize: 5,
                data: {
                    type: opt.type
                },
                //如果分页的字段名不一样,通过field重新定义
                field: {
                    page: "page",
                    size: "pageSize",
                    data: "data"
                },
                callback: function(e) {},
                template: template
            });
            return uiList;
        },
        template: function(opt) {
            var tplFun = this["templates"][opt.listtemplate] || this["templates"]["templateNews"];

            return tplFun;
        },
        templates: {
            templateNews: function(data) {
                var html = "";
                data.forEach(function(el, index) {

                    html += `<li class="bui-btn bui-box">
                        <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                        <div class="span1">
                            <h3 class="item-title">${el.name}</h3>
                            <p class="item-text">${el.address}</p>
                            <p class="item-text">${el.distance}公里</p>
                        </div>
                    </li>`
                });
                return html;
            },
            templateTodo: function(data) {
                var html = "";
                data.forEach(function(el, index) {

                    html += `<li class="bui-btn bui-box">
                        <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                        <div class="span1">
                            <h3 class="item-title">${el.name}</h3>
                            <p class="item-text">${el.address}</p>
                        </div>
                        <span class="danger">待处理</span>
                    </li>`
                });
                return html;
            },
            templateDone: function(data) {
                var html = "";
                data.forEach(function(el, index) {

                    html += `<li class="bui-btn bui-box">
                        <div class="bui-thumbnail"><img src="${el.image}" alt=""></div>
                        <div class="span1">
                            <h3 class="item-title">${el.name}</h3>
                            <p class="item-text">${el.address}</p>
                        </div>
                        <span class="success">已完成</span>
                    </li>`
                });
                return html;
            }
        }

    }

    pageview.init();

    return pageview;
})