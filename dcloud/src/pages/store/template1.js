loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            citysCheck: [],
            citys: [],
        },
        templates: {
            tplListCheck: function(data) {
                var _self = this;
                var html = "";
                data.forEach(function(item, i) {

                    html += `<li class="bui-btn"><label><input type="checkbox" name="city" value="${item}" b-model="page.citysCheck" >${item}</label></li>`;
                })
                return html;
            }
        },
        mounted: function() {

            this.oneTick("citys", function(e) {
                console.log("只监听一次,数据更新一次,执行一次")
            })

            // 第二次的回调不会有
            // this.oneTick("citys", function() {
            //     console.log(222)
            // })

            // 模拟数据动态改变
            setTimeout(() => {
                this.citys.push("上海");
                this.citys.unshift("广州", "北京", "深圳");
                this.citysCheck.push("广州", "深圳")

                // bui.array.merge(this.citysCheck,["广州","深圳"])
                // bui.array.merge(this.citys,["广州","深圳","上海","北京"])

            }, 1000)


        }
    })

})