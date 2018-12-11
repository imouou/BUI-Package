loader.define(function(require,exports,module) {

    // 监听后退事件
   var flag = 0;
   document.addEventListener("backbutton", function() {
    
    if (flag == 0) {
     bui.hint("再按一次就退出应用了!");
        flag = flag + 1;
         //5s后重新设置回去
         setTimeout(function() {
          flag = 0;
         }, 5000);
    } else if (flag == 1) {
        app.exit();
    }
   }, false);
})
