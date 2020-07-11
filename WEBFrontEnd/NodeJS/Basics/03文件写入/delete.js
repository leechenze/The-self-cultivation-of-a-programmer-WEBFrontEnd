var fs = require('fs');
fs.unlink('delete.txt', function () {
    console.log('删除成功');
})