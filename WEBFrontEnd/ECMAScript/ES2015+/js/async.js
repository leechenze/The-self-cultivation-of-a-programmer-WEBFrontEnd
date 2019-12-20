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


// async的方式实现异步请求;
// async function fn(){
//     try{
//         let f1 = await readFile('./data/aaa.txt');
//         let f2 = await readFile('./data/bbb.txt');    
//         let f3 = await readFile('./data/ccc.txt');
//     }catch(err){}
//     console.log(f1.toString());
//     console.log(f2.toString());
//     console.log(f3.toString());
// }
// console.log(fn());



async function fn(){
    let [a,b,c] = await Promise.all([    
        readFile('./data/aaa.txt'),
        readFile('./data/bbb.txt'),
        readFile('./data/ccc.txt')
    ])
    
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
}
console.log(fn());





