loader.define(function(require, exports, module) {
    // 初始化
    var uiSlide = bui.slide({
       id:"#slide",
       height:380,
       autopage:true
     })

    // 请求成功以后渲染
     bui.ajax({
         url: "http://www.easybui.com/demo/json/shop.json",
         data: {},//接口请求的参数
         // 可选参数
         method: "GET"
     }).then(function(result){

         // 初始化
         uiSlide.init({
           template: function () {
               var html = `<div class="bui-slide-main">
                             <ul>${result.data.map((item,index)=>`
                                   <li><img src="images/banner01.png" alt=""></li>`
                               ).join('') }
                             </ul>
                           </div>`

               return html;
           }
         })
     });

    router.$("#prev").on("click", function() {
        uiSlide.prev();
    })
    router.$("#next").on("click", function() {
        uiSlide.next();
    })
    router.$("#autoplay").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.start();
        } else {
            uiSlide.stop();
        }
    })
    router.$("#unlock").on("change", function() {
        var isChecked = $(this).is(":checked");
        if (isChecked) {
            uiSlide.unlock();
        } else {
            uiSlide.lock();
        }
    })
})