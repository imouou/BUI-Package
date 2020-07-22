loader.define(function(require, exports, module) {

    var photoData = [{
        title: "标题1",
        background: "images/list-img1.png"
    }, {
        title: "标题2",
        background: "images/list-img2.png"
    }, {
        title: "标题3",
        background: "images/list-img1.png"
    }, {
        title: "标题4",
        background: "images/list-img2.png"
    }, {
        title: "标题5",
        background: "images/list-img1.png"
    }, {
        title: "标题6",
        background: "images/list-img2.png"
    }, {
        title: "标题7",
        background: "images/list-img1.png"
    }, {
        title: "标题8",
        background: "images/list-img2.png"
    }, {
        title: "标题9",
        background: "images/list-img1.png"
    }, {
        title: "标题10",
        background: "images/list-img2.png"
    }, {
        title: "标题11",
        background: "images/list-img1.png"
    }, {
        title: "标题12",
        background: "images/list-img2.png"
    }, {
        title: "标题13",
        background: "images/list-img1.png"
    }, {
        title: "标题14",
        background: "images/list-img2.png"
    }, {
        title: "标题15",
        background: "images/list-img1.png"
    }];

    var pageview = {},
        uiSlide2 = null,
        uiDialog = null;

    pageview.init = function() {
        // 渲染展示的图片
        var html = this.tplPhoto(photoData);
        $("#gallery2").html(html);

        if (uiSlide2 == null) {
            // 渲染全屏的图片轮播
            uiSlide2 = bui.slide({
                id: "#slideGallery2",
                fullscreen: true,
                autopage: true,
                data: photoData
            })
        }

        if (uiDialog == null) {
            // 渲染全屏的图片轮播
            uiDialog = bui.dialog({
                id: "#uiDialog",
                fullscreen: true,
            })
        }

    }

    pageview.bind = function() {

        // 绑定打开大图的事件
        $("#gallery2").on("click", ".span1", function() {
            var index = $(this).index();

            uiDialog.open();
            // 跳转到第几个
            uiSlide2.to(index, "none");
        });
    }

    pageview.tplPhoto = function(data) {
        var html = "";
        data.forEach(function(item, i) {
            html += `<div class="span1">
  		  	<img src="${item.background}" alt="">
  		  </div>`
        })

        return html;
    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();

})