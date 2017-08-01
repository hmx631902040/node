var fs = require("fs");
var data = '这个是接下来要写到文件里面的东西';

//创建可读流
var writerStream = fs.createWriteStream('input.txt');

//设置编码为utf-8
writerStream.write(data, 'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
