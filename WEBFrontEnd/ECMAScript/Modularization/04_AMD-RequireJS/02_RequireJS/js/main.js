// 主模块;
(function () {
    
    require.config({
        // baseUrl: 'http://127.0.0.1:8080/',
        paths: {
            // dataService: "js/modules/dataService",
            // alerter: "js/modules/alerter",
            dataService: "./modules/dataService",
            alerter: "./modules/alerter",
            jquery : "./libs/jquery.min",
        }
    });
    
    
    require(['alerter'], function (alerter) {
        alerter.showMsg();
    })



    define(['jquery'], function($) {
        $('body').css('background-color', 'green');
    });
    
    
})()