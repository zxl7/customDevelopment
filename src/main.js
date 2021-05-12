import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from './api/api.js'
import common from './unit/common.js'
import rem from './unit/rem.js'
import '@vant/touch-emulator'
import { Field, Icon, Popup, Picker, Uploader, Calendar, Toast, Loading, Dialog } from 'vant'
import '@byzanteam/slp-fields/dist/index.css'

Vue.use(Loading)
Vue.use(Toast)
Vue.use(Uploader)
Vue.use(Field)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Calendar)
Vue.use(Dialog)
Vue.use(Api)
Vue.use(common)

Vue.config.productionTip = false
Vue.prototype.common = common
Vue.prototype.Api = Api

new Vue({
  router,
  rem,
  render: (h) => h(App),
}).$mount('#app')
