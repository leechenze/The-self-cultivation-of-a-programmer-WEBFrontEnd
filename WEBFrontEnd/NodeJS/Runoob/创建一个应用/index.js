/*
 * @Author: your name
 * @Date: 2020-07-10 18:00:33
 * @LastEditTime: 2020-07-10 19:24:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \The-self-cultivation-of-a-programmer\WEBFrontEnd\NodeJS\Runoob\创建一个应用\index.js
 */ 


// 步骤一: 引入require模块;
// 使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');


// 步骤二: 创建服务器;
// 使用 http.createServer() 方法创建服务器,
// 使用 listen 方法绑定 8888 端口;
// 函数通过 request, response 参数来接收和响应数据

http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(request);
    console.log(response);
    

    // 发送响应数据: "Hello World";
    response.end('Hello World');
    
}).listen(8888);

// 终端下打印如下信息;
console.log('Server running at http://127.0.0.1:8888/');

// 以上代码我们完成了一个可以工作的 HTTP 服务器。
// 使用 node 命令执行以上的代码：
// 接下来，打开浏览器访问 http://127.0.0.1:8888/，你会看到一个写着 "Hello World"的网页。

