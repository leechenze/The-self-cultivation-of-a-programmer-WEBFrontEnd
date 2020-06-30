"use strict";
// 属性接口
// 属性接口 就是对JSON的约束;
// function printLabel(labelInfo:{label:string}):void {
//     console.log('printLabel');        
// }
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('请求成功');
            // 如果返回的数据是JOSN, 那么对JSON做序列化处理;
            if (config.dataType == 'json') {
                JSON.parse(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'GET',
    url: 'http://a.itying.com/api/productlist',
    data: 'name=Hilarie',
    dataType: 'json',
});
