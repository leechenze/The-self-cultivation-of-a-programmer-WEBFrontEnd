let fs = require('fs');
// 获取rwFN.js导出的读取和写入方法;
let {fsRead, fsWrite} = require('./rwFN');



// 读取上一级目录;
fs.readdir('../03文件写入',function (err, files) {
    debugger;
    if(err){
        throw Error(err);
    }else{
        // 得到的是目录下的每一个文件名, 每一个文件名是string类型;
        // console.log(files);

        // 将获取到的目录下的每一个文件名遍历, 读取文件内容并且写入到all.txt中去;
        files.forEach(async function (filename, ind){
            let everyfilecon = await fsRead(`../03文件写入/${filename}`);
            await fsWrite('./all.txt', everyfilecon);
            await console.log('文件遍历内容写入成功');
        })
    }
})





