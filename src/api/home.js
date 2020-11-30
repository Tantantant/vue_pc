import request from '@utils/request'
import  mockrequest from "@utils/mockrequest"
/**
 * 获取首页三级分类数据
 */
export const BaseCategoryList = ()=>{
        return request({
            method:"GET",
            url:"/product/getBaseCategoryList"
        })
}

export const reqGetBanners = ()=>{
    return mockrequest({
        method:"GET",
        url:"/banners"
    })
}