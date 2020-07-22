const axios = require('axios');
const fs = require('fs');
const path = require('path');



// 获取音乐相关信息, 通过音乐相关信息获取音频地址;
// 获取音乐列表, 通过音乐列表获取大量的音乐信息;


// 通过音乐分类页, 获取音乐列表;
async function getPage(num) {
    let httpUrl = `https://www.app-echo.com/api/recommend/sound-day?page=${num}`;
    let res = await axios.get(httpUrl);
    res.data.list.forEach((item, ind) => {
        // 获取每一首的名称;
        let title = item.sound.name;
        // 获取每一首的地址;
        let mp3Url = item.sound.source;
        // 下载每一首音乐;
        downloadMusic(mp3Url, title);
        // 记录每一首音乐名称;
        let mp3Name = `${title}${path.extname(mp3Url).split('?')[0]}\n\n\n\n\n`;
        // 将每一个音乐的名字记录到一个txt中;
        fs.writeFile(`./music.txt`, mp3Name, {flag:'a'}, function () {
            console.log(`${mp3Name}写入完成`);
            // 当遍历完成结束终端进程;
            // process.exit(0);
        });
    });
    
    
}



// 下载音乐;
async function downloadMusic(mp3Url, title) {
    // 创建写入流;
    let ws = fs.createWriteStream(`./music/${title}${path.extname(mp3Url).split('?')[0]}`)
    // mp3是二进制的数据, 所以需要用流的形式进行存放;
    axios.get(mp3Url, {responseType: 'stream'}).then((res) => {
        res.data.pipe(ws);
        res.data.on('close', () => {
            ws.close();
        })
    });
}



getPage(1);