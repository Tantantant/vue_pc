// 封装axios拦截器
import axios from 'axios';
// 引入进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入element-ui
import { Message } from 'element-ui';
// 公共资源
const instance = axios.create({
    baseURL: '/mock',
    Headers: {}
})

// 请求拦截器
// 有两个回调函数，一般只写一个回调函数（请求有多个就会写第二个回调）
// 初始化Promise.resolve(),返回默认成功的Promise，只会触发成功的回调函数
instance.interceptors.request.use((config) => {
    // config 请求的配置对象
    // 发送请求（请求参数，请求地址，请求方式）都会在config找到

    //开始进度条
    Nprogress.start()
    return config
})

// 响应拦截器
instance.interceptors.response.use(
    // 响应成功：当响应状态码为2开头
    (response) => {
        // 进度条结束
        Nprogress.done()
        // 判断code === 200
        //如果等于返回数据
        console.log(response)
        if (response.data.code === 200) {
            return response.data.data
        }
        const {message} = response.data
        // 错误提示
        Message.error(message)
        // 功能失败 返回失败的Promise
        return Promise.reject(message)
    },
    // 响应失败：响应状态码不是2开头
    (error) => {
        //进度条结束
        Nprogress.done()
        const message = error.message || "网络错误"
        // 错误提示
        Message.error(message)
        return Promise.reject(message)
    }
)

export default instance