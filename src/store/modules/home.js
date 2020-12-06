import { BaseCategoryList, reqGetBanners, reqGetFloors, reqGetTodayRecommends, reqRank, reqBrand } from '@api/home'

export default {
    state: {
        // 初始化状态数据
        categoryListStart: [],
        banners: [], // 首页轮播图数据
        floors: [],//首页楼层数据
        todayRecommends: [], //首頁今日推薦數據
        ranks: [],//商品排行數據
        brands: [], // 商品商标数据
    },

    getters: {},

    actions: {
        async getCategoryList({ commit }) {
            const categoryList = await BaseCategoryList()
            commit("BASE_CATEGORY_LIST", categoryList)
        },

        // 輪播
        async getBanners({ commit }) {
            const banners = await reqGetBanners()
            commit("BANNERS", banners)
        },

        // 樓層
        async getFloors({ commit }) {
            const floors = await reqGetFloors()
            // console.log(floors)
            commit("FLOORS", floors)
        },

        // 今日推薦
        async getTodayRecommends({ commit }) {
            const todayRecommends = await reqGetTodayRecommends()
            commit("GET_TODAY_RECOMMENDS", todayRecommends)
        },

        // 商品排行
        async getRanks({ commit }) {
            const ranks = await reqRank()
            commit("GET_RANKS", ranks)
        },

        //商标
        async getBrands({commit}){
           const brand = await reqBrand()
           commit("GET_BRANDS",brand)
        } 
    },

    mutations: {
        BASE_CATEGORY_LIST(state, categoryList) {
            state.categoryListStart = categoryList.slice(0, 15)
        },
        // 輪播
        BANNERS(state, banners) {
            state.banners = banners
        },
        // 樓層
        FLOORS(state, floors) {
            state.floors = floors
        },
        // 今日推薦
        GET_TODAY_RECOMMENDS(state, todayRecommends) {
            state.todayRecommends = todayRecommends
        },
        // 商品排行
        GET_RANKS(state, ranks) {
            state.ranks = ranks
        },
        //商品排行
        GET_BRANDS(state,brand){
            state.brands = brand
        }
    }
}