/**
 * Created by Administrator on 2016/4/11.
 */
/*
* 1.能让别人找到你 服务器需要提供ip地址
*                提供一个端口号，用来区分不同的程序，一个程序只能占用一个端口号，一个端口号只能被一个程序占用
* 2.能够根据客户端的要求返回一个服务
* */
//http模块可以帮助我们创建一个http服务器
//require用来加载一个模块把返回值赋给变量
var http=require('http');
//每当有请求到来的时候就会执行监听函数
//request 代表客户端的请求对象
//response 代表客户端的响应对象
var server=http.createServer(function (request,response){
    response.write('hello');
    response.write('word');
    response.end()

});


//可以监听客户端的请求，启动服务器
//通过指定ip和端口来启动一个服务器（ip省略默认是本地Ip）
server.listen(8080);