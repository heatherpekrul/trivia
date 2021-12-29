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

    /**
     * Logout
     */
    async logout({ commit }) {
      await fetch('/api/logout', {
        method: 'POST',
      });
      commit('reset');
      window.location.replace('/login');
    },

    /**
     * Delete My Data
     */
    async deleteMyData({ dispatch }) {
      const apiId = 'deleteMyData';
      commit('apiCallStart', apiId, { root: true });

      await fetch ('/api/deleteMyData', {
        method: 'POST',
      });

      commit('apiCallEnd', apiId, { root: true });
      dispatch('logout');
    },
  },
};