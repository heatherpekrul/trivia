import defaultState from './default';

/* Games Module */

export default {
  namespaced: true,

  state: {
    ...defaultState(),
  },

  getters: {
    currentGame: (state) => state.currentGame,
    currentRound: (state) => state.currentRound,
    ownedGames: (state) => state.ownedGames,
  },

  mutations: {
    reset(state) {
      Object.assign(state, defaultState());
    },
    setCurrentGame(state, game) {
      state.currentGame = game;
    },
    setCurrentRound(state, round) {
      state.currentRound = round;
    },
    setOwnedGames(state, games) {
      state.ownedGames = games;
    },
  },

  actions: {
    reset({ commit }) {
      commit('reset');
    },
    async deleteGame({}, gameId) {
      await fetch(`/api/deleteGame/${gameId}`, {
        method: 'POST',
      })
      .catch((e) => console.error(e));
    },
    async fetchCurrentRound({ commit }, gameId) {
      await fetch(`/api/getCurrentRound/${gameId}`, {
        method: 'GET',
      })
      .then((response) => {
        const round = JSON.parse(response.text());
        commit('setCurrentRound', round);
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
    async joinGame({ commit }, gameId) {
      await fetch('/api/joinGame', {
        method: 'POST',
      })
    },
  },
};