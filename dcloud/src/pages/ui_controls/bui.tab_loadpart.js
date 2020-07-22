loader.define(function(require, exports, module) {

    var uiTab = bui.tab({
        id: "#uiTab"
    });

    // 避免重复初始化
    var firstTabInit = false,
        secondTabInit = false;

    uiTab.on("to", function(index) {

        switch (index) {
            case 0:
                if (firstTabInit) { return; }
                router.loadPart({
                    id: "#part1",
                    url: "pages/ui_controls/bui.tab_loadpart_1.html",
                    param: {
                        title: "课程"
                    }
                })
                firstTabInit = true;
                break;
            case 1:
                if (secondTabInit) { return; }
                router.loadPart({
                    id: "#part2",
                    url: "pages/ui_controls/bui.tab_loadpart_1.html",
                    param: {
                        title: "观点"
                    }
                })
                secondTabInit = true;
                break;
        }
    }).to(0);

})