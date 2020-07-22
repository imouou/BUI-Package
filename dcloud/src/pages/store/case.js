loader.define(function(require, exports, module) {

    var bs = bui.store({
        scope: "page", // 用于区分公共数据及当前数据的唯一值
        data: {
            todo: [{
                id: 1,
                title: "参加项目会议"
            }, {
                id: 2,
                title: "项目启动会"
            }, {
                id: 3,
                title: "看电影"
            }],
            todoText: "",
            nextTodoId: 4
        },
        methods: {
            addTodo: function(e) {

                if (this.todoText) {
                    this.todo.push({
                        id: this.nextTodoId++,
                        title: this.todoText
                    })
                    this.todoText = "";
                } else {
                    bui.hint("请填写待办事项")
                }

            },
            removeTodo: function(index) {
                // 方法1: 通过索引删除
                this.todo.splice(index, 1);
                this.todoText = "";

                // 方法2: 通过唯一id删除, id 为数字,需要类型完全匹配才能删除
                // var idNum = parseInt(id);

                // bui.array.remove(idNum,this.todo,"id");
                // this.todoText = "";
            }
        },
        templates: {
            tplTodo: function(data, e) {
                var _self = this;
                var html = "";

                data.forEach(function(item, i) {
                    // $index: 当前索引
                    // $parentIndex: 父层索引,只能取一层
                    // $this: 点击本身的dom
                    // $parent: 父层的dom
                    // $children: 子集的$dom
                    // $text: 文本
                    // $html: 当前的内容包含html
                    html += `<li id="${item.id}" class="bui-btn bui-box">
                                    <div class="span1">${item.title}</div>
                                    <i b-click="page.removeTodo($parentIndex)" class="icon-remove large"></i>
                                </li>`;
                })
                return html;
            }
        },
        mounted: function() {
            // 加载后执行
        }
    })
})