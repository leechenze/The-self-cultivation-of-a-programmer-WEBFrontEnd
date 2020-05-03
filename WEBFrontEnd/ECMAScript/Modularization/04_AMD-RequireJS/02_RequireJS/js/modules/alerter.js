// 定义一个有依赖的模块;
define(['dataService'], function(dataService) {
    let msg = 'alerter';
    function showMsg()  {
        console.log(msg + '=======>' + dataService.getName());
    }

    // 暴露模块
    return {"showMsg": showMsg};  
});