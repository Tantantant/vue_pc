import request from '../utils/request'

export const Login = (phone, password) => {
    return request({
        method: 'POST',
        url: 'http://182.92.128.115/api/user/passport/login',
        data: {
            phone,
            password
        }
    })
}