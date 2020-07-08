// ES函数的定义:
    // 函数声明:
        function test() {
            return 'fun';
        }
    // 匿名函数:
        var test1 = function () {
            return 'fun'
        }

        
// TS中函数定义:
    // 函数声明:
        function fun():string {
            return '123';
        }

    // 匿名函数
        var fun1 = function ():number{
            return 123;
        }


// TS中定义方法传参;
    function getInfo(name:string, age:number):string{
        return `${name} --- ${age}`;
    }
    // alert(getInfo('张三', 20));

    var getInfo1 = function (name:string, age:number):string{
        return `${name} --- ${age}`;
    }
    // alert(getInfo('张三', 20));


// 可选参数;
    // ES5中的实参和形参可以不同, 但是TS中必须相同, 如果不同就需要配置可选参数;
    // 执行时如果不传age会有语法错误, 那么此时就需要指定age这个参数为可选参数 age后面加个问好即可(age?:number);
    function getInfo2(name:string, age?:number):string{
        if(age){
            return `${name} --- ${age}`;
        }else{
            return `${name} --- 年龄保密`;
        }
    }

    // console.log(getInfo2('张三'));
    // console.log(getInfo2('张三', 20));





// 默认参数;
    // ES5中无法设置默认参数, TS中必须设置默认参数;
    
    function getInfo3(name:string, age:number=20):string{
        if(age){
            return `${name} --- ${age}`;
        }else{
            return `${name} --- 年龄保密`;
        }
    }
    // console.log(getInfo3('张三'));





// 剩余参数(三点运算符);
    // 三点运算符
    function sum(...result:number[]):number {
        var sum = 0;

        result.forEach(function (item, ind) {
            sum += item;
        })
        return sum;
    }
    // console.log(sum(1,2,3,4))

    // 剩余参数
    function sum1(a:number, b:number,...result:number[]):number {
        var sum = a + b;

        result.forEach(function (item, ind) {
            sum += item;
        })
        return sum;
    }
    // console.log(sum1(1,2,3,4))






    
// 函数重载;
    // 参数不同的重载方法;
        // 以下是函数重载;
        function getInfo4(name:string):string;
        function getInfo4(age:number):number;
        // 参数只读重载函数的参数类型声明, 实际函数体的参数类型声明不会在执行时应该用到;
        // 也就是说, 函数体是any, 但是函数重载限定是string或number, 那么就只能是重载限定的string和number两个参数类型,
        // 函数体的any不会对执行时传入的实参生效, :any限定的是重载函数的形参类型声明;
        // 
        function getInfo4(str:any):any{
            if(typeof str == 'string'){
                return `我叫:${str}`;
            }else{
                return `我的年龄是:${str}`;
            }
        }
        
        // console.log(getInfo4('张三'));
        // console.log(getInfo4(20));
        
        // 传入true就会报错, 因为在重载的方法中,没有声明参数为boolean的函数;
        // console.log(getInfo4(true));


    // 参数相同的重载方法;
        function getInfo5(name:string):string;
        function getInfo5(name:string, age:number):string;
        function getInfo5(name:any, age?:any):any{
            if(age){
                return `我叫${name},我的年龄是${age}`;
            }else{
                return `我叫${name},我的年龄保密`;
            }
        }
        
        // console.log(getInfo5('leecs', 20));
        




// 箭头函数;
    // 箭头函数中的this指向上下文;
    setTimeout(function () {
        console.log('ES5');
    },1000);


    setTimeout(():any => {
        console.log('Arrow');
    },1000);

    