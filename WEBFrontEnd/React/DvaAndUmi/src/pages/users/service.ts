// 接口地址: http://public-api-v1.aspirantzhang.com
// 在.umirc.ts中配置代理 (配置查询Umi官网)

import { request } from 'umi';

// effects调用接口时一般都是异步函数, 这里使用async/await函数处理;
export const getRemoteList = async () => {
    request('/api/users', {
        method: 'get',
    }).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
    });

}