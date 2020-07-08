"use strict";
// 函数类型接口: 对方法传入的参数, 以及返回值进行约束, 并且可批量约束(就是可以对多个方法进行约束);
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('name', 'zhangsan'));
var sha1 = function (key, value) {
    return key + '===' + value;
};
console.log(sha1('name', 'leecs'));
