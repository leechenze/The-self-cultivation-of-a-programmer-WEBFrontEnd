define(function (require, exports, module) {
    let msg = 'module2';
    function bar() {
        console.log(msg);
    }

    // 暴露;
    module.exports = bar;
    
})