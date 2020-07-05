// 装饰器:
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 可以修改类的行为;
// 通俗来讲: 装饰器就是一个方法, 可以注入到类, 方法, 属性参数上来扩展类, 属性, 方法, 参数的功能;
// 常见的装饰器有: 类装饰器, 属性装饰器, 方法装饰器, 参数装饰器;
// 装饰器的写法: 普通装饰器(无法传参), 装饰器工厂(可传参);
// 装饰器是过去几年中JS最大的成就之一, 已是ES7的标准特性之一;

// 类装饰器: 
    //类装饰器在类声明之前被声明(紧靠着类声明), 类装饰器应用于类构造函数, 可以用来监视, 修改或替换类定义;

    // // 定义普通装饰器: function就是一个装饰器;
    // function logClass (params:Function) {
    //     // 这个params就是应用装饰器时后面的那个类(HttpClient);
    //     console.log(params);
    //     // 通过类装饰器动态给 HttpClient 扩展属性
    //     params.prototype.apiurl = '动态扩展的属性';
    //     // 通过类装饰器动态给 HttpClient 扩展方法;
    //     params.prototype.run = function () {
    //         console.log('通过装饰器动态扩展的方法');
    //     }
    // }
    
    // // @logClass 一定在class之前, 中间不可以有任何符号或字体, 允许换行声明;
    // @logClass class HttpClient {
    //     constructor() {
            
    //     }
    //     // 当装饰器中有声明的run方法时, lei内部的同名的实例方法会被覆盖掉;
    //     run() {
    //         console.log('HttpClient类内部的实例方法');
    //     }
    // }

    // var http:any = new HttpClient();
    // http.run();

    




    // // 定义装饰器工厂 (可传参);
    // function logClass (...params:string[]) {
    //     // 装饰器工厂的话params就不是调用时后面的类了; 而是调用时传入的参数;
    //     console.log(params);
    //     return function (target:any) {
    //         // 现在target才是logClass调用时后面的类;
    //         console.log(target);
    //         // 通过类装饰器动态给 HttpClient 扩展属性;
    //         target.prototype.apiurl = params;
    //         // 通过类装饰器动态给 HttpClient 扩展方法;
    //         target.prototype.run = function () {
    //             console.log(params.join(''));
    //         }
    //     }
    // }
    
    // // @logClass(中间传入参数), 装饰器工厂, 其后再跟上装饰类;
    // @logClass("hellow",' world') class HttpClient {
    //     constructor() {
            
    //     }
    //     // 当装饰器中有声明的run方法时, lei内部的同名的实例方法会被覆盖掉;
    //     run() {
    //         console.log('HttpClient类内部的实例方法');
    //     }
    // }

    // var http:any = new HttpClient();
    // http.run();








// 类装饰器重载构造函数的例子;
    // 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
    // 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。


    // function logClass (target:any) {
    //     return class extends target{
    //         public apiUrl:any = '装饰器继承类中的apiUrl';
    //         getData() {
    //             console.log(this.apiUrl);
    //         }
    //     }
    // }
    
    // @logClass class HttpClient {
    //     public apiUrl:string | undefined;
    //     constructor() {
    //         this.apiUrl = '构造函数中的apiUrl';
    //     }
    //     getData() {
    //         console.log(this.apiUrl);
    //     }
    // }

    // var http:any = new HttpClient();
    // http.getData();






// 属性装饰器;
    // 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
        // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        // 成员的名字。


    // // 以下例子实现用属性装饰器 赋值 HttpClient类中 的apiurl属性;
    // function logPrototype (params:string) {
    //     return function (target:any, attr:any) {
    //         console.log(target);
    //         console.log(attr);
    //         target[attr] = params;
    //     }
    // }
    
    // class HttpClient {
    //     @logPrototype('http://www.leechenze.com')
    //     public apiUrl:any | undefined;
    //     constructor() {
            
    //     }
    //     getData() {
    //         console.log(this.apiUrl);
    //     }
    // }

    // var http = new HttpClient();
    // http.getData();






// 方法装饰器:
    // 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
        // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        // 成员的名字。
        // 成员的属性描述符

    
    // 方式装饰器一;
        // // 定义属性装饰器; 用于修改和扩展当前的属性和方法;
        // function logMethod(params:any) {
        //     return function (target:any, metName:any, desc:any) {
        //         // HttpClient原型对象;
        //         console.log(target);
        //         // 操作的方法名称;
        //         console.log(metName);
        //         // 对于房前方法的描述, 其中有个value属性指向的就是当前的方法;
        //         console.log(desc);
                

        //         // 在装饰器中修改类中的属性;
        //         target.apiUrl = '装饰器中修改的值';
        //         // 在装饰器中扩展run方法;
        //         target.run = function () {
        //             console.log('装饰器中扩展的run方法');
        //         }
        //     }
        // }
        
        // // 定义类;
        // class HttpClient {
        //     public apiUrl:string | undefined;
        //     constructor() {
                
        //     }
        //     @logMethod('http://www.leechenze.com')
        //     getData() {
        //         console.log(this.apiUrl);
        //     }
        // }

        // var http:any = new HttpClient();
        // // 查看装饰器中修改的apiUrl属性;
        // http.getData();
        // // 查看装饰器中扩展的run方法;
        // http.run();


        


    // 方法装饰器二;
        // // 定义方法装饰器, 修改当前参数中的方法为string类型;
        // function logMethod(params:any) {
        //     return function (target:any, metName:any, desc:any) {
        //         var newMethod = desc.value;
        //         // 重写getData的方法, 修改getData方法中的所有参数为string类型;
        //         desc.value = function (...args:any[]) {
        //             args = args.map((value) => {
        //                 return value.toString();
        //             })
        //             console.log(args);
        //             // 如果不想重写, 还想执行getData中的操作; 可以将这个方法地址保存, 然后在用apply在这里传入this调用即可;
        //             newMethod.apply(this, args);
        //         }
        //     }
        // }
        
        // // 定义类;
        // class HttpClient {
        //     public apiUrl:string | undefined;
        //     constructor() {
                
        //     }
            
        //     @logMethod('http://www.leechenze.com')
        //     // 这个方法在装饰器中重写就会覆盖掉现有的所有所有操作;
        //     getData(...args:any[]) {
        //         console.log(args);
        //         console.log('HttpClient类中的实例方法');
        //     }
        // }

        // var http:any = new HttpClient();
        // http.getData(123,true)









// 方法参数装饰器
    // 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
        // 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        // 成员的名字。
        // 参数在函数参数列表中的索引。
    
    // function logParams(params:any) {
    //    return function (target:any, metName:any, parInd:any) {
    //        // HttpClient原型对象;
    //        console.log(target);
    //        // 方法名称;
    //        console.log(metName);
    //        // 参数索引;
    //        console.log(parInd);
    //        target.name = params;
    //    }
    // }
    
    // class HttpClient {
    //     public apiUrl:any;
    //     constructor() {
            
    //     }
    //     // 调用方法和属性方法类都相同, 之后接个空格添加参数;
    //     getData(@logParams('clinton') uuid:any) {
    //         console.log(uuid);
    //     }
    // }

    // var http = new HttpClient();
    // http.getData(123);











// 装饰器执行顺序;
    // 属性>方法>方法参数>类, 如果有多个相同的装饰器, 会先执行后面的装饰器;
    // 如果方法参数装饰器应用在了方法装饰器中, 方法会等待方法参数执行完在执行, 如: 实例中logParams和logParams2;
    
    // 定义方法装饰器;
    function logMethod(params:any) {
       return function (target:any, metName:any, parInd:any) {
            console.log(params);
       }
    }
    
    // 定义类装饰器;
    function logClass(params:any) {
        return function (target:any) {
            console.log(params);
        }
    }
 
    // 定义属性装饰器;
    function logAttr(params:any) {
        return function (target:any, attr:any) {
            console.log(params);
        }
    }
 
    // 定义方法参数装饰器;
    function logParams(params:any) {
        return function (target:any, metName:any, parInd:any) {
            console.log(params);
        }
    }
    // 定义方法参数装饰器;
    function logParams2(params:any) {
        return function (target:any, metName:any, parInd:any) {
            console.log(params);
        }
    }
 
    @logClass('类') class HttpClient {
        @logAttr('属性')
        public apiUrl:any;
        constructor() {
            
        }
        @logMethod('方法')
        getData(@logParams('方法参数') uuid:any) {

        }
        getData2(@logParams2('方法参数1') uuid:any) {
            
        }
    }
