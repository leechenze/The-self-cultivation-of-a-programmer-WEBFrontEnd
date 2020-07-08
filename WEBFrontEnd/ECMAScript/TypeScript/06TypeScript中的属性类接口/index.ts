// 属性接口
    // 属性接口 就是对JSON的约束;
        // function printLabel(labelInfo:{label:string}):void {
        //     console.log('printLabel');        
        // }

        // // 错误, 因为形参中规定的JSON的键是label;
        // // printLabel({name: '张三'});
        // // 正确;
        // // printLabel({label: '张三'});





    // 对批量方法传入参数进行约束;
        // // 接口: 行为和动作的规范, 对批量方法的约束;
        // // interface关键字定义接口;

        // // 定义属性接口, 定义的键值中一定是以分号结尾, 并不是JOSN中的逗号结尾;
        // // 一旦接口中定义了, 就是一定要还传入的, 除非用?可选参数来指定当前属性为可选的, 在应用中就可以不传入;
        // interface FullName {
        //     firstName:string;
        //     secondName?:string;
        // }
        
        // function printName(name:FullName):void {
        //     // 传入的name这个形参必须是对象, 对象中必须有 firstName 和 secondName, 并且必须是string类型;
        //     // 这个name必须是:FullName, 就相当label必须是:string, 而这个FullName接口是自己定义的, string是系统定义的;
        //     console.log(`${name.firstName} === ${name.secondName}`);
        //     // 并且, 如果不安装接口定义的内容走, 比如加了一个age, 虽然实参的对象有age属性, 但是还是会报错,
        //     // 所以, 声明接口就必须要严格按照接口声明的内容走;
        //     // console.log(`${name.firstName} === ${name.secondName} === ${name.age}`);
            
        // }

        // // 这样写age会报错;
        // // printName({
        // //     firstName: '张',
        // //     secondName: '三',
        // //     age: 20,
        // // })
        // // 所以推荐以下写法, 可以避免这种错误;
        // var obj = {
        //     firstName: '张',
        //     secondName: '三',
        //     age: 20,
        // };
        // printName(obj);

    


    // 属性类型接口应用: TS封装ajax;
        // 用TS规定ajax必须传入这么几个属性;
        // $.ajax({
        //     type: 'GET',
        //     url: 'test.json',
        //     data: {
        //         username: $('#username').val(),
        //         content: $('#content').val(),
        //     },
        //     dataType: 'json'
        // })

        // 定义接口;
        interface ajaxConfig{

            type:string;

            url:string;

            data?:string;

            dataType: string;

        }
        
        function ajax(config:ajaxConfig) {

            var xhr:any = new XMLHttpRequest();

            xhr.open(config.type, config.url, true);
            
            xhr.send(config.data);
            
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4 && xhr.status == 200){
                    console.log('请求成功');
                    // 如果返回的数据是JOSN, 那么对JSON做序列化处理;
                    if(config.dataType == 'json'){
                        JSON.parse(xhr.responseText);
                        console.log(JSON.parse(xhr.responseText));
                    }else{
                        console.log(xhr.responseText);
                    }
                }
            }
        }
        
        ajax({
            type: 'GET',
            url: 'http://a.itying.com/api/productlist',
            data: 'name=Hilarie',
            dataType: 'json',
        });