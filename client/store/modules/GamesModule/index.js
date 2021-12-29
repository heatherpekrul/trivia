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
    async deleteGame({}, gameId) {
      await fetch(`/api/deleteGame/${gameId}`, {
        method: 'POST',
      })
      .catch((e) => console.error(e));
    },

    /**
     * Fetch Current Round
     * @param {integer} gameId 
     */
    async fetchCurrentRound({ commit }, gameId) {
      await fetch(`/api/getCurrentRound/${gameId}`)
      .then((response) => response.json())
      .then((data) => {
        commit('setCurrentRound', data);
      })
      .catch((e) => console.error(e));
    },

    /**
     * Fetch Joined Games
     */
    async fetchJoinedGames({ commit }) {
      await fetch('/api/getJoinedGames')
      .then((response) => response.json())
      .then((data) => {
        const games = data;
        commit('setJoinedGames', games);
      })
      .catch((e) => console.error(e));
    },

    /**
     * Fetch Owned Games
     */
    async fetchOwnedGames({ commit }) {
      await fetch('/api/getOwnedGames')
      .then((response) => response.json())
      .then((data) => {
        const games = data;
        commit('setOwnedGames', games);
      })
      .catch((e) => console.error(e));
    },

    /**
     * Join Game
     * @param {string} entryKey 
     */
    async joinGame({ }, entryKey) {
      const entryKeyRegex = new RegExp('^[A-Za-z0-9_]*$', 'g');
      if (!entryKeyRegex.test(entryKey)) throw new Error('Invalid entry key');

      await fetch(`/api/joinGame/${entryKey}`, {
        method: 'POST',
      });
    },

    /**
     * Remove Joined Game
     * @param {integer} gameId 
     */
    async removeJoinedGame({}, gameId) {
      await fetch(`/api/removeJoinedGame/${gameId}`, {
        method: 'POST',
      });
    }
  },
};