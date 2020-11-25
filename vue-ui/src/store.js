import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isAuthenticated: false,
      name: "",
      lastName: "",
      roles: []
    }, 
    kc : null
  },
  mutations: {
    logout(state) {
      state.user.isAuthenticated = false;
      state.user.name = "";
      state.user.lastName = "";
      state.user.roles = [];
      state.kc = null;
    },
    login(state, kc) {
      console.log(kc)
      state.user.isAuthenticated = true;
      state.user.name = kc.tokenParsed.family_name;
      state.user.lastName = kc.tokenParsed.given_name;
      state.user.roles = kc.tokenParsed.realm_access.roles;
      state.kc = kc;
    }
  },
  actions: {
  }
})