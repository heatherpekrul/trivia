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
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);

        commit('reset');
        window.location.replace('/login');
      })
      .catch((e) => {
        throw e;
      });
    },

    /**
     * Delete My Data
     */
    async deleteMyData({ commit, dispatch }) {
      const apiId = 'deleteMyData';
      commit('apiCallStart', apiId, { root: true });

      await fetch ('/api/deleteMyData', {
        method: 'POST',
      })
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);

          commit('reset');
          window.location.replace('/login');
        })
        .catch((e) => {
          throw e;
        });
    },
  },
};