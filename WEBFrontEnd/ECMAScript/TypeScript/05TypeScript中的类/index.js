"use strict";
// 静态属性, 静态方法;
var Person = /** @class */ (function () {
    // 构造函数;
    function Person(name) {
        this.name = name;
    }
    // 实例方法
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    Person.prototype.eat = function () {
        return this.name + "\u5728\u5403\u996D";
    };
    return Person;
}());
var person = new Person('hilarie');
console.log(person.run());
