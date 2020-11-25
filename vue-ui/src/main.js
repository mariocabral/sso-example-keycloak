import Vue from 'vue'
import App from './App.vue'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import store from './store'

Vue.config.productionTip = false

let initOptions = {
  url: 'http://localhost:8080/auth/',
  realm: 'sso-example',
  clientId: 'vue-ui',
  onLoad:'check-sso'
}

Vue.use(VueKeyCloak, {
  config: initOptions,
  onReady: keycloak => {
    console.log(`I wonder what Keycloak returns: ${keycloak}`)
    
    new Vue({
      store,
      render: h => h(App)
    }).$mount('#app')
    
    store.commit("login", keycloak);
  }
})