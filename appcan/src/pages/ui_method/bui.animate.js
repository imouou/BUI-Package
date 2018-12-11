loader.define(function(require,exports,module) {
    
    var uiAnimate = bui.animate($("#animate"));
            
        $("#left").on("click",function () {
            //清空之前的记录重新做位移
            uiAnimate.left(100).start()
        })
        $("#right").on("click",function () {
            uiAnimate.right(100).start()
        })
        $("#up").on("click",function () {
            uiAnimate.up(100).start()
        })
        $("#down").on("click",function () {
            uiAnimate.down(100).start()
        })
        $("#rotate").on("click",function () {
            uiAnimate.rotate(45).start()
        })
        $("#scaleBigger").on("click",function () {
            uiAnimate.scale("2,2").start()
        })
        $("#scaleSmaller").on("click",function () {
            uiAnimate.scale("0.5,0.5").start()
        })
        $("#skew").on("click",function () {
            uiAnimate.skew(30).start()
        })
        $("#continuous").on("click",function () {
        // clear 是为了清空之前的动画,在初始化位置位移,如果不要stop,则是继续位移,可以一直执行
            uiAnimate.clear().left(100).scale("3,3").rotate(20).start();
        })
        $("#join").on("click",function () {
        // clear 是为了清空之前的动画,在初始化位置位移,如果不要clear,则是继续位移,可以一直执行
            uiAnimate.clear().left(100).start(function () {
                this.skewX(10).start(function () {
                    this.left(200).start()
                });
            })
        })
        $("#reverse").on("click",function () {
            uiAnimate.clear().up(100).start(function () {
                this.right(100).start(function () {
                    this.down(100).start(function() {
                        this.stop();
                    })
                });

            })
        })

        $("#stop").on("click",function () {
            uiAnimate.stop()
        })
        $("#clear").on("click",function () {
            uiAnimate.clear()
        })
})
