var fogPath="https://api.fogcloud.io/v3";


function fogPost(url,data,success,fail) {
    var token=localStorage.getItem("token");
    var header={};
    if(token){
        header["Authorization"]="Bearer "+token;
    }
    bui.ajax({
        url:url,
        method:"POST",
        data:data||{},
        headers:header,
        contentType:"application/x-www-form-urlencoded"
    }).then(success,fail);

}

function fogGet(url, data, success, fail) {
    var token=localStorage.getItem("token");
    var header={};
    if(token){
        header["Authorization"]="Bearer "+token;
    }
    bui.ajax({
        url:url,
        method:"GET",
        data:data||{},
        headers:header,
    }).then(success,fail)
}

function fetchToken() {
    var url=fogPath+"/open_api/token/";
    var data={
        "grant_type":"client_credentials",
        "client_id":"7MFq7ZUgoqOhWft7zfUgSaSdgIz09oxRCTMx0SoV",
        "client_secret":"lRq8eWtBrk9MZ0zm687PsPZUPsVy0MBXknvIFMQ6lcYt4lOINeRC94pIXuOZm0ONi4uviIoeQMXwWZ0pnDuns896sDuKkoVypLpdk2OFZYCflO4UNmvMuGiMojdqcu5s"
    };
    fogPost(url,data,function (res) {
        console.log(res);
    },function (error) {
        console.log(error);
    });
}
console.log("66"+Math.random());
