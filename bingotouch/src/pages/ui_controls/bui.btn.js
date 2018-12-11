loader.define(function(require,exports,module) {

    // 绑定页面的按钮有href属性的都会跳转,单页默认在index.js 绑定一次就行.
    // bui.btn({
    //     id:".bui-page",
    //     handle: ".bui-btn"
    // })
    
    //提交
    bui.btn("#submit").submit(function (loading) {
        // bui.alert("数据已经提交成功!",function(){
        //     //关闭进度条,放在ajax的成功回调里面
        //     loading.stop();
        // })
    })
})
