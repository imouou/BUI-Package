loader.define(function(require, exports, module) {

    var data = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    var $value = $("#value");

    $("#inArray").click(function(argument) {
        var index = bui.array.index(3, data);

        $value.val("返回 3 在第" + index + "个索引");

    })
    $("#compareArray").click(function(argument) {
        var index = bui.array.compare(3, data);

        $value.val("返回 3 是否在数组里: " + index);
    })
    $("#removeArray").click(function(argument) {
        bui.array.remove(3, data);

        $(".example").text("[" + data + "]");
        $value.val("第1个3已经被删除了");
    })
    $("#indexArray").click(function(argument) {
        var indexs = bui.array.indexs(3, data);

        $value.val("3在数组的所有位置:" + indexs.toString());
    })
    $("#filterArray").click(function(argument) {
        var indexs = bui.array.filter(3, data);

        $value.val("数组里的所有的3: " + indexs.toString());
    })
    $("#excessArray").click(function(argument) {
        data = bui.array.uniq(data);
        $(".example").text("[" + data + "]");
        $value.val("删除数组所有重复元素");
    })
    $("#copyArray").click(function(argument) {
        data = bui.array.copy(data, 5);
        $(".example").text("[" + data + "]");
        $value.val("复制数组从第5开始");
    })
    $("#setArray").click(function(argument) {
        data = bui.array.set(data, 2, 10);
        $(".example").text("[" + data + "]");
        $value.val("把第2个值修改为10");
    })
    $("#getArray").click(function(argument) {
        var data2 = bui.array.get(data, 5);
        $(".example").text("[" + data + "]");
        $value.val("获取值等于5 [" + data2 + "]");
    })
    $("#getAllArray").click(function(argument) {
        var data2 = bui.array.getAll(data, 3);
        $(".example").text("[" + data + "]");
        $value.val("获取值等于3有多少个 [" + data2 + "]");
    })
    $("#mergeArray").click(function(argument) {
        data = bui.array.merge(data, [2, 10]);
        $(".example").text("[" + data + "]");
        $value.val("合并[2,10]变成新的数组");
    })
})