

## 一.程序结构;

***C 程序主要包括以下部分：***

- 预处理器指令
- 函数
- 变量
- 语句 & 表达式
- 注释



    #include <stdio.h>
    
    int main()
    {
    /* 我的第一个 C 程序 */
    printf("Hello, World! \n");
    
    return 0;
    }

1. 程序的第一行 #include <stdio.h> 是预处理器指令，告诉 C 编译器在实际编译之前要包含 stdio.h 文件。
2. 下一行 int main() 是主函数，程序从这里开始执行。
3. 下一行 /*...*/ 将会被编译器忽略，这里放置程序的注释内容。它们被称为程序的注释。
4. 下一行 printf(...) 是 C 中另一个可用的函数，会在屏幕上显示消息 "Hello, World!"。
5. 下一行 return 0; 终止 main() 函数，并返回值 0。

***编译 & 执行 C 程序***

1. 打开一个文本编辑器，添加上述代码。
1. 保存文件为 hello.c。
1. 打开命令提示符，进入到保存文件所在的目录。
1. 键入 gcc hello.c，输入回车，编译代码。
1. 如果代码中没有错误，命令提示符会跳到下一行，并生成 a.exe 可执行文件。
1. 现在，键入 a.exe 来执行程序。
1. 您可以看到屏幕上显示 "Hello World"       


    $ gcc hello.c
    $ ./a.exe
    Hello, World!
***如果是多个 c 代码的源码文件，编译方法如下:***

    $ gcc test1.c test2.c -o main.exe
    $ ./main.exe
test1.c 与 test2.c 是两个源代码文件

-------------------------




## 二.基本语法;

***注释***

    // 单行注释
    /* 
    多行注释
    多行注释
    多行注释
    */
***标识符***
 
1. C 标识符是用来标识变量函数，或任何其他用户自定义项目的名称。一个标识符以字母 A-Z 或 a-z 或下划线 _ 开始，后跟零个或多个字母、下划线和数字（0-9）。
1. C 标识符内不允许出现标点字符，比如 @、$ 和 %;
1. C 是区分大小写的编程语言。

***关键字***    

| 关键字     | 说明            |
|:---------|:--------|
|auto|	声明自动变量|
|break|	跳出当前循环|
|case|	开关语句分支|
|char|	声明字符型变量或函数返回值类型|
|const|	定义常量，如果一个变量被        const 修饰，那么它的值就不能再被改变|
|continue|	结束当前循环，开始下一轮循环|
|default|	开关语句中的"其它       "分支|
|do|	循环语句的循环体|
|double|	声明双精度浮点型变量或函数返回值类型|
|else|	条件语句否定分支（与        if 连用）|
|enum|	声明枚举类型|
|extern|	声明变量或函数是在其它文件或本文件的其他位置定义|
|float|	声明浮点型变量或函数返回值类型|
|for|	一种循环语句|
|goto|	无条件跳转语句|
|if|	条件语句|
|int|	声明整型变量或函数|
|long|	声明长整型变量或函数返回值类型|
|register|	声明寄存器变量|
|return|	子程序返回语句（可以带参数，也可不带参数）|
|short|	声明短整型变量或函数|
|signed|	声明有符号类型变量或函数|
|sizeof|	计算数据类型或变量长度（即所占字节数）|
|static|	声明静态变量|
|struct|	声明结构体类型|
|switch|	用于开关语句|
|typedef|	用以给数据类型取别名|
|unsigned|	声明无符号类型变量或函数|
|union|	声明共用体类型|
|void|	声明函数无返回值或无参数，声明无类型指针|
|volatile|	说明变量在程序执行中可被隐含地改变|
|while|	循环语句的循环条件|

***C99 新增关键字***

<table>
    <tbody>
        <td>_Bool</td>
        <td>_Complex</td>
        <td>_Imaginary</td>
        <td>inline</td>
        <td>restrict</td>
    </tbody>
</table>

***C11 新增关键字***

<table>
    <tbody>
        <tr>
            <td>_Alignas</td>
            <td>_Alignof</td>
            <td>_Atomic</td>
            <td>_Generic</td>
            <td>_Noreturn</td>
        </tr>
        <tr>
            <td>_Static_assert</td>
            <td>_Thread_local</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

----------------------------












## 三.数据类型;



-------------------------






## 四.变量/常量;