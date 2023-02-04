import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  // template:`<App></App>`,
  router,
  render: h => h(App),
}).$mount('#app')
                                                                                 