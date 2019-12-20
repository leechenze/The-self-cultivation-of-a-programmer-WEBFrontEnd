const fs = require('fs');
// 吧fa封装成一个promise
const readFile = function (file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            // console.log(err);
            if(err) reject(err);
            resolve(data);
        })
    })
}



// promise 方式实现异步请求;
readFile('./data/aaa.txt').then(res => {
    console.log(res.toString());
    return readFile('./data/bbb.txt');
}).then(res => {   
    console.log(res.toString());
    return readFile('./data/ccc.txt');
}).then(res => {
    console.log(res.toString());
})