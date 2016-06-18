var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    var objUrl=url.parse(request.url,true);
   //如果是根目录，没有写网页，则直接把index.html写回到浏览器
    if(objUrl.pathname==='/'){
        response.end(fs.readFileSync("index1.html"));
        
    }else {
        try {
            response.end(fs.readFileSync(objUrl.pathname.slice(1)));
        }catch (e){
            response.end("404");
        }
        
    }
}).listen(8080,function (){
    console.log('service start')
})