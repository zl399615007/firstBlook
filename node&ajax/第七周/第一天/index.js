//获取服务器时间

var http=require('http');
var fs=require('fs');
var mime=require('mime');

var server=http.createServer(function (request,response){
    if(request.url=='/clock'){
        response.write(new Date().toString());
        response.end();
    }
    fs.exists(request.url.slice(1),function (exists){//判断文件是否存在
        if(exists){
            response.setHeader('content-type',mime.lookup(request.url));
            fs.readFile(request.url.slice(1),'utf8',function (err,data){
                response.write(data);
                response.end();
            })
        }else {
            response.end('404');
        }
    });

});
server.listen(8070);