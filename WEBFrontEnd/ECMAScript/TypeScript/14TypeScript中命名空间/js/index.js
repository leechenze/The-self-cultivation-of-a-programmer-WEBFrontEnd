"use strict";
// 命名空间:
// 在代码量较大的情况下, 为了避免变量命名冲突, 可将相似功能的函数, 类, 接口, 等放置到命名空间内;
// 同Java, .net的命名空间一样, TS的命名空间可以将代码包裹起来, 只对外暴露需要在外部访问的对象, 命名空间内的对象 通过export导出到外部;
// 一个模块中可以有多个命名空间;
// 定义命名空间关键字 namespace 想要在外部访问namespace中的属性时, 需要将这个属性, 变量, 函数或类像是暴露模块那样暴露出去;
// 定义A的空间;
var A;
(function (A) {
    // 将Dog这个类从命名空间中暴露出去;
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    A.Dog = Dog;
    // 将Cat这个类从命名空间中暴露出去;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
// 定义B的空间;
var B;
(function (B) {
    // 将Dog这个类从命名空间中暴露出去;
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    B.Dog = Dog;
    // 将Cat这个类从命名空间中暴露出去;
    var Cat = /** @class */ (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
// 访问并执行A空间中的Dog方法;
var adog = new A.Dog('john');
adog.eat();
// 访问并执行B空间中的Cat方法;
var bcat = new B.Cat('tom');
bcat.eat();
