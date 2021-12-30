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
    joinedGames: (state) => state.joinedGames,
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
    setJoinedGames(state, games) {
      state.joinedGames = games;
    },
    setOwnedGames(state, games) {
      state.ownedGames = games;
    },
  },

  actions: {
    /**
     * Reset
     */
    reset({ commit }) {
      commit('reset');
    },

    /**
     * Delete Game
     * @param {integer} gameId 
     */
    async deleteGame({ commit }, gameId) {
      const apiId = 'deleteGame';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/deleteGame/${gameId}`, {
          method: 'POST',
        })
        .catch((e) => console.error(e));

      commit('apiCallEnd', apiId, { root: true });
    },

    /**
     * Fetch Current Round
     * @param {integer} gameId 
     */
    async fetchCurrentRound({ commit }, gameId) {
      const apiId = 'fetchCurrentRound';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/getCurrentRound/${gameId}`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCurrentRound', data);
        })
        .catch((e) => console.error(e));

      commit('apiCallEnd', apiId, { root: true });
    },

    /**
     * Fetch Joined Games
     */
    async fetchJoinedGames({ commit }) {
      const apiId = 'fetchJoinedGames';
      commit('apiCallStart', apiId, { root: true });

      await fetch('/api/getJoinedGames')
        .then((response) => response.json())
        .then((data) => {
          const games = data;
          commit('setJoinedGames', games);
        })
        .catch((e) => console.error(e));

      commit('apiCallEnd', apiId, { root: true });
    },

    /**
     * Fetch Owned Games
     */
    async fetchOwnedGames({ commit }) {
      const apiId = 'fetchOwnedGames';
      commit('apiCallStart', apiId, { root: true });

      await fetch('/api/getOwnedGames')
        .then((response) => response.json())
        .then((data) => {
          const games = data;
          commit('setOwnedGames', games);
        })
        .catch((e) => console.error(e));

      commit('apiCallEnd', apiId, { root: true });
    },

    /**
     * Join Game
     * @param {string} entryKey 
     */
    async joinGame({ commit }, entryKey) {
      const apiId = 'joinGame';
      commit('apiCallStart', apiId, { root: true });

      const entryKeyRegex = new RegExp('^[A-Za-z0-9_]*$', 'g');
      if (!entryKeyRegex.test(entryKey)) throw new Error('Invalid entry key');

      await fetch(`/api/joinGame/${entryKey}`, {
        method: 'POST',
      });

      commit('apiCallEnd', apiId, { root: true });
    },

    /**
     * Remove Joined Game
     * @param {integer} gameId 
     */
    async removeJoinedGame({ commit }, gameId) {
      const apiId = 'removeJoinedGame';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/removeJoinedGame/${gameId}`, {
        method: 'POST',
      });

      commit('apiCallEnd', apiId, { root: true });
    }
  },
};