(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let modules1 = require('./modules1');
let modules2 = require('./modules2');
let modules3 = require('./modules3');

modules1.foo();

modules2();

modules3.foo();
modules3.bar();

},{"./modules1":2,"./modules2":3,"./modules3":4}],2:[function(require,module,exports){
module.exports = {
    msg: 'leechenseone.com',
    foo(){
        console.log('foo', this.msg);
    }
}
},{}],3:[function(require,module,exports){

let msg = 'leechensetwo.com';

module.exports = function () {
    console.log(msg);
}
},{}],4:[function(require,module,exports){
exports.foo = function () {
    console.log('leechensethree.com');
}
exports.bar = function () {
    console.log('leechensethree.com');
}
},{}]},{},[1]);
