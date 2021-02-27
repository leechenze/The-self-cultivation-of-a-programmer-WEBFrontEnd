// 接口地址: http://public-api-v1.aspirantzhang.com
// 在.umirc.ts中配置代理 (配置查询Umi官网)

import { request } from 'umi';
import { message } from 'antd';

// effects调用接口时一般都是异步函数, 这里使用async/await函数处理;
// 获取列表;
export const getRemoteList = async () => {
    return request('/api/users', {
        method: 'GET',
    }).then(function (response) {
        // console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
    });
}

// 修改逻辑;
export const editRecordList = async ({ id, values }) => {
    return request(`/api/users/${id}`, {
        method: 'PUT',
        data: values
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        message.success('request editRecordList success');
        return response;
    }).catch(function (error) {
        message.error('request delRecordList error');
    });
}

// 删除逻辑;
export const delRecordList = async (values) => {
    return request(`/api/users/${values.id}`, {
        method: 'DELETE',
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        message.success('request delRecordList success');
        return response;
    }).catch(function (error) {
        message.error('request delRecordList error');
    });
}


// 添加逻辑;
export const addRecordList = async (values) => {
    return request(`/api/users/`, {
        method: 'POST',
        data: values
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        message.success('request addRecordList success');
        return response;
    }).catch(function (error) {
        message.error('request addRecordList error');
    });
}