/** IIFE:匿名函数自调用(闭包应用) */

(function (window) {
    var msg = 'leechense.com';
    function foo() {
        console.log('foo', msg);
    }

    // window.modules3 = {foo};
    window.modules3 = {
        foo: foo,
    }
    
})(window);