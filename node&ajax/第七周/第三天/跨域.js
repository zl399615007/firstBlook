var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (request,response){
    var objUrl=url.parse(request.url,true);
    var data=('[{"id":"36","name": "王大胆" ,"gender":"1" ,"hobby":"睡觉,写代码,打豆豆" ,"age":"33" ,"skill":"CSS,javaScript,PHP,C " ,"class":"随到随学班" ,"remark":"没有备注" ,"date":"2012-11-25 17:13:43"},{"id":"36","name": "王大胆" ,"gender":"1" ,"hobby":"睡觉,写代码,打豆豆" ,"age":"33" ,"skill":"CSS,javaScript,PHP,C " ,"class":"随到随学班" ,"remark":"没有备注" ,"date":"2012-11-25 17:13:43"},{"id":"36","name": "王大胆" ,"gender":"1" ,"hobby":"睡觉,写代码,打豆豆" ,"age":"33" ,"skill":"CSS,javaScript,PHP,C " ,"class":"随到随学班" ,"remark":"没有备注" ,"date":"2012-11-25 17:13:43"}]');
    console.log(request.url);
    //不但可以把以上数据response给客户端，客方法户端就要解析这些数据，那就需要指定解析这些数据的方法
    //由查询字符串指定一个字段（key）来接收客户端的方法名即可
    response.end(objUrl.query.callBack+"("+data+")")
}).listen(8088,function (){
    console.log("serverstart")
})
