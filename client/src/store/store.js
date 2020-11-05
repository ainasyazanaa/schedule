import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		token: null,
		patient: null,
		isPatientLoggedIn: false
	},
	mutations: {
		setToken (state, token){
		 state.token = token
		 if (token) {
			 state.isPatientLoggedIn = true
		 } else {
			 state.isPatientLoggedIn = false
		 }
		},
		setPatient (state, patient){
			state.patient = patient
		   }
	},
	actions: {
		setToken ({commit}, token) {
			commit('setToken', token)
		},
		setPatient ({commit}, patient) {
			commit('setPatient', patient)
		}
	}
})