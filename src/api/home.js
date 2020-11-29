import request from '@utils/request'

/**
 * 获取首页三级分类数据
 */
export const BaseCategoryList = ()=>{
        return request({
            method:"GET",
            url:"/product/getBaseCategoryList"
        })
}