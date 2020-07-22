loader.define(function(require, exports, module) {


    window.bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            firstName: "",
            lastName: "",
            // 数组的判断需要特殊处理
            list: [],
            active: false,
            // 例子2: 
            a: 2,
            // 例子3:
            cents: 100
        },
        methods: {
            changeA: function(e) {
                this.a++;
            }
        },
        watch: {},
        computed: {
            // 例子1. 这种方式,只要firstName,lastName 改变,会触发fullName 的改变, 但fullName改变不会触发对应的改变
            fullName: function() {
                var val = this.firstName + ' ' + this.lastName;
                return val;
            },
            hasList: function() {
                console.log(this.list)
                return this.list.length
            },

            // 2. 双向联动 fullName 改变,会触发各自改变 firstName,lastName,
            // fullName: {
            //     // getter
            //     get: function () {
            //       return this.firstName + ' ' + this.lastName
            //     },
            //     // setter
            //     set: function (newValue) {
            //       var names = newValue.split(' ')
            //       this.firstName = names[0]
            //       this.lastName = names[names.length - 1]
            //     }
            // },

            disabled: function() {
                // 先缓存相关联的依赖值
                var firstName = this.firstName,
                    lastName = this.lastName;
                if (firstName !== "" && lastName !== "") {
                    return false;
                } else {
                    return true;
                }
            },

            // 例子2: 
            aDouble: function() {
                return this.a * 2
            },
            // 例子3: 
            price: {
                set: function(val) {
                    this.cents = val * 100;
                },
                get: function() {
                    return (this.cents / 100).toFixed(2);
                }
            }
        },
        templates: {},
        mounted: function() {
            // 加载后执行
            // 修改数组的值,初始化时不是数组,需要通过这种方式设置,改变也需要通过赋值的方式,才能触发computed 的变更.
            this.list.push(123)

            // 例子3: 处理商品价格转成浮点数
            this.price = 2;

            console.log(this.price)
            console.log(this.$data.cents)
        }
    })

})