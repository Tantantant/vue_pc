import request from "@utils/request"

// 封装一个发送请求的功能函数
export const Login = (phone,password)=>{
    // 将request的返回值返回出去
    // 外面可以接收到request的返回值（Promise对象）
    return request({
        method:"POST",
        url:"http://182.92.128.115/api/user/passport/login",
        data:{
            // 放置请求体参数，通常post请求
            phone,
            password
        }
        // params :{} // 放置查询字符串参数，通常get请求
    })
}