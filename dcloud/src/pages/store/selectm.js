loader.define(function(require, exports, module) {
    /**
     * 设计思路说明:
     * 左边列表A: selectA
     * 右边列表B: selectB
     * 左边选中列表暂存区A: selectAChecked
     * 右边选中列表暂存区B: selectBChecked
     * 点击列表, 往暂存区存放对应的数据, 并且通过watch 暂存区的数据变更,把按钮的状态变成能够操作.
     * 点击按钮添加到B, 则把右边列表数据,合并A选中的暂存区, 并删除选中状态, 清空A暂存区数据
     * 点击按钮添加到A, 则把左边列表数据,合并B选中的暂存区, 并删除选中状态, 清空B暂存区数据
     */

    var bs = bui.store({
            scope: "page", // 用于区分公共数据及当前数据的唯一值
            data: {
                canAdd: {
                    disabled: true
                },
                canDel: {
                    disabled: true
                },
                selectAChecked: [], // A区选中暂存区
                selectBChecked: [], // B区选中暂存区
                selectA: [
                  { text: 'One', value: 'A', selected: false },
                  { text: 'Two', value: 'B', selected: false },
                  { text: 'Three', value: 'C', selected: false }
                ],
                selectB: [],
            },
            // log: true,
            methods: {
                setStatus: function (target,index,checked) {

                    var selectedItem = this[target][index],
                        selecteds = this[checked],
                        // 判断是否唯一
                        indexs = bui.array.index(this[target][index].value,selecteds,"value");

                    // 选中暂存区的增加或减少
                    if( indexs > -1 ){
                        // 删除
                        selecteds.splice(indexs,1);
                    }else{
                        // 增加
                        selecteds.push(selectedItem);
                    }


                    // 修改选中状态
                    this[target][index].selected = !this[target][index].selected;
                    // 替换第几条数据并触发数据this[target] 的dom变更
                    bui.array.set(this[target],index,this[target][index]);
                },
                moveSelect: function (target,checked,targetB) {

                    // 修改按钮状态
                    var btn = checked == "selectBChecked" ? "canDel" : "canAdd";

                    if( this[btn].disabled ){ return; }

                    // 移动过去以后,不需要选中状态
                    this[checked].forEach(function (item) {
                        item.selected = false;
                    })

                    // 合并并触发 this.selectB
                    bui.array.merge(this[target],this[checked]);

                    // 删除this.selectA选中数据,通过value字段比对,支持多个
                    bui.array.delete(this[targetB],this[checked],"value");

                    // // 清空暂存区数据
                    bui.array.empty(this[checked]);
                },
            },
            watch: {
                selectAChecked: function (data) {
                    // 修改添加按钮状态
                    this.canAdd.disabled = !data.length;
                },
                selectBChecked: function (data) {
                    // 修改删除按钮状态
                    this.canDel.disabled = !data.length;
                }
            },
            computed: {},
            templates: {
                // 联动的示例,增加了事件绑定
                tplSelect: function (data,target,targetChecked) {

                    var html ='';
                    data.forEach(function (item,i) {
                        var active = item.selected ? "active" : "";
                        // $index 为内置的动态索引, i 不一定等于 $index
                        html +=`<li b-click='page.setStatus(${target},$index,${targetChecked})' class="bui-btn ${active}">${item.text}</li>`;
                    })
                    return html;
                }
            },
            mounted: function () {
                // 加载后执行
            }
        })

})
