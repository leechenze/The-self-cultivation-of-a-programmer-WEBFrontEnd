// 定义没有依赖的模块
define(function () {
    let name = 'dataService';
    function getName() {
        console.log(name);
    }

    // 暴露模块;
    return {'getName': getName};
})