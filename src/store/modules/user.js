import { reqRegister, reqLogin, reqGetSignOut } from '@api/user'

export default {
    state: {
        name: localStorage.getItem("name") || "",
        token: localStorage.getItem("token") || ""
    },
    getters: {},
    actions: {
        // 注册
        async register({ commit }, { phone, password, code }) {
            await reqRegister({ phone, password, code })
            console.log(commit)
        },
        // 登录
        async login({ commit }, { phone, password }) {
            const user = await reqLogin(phone, password)
            commit("REQ_LOGIN", user)
        },
        // 退出
        async getSignOut({ commit }) {
            await reqGetSignOut()
            commit('CLEAR_DATA')
        }
    },
    mutations: {
        REQ_LOGIN(state, user) {
            state.name = user.name,
                state.token = user.token
        },
        CLEAR_DATA(state) {
            state.name = "",
                state.token = ""
        }
    }
}