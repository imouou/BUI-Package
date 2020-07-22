/**
 * 通用登录模板,包含输入交互,提交需要自己绑定验证
 * 默认模块名: pages/login/login
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var userInput = null,
        passwordInput = null;

    // 初始化数据行为存储
    var bs = bui.store({
        scope: "login",
        data: {
            form: {
                user: "",
                password: ""
            }
        },
        methods: {
            checkLogin: function() {
                // 读取用 $data
                var username = this.$data.form.user;
                if (!username) {
                    bui.hint("帐号不能为空");
                    return false;
                }
                // console.log(username);
                // 把用户信息传给登录窗口
                bui.trigger("loginsuccess", this.$data.form);
            }
        },
        mounted: function() {
            var that = this;
            // 数据解析后执行
            // 手机号,帐号是同个样式名, 获取值的时候,取的是最后一个focus的值
            userInput = bui.input({
                id: ".user-input",
                onBlur: function() {
                    that.form.user = this.value();
                },
                callback: function(e) {
                    // 清空数据
                    this.empty();
                }
            })

            // 密码显示或者隐藏
            passwordInput = bui.input({
                id: ".password-input",
                iconClass: ".icon-eye",
                onBlur: function(e) {
                    if (e.target.value == '') { return false; }
                    // 注册的时候校验只能4-18位密码
                    var rule = /^[a-zA-Z0-9_-]{4,18}$/;
                    if (!rule.test(e.target.value)) {
                        bui.hint("密码只能由4-18位字母或者数字上下横杠组成");
                        return false;
                    }
                    // 跟设置同步
                    that.form.password = this.value();
                    return true;
                },
                callback: function(e) {
                    //切换类型
                    this.toggleType();
                    //
                    $(e.target).toggleClass("active")
                }
            })

        }
    })

    // 输出模块
    return bs;
})