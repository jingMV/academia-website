import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

import vueCarousel from 'vue-carousel'
Vue.use(vueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
