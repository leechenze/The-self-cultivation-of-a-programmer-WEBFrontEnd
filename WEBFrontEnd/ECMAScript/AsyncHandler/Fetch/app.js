const express = require('express');
const server = express();
var user = {
    lee : '111',
}

server.listen(9999);

server.use('/login', (req, res) => {
    if(user[req.query.user] == req.query.pass){
        res.send({'ok':1, msg: '登录成功'});
    }else{
        res.send({'ok':0, msg: '登录失败'});
    }
})

server.use('', express.static('./'));

