define(function (require) {
    // module1 暴露的foo没有和任何模块打交道(需要引入);
    // module2, module3两个模块被module4依赖了, 当引入module4时就会找到依赖项(module2,module3);
    // 所以只需要引入mdule1和module4即可;

    let module1 = require('./modules/module1.js');
    console.log(module1.foo());
    let module4 = require('./modules/module4.js');
    module4.run2();

    // 结果是:
        // moudle1
        // moudle2
        // moudle4
        // moudle3
    // 原因就在于module3是异步加载的, 不会阻塞module4的加载;
    // 故而module4不会等候module3的读取完成便会先行执行;
    
})