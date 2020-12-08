import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from "@views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"
import Detail from '@views/Detail'
import AddCartSuccess from '@views/AddCartSuccess'
import ShopCart from '@views/ShopCart'
import Trade from '@views/Trade'
import Center from '@views/Center'
import Pay from '@views/Pay'
import PaySuccess from '@views/PaySuccess'


// 重写$router中push和replace方法
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace
VueRouter.prototype.push = function (localtion, onComplate, onAbort) {
    if (onComplate, onAbort) {
        return push.call(this, localtion, onComplate, onAbort)
    }
    return push.call(this, localtion, onComplate, () => { })
}
VueRouter.prototype.replace = function (localtion, onComplate, onAbort) {
    if (onComplate, onAbort) {
        return replace.call(this, localtion, onComplate, onAbort)
    }
    return replace.call(this, location, onComplate, () => { })
}


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 首页
        {
            path: '/',
            component: Home,
        },
        // 登录
        {
            path: '/login',
            component: Login,
            meta: {
                isFooterHide: true
            }
        },
        // 注册
        {
            path: '/register',
            component: Register,
            meta: {
                isFooterHide: true,
            }
        },
        // 搜索
        {
            name: 'search',
            path: '/search/:searchText?',
            component: Search
        },
        // 商品展示
        {
            name: 'detail',
            path: '/detail/:id',
            component: Detail
        },
        // 添加成功
        {
            name:"addcartsuccess",
            path:"/addcartsuccess",
            component:AddCartSuccess
        },
        // 购物车
        {
            name:"shopcart",
            path:"/shopcart",
            component:ShopCart
        },
        // 结算
        {
            name:"trade",
            path:"/trade",
            component:Trade
        },
        // 立即支付
        {
            name:"pay",
            path:"/pay",
            component:Pay
        },
        // 支付成功
        {
            name:"paysuccess",
            path:"/paysuccess",
            component:PaySuccess
        },
        // 查看订单
        {
            name:"center",
            path:"/center/myorder",
            component:Center
        },

    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

// 在没有登录时不能访问一下页面
// 将没有登录不能访问的页面保存起来
const permissionPaths = ['/trade','/pay','/center']
// 路由导航守卫
router.beforeEach((to,from,next)=>{
    // 如果跳转的页面路径包含访问的路径， 并且没有token的时候 跳转到login页面
    if(permissionPaths.indexOf(to.path) > -1 && !store.state.user.token){
        return next('/login')
    }
   next()
})

export default router
