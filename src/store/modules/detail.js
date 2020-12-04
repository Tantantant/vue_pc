import Vue from 'vue'
import VueRouter from 'vue-router'

import {reqGetCommodityDetails} from "@api/detail"

Vue.use(VueRouter)

export default {
    state: {
        getCommodityDetails: {
            categoryView : {},
            spuSaleAttrList : [],
            skuInfo : {}
        }
    },
    getters: {
        // categoryView:(state)=>state.getCommodityDetails.categoryView,
        // spuSaleAttrList:(state)=>state.getCommodityDetails.spuSaleAttrList,
        // skuInfo:(state)=>state.getCommodityDetails.skuInfo
        categoryView(state){
            return state.getCommodityDetails.categoryView
        },
        spuSaleAttrList(state){
            return state.getCommodityDetails.spuSaleAttrList
        },
        skuInfo(state){
            return state.getCommodityDetails.skuInfo
        }
    },
    actions: {
        async getCommodityDetails({commit},id){
           const getCommodityDetails = await reqGetCommodityDetails(id)
           commit("GET_COMMODITY_DETAILS",getCommodityDetails)
         }
    },
    mutations: {
        GET_COMMODITY_DETAILS(state,getCommodityDetails){
            state.getCommodityDetails = getCommodityDetails
        }   
    },
}