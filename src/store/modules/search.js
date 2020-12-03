import Vue from 'vue'
import Vuex from 'vuex'

import { reqGetProduction } from "@api/search"

Vue.use(Vuex)

export default {
    state: {
        production: {
            trademarkList: [],
            attrsList: [],
            goodsList: []
        }
    },
    getters: {
        trademarkList: (state) => state.production.trademarkList,
        attrsList: (state) => state.production.attrsList,
        goodsList: (state) => state.production.goodsList,
        total:(state) => state.production.total
    },
    actions: {
        async getProduction({ commit }, data = {}) {
            const getProduction = await reqGetProduction(data)
            commit("GET_PRODUCTION", getProduction)
        }
    },
    mutations: {
        GET_PRODUCTION(state, getProduction) {
            state.production = getProduction
        }
    }
}
