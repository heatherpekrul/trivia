import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './default';

/* Modules */
import AuthModule from './modules/AuthModule';
import GamesModule from './modules/GamesModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ...defaultState(),
  },

  getters: {
    isLoading: (state) => state.apiCalls.length > 0,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    apiCallStart(state, apiId) {
      state.apiCalls.push(apiId);
    },
    apiCallEnd(state, apiId) {
      state.apiCalls = state.apiCalls.filter((i) => i != apiId);
    },
  },

  actions: {
    reset({ dispatch, commit }) {
      commit('reset');
      dispatch('AuthModule/reset');
      dispatch('GamesModule/reset');
    }
  },

  modules: {
    AuthModule,
    GamesModule,
  },
});

export default store;