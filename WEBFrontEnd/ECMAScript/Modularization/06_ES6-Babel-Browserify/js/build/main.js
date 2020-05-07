'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _module = require('./module1.js');

var _module2 = require('./module2.js');

var _module3 = require('./module3.js');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入第三方模块; (和require一样直接, 第三方直接引入包名)
(0, _jquery2.default)('body').css('background-color', 'green');

// 引入其他模块;


(0, _module.foo)();
(0, _module.bar)();
console.log(_module.arr);
(0, _module2.foo2)();
(0, _module2.bar2)();
console.log(_module4.default);
console.log(_module4.default.foo());