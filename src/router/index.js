import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"

const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace
VueRouter.prototype.push = function (localtion, onComplate, onAbort) {
    if (onComplate, onAbort) {
        return push.call(this, localtion, onComplate, onAbort)
    }
    return push.call(this, localtion, onComplate, () => { })
}
VueRouter.prototype.replace = function (localtion, onComplate, onAbort) {
    if (localtion, onComplate, onAbort) {
        return replace.call(this, localtion, onComplate, onAbort)
    }
    return replace.call(this, localtion, onComplate)
}

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isFooterHide: true,
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isFooterHide: true,
            }
        },
        {
            name: 'search',
            path: '/search/:searchText?',
            component: Search
        },
    ]
})
