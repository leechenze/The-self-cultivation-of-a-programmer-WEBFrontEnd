// 可索引接口: 对数组, 对象的约束;

    // 数组接口;
        interface UserArr {
            // ind相当于一个变量, 代替索引的意义;
            // :number表示约束索引ind类型, :string表示是约束值类型
            // 数组中的索引一定是number类型的, 但是也一定要声明清楚, 如果ind后不声明:number会报错;
            [ind:number]:string
            // 如果声明any便可以在数组中传入任何类型的数组值;
            // [ind:number]:any
        }

        var arr:UserArr = ['123', '234'];
        console.log(arr[0]);



    // 对象接口;
        interface UserObj {
            [ind:string]:string;
        }
        // 对象的键即使不加""系统也是会默认声明为字符串类型的;
        var obj:UserObj = {
            name: 'leecs',
            sex: 'man',
            hobby: 'football',
            age: '30',
        }

        console.log(obj);




// 类类型接口: 对类进行约束, 和抽象类有异曲同工之妙;
    
    interface Animal {
        // 定义name属性;
        name:string;
        // 定义eat方法; 参数是string,参数也可以不传入, 但是如果传参务必要是:string或:any类型;
        // 声明为一个没有返回值的viod类型的方法, 但允许有返回值, 不会报错;
        eat(str:string):void;
        
    }


    // 注意接口不应该是继承(extends), 而应该是实现(implements);
    class Dog implements Animal{

        public name:string;
        constructor(name:string) {

            this.name = name;

        }

        eat(num:any) {
            console.log(this.name + num + '岁了');
            return this.name + '吃狗粮';
        }
    }

    var dog = new Dog('小黑');
    console.log(dog.eat(20));

    


    