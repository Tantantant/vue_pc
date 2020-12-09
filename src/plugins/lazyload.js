import Vue from 'vue'
// 引入lazyload包
import VueLazyload from 'vue-lazyload'
// 引入图片
import lazyload from '../assets/img/lazyload.gif'

// 使用插件 
Vue.use(VueLazyload,{
    // 配置加载的图片
    loading:lazyload
})