/*
* 把一系列的jsonp操作封装到一起
* */
(function (){
    var namespace={};
    var globalName='x';

    /**
     *
     * @param {string} url 请求jsonp接口
     * @param {*}data 发送的参数
     * @param {string} jsonpcallback server定义好的参数名
     * @param {function} callback 回调函数
     */
    var jsonp=function (url,data,jsonpcallback,callback){
        var cbName='cb'+jsonp.count++;
        //定义全局函数名
        var callbackName='window.'+globalName+'.jsonp.'+cbName;
        //定义全局函数体
        namespace.jsonp[cbName]=function (data){
            try{
                callback(data);
            }finally {
                //为什么把script标签删掉，没有删掉数据？
                //因为script只负责获取js数据，获取完成之后，script标签就没有任何用处，获取的数据放在缓存里
                script.parentNode.removeChild(script);
                delete window.x.jsonp[cbName];
            }

        };
        var script=document.createElement('script');
        if(data)
            data=tool.encodeTURIString(data);{
        }
        if(typeof jsonpcallback==='string'){
            jsonpcallback+="="+callbackName;
        }
        url=tool.hasSearch(url,data);
        url=tool.hasSearch(url,jsonpcallback);
        script.src=url;

        document.body.appendChild(script);

    };

    jsonp.count=0;
    namespace.jsonp=jsonp;
    this[globalName]=namespace;

    var tool={
        encodeTURIString:function (data){
            if(!data)return'';
            if(typeof data==='string')return data;
            var arr=[];
            for(var n in data){
                if(!data.hasOwnProperty(n)) continue;
                arr.push(encodeURIComponent(n)+'='+encodeURIComponent(data[n]));
                return arr.join('&');
            }
        },
        hasSearch:function (url,padString){
            if(!padString)return url;
            if(typeof padString!=='string')return url;
            return url+(/\?/.test(url)?'&':'?')+padString;
        }
    }

})();