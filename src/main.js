import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  store
}).$mount('#app')
