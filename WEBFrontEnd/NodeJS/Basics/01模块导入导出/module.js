
// exports = {user: 'leecs'};
// 输出还是 { a: 1 };
// module.exports = {user: 'leecs'};
// 输出为 { user: 'leecs' };
// 因为系统隐私操作: exports = module.exports; return module.exports;



// 如果单个导出时, 使用exports, 比如:
    // exports.a = 1;
    // exports.b = 2;
    // exports.c = 3;
// 如果导出一个对象时, 使用module.exports, 比如;

    // exports.a = 1;
    // let b = 'leecs';

    // module.exports = {
    //     'a':this.a,
    //     'b':b,
    // }