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


// generator的方式实现异步请求;
function * gen(){
    yield readFile('./data/aaa.txt');
    yield readFile('./data/bbb.txt');
    yield readFile('./data/ccc.txt');
}
let g1 = gen();
g1.next().value.then((res)=>{
    console.log(res.toString());
    return g1.next().value
}).then(res => {
    console.log(res.toString());
    return g1.next().value
}).then(res => {
    console.log(res.toString());
})

console.log(g1);
