import request from '../http/index';

export const login = (params) => {
    console.log(params);
    return request.post('/login', params);
};

// 更新顾客信息列表
export const getClientList = (headers) => {
    return request.get('/client/list', {
        headers:headers
    })
};

//添加顾客信息
export const postClients = (data) => {
    return request.post('/clients',data)
};