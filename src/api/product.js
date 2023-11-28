import request from '../http/index'

export const getprolist = () => {
    return request.post('/carlist')
}

export const addproduct = (form) => {
    return request.post('/addCar',form)
}

export const deleteproduct = (id) => {
    return request.post('/deleteCar', null, {
        params: {
            id:id
        }
    })
}