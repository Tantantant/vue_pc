import request from '@utils/request'

export const reqGetProduction = (data) => {
    return request({
        method: "POST",
        url: '/list',
        data,
    })
}