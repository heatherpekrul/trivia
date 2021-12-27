import defaultState from './default';

export default {
  namespaced: true,

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
    reset({ commit }) {
      commit('reset');
    },
    async logout({ commit }) {
      await fetch('/api/logout', {
        method: 'POST',
      });
      window.location.replace('/login');
    },
  },
};