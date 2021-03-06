import Vue from 'vue'
import App from './App.vue'
import store from './js/utils/store/store'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')