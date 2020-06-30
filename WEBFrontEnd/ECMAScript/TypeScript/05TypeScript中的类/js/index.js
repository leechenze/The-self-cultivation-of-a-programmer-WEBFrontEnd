"use strict";
// 静态属性, 静态方法;
// class Person {
//     // 公共属性;
//     public name:string;
//     // 构造函数;
//     constructor(name:string) {
//         this.name = name;
//     }
//     // 实例方法
//     run() {
//         return `实例方法输出: ${this.name}在运动`;
//     }
//     eat() {
//         return `实例方法输出: ${this.name}在吃饭`;
//     }
//     // 静态属性;
//     static age:number = 30;
//     static petname:string = 'nixon';
//     // 静态方法;
//     // 静态方法中无法直接调用类中的属性, 静态方法中只能调用静态的属性;
//     static print() {
//         return `静态方法输出: ${Person.petname}的年龄是${Person.age}`;
//     }
// }
// var person = new Person('hilarie');
// // 实例方法调用;
// console.log(person.run());
// // 静态方法调用;
// console.log(Person.print());
// 继承多态;
// // 多态概念: 父类定义的方法不去实现, 让继承他的子类去实现, 每一个子类有不同的实现;
// // 多态属于继承, 是继承的一种表现;
// class Animal {
//     // 声明的公共属性可以省略public关键字;
//     // public name:string;
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     // 在父类中具体是什么动物, 吃什么, 都不明确;
//     // 所以让继承Animal父类的Dog和Cat实现定义具体是什么动物, 吃的是什么;
//     eat() {
//         return `Animal 的eat方法`;
//     }
// }
// class Dog extends Animal{
//     // 继承必须添加super关键字;
//     constructor(name:string) {
//         // super步骤会将name的操作继承过来: this.name = name;
//         super(name);
//     }
//     eat() {
//         return `${this.name}吃杂粮`;
//     }
// }
// class Cat extends Animal{
//     constructor(name:string) {
//         super(name);
//     }
//     eat():string {
//         return `${this.name}吃老鼠`;
//     }
// }
// console.log(new Dog('jerry').eat());
// console.log(new Cat('tom').eat())
// 抽象类
// // 抽象类概念: 他是提供其他类继承的基类, 不能直接被实例化;
// // 用abstract关键字定义抽象类和抽象方法, 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现;
// // abstract抽象方法只能放在抽象类中, 抽象类和抽象方法用来定义标准;
// // 抽象类Animal 要求他的子类必须包含eat方法, 如果不实现抽象类中的抽象方法就会报错;
// abstract class Animal{
//     public name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     // 这个抽象方法不包含具体实现(就是没有花括号{}函数体);
//     // 必须在派生类中实现, 否则将会报错;
//     abstract eat():any;
// }
// // 抽象类不能直接实例化: Cannot create an instance of an abstract class;
// // var animal = new Animal('father');
// class Dog extends Animal{
//     constructor(name:string) {
//         super(name);
//     }
//     // 因为继承的是Animal这个抽象类, 所以eat这个抽象方法必须要实现;
//     eat() {
//         return `${this.name}吃粮食`;
//     }
//     // run因为不是抽象方法, 所以也可不实现这个方法, 但是抽象类中定义的抽象方法一定要实现
//     run() {
//         return `抽象类中定义的抽象方法一定要实现`;
//     }
// }
// console.log(new Dog('John').eat());
