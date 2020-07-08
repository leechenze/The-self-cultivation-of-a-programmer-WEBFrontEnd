"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 定义一个Web的类, 供Programmer继承用;
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.coding = function (code) {
        return "" + (this.name + code);
    };
    return Web;
}());
// 定义一个程序员类;
// // 当programmer实现person接口时, 因为person接口扩展的animal接口, 所以programmer这个类实现时, 既要实现Person的属性方法,又要实现Animal的属性方法;
// class Programmer implements Person{
//     public name:string;
//     constructor(name:string) {
//         this.name = name;                
//     }
//     // 两个接口有继承关系, 所以web这个类必须实现的两个接口中的所有属性和方法;
//     eat(){
//         return this.name + ' 不认识 TypeScript';
//     }
//     work() {
//         return this.name + ' live JavaScript'
//     }
// }
// var programmer = new Programmer('leecs');
// console.log(programmer.work());
// console.log(programmer.eat());
// 在定义一个程序员的类, 要求既要继承Web类, 又要实现Person的接口;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // 两个接口有继承关系, 所以web这个类必须实现的两个接口中的所有属性和方法;
    Programmer.prototype.eat = function () {
        return this.name + ' 不认识 TypeScript';
    };
    Programmer.prototype.work = function () {
        return this.name + ' live JavaScript';
    };
    return Programmer;
}(Web));
var programmer = new Programmer('leecs');
// 接口的方法;
console.log(programmer.eat());
console.log(programmer.work());
// 继承Web的方法;
console.log(programmer.coding(' learn TypeScript'));
