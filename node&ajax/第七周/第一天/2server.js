
var http=require('http');

var server=http.createServer(function (request,response){
    console.log(request.url);
    console.log(request.method);
    response.setHeader('content-type','text/html;charset=utf-8');//设置响应体的类型
    response.write(new Date().toString());
    response.end();
    console.log('输出')


});



server.listen(8080);//端口号最大到65535