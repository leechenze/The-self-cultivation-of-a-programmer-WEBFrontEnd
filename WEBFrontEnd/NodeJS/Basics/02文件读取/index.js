// node读写文件有同步和异步的接口;

// 导入文件模块;
var fs = require('fs');

// 同步打开文件 返回表示文件描述符的整数;
// var fd = fs.openSync('helloworld.txt', 'r');
// console.log(fd + '===== fs.openSync');


// // 定义缓冲器;
// var buf = Buffer.alloc(20);
// console.log(buf + '===== Buffer.alloc');


// // 同步读取文件;
// var fsReadSync = fs.readFileSync('helloworld.txt', {flag: 'r', encoding: 'utf-8'});
// console.log(fsReadSync + '===== fs.readFileSync');
// // 异步读取文件;
// var fsRead = fs.readFile('helloworld.txt', {flag: 'r', encoding: 'utf-8'}, function (err, data) {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log('异步读取之后的打印, 因为 readFile 是异步操作, 所以不会阻塞这一步的执行');




// promise回调函数封装;
function fsReadPromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, {flag: 'r', encoding: 'utf-8'}, function (err, data) {
            if(err) {
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

var res1 = fsReadPromise('helloworld.txt');
res1.then((res) => {
    // console.log(res);
})

// 通过helloworld.txt读取到helloworld1文件,
// 通过helloworld1.txt读取到helloworld2文件;
async function ReadList() {
    var file1 = await fsReadPromise('helloworld.txt');
    console.log(file1)
    var file2 = await fsReadPromise(file1 + '.txt');
    console.log(file2)
    var file3 = await fsReadPromise(file2 + '.txt');
    console.log(file3);
}

ReadList();

