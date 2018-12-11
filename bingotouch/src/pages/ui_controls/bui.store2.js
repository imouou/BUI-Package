loader.define(function(require,exports,module) {
    
    // 简单的双向绑定, 订阅searchword 更新
    store.on("searchword",function (e) {
        console.log(e.value,"searchword")
        router.$(".result").html(e.value);
        router.$("#search").val(e.value);
    })

    store.on("sources",function (e) {
        console.log(e.value,"sources")
        if( e.action === "push"){
            
            router.$(".result").append(e.data.sources.join(","));
        }
    })

    store.on("sources.a",function (e) {
        console.log(e.value,"sources.a")
    })

    // 相互关联处理
    // store.$data.fullName = store.$data.firstName + store.$data.lastName;
    
    // store.on("firstName",function (e) {
    // 
    //     store.$data.fullName = e.value + e.data["lastName"];
    // })
    // store.on("lastName",function (e) {
    //     store.$data.fullName = e.data["firstName"] + e.value;
    // })

    router.$("#reverseMessage").on("click",function (e) {
        var a = store.$data.message.split(' ').reverse().join(' ')
        store.$data.message = a;
    })

    store.on("target.name.test",function (e) {
        console.log(e.value,"target.name.test")
    })
    // store.on("target.first",function (e) {
    //     console.log(e.value,"target.first")
    // })

    store.on("target.names",function (e) {
        console.log(e.value,"target.names")
    })
    store.on("mess.a",function (e) {
        console.log(e.value,"mess.a")
    })
    store.on("target.second.a",function (e) {
        console.log(e.value,"target.second.a")
    })

    store.on("target.second.b.c",function (e) {
        console.log(e.value,"target.second.a.b.c")
    })

    // store.$data.target.name.test = 4543543;
    // console.log(store.$data.target.name)
    // store.$data.target.first = 4543543;
    // 这种不会触发事件
    // store.$data.sources = ["321",313];
    // store.$data.sources.push("#21321");
    // store.$data.sources = {a:1321};
    // store.$data.sources.push("323221321");
    // store.$data.sources.sort();
    // 
    // store.set("sources",{a:11});
    // store.set("mess",{a:11});
    // store.set("mess.a",22);
    // store.$data.mess.a = 312321;
    // console.log(store.$data.target.second )
    // store.$data.target.second.a = 312321;
    // store.$data.target.second.b.c = 312321;
    // store.set("sources",["31321"]);
    // store.$data.sources.push(112);
    // store.set("target.names",["31321"])

    // store.$data.target.names.push(112);

    // store.set("target.name.test",["31321"])

    // store.$data.searchword = 1321;



    // 延迟输入 bui.unit.debounce
    router.$("#searchbar").on("input","input",bui.unit.debounce(function (e) {
        var val = this.value;

        store.$data.searchword = val;
        store.$data.message = val;
        // 存储数据并触发修改
        // store.set("searchword",val);
    },200))

    router.$("#show").on("change",function (e) {

        store.$data.showName = this.checked;
        
    })



})
