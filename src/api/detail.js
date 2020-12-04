import request from '@utils/request'

// 请求商品详情
export const reqGetCommodityDetails = (id) =>{
    return request({
        method:"GET",
        url:`/item/${id}`
    })
}