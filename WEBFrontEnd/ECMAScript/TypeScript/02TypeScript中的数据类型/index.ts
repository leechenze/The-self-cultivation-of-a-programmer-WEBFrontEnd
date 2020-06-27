// 布尔类型
    var flag:boolean = true;
        flag = false;

// 数字类型
    var num:number = 123;
        num = 12.3;

// 字符串类型;
    var str:string = 'hello world TypeScript';
        str = 'hello world'


// 数组类型
    // 定义方式一;
    let arr1:number[] = [1, 23, 322, 91, 1, 0];
    // 定义方式二;
    let arr2:Array<number> = [1,22,33,44,5,6,1];


// 元组类型
    let tuple1:[string, number, boolean] = ['asdf', 123, true];



// 枚举类型
    enum flag1 {
        success = 1,
        error = -1,
    }
    var f:flag1 = flag1.success;
    console.log(f);

    
    // enum color {red, blue, orange};
    // var result1:color = color.red;
    // var result2:color = color.blue;
    // var result3:color = color.orange;
    // console.log(result1, result2, result3);
    
    enum color {red, blue=5, orange};
    var result1:color = color.red;
    var result2:color = color.blue;
    var result3:color = color.orange;
    console.log(result1, result2, result3);
    



// 任意类型
    var any:any = 'asdf';
    var num1:any = 123;
    var flag2:any = false;
    // 比如: 如果不指定any会警告语法错误, 此时指定any即可解决;
    // var oBox = document.getElementById('box');
    var oBox:any = document.getElementById('box');
    oBox.style.color = 'red';




// null 和 undefined 其他类型(never类型)的子类型;
    var num:number;
    console.log(num);
    
    var num2:number | undefined;
        num2 = 123;
    console.log(num2);

    var num3:null | undefined | number;
        num3 = 123;
    




// void类型 (表示没有任何类型(函数没有返回值), 一般用于定义方法时方法没有返回值的情况);
    function run():void {
        console.log('run');
    }
    run();

    var num4 = function num4():number {
        return 123;
    }
    num4();
    var arr3 = function arr3():[string, number, boolean] {
        return ['asdf', 12, true];
    }
    var arr4 = function arr4():any[] {
        return ['asdf', 12, true];
    }
    var flag3 = function flag3():boolean {
        return true;
    }




// never类型: 其他类型(包括null 和 undefined类型); 代表从不会出现的值, 这意味着声明never变量只能被never类型所赋值;
    var never:never;
    
    never = (() => {
        throw new Error('error');
    })();
    