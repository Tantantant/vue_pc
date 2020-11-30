import Vue from 'vue'
import Vuex from 'vuex'

import { BaseCategoryList, reqGetBanners, reqGetFloors } from '@api/home'

Vue.use(Vuex)

export default {
    state: {
        // 初始化状态数据
        categoryListStart: [],
        banners: [], // 首页轮播图数据
        floors: [] //首页楼层数据
    },

    getters: {},

    actions: {
        async getCategoryList({ commit }) {
            const categoryList = await BaseCategoryList()
            commit("BASE_CATEGORY_LIST", categoryList)
        },

        async getBanners({ commit }) {
            const banners = await reqGetBanners()
            commit("BANNERS", banners)
        },

        async getFloors({ commit }) {
            const floors = await reqGetFloors()
            // console.log(floors)
            commit("FLOORS", floors)
        }
    },

    mutations: {
        BASE_CATEGORY_LIST(state, categoryList) {
            state.categoryListStart = categoryList.slice(0, 15)
        },
        BANNERS(state, banners) {
            state.banners = banners
        },
        FLOORS(state, floors) {
            state.floors = floors
        }

    }
}