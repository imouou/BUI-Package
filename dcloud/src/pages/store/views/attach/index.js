loader.define(function(require,exports,module){
    // 初始化数据行为存储
    var view = {
        data: {
           attachData: [{
             title:"2020年度预算审批表",
             icon:"images/icons/icon-word.png"
           },{
             title:"2020年度预算审批表",
             icon:"images/icons/icon-word.png"
           },{
             title:"2020年度预算审批表",
             icon:"images/icons/icon-word.png"
           }],
        },
        templates: {
          tplAttach: function(data){
            var html = '';
            data.forEach(function (item,index) {
              html +=`<li class="bui-btn bui-box">
                  <div class="bui-icon"><img src="${item.icon}" alt=""></div>
                  <div class="span1">
                      <h3 class="item-title">${item.title}</h3>
                      <p class="item-text"><b class="type">集团公司内签件</b> <b class="time">2019-03-20  15:05</b></p>
                  </div>
              </li>`
            })

            return html;
          }
        },
        mounted: function(){
            // 数据解析后执行
            console.log("mounted attach")
        }
    }
    return view

})
