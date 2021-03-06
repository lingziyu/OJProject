import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      role:0,
      token: '',
      uid: ''
    }
  },
  mutations: {
    setToken(state, token){
      state.user.token = token;
    },
    setUID(state,uid){
      state.user.uid = uid;
    },
    setRole(state,role){
      state.user.role = role;
    },
    reset(){
      state.token = '';
    }
  },
  actions: {

  }
})
