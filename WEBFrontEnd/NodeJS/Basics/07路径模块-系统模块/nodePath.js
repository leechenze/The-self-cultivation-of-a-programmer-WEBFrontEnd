// 路径信息模块;
let path = require('path');

let strPath = 'https://www.leechenze.com/subset/index.html';
let strImgPath = 'https://www.leechenze.com/subset/assets/images/portrait.png';

// 获取路径信息的扩展名(后缀名);
    // let info = path.extname(strPath);
    let info = path.extname(strImgPath);
    // console.log(info);
    let info1 = path.extname(__filename);
    // console.log(info1);


// 将一个路径或路径片段解析为一个绝对路径(resolve比join多一步: 拼接是从当前目录下开始);
    // let arr = ['usr', 'local', 'lib', 'node_modules'];
    // let infoPath = path.resolve(...arr);
    let infoPath = path.resolve('usr', 'local', 'lib', 'node_modules');
    // console.log(infoPath);
    

// 获取当前执行目录的完整路径;
    // console.log(__dirname);
// 获得当前执行文件的带有完整绝对路径的文件名;
    // console.log(__filename);
// 获取当前执行文件的目录名;
    console.log(process.cwd());

// 将全部给定的path片段连接到一起; 并规范化生成路径;
    let infoPath1 = path.join('Users','lee','The-self-cultivation-of-a-programmer','WEBFrontEnd','NodeJS','Basics','07路径模块-系统模块','nodePath.js');
    // let infoPath1 = path.join(__dirname, 'nodePath.js');
    // console.log(infoPath1);

    // 再给拼接回来;
    var res1 = infoPath1.split('/');
    var res2 = res1.splice(res1.length - 1, res1.length);
    var result = path.join(__dirname, ...res2);
    // console.log(result);




// 解析路径, 可以将路径信息直接解析出来, 解析出: 跟路径, 目录, 扩展名, 文件名称;
    // console.log(path.parse(__filename));


