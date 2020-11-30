import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

import router from './router/index'
import store from '@store/'

// 引入mockServer 为了加载里面的代码
// 里面的代码一旦加载，就会启动mock服务器，从而拦截相应的请求
import './mock/mockServer'

import './styles/reset.css'
import './plugins/element.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
