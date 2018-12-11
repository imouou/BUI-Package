loader.define(function(require,exports,module) {
    var pageview = {};

    pageview.bind = function () {
        
        // 手机号,帐号是同个样式名, 获取值的时候,取的是最后一个focus的值
        bui.input({
            id: ".user-input",
            callback: function (e) {
                // 清空数据
                this.empty();
            }
        })


        // 密码显示或者隐藏
        var password = bui.input({
            id: "#passwordInput",
            iconClass: ".icon-eye",
            onBlur: function (e) {
                // 注册的时候校验只能4-18位密码
                var rule = /^[a-zA-Z0-9_-]{4,18}$/;
                if( !rule.test(e.target.value) ){
                    bui.hint("密码只能由4-18位字母或者数字上下横杠组成");
                    return false;
                }

                return true;
            },
            callback: function (e) {
                //切换类型
                this.toggleType();
                //
                $(e.target).toggleClass("active")
            }
        })
        // 确认密码
        var passwordConfirm = bui.input({
            id: "#passwordConfirm",
            iconClass: ".icon-eye",
            onBlur: function (e) {
                var val = password.value();

                if( val !== e.target.value ){
                    bui.hint("两次密码需要保持一致");
                }
                return true;
            },
            callback: function (e) {
                //切换类型
                this.toggleType();
                //
                $(e.target).toggleClass("active")
            }
        })

        // 评论的长度限制
        var comment = bui.input({
            id: "#comment",
            target: "textarea",
            showIcon: false,
            maxLength: 100,
            showLength: true
        })

    }

    pageview.init = function () {

        // 绑定事件
        this.bind();
    }


    pageview.init();
})
