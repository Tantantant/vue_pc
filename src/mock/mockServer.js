import Mock from 'mockjs'
import banners from './rbanners.json'
import floors from './rfloor.json'

// 一旦运行就会拦截get请求
Mock.mock('/mock/banners',"get",{
    code:200,
    "data|4":banners,
});


Mock.mock('/mock/floors',"get",{
    code:200,
    "data|3-5":floors,
});