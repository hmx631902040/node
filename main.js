// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束！");

//执行路由
// var server = require("./serve");
// var router = require("./router");

// server.start(router.route);

//执行全局变量
// console.log(__filename);

// 输出全局变量 __dirname 的值
//console.log( __dirname );

//setTimeout(cb, ms)
// function printHello() {
//     console.log("Hello World");
// }
// setTimeout(printHello, 2000);

//清除定时器
//clearTimeout

//定时器
// var timeout = setInterval(printHello, 2000);
// clearTimeout(timeout);

//进程
// process.on('exit', function(code) {
//     setTimeout(function(){
//         console.log('该代码不会执行');
//     }, 0);
//     console.log('退出码为:', code);
// });
// console.log("程序执行结束");

//输出到终端
// process.stdout.write("Hello World" + "\n");

//通过参数读取
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });

//获取执行路径
// console.log(process.execPath);

//平台信息
// console.log(process.platform);

//输出当前目录
// console.log('当前目录:' + process.cwd());

//输出当前版本
// console.log('当前版本:' + process.version);

//输出内存使用情况
// console.log(process.memoryUsage());

//实现对象间原型继承的函数
var util = require('util');
function Base() {
    this.name = "Base",
    this.base = 1991;
    this.sayHello = function() {
        console.log("Hello " + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    this.name = 'Sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);
