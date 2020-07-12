// principle.js是events的原理;
// leeEvent这个事件对象node有封装好的;



let fs = require('fs');
// 引入事件模块;
let events = require('events');
const { fstat } = require('fs');



// 初始化事件对象;
let ee = new events.EventEmitter();
ee.on('helloSuccess', function (eventMsg) {
    console.log('\n吃夜宵' + eventMsg + '\n');
})
ee.on('helloSuccess', function () {
    console.log('唱K唱K\n');
})
ee.on('helloSuccess', function () {
    console.log('CSGOV1\n');
})
ee.on('helloSuccess', function () {
    console.log('穿越火线\n');
})



function promiseReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {flag: 'r', encoding: 'utf-8'}, function (err, data) {
            if(err){
                reject(err);
                throw Error(err);
            }else{
                console.log('\n读取文件成功');
                resolve(data);
            }
        })        
    })
}


promiseReadFile('hello.txt').then((data) => {
    ee.emit('helloSuccess', data);
})