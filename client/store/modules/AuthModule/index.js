import defaultState from './default';

/* Auth Module */

export default {
  namespaced: true,

  state: {
    ...defaultState(),
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    user: (state) => state.user,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    setUser(state, user) {
      state.user = user;
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
      commit('reset');
      window.location.replace('/login');
    },
    async deleteMyData({ commit, dispatch }) {
      await fetch ('/api/deleteMyData', {
        method: 'POST',
      });
      dispatch('logout');
    },
  },
};