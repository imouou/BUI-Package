loader.define(function(require, exports, module) {

    // 最简单的版本
    bui.extend({
        name: "foldmenu",
        config: {
            id: ""
        },
        callback: function(opt) {

            // that 指向插件的抛出的公共方法, option widget 等
            let that = this;
            // this.config 为已经跟初始化参数合并以后的结果;
            let param = this.config;
            // 缓存选择器
            let $id = null;

            // 要抛给开发者的方法
            that.init = function(option) {
                // 对直接调用init方法的参数进行合并
                param = $.extend(true, {}, param, option);

                // 单页多页选择器,如果是单页,这个插件只能在模块里面用, 不能在bui.ready
                $id = bui.$(param.id);

                console.log($id)
                    // 绑定事件,点击的时候增加激活样式
                $id.children("dt").click(function(e) {
                    var hasActive = $(this).hasClass("active");
                    if (hasActive) {
                        $(this).removeClass("active");
                    } else {
                        // 加上样式以后会自动对箭头及下一层级展示处理;
                        $(this).addClass("active");
                    }
                })

                return that;
            }

            // 如果有依赖bui控件,应该在这里写,这样方便外部调用
            // that.widgets.loading = ui.loading({
            //     appendTo: opt.id
            // });

            // 如果需要销毁的生命周期,则在这里加上.
            // that.beforeDestroy = function() {
            //
            //     return that;
            // }

            // 必须传id
            if (!param.id) {
                // 抛出错误
                bui.showLog("必须传id参数.")
                return that;
            }
            // 默认先初始化一次
            return this.init(opt);
        }
    });

    // 初始化
    var uiFolder = bui.foldmenu({ id: "#folder" });


})