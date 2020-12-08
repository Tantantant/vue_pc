import {
    reqGetCartList, // 购物车列表
    reqUpdateCartCount, // 添加,减少购物车数量
    reqGetShopChecked,   // 切换商品数据
    reqDelCart //删除商品数据
} from "@api/cartShop"

export default {
    state: {
        cartList: []
    },
    getters: {
        cartListLength:(state)=>state.cartList.length
    },
    actions: {
        // 购物车列表
        async getCartList({ commit }) {
            const cartList = await reqGetCartList()
            commit("REQ_GET_CART_LIST", cartList)
        },
        // 添加购物车
        async updateCartCount({ commit }, { skuId, skuNum }) {
            await reqUpdateCartCount(skuId, skuNum)
            commit("REQ_UPDATE_CARTCOUNT", { skuId, skuNum })
        },
        // 切换商品
        async updateCartCheck({ commit }, { skuId, isChecked }) {
            console.log(skuId,isChecked)
            // 发送请求跟新服务器数据
            await reqGetShopChecked({skuId, isChecked})
            console.log(commit)
        },
        async delCart({commit},skuid){
           await reqDelCart(skuid)
            commit("REQ_DELCART",skuid)
        }
    },
    mutations: {
        REQ_GET_CART_LIST(state, cartList) {
            state.cartList = cartList
        },
        REQ_UPDATE_CARTCOUNT(state, { skuId, skuNum }) {
            state.cartList = state.cartList.map((cart) => {
                if (cart.skuId === skuId) {
                    cart.skuNum += skuNum
                }
                return cart
            })
        },  
        REQ_DELCART(state,skuid){
            state.cartList = state.cartList.filter((item)=>item.skuId !== skuid)
        }
    }
}