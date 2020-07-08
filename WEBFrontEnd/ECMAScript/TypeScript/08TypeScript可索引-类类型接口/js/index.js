"use strict";
// 可索引接口: 对数组, 对象的约束;
var arr = ['123', '234'];
console.log(arr[0]);
// 对象的键即使不加""系统也是会默认声明为字符串类型的;
var obj = {
    name: 'leecs',
    sex: 'man',
    hobby: 'football',
    age: '30',
};
console.log(obj);
// 注意接口不应该是继承(extends), 而应该是实现(implements);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function (num) {
        console.log(this.name + num + '岁了');
        return this.name + '吃狗粮';
    };
    return Dog;
}());
var dog = new Dog('小黑');
console.log(dog.eat(20));
