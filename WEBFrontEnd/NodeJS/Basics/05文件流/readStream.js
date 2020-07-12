let fs = require('fs');
const { WSASERVICE_NOT_FOUND } = require('constants');


// 创建可读流;
    var rs = fs.createReadStream('helloworld.txt', {flag: 'r', encoding:'utf-8'});
    rs.on('open', function () {
        console.log('读取文件打开');
    })

    rs.on('close', function () {
        console.log('读取流结束');
    })
    

    // 数据流入完成;
    rs.on('data', function (chunk) {
        console.log(`单批事件流入:${chunk.length}`)
        console.log(chunk);
    })