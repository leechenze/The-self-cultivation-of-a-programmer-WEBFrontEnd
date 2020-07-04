"use strict";
// 装饰器:
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 可以修改类的行为;
// 通俗来讲: 装饰器就是一个方法, 可以注入到类, 方法, 属性参数上来扩展类, 属性, 方法, 参数的功能;
// 常见的装饰器有: 类装饰器, 属性装饰器, 方法装饰器, 参数装饰器;
// 装饰器的写法: 普通装饰器(无法传参), 装饰器工厂(可传参);
// 装饰器是过去几年中JS最大的成就之一, 已是ES7的标准特性之一;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器: 类装饰器在类声明之前被声明(紧靠着类声明), 类装饰器应用于类构造函数, 可以用来监视, 修改或替换类定义;
// 定义普通装饰器: function就是一个装饰器;
function logClass(params) {
    // 这个params就是应用装饰器时后面的那个类(HttpClient);
    console.log(params);
    // 通过类装饰器动态给 HttpClient 扩展属性
    params.prototype.apiurl = '动态扩展的属性';
    // 通过类装饰器动态给 HttpClient 扩展方法;
    params.prototype.run = function () {
        console.log('通过装饰器动态扩展的方法');
    };
}
// @logClass 一定在class之前, 中间不可以有任何符号或字体, 允许换行声明;
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    // 当装饰器中有声明的run方法时, lei内部的同名的实例方法会被覆盖掉;
    HttpClient.prototype.run = function () {
        console.log('HttpClient类内部的实例方法');
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
http.run();
