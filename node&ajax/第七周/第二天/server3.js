var http=require('http');
var fs=require('fs');
var url=require('url');
//完成一个传统的动态网站：同步的动态网站
http.createServer(function (request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    var objUrl=url.parse(request.url,true);//true->将query得到的查询字符串变成对象
   //如果是根目录，没有写网页，则直接把index.html写回到浏览器
    console.log(objUrl.pathname);
    if(objUrl.pathname==='/'){//如果访问的是根目录，没有带数据（就是没有查询字符串）则把首页写回到浏览器端
        //如果请求有数据，则把数据保存下来，并且连首页和数据一起写回到浏览器端（以表格的方式展示数据）
        if(typeof objUrl.query.btn=="undefined"){
            response.end(fs.readFileSync("index1.html"));
        }else {
            var strData=JSON.stringify(objUrl.query);
            var strHTML=fs.readFileSync("index1.html").toString();
            var regContent=/(<div +id="content">)[\w\W]*?(<\/div>)/i;
            //strHTML=strHTML.replace(regContent,'<div id="content">'+strData+"<\/div>");
            strHTML=strHTML.replace(regContent,"$1"+strData+"$2");
            response.end(strHTML);
        }
    }
    // else if(objUrl.pathname=="/abcd"){
    //     response.end("提交成功");
    // }
    else {
        try {
            response.end(fs.readFileSync(objUrl.pathname.slice(1)));
        }catch (e){
            response.end("404");
        }

    }
}).listen(8070,function (){
    console.log('service start')
})