import Vue from 'vue'
import Vuex from 'vuex'

import { BaseCategoryList, reqGetBanners } from '@api/home'

Vue.use(Vuex)

export default {
    state: {
        // 初始化状态数据
        categoryListStart: [],
        banners: [] // 首页轮播图数据
    },

    getters: {},

    actions: {
        async getCategoryList({ commit }) {
            const categoryList = await BaseCategoryList()
            commit("BASE_CATEGORY_LIST", categoryList)
        },

        async getBanners({ commit }) {
            const banners = await reqGetBanners()
            console.log(banners)
            commit("BANNERS", banners)
        }
    },

    mutations: {
        BASE_CATEGORY_LIST(state, categoryList) {
            state.categoryListStart = categoryList.slice(0, 15)
        },
        BANNERS(state, banners) {
            state.banners = banners
        }
    }
}