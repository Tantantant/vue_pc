import { reqGetMyOrderList } from '@api/pay' // 订单列表

export default {
    state: {
        orderList: {}
    },
    getters: {
        // createTime:(state)=>state.orderList.
    },
    actions: {
        async getMyOrderList({ commit }, { page, limit }) {
            console.log(page,limit)
            await reqGetMyOrderList(page, limit)
            console.log(commit)
        }
    },
    mutations: {}
}