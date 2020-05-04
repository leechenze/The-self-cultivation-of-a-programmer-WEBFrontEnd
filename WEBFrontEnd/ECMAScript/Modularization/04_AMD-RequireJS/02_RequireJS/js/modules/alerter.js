// 定义一个有依赖的模块;
define(['dataService', 'jquery'], function(dataService, $) {
    let msg = 'alerter';
    function showMsg()  {
        console.log(msg + '=======>' + dataService.getName());
    }

    // $('body').css('background-color', 'red');
    
    // 暴露模块
    return {"showMsg": showMsg};  
});