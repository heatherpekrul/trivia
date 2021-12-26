import defaultState from './default';

/* Modules */
import ExampleModule from './modules/ExampleModule';

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
      dispatch('ExampleModule/reset');
    }
  },

  modules: {
    ExampleModule,
  },
};