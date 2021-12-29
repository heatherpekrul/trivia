import defaultState from './default';

/* Games Module */

export default {
  namespaced: true,

  state: {
    ...defaultState(),
  },

  getters: {
    ownedGames: (state) => state.ownedGames,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    setOwnedGames(state, games) {
      state.ownedGames = games;
    },
  },

  actions: {
    reset({ commit }) {
      commit('reset');
    },
    async fetchOwnedGames({ commit }) {
      await fetch('/api/getOwnedGames', {
        method: 'GET',
      })
      .then((response) => response.text())
      .then((response) => {
        const games = JSON.parse(response);
        commit('setOwnedGames', games);
      })
      .catch((e) => console.error(e));
    },
    async fetchJoinedGames({ commit }) {
      await fetch('/api/getJoinedGames', {
        method: 'GET',
      })
      .then((response) => response.text())
      .then((response) => {
        const games = JSON.parse(response);
        commit('setJoinedGames', games);
      })
      .catch((e) => console.error(e));
    },
    async joinGame({ commit }) {

    },
  },
};