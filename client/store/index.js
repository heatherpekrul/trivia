import defaultState from './default';

/* Modules */
import AuthModule from './modules/AuthModule';
import GamesModule from './modules/GamesModule';

export default {
  state: {
    ...defaultState(),
  },

  getters: {
    test: (state) => state.test,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    setTest(state, test) {
      state.test = test;
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
};