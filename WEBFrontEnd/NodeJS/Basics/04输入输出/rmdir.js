var fs = require('fs');

// 删除abc目录, 回调函数没有参数;
fs.rmdir('abc', function () {
    console.log('删除成功');
})