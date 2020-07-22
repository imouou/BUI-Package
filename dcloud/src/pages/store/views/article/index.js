loader.define(function(require,exports,module){
  // 初始化数据行为存储
  var view = {
      data: {
         articleData: [{
           title:"关于集团召开2020年工作计划与预算的通",
           icon:"images/icons/icon-attachment.png"
         },{
           title:"召开2020年工作计划与预算的通",
           icon:"images/icons/icon-attachment.png"
         },{
           title:"关于集团召开2020年工作计划与预算的通",
           icon:"images/icons/icon-attachment.png"
         }],
      },
      templates: {
        tplArticle: function(data){
          var html = '';
          data.forEach(function (item,index) {
            html +=`<li class="bui-btn bui-box">
                <div class="bui-icon"><img src="${item.icon}" alt=""></div>
                <div class="span1">${item.title}</div>
                <i class="icon-listright"></i>
            </li>`
          })

          return html;
        }
      },
      mounted: function(){
          // 数据解析后执行
          console.log("mounted arrticle")
      }
  }
  return view
})
