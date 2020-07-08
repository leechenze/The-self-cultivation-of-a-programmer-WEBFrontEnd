// 命名空间:
    // 在代码量较大的情况下, 为了避免变量命名冲突, 可将相似功能的函数, 类, 接口, 等放置到命名空间内;
    // 同Java, .net的命名空间一样, TS的命名空间可以将代码包裹起来, 只对外暴露需要在外部访问的对象, 命名空间内的对象 通过export导出到外部;
    // 一个模块中可以有多个命名空间;


// 定义命名空间关键字 namespace 想要在外部访问namespace中的属性时, 需要将这个属性, 变量, 函数或类像是暴露模块那样暴露出去;
// 定义A的空间;
namespace A{
    interface Animal {
        name:string;
        eat():void;
    }

    // 将Dog这个类从命名空间中暴露出去;
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat(): void {
            console.log(`${this.name}吃狗粮`);
        }
        
    }

    // 将Cat这个类从命名空间中暴露出去;
    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat(): void {
            console.log(`${this.name}吃猫粮`);
        }
    }
}



// 定义B的空间;
namespace B{
    interface Animal {
        name:string;
        eat():void;
    }

    // 将Dog这个类从命名空间中暴露出去;
    export class Dog implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat(): void {
            console.log(`${this.name}吃狗粮`);
        }
        
    }

    // 将Cat这个类从命名空间中暴露出去;
    export class Cat implements Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        eat(): void {
            console.log(`${this.name}吃猫粮`);
        }
    }
}


// 访问并执行A空间中的Dog方法;
var adog = new A.Dog('john');
adog.eat();
// 访问并执行B空间中的Cat方法;
var bcat = new B.Cat('tom');
bcat.eat();