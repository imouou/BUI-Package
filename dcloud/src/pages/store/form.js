loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            message: "Hello bui.js",
        },
        methods: {
            submitForm: function(e) {
                console.log(document.forms["formTest"]["fname"][0].value)
                console.log(document.forms["formTest"]["fname"][1].value)
                    // return true 会刷新表单,提交到另外一个页面
                return false;
            },
            getFocus: function(e) {
                console.log(e.target.value, "focus")
            },
            getBlur: function(e) {
                // 可以用于校验该值是否正确
                console.log(e.target.value, "blur")
            }
        },
        watch: {},
        computed: {},
        templates: {},
        mounted: function() {
            // 加载后执行
        }
    })

})