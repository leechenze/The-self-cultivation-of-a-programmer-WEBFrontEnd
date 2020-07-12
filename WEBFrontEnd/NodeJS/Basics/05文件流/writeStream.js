let fs = require('fs');
const { WSASERVICE_NOT_FOUND } = require('constants');


// 创建可写流;
    var ws = fs.createWriteStream('./helloworld.txt', {flag: 'w', encoding: 'utf-8'});

    ws.on('open', function () {
        console.log('文件写入成功');
    })

    ws.on('ready', function () {
        console.log('文件写入状态');
    })
    ws.on('close', function () {
        console.log('文件写入完成, 关闭')
    })



    // 文件流式写入;
    ws.write('helloworld\n',function (err) {
        if(err) {
            throw Error(err);
        }else{
            console.log('文件流入完成');
        }
    });
    ws.write('helloworld1\n',function (err) {
        if(err) {
            throw Error(err);
        }else{
            console.log('文件1流入完成');
        }
    });
    ws.write('helloworld2\n',function (err) {
        if(err) {
            throw Error(err);
        }else{
            console.log('文件2流入完成');
        }
    });

    // end表示写入完成;
    ws.end(function () {
        console.log('文件写入关闭');
    });

