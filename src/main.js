import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import * as TastyBurgerButton from 'vue-tasty-burgers'


Vue.config.productionTip = false
Vue.use(TastyBurgerButton);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
