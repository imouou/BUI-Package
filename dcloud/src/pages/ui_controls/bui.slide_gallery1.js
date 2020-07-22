loader.define(function(require,exports,module) {

    var photoData = [{
      title: "标题1",
      background: "images/list-img1.png"
    },{
      title: "标题2",
      background: "images/list-img2.png"
    },{
      title: "标题1",
      background: "images/list-img1.png"
    },{
      title: "标题2",
      background: "images/list-img2.png"
    }];

    // 快速初始化
    var uiSlide = bui.slide({
        id:"#slideGallery",
        fullscreen:true,
        autopage: true,
        data: photoData
    })

    $("#slideGallery").on("click","li",function () {
      $("#slideGallery").css("display","none");
    })
    var tplPhoto = function (data) {
      var html = "";
      data.forEach(function (item,i) {
        html +=`<div class="span1">
  		  	<img src="${item.background}" alt="">
  		  </div>`
      })

      return html;
    }

    var html = tplPhoto(photoData);
    $("#gallery").html(html).on("click",".span1",function () {
      var index = $(this).index();

      uiSlide.to(index,"none")
      $("#slideGallery").css("display","block");
    });


    //

    // 快速初始化
    var uiSlide2 = bui.slide({
        id:"#slideGallery2",
        fullscreen:true,
        autopage: true,
        data: photoData
    })

    var uiDialog = bui.dialog({
        id: "#uiDialog",
        fullscreen: true,
    }).on("open",function () {
      // 遮盖掉头部
      router.$("main").css("position","static");
    });

    var html = tplPhoto(photoData);
    $("#gallery2").html(html).on("click",".span1",function () {
      var index = $(this).index();

      uiDialog.open();
      // 跳转到第几个
      uiSlide2.to(index,"none");
    });


})
