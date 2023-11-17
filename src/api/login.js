import request from '../http/index';

export const login = (params) => {
    console.log(params);
    return request.post('/login', params);
};

// 更新顾客信息列表
export const getClientList = () => {
    return request.get('/client/list')
};

//添加顾客信息
export const postClients = (data) => {
    return request.post('/clients',data)
};