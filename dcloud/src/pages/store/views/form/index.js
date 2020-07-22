/**
 * 空模块, xxx 为创建时候起的模块名
 * 默认模块名为路径: pages/xxx/xxx
 * @return {[object]}  [ 返回一个对象, 可以通过loader加载模块的方法.]
   @example

   loader.require(["pages/xxx/xxx"],function(mod){
      // mod 指向xxx 抛出的方法
      mod.init()
   })
 */
loader.define(function(require,exports,module) {
    // 在这里初始化控件
    var pageview = {
        data: {
          formData: []
        },
        methods: {
          callhim: function(phone){
            // 打电话
            bui.unit.tel(phone);
          },
          getUserinfo: function(id){
            // 获取用户信息
            console.log(`${id}用户信息`)
          }
        },
        templates: {
          tplForm: function(data) {
              var html = "";
              html += `<ul class="bui-list list-form">
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">标题</label>
                              <div class="span1">
                                  <div class="bui-value">《广州XXX2020年年中预算审批》</div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">拟稿部门</label>
                              <div class="span1">
                                  <div class="bui-value">信息中心</div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">拟稿人</label>
                              <div class="span1">
                                  <div class="bui-value user" b-click="page.getUserinfo(陈主管)">陈主管<i class="icon-userface"></i></div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">电话</label>
                              <div class="span1">
                                  <div class="bui-value phone" b-click="page.callhim2(13800138000)">
                                      <b>13800138000</b><i class="icon-phone"></i>
                                  </div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">是否会签</label>
                              <div class="span1">
                                  <div class="bui-value">是</div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">会签部门</label>
                              <div class="span1">
                                  <div class="bui-value">行政中心</div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">附件</label>
                              <div class="span1">
                                  <div class="bui-value">3</div>
                              </div>
                          </li>
                          <li class="bui-btn clearactive bui-box-align-top">
                              <label class="bui-label">拟稿时间</label>
                              <div class="span1">
                                  <div class="bui-value">2020-03-04</div>
                              </div>
                          </li>
                      </ul>`;
              return html;
          }
        },
		beforeMount: function(){
			// console.log(this.$data.formData)
		},
        mounted: function(param) {
            console.log("mounted form")
        }
    };

    // 抛出模块
    return pageview;
})
