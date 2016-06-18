var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    var objUrl=url.parse(request.url,true);
    objUrl.pathname;//浏览器中输入的地址
    var regRouter=/^((?:\/\w+)+)(?:\/\w+\.html)?$/;
    if(regRouter.test(objUrl.pathname)){
        response.write(RegExp.$1);
    }


    // response.write(JSON.stringify(objUrl));
    response.end("<h1>演出开始了！</h1>")
}).listen(8080,function (){
    console.log('service start')
})