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

/**
 *  获取首页轮播图数据
 */
export const reqGetBanners = ()=>{
    return mockrequest({
        method:"GET",
        url:"/banners"
    })
}
/**
 *  获取首页楼层数据
 */

export const reqGetFloors = ()=>{
    return mockrequest({
        method:"GET",
        url:"/floors"
    })
}