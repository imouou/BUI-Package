loader.define(function(require,exports,module) {
    bui.accordion().showFirst();

    // 检测版本更新
    bui.checkVersion({
        id: "#checkVersion",
        url: "http://www.easybui.com/demo/json/versionUpdate.json",
        currentVersion: "1.4.8",
        currentVersionCode: "201800901"
    });
    
})
