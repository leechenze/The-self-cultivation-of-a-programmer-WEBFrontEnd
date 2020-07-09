let fs = require('fs');

fs.writeFile('./write.txt', '红烧狮子头\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
    if(err) {
        console.log('写入内容出错');
    }else{
        console.log('写入内容成功');
        fs.writeFile('./write.txt', '鱼香茄子\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
            if(err) {
                console.log('写入内容出错');
            }else{
                console.log('写入内容成功');
                fs.writeFile('./write.txt', '白切记\n', {flag: 'a', encoding: 'utf-8'}, function (err) {
                    if(err) {
                        console.log('写入内容出错');
                    }else{
                        console.log('写入内容成功');
                        
                    }
                })
            }
        })
    }
})