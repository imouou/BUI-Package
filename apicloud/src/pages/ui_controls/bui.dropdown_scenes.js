loader.define(function(require,exports,module) {

    /* 遮罩示例 start */
        // 下拉菜单有遮罩的情况
        var uiMask = bui.mask({
            appendTo:"#main",
            zIndex:9,
            callback: function(){
                barRight.hide();
                barMain.hide();
            }
        });

        //下拉菜单 在顶部右边
        var barRight = bui.dropdown({
            id: "#barRight",
            showArrow: true,
            width: 200
        });

        // 通过监听事件绑定
        barRight.on("show",function () {
            uiMask.show();
        })
        barRight.on("hide",function () {
            uiMask.hide();
        })

        //下拉菜单 在顶部中间
        var barMain = bui.dropdown({
            id: "#barMain",
            showArrow: true,
            relative: false
        })

        // 通过监听事件绑定
        barMain.on("show",function () {
            uiMask.show();
        })
        barMain.on("hide",function () {
            uiMask.hide();
        })
        
    /* 遮罩示例 end */


        //搜索下拉菜单
        var searchDropdown = bui.dropdown({
            id: "#searchDropdown",
            //设置relative为false,二级菜单继承父层宽度
            showArrow: true,
            relative: false,
            callback: function () {
                console.log( searchDropdown.value() )
            }
        })

        //下拉菜单在底部相对父层宽度
        var footDropdown = bui.dropdown({
            id: "#footDropdown",
            showArrow: true,
            
            //设置relative为false,二级菜单继承父层宽度
            relative: false,
            callback: function () {
                console.log( footDropdown.value() )
            }
        })

        //下拉菜单在底部相对页面宽度
        var footDropdown2 = bui.dropdown({
            id: "#footDropdown2",
        })

        //下拉菜单 在顶部右边
        var barLeft2 = bui.dropdown({
            id: "#barLeft2",
            position: "top",
            showArrow: true,
            width: 200
        });
        //下拉菜单 在顶部右边
        var barRight2 = bui.dropdown({
            id: "#barRight2",
            position: "top",
            showArrow: true,
            width: 200
        });
        //下拉菜单 在顶部右边
        var barMain2 = bui.dropdown({
            id: "#barMain2",
            position: "top",
            showArrow: true,
            width: 200
        });
})
