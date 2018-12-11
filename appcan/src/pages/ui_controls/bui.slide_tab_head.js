loader.define(function(require,exports,module) {

    //按钮在tab外层,需要传id
    var tab = bui.slide({
        id:"#tabHead",
        menu:"#tabHeadNav",
        children:".bui-tab-main > ul",
        scroll: true
    })
})
