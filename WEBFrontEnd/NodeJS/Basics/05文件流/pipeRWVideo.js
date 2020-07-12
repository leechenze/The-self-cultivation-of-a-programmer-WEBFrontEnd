var fs = require('fs');


// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
// 管道就是提供了连接写入流和读取流的API, 使用管道可以省略 readwritevideo.js 文件中所有代码步骤;
// 因为管道这个API就是已实现了写入流和读取流的一个封装;


// 创建可读流;
var rs = fs.createReadStream('./video/chrome.mp4', {flag: 'r'});
// 创建可写流;
var ws = fs.createWriteStream('./video/newChrome.mp4', {flag: 'w'});

// 通过管道直接实现 readwritevideo.js 中的复制操作;
rs.pipe(ws);