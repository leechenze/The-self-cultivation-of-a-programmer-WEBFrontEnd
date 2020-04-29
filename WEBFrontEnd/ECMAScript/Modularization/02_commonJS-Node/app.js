/**将其他的模块引入到主模块  */


// 外部依赖的插件模块应该在自定义的模块之前引入;
let uniq = require('uniq');


let modules1 = require('./modules/modules1');
let modules2 = require('./modules/modules2');
let modules3 = require('./modules/modules3');



modules1.foo();

modules2.foo();
modules2.bar();
let result = uniq(modules2.arr);
console.log(result);


modules3();
