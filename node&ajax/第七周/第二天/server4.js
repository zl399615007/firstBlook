var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function (request,response){
    var objUrl=url.parse(request.url,true);

    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    if(objUrl.pathname=="/ajax"){
        var obj=objUrl.query;
        try{
            var strData=fs.readdirSync("data.txt").toString();
            var data=JSON.parse(strData);
            obj.id=data.length+1;
            data.push(obj);
            strData=JSON.stringify(data);
            fs.writeFile("data.txt",strData);
            response.end(JSON.stringify(obj));
        }catch (e){
            var data=[];
            obj.id=1;
            data.push(obj);
           var strData=JSON.stringify(data);
            fs.writeFile("data.txt",strData);
            response.end(JSON.stringify(obj));

        }

        response.end("你妹")
    }
    else  if(objUrl.pathname==='/'){
        if(typeof objUrl.query.btn=="undefined"){
            response.end(fs.readFileSync("index1.html"));
        }else {
            var data=objUrl.query;
            try{
                //如果能找到文件，则把文件中的内容读出来，并且将其转成数组对象，再往这个数组中增加一条记录
                var str=fs.readFileSync("data.txt").toString();
                var a=JSON.parse(str);
                data.id=a.length+1;
                a.push(data);
                var str=JSON.stringify(a);
                fs.writeFile("data.txt",str);
//每一次写文件的操作，都是完全重写
            }catch (e){
                var a=[];
                data.id=1;
                a.push(data);
                var str=JSON.stringify(a);
                fs.writeFile("data.txt",str);//写文件
            }
            var strData=JSON.stringify(objUrl.query);
            var strHTML=fs.readFileSync("index1.html").toString();
            var regContent=/(<div +id="content">)[\w\W]*?(<\/div>)/i;

            str="<table><thead><th>name</th><th>age</th><th>gender</th><th>degree</th><th>hobby</th></thead>";
            for(var i=0;i<a.length;i++){
                //JSON.sgendertringify(a[i])
                str+="<tr><td>"+a[i].name+"</td>"+"<td>"+a[i].age+"</td>"+"<td>"+a[i].gender+"</td>"+"<td>"+a[i].degree+"</td>"+"<td>"+a[i].hobby+"</td></tr>";


            }
            str+="</table>";

            strHTML=strHTML.replace(regContent,"$1"+str+"$2");
            response.end(strHTML);
        }
    }

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


// 负责保存数据的文件
// 如果没有这个文件，则创建数组，并且把对象保存数组中，然后再把数组转化为JSON字符串，最后写到data.txt文件中
//
// 如果有这个data.txt，则把原文件中的内容读出来，转成对象（数组），再把新的数据push到这个数组里，然后再把数组转成字符串，写到data.txt文件中
