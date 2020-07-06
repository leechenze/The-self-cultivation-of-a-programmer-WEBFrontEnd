// 默认可以不加后缀.js等文件, 系统会自动隐私补全, require操作会将exports模块中的代码执行;
let newexports = require('./exports');
let newmodule = require('./module');

console.log(newmodule);


let $ = require('jquery')
console.log($);