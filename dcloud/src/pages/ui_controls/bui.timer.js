loader.define(function(require, exports, module) {

    var pageview = {
        init: function() {
            this.bind();
        },
        bind: function() {
            var that = this;
            var time = null;
            router.$("#number5").click(function() {
                if (time && time.status()) {
                    time.stop()
                }
                time = that.timeDown(5, "number");
                time.start();
            })
            router.$("#second5").click(function() {
                if (time && time.status()) {
                    time.stop()
                }
                time = that.timeDown(5, "second");
                time.start();
            })
            router.$("#minute5").click(function() {

                if (time && time.status()) {
                    time.stop()
                }
                time = that.timeDown(5, "minute");
                time.start();
            })
            router.$("#hour5").click(function() {

                if (time && time.status()) {
                    time.stop()
                }
                time = that.timeDown(1, "hour");
                time.start();
            })
            router.$("#day5").click(function() {
                if (time && time.status()) {
                    time.stop()
                }
                time = that.timeDown(1, "day");
                time.start();
            })
            router.$("#date5").click(function() {
                if (time && time.status()) {
                    time.stop()
                }
                // 离12点还有多少时间
                var afterDate = bui.date.after(new Date(), 1);
                time = that.timeDown(afterDate, "date");
                time.start();
            })
        },
        timeDown: function(num, type) {

            var second5 = bui.timer({
                target: "#timerNumber",
                onEnd: function() {
                    bui.alert("倒计时结束")
                },
                type: type || "number",
                time: num
            })
            return second5;
        }
    }

    pageview.init();


})