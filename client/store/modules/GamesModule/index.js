import defaultState from './default';

/* Games Module */

export default {
  namespaced: true,

  state: {
    ...defaultState(),
  },

  getters: {
    games: (state) => state.games,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    setGames(state, games) {
      state.games = games;
    },
  },

  actions: {
    reset({ commit }) {
      commit('reset');
    },
    async fetchGames({ commit }) {
      await fetch('/api/getGames', {
        method: 'GET',
      })
      .then((response) => response.text())
      .then((response) => {
        const games = JSON.parse(response);
        commit('setGames', games);
      })
      .catch((e) => console.error(e));
    },
  },
};