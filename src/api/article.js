import request from '../http/index';

export const addArticle = (body) => {
    return request.post('/addArticle', body);
};

export const getArticle = (category) => {
    console.log(category)
    return request.post('/getArticle', null, {
        params: {
            category: category
        }
    });
};

export const getDetail = (id) => {
    return request.post('/getDetail', null, {
        params: {
            id: id
        }
    })
}

export const deleteArticle = (id) => {
    return request.post('/deleteArticle', null, {
        params: {
            id: id
        }
    })
}