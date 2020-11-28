// 封装axios拦截器
import axios from "axios"

const instance = axios.create({
    // 当前服务器的地址
    baseURL: '/api' // 公共基础路径
})

instance.interceptors.request.use(
    // 请求的配置对象
    // 将来的发送请求（请求地址，请求方式，请求参数）都会在config中找到
    (config) => {
        return config
    }
)

instance.interceptors.response.use((response) => {
    // 成功返回成功的data数据
    if (response.data.code === 200) {
        return response.data.data
    }
    // console.log(response.data)
    return Promise.reject(response.data.message)
},
    (error) => {
        const message = error.message || "网络错误"
        return Promise.reject(message)
    }
)


export default instance