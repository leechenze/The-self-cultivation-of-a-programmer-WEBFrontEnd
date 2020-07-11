let readline = require('readline');
let {fsRead, fsWrite} = require('./rwFN');
// const { rootCertificates } = require('tls');

// 实例化接口对象;
var r1 = readline.createInterface({
    // :process指终端进程, 固定写法;
    input:process.stdin,
    output:process.stdout
})


// // question事件: 输入内容;
// // r1设置提问事件;
// r1.question('今晚吃什么', function (answer) {
//     console.log(`答复${answer}`);
//     r1.close();
// })
// // 绑定结束事件;
// r1.on('colse', function () {
//     process.exit(0);
// });


// 命令行会输出: 今晚吃什么: 后面跟着什么答复, 回答就是答复;
// 如果没有 r1.close事件的process.exit(0) 这一步骤;
// 进程将不会结束, 有procexx.exit(0)这一步时, 答复往后就会自动关闭;











// 可以做npm安装时的问答, 往后生成package.json文件;

// 首先封装question, 避免地狱回调;
function promiseQuestion(title) {
    return new Promise(function (resolve, reject) {
        r1.question(title, function (answer) {
            resolve(answer);
        })
    })
};

// 同步执行创建的操作
async function createProblem() {
    let name = await promiseQuestion('您的包名叫什么 ');
    let description = await promiseQuestion('您的描述是什么 ');
    let main = await promiseQuestion('您的包主程序入口文件是什么 ');
    let author = await promiseQuestion('您的包作者是谁 ');
    
    let packageContent = `{
        "name": "${name}",
        "description": "${description}",
        "main": "${main}",
        "author": "${author}"
    }`;
    
    await fsWrite('package.json', packageContent);
    
    // 执行完问答操作后执行 关闭进程;
    r1.close();
}

createProblem();

r1.on('close', function () {
    process.exit(0);
})