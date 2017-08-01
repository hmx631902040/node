var http = require('http');

//匿名函数的方式
http.createServer(function(request, response) {
    response.writeHead(200, "Content-Type": "text/plain");
    response.write("Hello World");
    response.end();
}).listen(8888);

//调用函数的方式
// function onRequest(request, response) {
//     response.writeHead(200, "Content-Type": "text/plain");
//     response.write("Hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
