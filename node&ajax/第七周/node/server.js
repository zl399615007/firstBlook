var http=require('http');
var url=require('url');
var path=require('path');

var server=http.createServer(function (request,response){
    var json=JSON.stringify({name:'aaa',age:'12'});
    var objUrl=url.parse(request.url,true);

    response.end(objUrl.query.val+'('+json+')');


});

server.listen(8080,function (){
    console.log('start');
})
