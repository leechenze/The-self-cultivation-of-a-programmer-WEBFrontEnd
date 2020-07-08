let a = 123;
let b = 234;

console.log('exports中一段打印内容');

// 默认导出对象如果不设值, 会默认输出空对象, 而不会报错
// 默认导出的对象(exports 现在有个a属性);
exports.a = a;