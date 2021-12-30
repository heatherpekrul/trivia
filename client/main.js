import Vue from 'vue';
import router from './router';
import store from './store';
import app from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
