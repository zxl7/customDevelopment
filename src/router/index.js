import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { Toast } from 'vant'

Vue.use(Toast)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
})
export default router
