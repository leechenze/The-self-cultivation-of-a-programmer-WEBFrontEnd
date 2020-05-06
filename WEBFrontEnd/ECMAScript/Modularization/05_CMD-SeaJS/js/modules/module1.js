// 定义没有依赖的模块;
define(function (require, exports, module) {
    let msg = 'module1';
    function foo () {
        return msg;
    }
    // 暴露模块;
    // module.exports = {foo};
    // module.exports = {
    //     foo: foo,
    // };
    exports.foo = foo;
})