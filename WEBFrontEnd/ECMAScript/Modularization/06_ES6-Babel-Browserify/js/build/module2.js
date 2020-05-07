'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 暴露模块 统一暴露;
function foo2() {
    console.log('foo() modules2');
}

function bar2() {
    console.log('bar() modules2');
}

// export {foo,bar};
exports.foo2 = foo2;
exports.bar2 = bar2;