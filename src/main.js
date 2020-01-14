// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  get,
  post
} from '@/config/http'
// 解决低版本兼容问题
import 'babel-polyfill'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#holder',
  router,
  components: { App },
  template: '<App/>'
})
