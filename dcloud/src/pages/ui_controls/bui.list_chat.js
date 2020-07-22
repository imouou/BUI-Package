loader.define(function(require, exports, module) {

    var pageview = {};
    pageview.init = function() {
        this.chatlist();
        this.chatControl();
    }

    pageview.chatlist = function() {
        var uiList = bui.list({
            id: "#scrollList",
            url: "./bui.list_chat.json",
            relative: true,
            children: ".bui-panel",
            pageSize: 6,
            data: {},
            refreshTips: {
                start: "",
                release: "",
                end: "",
                success: "",
            },
            //如果分页的字段名不一样,通过field重新定义
            field: {
                page: "page",
                size: "pageSize",
                data: "data"
            },
            scroll: false, // 不需要滚动加载事件
            commandRefresh: "prepend", // 刷新不使用覆盖,使用增加在前面,
            onLoad: function(mod, res) {
                // 第一次加载以后滚动到底部
                this.toBottom();
                // 第一次加载如果没有数据时,提醒
                if (res.data.length < 1) {
                    bui.hint({
                        content: "暂无聊天记录",
                        position: "top",
                        appendTo: "main",
                    })
                }

            },
            onRefresh: function(mod, res) {
                // 每次下拉以后判断是否是最后一页的数据
                if (res.data.length < this.config.pageSize) {
                    bui.hint({
                        content: "已经最后一页",
                        position: "top",
                        appendTo: "main",
                    })
                }
            },
            template: function(data) {
                var html = "";
                var that = this;
                console.log(data)
                if (data.length) {

                    html += `
                    <div class="chat-line bui-box-center">
                        <div class="time">5月11日 08:30</div>
                    </div>`;
                    data.forEach(function(el, index) {
                        // 别人说的
                        var chatUserLine = `<div class="chat-line bui-box-align-top chat-target">
                                <div class="chat-icon"><img src="${el.image}" alt=""></div>
                                <div class="span1">
                                    <div class="chat-content bui-arrow-left">${el.content}</div>
                                </div>
                            </div>`;
                        // 自己说的
                        var chatMineLine = `<div class="chat-line bui-box-align-top chat-mine">
                                    <div class="span1">
                                        <div class="bui-box-align-right">
                                            <div class="chat-content bui-arrow-right">${el.content}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-icon"><img src="${el.image}" alt=""></div>
                                </div>`;

                        html += el.uid == 2 ? chatMineLine : chatUserLine;
                    });
                }

                return html;
            }
        })
    }

    pageview.chatControl = function() {
        // 发送的内容
        var $chatInput = bui.$("#chatInput"),
            // 发送按钮
            $btnSend = bui.$("#btnSend"),
            // 聊天的容器
            $chatPanel = bui.$(".chat-panel");

        // 绑定发送按钮
        $btnSend.on("click", function(e) {
            var val = $chatInput.val();
            var tpl = chatTpl(val);

            if (!$(this).hasClass("disabled")) {
                $chatPanel.append(tpl);
                $chatInput.val('');
                $(this).removeClass("primary").addClass("disabled");
            } else {
                return false;
            }
        });

        // 延迟监听输入
        $chatInput.on("input", bui.unit.debounce(function() {
            var val = $chatInput.val();
            if (val) {
                $btnSend.removeClass("disabled").addClass("primary");

            } else {
                $btnSend.removeClass("primary").addClass("disabled");

            }
        }, 100))

        var interval = null;
        var count = 3;
        // 安卓键盘弹出的时间较长;
        var time = bui.platform.isIos() ? 200 : 400;
        // 为input绑定事件
        $chatInput.on('focus', function() {

            var agent = navigator.userAgent.toLowerCase();
            interval = setTimeout(function() {
                if (agent.indexOf('safari') != -1 && agent.indexOf('mqqbrowser') == -1 &&
                    agent.indexOf('coast') == -1 && agent.indexOf('android') == -1 &&
                    agent.indexOf('linux') == -1 && agent.indexOf('firefox') == -1) {
                    //safari浏览器
                    window.scrollTo(0, 1000000);
                    setTimeout(function() {
                        window.scrollTo(0, window.scrollY - 45);
                    }, 50)

                } else {
                    //其他浏览器
                    window.scrollTo(0, 1000000);
                }

            }, time);
        }).on('blur', function() {
            if (interval) {
                clearTimeout(interval);
            }

            var agent = navigator.userAgent.toLowerCase();
            interval = setTimeout(function() {
                if (!(agent.indexOf('safari') != -1 && agent.indexOf('mqqbrowser') == -1 &&
                        agent.indexOf('coast') == -1 && agent.indexOf('android') == -1 &&
                        agent.indexOf('linux') == -1 && agent.indexOf('firefox') == -1)) {
                    //safari浏览器
                    window.scrollTo(0, 30);
                }
            }, 0);
        });
    }

    // 聊天模板
    var chatTpl = function(con, type) {
        var html = "";
        var type = type || 0;
        switch (type) {
            case 0:
                html += `<div class="bui-box-align-top chat-mine">
                    <div class="span1">
                        <div class="bui-box-align-right">
                            <div class="chat-content bui-arrow-right">
                             ${con}
                            </div>
                        </div>
                    </div>
                    <div class="chat-icon"><img src="images/applogo.png" alt=""></div>
                </div>`
                break;
            case 1:
                html += `<div class="bui-box-align-top chat-mine">
                    <div class="span1">
                        <div class="bui-box-align-right">
                            <div class="chat-content bui-arrow-right">
                             ${con}
                            </div>
                        </div>
                    </div>
                    <div class="chat-icon"><img src="images/applogo.png" alt=""></div>
                </div>`
                break;
        }

        return html;
    }

    pageview.init();

    return pageview;
})