import Vue from 'vue'
import Vuex from 'vuex'

import { BaseCategoryList } from '@api/home'

Vue.use(Vuex)

export default {
    state : {
        categoryListStart: [],
    },

    getters : {},

    actions : {
        async getCategoryList({ commit }) {
            const categoryList = await BaseCategoryList()
            commit("BASE_CATEGORY_LIST", categoryList)
        }
    },

    mutations : {
        BASE_CATEGORY_LIST(state, categoryList) {
            state.categoryListStart = categoryList
        }
    }
}