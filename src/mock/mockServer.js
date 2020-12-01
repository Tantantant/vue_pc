import Mock from 'mockjs'
import banners from './rbanners.json'
import floors from './rfloor.json'
import recommends from './todayRecommend.json'
import ranks from './rank.json'

// 一旦运行就会拦截get请求
Mock.mock('/mock/banners',"get",{
    code:200,
    "data|4":banners,
});


Mock.mock('/mock/floors',"get",{
    code:200,
    "data|3-5":floors,
});

Mock.mock('/mock/recommends',"get",{
    code:200,
    "data|5":recommends,
})

Mock.mock('/mock/ranks',"get",{
    code:200,
    "data|4":ranks,
})