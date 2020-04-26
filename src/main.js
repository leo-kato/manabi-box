import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' 
import vuetify from './plugins/vuetify';
import VueQriously from 'vue-qriously';

Vue.config.productionTip = false;
Vue.use(VueQriously);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
