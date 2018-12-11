// 默认已经定义了main模块
loader.define(function() {

    var pageview = {};

    // 主要内容
    pageview.init = function() {

        // 找到当前页的对象
        var current = router.currentPage();
        // 只能传对象
        var app = $(".app",current)[0];

        // react 组件
        var HelloMessage = React.createClass({
            displayName: 'HelloMessage',
            render: function render(){
                return React.createElement('div',null,'Hello ',this.props.name);
            }
        })

        ReactDOM.render(React.createElement(HelloMessage,{name:'BUI'}), app )
        
    }

    // 远程依赖reactjs, 如果全局用到,把脚本依赖放在 index.html 
    loader.import(["js/plugins/react.min.js","js/plugins/react-dom.min.js"],function(){
        // 初始化
        pageview.init();

    });

    return pageview;
})