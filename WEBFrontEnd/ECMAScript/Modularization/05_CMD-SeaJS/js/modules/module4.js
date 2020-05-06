define(function (require, exports, module) {
    let msg = 'module4';
    // 同步引入;
    let module2 = require('./module2');
    module2();
    // 异步引入
    require.async('./module3', function (m3) {
        m3.module3.run();
    })
    function run2() {
        console.log(msg);
    }
    exports.run2 = run2;

})