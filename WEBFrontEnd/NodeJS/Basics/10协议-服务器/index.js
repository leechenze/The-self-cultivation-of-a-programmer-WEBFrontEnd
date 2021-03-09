let http = require('http');

// 创建server服务器对象;
let server = http.createServer();
// 监听服务器请求, 监听的就是本地的地址, 当服务器被请求时触发请求事件, 并传入请求对象和响应对象;
server.on('request', function (request, response) {
    // console.log(request);
    // console.log(response);
    // response.end('Hello World');
    

    // 方法一;
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    // 请求头设置为application/html 访问时将会执行下载;
    // response.setHeader('Content-Type', 'application/html; charset=utf-8');
    // 方法二;
    // response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if(request.url == '/'){
        response.end('<h1>首页</h1><image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />')
    } else if (request.url == '/gnxw'){
        response.end('<h1>国内新闻</h1>')
    } else if (request.url == '/ylxw') {
        response.end('<h1>娱乐新闻</h1>')
    }else {
        response.end('<h1>404, 页面找不到了!</h1>')
    }

})
// 默认监听的端口号是80, 所以如果是监听80端口访问时无需输入端口号,只需输入地址即可访问;
server.listen(3000, function () {
    // 启动监听端口号成功时触发
    console.log('请求成功');
})