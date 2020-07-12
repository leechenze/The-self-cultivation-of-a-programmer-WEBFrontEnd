var fs = require('fs');



// 读取视频;
var rs = fs.createReadStream('./video/chrome.mp4', {flag: 'r'});
var ws = fs.createWriteStream('./video/newChrome.mp4', {flag: 'w'});

rs.on('open', function () {
    console.log('读取文件打开');
})
rs.on('close', function () {
    console.log('读取文件关闭');
})



rs.on('data', function (chunk) {
    // console.log(`单批事件流入 ${chunk.length}`);
    // console.log(chunk);
    
    // 在进行操作文件写入(重新创建一个chrome.mp4视频);
    ws.write(chunk, function (err) {
        if(err){
            throw Error(err)
        }else{
            console.log('视频写入成功');
        }
    })
})
