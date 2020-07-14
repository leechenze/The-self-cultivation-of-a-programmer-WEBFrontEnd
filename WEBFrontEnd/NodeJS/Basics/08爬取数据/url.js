// URL模块不同于path, url用来解析网络路径;
let url = require('url');
// console.log(url);


let httpUrl = 'https://www.vmall.com/product/10086663107289.html?cid=119887';



// 路径解析;
let urlObj = url.parse(httpUrl);
// console.log(urlObj);






let targetUrl = 'http://www.taobao.com';
let originUrl = './lee/qianduan/leechenze.html';
// 路径合成;
let newUrl = url.resolve(targetUrl, originUrl);
console.log(newUrl);
