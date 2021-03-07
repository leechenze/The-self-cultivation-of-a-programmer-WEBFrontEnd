let http = require('http');

// 创建server服务器对象;
let server = http.createServer();
// 监听服务器请求, 监听的就是本地的地址;
server.on('request', function (request, response) {
    console.log(request);
    // 当服务器被请求时, 会触发请求事件, 并传入请求对象和响应对象;
    response.end('Hello World');
})
// 默认监听的端口号是80, 所以如果是监听80端口访问时无需输入端口号,只需输入地址即可访问;
server.listen(3000, function () {
    // 启动监听端口号成功时触发
    console.log('请求成功');
})