"use strict";
// 布尔类型
var flag = true;
flag = false;
// 数字类型
var num = 123;
num = 12.3;
// 字符串类型;
var str = 'hello world TypeScript';
str = 'hello world';
// 数组类型
// 定义方式一;
var arr1 = [1, 23, 322, 91, 1, 0];
// 定义方式二;
var arr2 = [1, 22, 33, 44, 5, 6, 1];
// 元组类型
var tuple1 = ['asdf', 123, true];
// 枚举类型
var flag1;
(function (flag1) {
    flag1[flag1["success"] = 1] = "success";
    flag1[flag1["error"] = -1] = "error";
})(flag1 || (flag1 = {}));
var f = flag1.success;
console.log(f);
// enum color {red, blue, orange};
// var result1:color = color.red;
// var result2:color = color.blue;
// var result3:color = color.orange;
// console.log(result1, result2, result3);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 5] = "blue";
    color[color["orange"] = 6] = "orange";
})(color || (color = {}));
;
var result1 = color.red;
var result2 = color.blue;
var result3 = color.orange;
console.log(result1, result2, result3);
// 任意类型
var any = 'asdf';
var num1 = 123;
var flag2 = false;
// 比如: 如果不指定any会警告语法错误, 此时指定any即可解决;
// var oBox = document.getElementById('box');
var oBox = document.getElementById('box');
oBox.style.color = 'red';
// null 和 undefined 其他类型(never类型)的子类型;
var num;
console.log(num);
var num2;
num2 = 123;
console.log(num2);
var num3;
num3 = 123;
// void类型 (表示没有任何类型(函数没有返回值), 一般用于定义方法时方法没有返回值的情况);
function run() {
    console.log('run');
}
run();
var num4 = function num4() {
    return 123;
};
num4();
var arr3 = function arr3() {
    return ['asdf', 12, true];
};
var arr4 = function arr4() {
    return ['asdf', 12, true];
};
var flag3 = function flag3() {
    return true;
};
// never类型: 其他类型(包括null 和 undefined类型); 代表从不会出现的值, 这意味着声明never变量只能被never类型所赋值;
var never;
never = (function () {
    throw new Error('error');
})();
