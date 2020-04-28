/**
 * IIFE模式增强, 引入依赖
 * 也是现代模块化的基石;
 */

 
 (function (widnow, $) {

    var msg = 'leechense.com';
    function foo () {
        console.log('foo', msg);
        $('body').css('background-color', '#2c3e50');
    }
    
    window.foo = foo;
     
 }(window, jQuery));