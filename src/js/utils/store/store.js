import Vue from 'vue'
import Vuex from 'vuex'
import * as formalization from './modules/formalization'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		formalization,
    }
})