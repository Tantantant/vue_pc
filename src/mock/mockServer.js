import Mock from 'mockjs'
import banners from './rbanners.json'

// 一旦运行就会拦截get请求
Mock.mock('/mock/banners',"get",{
    code:200,
    "data|4":banners,
});