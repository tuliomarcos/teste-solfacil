import Vue from 'vue'
import App from './App.vue'
import store from './js/utils/store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

console.log(process.env)
console.log(process.env.VUE_APP_BASE_URL)