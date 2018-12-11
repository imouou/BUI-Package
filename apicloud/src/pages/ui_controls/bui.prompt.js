loader.define(function(require,exports,module) {

    router.$("#btnOpenPrompt").on("click",function (argument) {
       var uiPrompt = bui.prompt("请输入您的名字",function(e){
               var text = $(e.target).text();
               if( text == "取消"){
                   this.close();
               }else{
                   if( this.value() ){
                       // 获取输入的值
                       bui.hint("您好,"+this.value());
                       this.close();
                   }else{
                       bui.hint("名字不能为空");
                   }
               }
           })
    })
    

})
