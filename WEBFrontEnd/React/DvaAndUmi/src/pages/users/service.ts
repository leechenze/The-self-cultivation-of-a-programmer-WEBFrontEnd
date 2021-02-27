// 接口地址: http://public-api-v1.aspirantzhang.com
// 在.umirc.ts中配置代理 (配置查询Umi官网)

import request, { extend } from 'umi-request';
import { message } from 'antd';


const errorHandler = function (error) {
    // HTTP状态码错误判断
    if (error.response.status > 400) {
        console.log(error.response.status);
        // message.error(error.data.message ? error.data.message : error.data);
    } else {
        message.error("Network Error.");
    }

    // throw error; // If throw. The error will continue to be thrown.

};

// 1. Unified processing
const extendRequest = extend({ errorHandler });

// effects调用接口时一般都是异步函数, 这里使用async/await函数处理;
// 获取列表;
export const getRemoteList = async () => {
    return extendRequest('/api/users', {
        method: 'GET',
    }).then(function (response) {
        // console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        return false;
    });
}

// 修改逻辑;
export const editRecordList = async ({ id, values }) => {
    return extendRequest(`/api/users/${id}`, {
        method: 'PUT',
        data: values
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        // message.success('request editRecordList success');
        return true;
    }).catch(function (error) {
        // message.error('request delRecordList error');
        return false;
    });
}

// 删除逻辑;
export const delRecordList = async (values) => {
    return extendRequest(`/api/users/${values.id}`, {
        method: 'DELETE',
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        // message.success('request delRecordList success');
        return true;
    }).catch(function (error) {
        // message.error('request delRecordList error');
        return false;
    });
}

// 添加逻辑;
export const addRecordList = async (values) => {
    return extendRequest(`/api/users/`, {
        method: 'POST',
        data: values
    }).then(function (response) {
        // console.log(response);
        // 返回数据为空是正常的;
        // message.success('request addRecordList success');
        return true;
    }).catch(function (error) {
        // message.error('request addRecordList error');
        return false;
    });
}