import Vue from 'vue';
import Vuex from 'vuex';
import router from './router/router';
import store from './store';
import app from './App.vue';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  router,
  store: new Vuex.Store(store),
  render: (h) => h(app),
}).$mount('#app');