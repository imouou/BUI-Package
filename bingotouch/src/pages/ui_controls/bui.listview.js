loader.define(function(require,exports,module) {

    var uiListview = bui.listview({
            id: "#listview",
            data: [{ "text": "置顶", "classname":"primary"},{ "text": "删除", "classname":"danger"}],
            position:"right",   //默认就是右边,所以可以不用传
            callback: function (e) {
                // this 为滑动出来的操作按钮
                var $this = $(e.target);

                var text = $this.text();
                    if( text == '删除' ){
                        bui.confirm("确定要删除吗",function (e) {
                            //this 是指点击的按钮
                            var text2 = $(e.target).text();
                            if( text2 == "确定"){
                                // 执行删除整行操作
                                $this.parents("li").fadeOut(300,function () {
                                    $(this).remove();
                                });
                            }
                        })
                    }
                // 不管做什么操作,先关闭按钮,不然会导致第一次点击无效.
                this.close();
            }
        });

    // 演示交互,以下代码不需要
    // 默认打开
    uiListview.open({
        index:2
    })

    setTimeout(function (argument) {
        uiListview.close()
    },1000)

})
