let fs = require('fs');

// 地狱回调方式写入(很恶心);
// fs.writeFile('./write.txt', '红烧狮子头\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
//     if(err) {
//         console.log('写入内容出错');
//     }else{
//         console.log('写入内容成功');
//         fs.writeFile('./write.txt', '鱼香茄子\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
//             if(err) {
//                 console.log('写入内容出错');
//             }else{
//                 console.log('写入内容成功');
//                 fs.writeFile('./write.txt', '白切记\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
//                     if(err) {
//                         console.log('写入内容出错');
//                     }else{
//                         console.log('写入内容成功');
//                     }
//                 })
//             }
//         })
//     }
// })


// promise封装以上步骤, 为了避免以上那样的地狱回调;
function writefs(path, content){
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, content, {flag: 'a', encoding: 'utf-8'}, function (err) {
            if(err) {
                reject(err);
                throw Error(err);
            }else{
                resolve(err);
                console.log('写入内容成功');
            }
        })
    })    
}

// 通过async进行阻塞代码执行, 即可解决地狱回调;
async function writeList() {
    await writefs('./write.txt', '今晚上吃什么\n');
    await writefs('./write.txt', '红烧狮子头把\n');
    await writefs('./write.txt', '今吃蒜茄子, 没算不行, 买去\n');
}
writeList();

