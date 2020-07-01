// 函数类型接口: 对方法传入的参数, 以及返回值进行约束, 并且可批量约束(就是可以对多个方法进行约束);


// 加密的函数类型接口:

interface encrypt{
    // 传入两个参数分别是key和value都是string类型, 并且返回的也是string类型;
    (key:string, value:string):string;
}

var md5:encrypt = function (key:string, value:string):string {
    return key + value;
}

console.log(md5('name', 'zhangsan'));

var sha1:encrypt = function (key:string,value:string):string {
    return key + '===' + value;
}
console.log(sha1('name', 'leecs'))