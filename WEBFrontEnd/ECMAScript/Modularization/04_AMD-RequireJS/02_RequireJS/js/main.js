// 主模块;
(function () {
    
    require.config({
        // baseUrl: 'http://127.0.0.1:8080/',
        paths: {
            // dataService: "js/modules/dataService",
            // alerter: "js/modules/alerter",
            dataService: "./modules/dataService",
            alerter: "./modules/alerter",
        }
    });

    require(['alerter'], function (alerter) {
        alerter.showMsg();
    })
    
})()