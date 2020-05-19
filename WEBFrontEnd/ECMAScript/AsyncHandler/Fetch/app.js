const express = require('express');
const server = express();
const bodyParser = require('body-parser');
var user = {
    lee : '111',
}

server.use(bodyParser.urlencoded({}))
server.listen(9999);

server.post('/loginPost', (req, res) => {
    if(user[req.body.user] == req.body.pass){
        res.send({'ok':1, msg: '登录成功'});
    }else{
        res.send({'ok':0, msg: '登录失败'});
    }
})

server.use('/login', (req, res) => {
    if(user[req.query.user] == req.query.pass){
        res.send({'ok':1, msg: '登录成功'});
    }else{
        res.send({'ok':0, msg: '登录失败'});
    }
})

server.use('', express.static('./'));

