// 引入第三方模块; (和require一样直接, 第三方直接引入包名)
import $ from 'jquery';

// 引入其他模块;
import {foo, bar, arr} from './module1.js';
import {foo2, bar2} from './module2.js';
import module3 from './module3.js';


$('body').css('background-color', 'green');


foo();
bar();
console.log(arr);
foo2();
bar2();
console.log(module3);
console.log(module3.foo());