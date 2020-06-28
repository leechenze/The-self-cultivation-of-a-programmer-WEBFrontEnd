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
    console.log(getInfo3('张三'));





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
    