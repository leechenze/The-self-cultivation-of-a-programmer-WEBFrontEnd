// 泛型概念: 
// 日常开发中, 我们不仅要创建一致的定义良好的API, 同时也要考虑可重用性, 不仅能够支持当前的数据类型,
// 同时也需要支持未来的可能会存在的未知(不特定)数据类型, 才可以在大型项目开发中游刃有余;

// 像C#和Java这样的语言中, 就是使用泛型来创建可从用的组件的, 一个组件可以支持多种类型的数据, 这样用户便可以以自己的数据类型来使用组件;

// 通俗解释: 泛型就是解决 类 接口 方法的复用性, 以及对未知(不特定)的数据类型的支持和数据校验;



// 定义泛型函数;
    // //  <T> 表示泛型, 具体T是什么类型是由调用这个方法的时候决定的, 传入的参数也是泛型, 返回值也定义为泛型;
    // function getData<T>(value:T):T {
    //     // 既然声明了泛型, 那么就要传入什么返回什么, 否则TS将会报错;
    //     // 否则也可以规定它的返回值不是:T泛型, 或是:any即可不限制返回值, 方可返回任意值;
    //     return value;
    // }

    // // 以下在调用时候定义了泛型为number, 就表示函数体上定义的泛型<T>就是number类型;
    // console.log(getData<number>(234));




    

// 定义泛型类;
    // 泛型类: 比如有个最小堆算法, 需要同时支持返回数值和字符串两种类型, 通过类的泛型来实现;


    // 只支持number类型的校验;
    // class MinClass {
    //     public list:number[] = [];

    //     add(num:number) {
    //         this.list.push(num);
    //     }

    //     min():number {
    //         var minNum = this.list[0];

    //         for(var i = 0; i < this.list.length; i++ ){
    //             if(minNum > this.list[i]) {
    //                 minNum = this.list[i];
    //             }
    //         }
    //         return minNum;
    //     }
    // }

    // var minclass = new MinClass();
    // minclass.add(62)
    // minclass.add(23)
    // minclass.add(22)
    // minclass.add(26)
    // minclass.add(34)
    // console.log(minclass.min());



    
    // 实现支持number和string两种类型校验的类, 需要用泛型类实现;
    class MinClass<T> {
        public list:T[] = [];

        add(num:T):void {
            this.list.push(num);
        }

        min():T {
            var minNum = this.list[0];

            for(var i = 0; i < this.list.length; i++ ){
                if(minNum > this.list[i]) {
                    minNum = this.list[i];
                }
            }
            return minNum;
        }
    }

    // 实例化类, 并且指定了类的T类型(泛型)是number;
    var minclassnum = new MinClass<number>();
    minclassnum.add(62)
    minclassnum.add(23)
    minclassnum.add(12)
    minclassnum.add(26)
    minclassnum.add(34)
    console.log(minclassnum.min());
    

    // 实例化类, 并且指定了类的T类型(泛型)是string;
    // 普及: 字符串判断大小, 比的是字符串的ASCII码, 
    var minclassstr = new MinClass<string>();
    minclassstr.add('a')
    minclassstr.add('b')
    minclassstr.add('c')
    minclassstr.add('d')
    minclassstr.add('e')
    console.log(minclassstr.min());
    