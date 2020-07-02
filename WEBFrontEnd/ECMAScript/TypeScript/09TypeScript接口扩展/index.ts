// 接口扩展: 接口可以继承接口;
    // 定义一个Animal接口;
        interface Animal {
            eat():void;
        }

    // 接口扩展, 接口继承和类继承的关键字相同(extends);
        interface Person extends Animal {

            work():void;
            
        }

    
    // 定义一个Web的类, 供Programmer继承用;
        class Web {
            public name:string;
            constructor(name:string) {
                this.name = name;
            }

            coding(code:string) {
                return `${this.name+code}`
            }
            
        }    

    



        
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
        class Programmer extends Web implements Person{

            public name:string;
            constructor(name:string) {
                super(name);
                this.name = name;
            }

            // 两个接口有继承关系, 所以web这个类必须实现的两个接口中的所有属性和方法;
            eat(){
                return this.name + ' 不认识 TypeScript';
            }
            work() {
                return this.name + ' live JavaScript'
            }
            
        }

        var programmer = new Programmer('leecs');
        // 接口的方法;
        console.log(programmer.eat());
        console.log(programmer.work());
        // 继承Web的方法;
        console.log(programmer.coding(' learn TypeScript'));
    
    
    
