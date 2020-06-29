// 静态属性, 静态方法;
    class Person {
        
        // 公共属性;
        public name:string;
        
        // 构造函数;
        constructor(name:string) {
            this.name = name;
        }


        // 实例方法
        run() {
            return `${this.name}在运动`;
        }
        eat() {
            return `${this.name}在吃饭`;
        }
    }

    var person = new Person('hilarie');
    console.log(person.run());
    