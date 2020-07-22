// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 动态加载依赖vuejs, 如果全局用到,把脚本依赖放在 index.html
    loader.import(["http://www.jq22.com/demo/vide7.1.0201807161136/css/video-js.min.css","http://www.jq22.com/demo/vide7.1.0201807161136/js/video.min.js"],function(){

			var myPlayer = videojs('my-video');
			videojs("my-video").ready(function(){
				var myPlayer = this;
				myPlayer.play();
			});

    });

    return pageview;
})
