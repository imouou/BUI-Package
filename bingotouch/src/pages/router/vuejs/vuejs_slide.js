// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};
    // 主要内容
    pageview.init = function() {
        // 找到当前页的对象
        var pageDom = router.$(".bui-page")[0];

        // vue 的数据
        var pageVue = new Vue({
          el: pageDom,
          data: {
            uiSlide : null,
            slideItems: []
          },
          methods: {
            slide: function (data) {
                var slideDom = router.$(".slide-vue")[0];
                // 渲染数据
                this.slideItems = data;
               
                // dom 渲染完成以后执行
                this.$nextTick(function(){
                    this.uiSlide = bui.slide({
                      id: router.$(".slide-vue"),
                      height:300
                  })
                })
            }
          }
        });

        bui.ajax({
            url: "http://www.easybui.com/demo/json/chuangyi/article-list.json"
        }).then(function (data) {
            // 限制渲染的条数
            data.length = 3;

            // 渲染vue
            pageVue.slide(data);
            
        });
        
    }

    // 动态加载依赖vuejs, 如果全局用到,把脚本依赖放在 index.html 
    loader.import(["js/plugins/vue.min.js"],function(){
        // 初始化
        pageview.init();

    });

    return pageview;
})