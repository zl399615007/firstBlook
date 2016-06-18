//获取fs模块：file system 文件系统
var fs=require('fs');
//以同步的方式读取文件
//同步就是步调一致，代码的执行顺序和排列顺序是一致的
 var content=fs.readFileSync('aa.js','utf8');
// console.log(content);
fs.readFile('aa.js','utf8',function (err,data){//err用来放错误的原因；data指文件内容
    console.log(data);
});
console.log('aaa')