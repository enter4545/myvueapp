import request from '../http/index'

export const getImages = () => {
    return request.post('/getImages')
}

export const deleteImages = (id, filename) => {
    return request.post('/deleteImages', null, {
        params: {
            id: id,
            filename: filename
        }
    })
}