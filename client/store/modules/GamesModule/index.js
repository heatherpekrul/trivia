import defaultState from './default';

/* Games Module */

export default {
  namespaced: true,

  state: {
    ...defaultState(),
  },

  getters: {
    currentGame: (state) => state.currentGame,
    currentGameUsers: (state) => state.currentGameUsers,
    currentRound: (state) => state.currentRound,
    isCurrentGameTitleScreen: (state) => {
      return !state.currentGame.current_round_id
        && !state.currentGame.current_question_id
        && !state.currentGame.is_completed;
    },
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
    setCurrentGameUsers(state, users) {
      state.currentGameUsers = users;
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
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if(!response.ok) throw new Error(response.statusText);
        })
        .catch((e) => {
          throw e;
        });
    },

    /**
     * Fetch Current Round
     * @param {integer} gameId 
     */
    async fetchCurrentRound({ commit }, gameId) {
      const apiId = 'fetchCurrentRound';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/getCurrentRound/${gameId}`)
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);

          const data = response.json();
          commit('setCurrentRound', data);
        })
        .catch((e) => {
          throw e;
        });
    },

    /**
     * Fetch Joined Games
     */
    async fetchJoinedGames({ commit }) {
      const apiId = 'fetchJoinedGames';
      commit('apiCallStart', apiId, { root: true });

      await fetch('/api/getJoinedGames')
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          commit('setJoinedGames', data);
        })
        .catch((e) => {
          throw e;
        });
    },

    /**
     * Fetch Owned Games
     */
    async fetchOwnedGames({ commit }) {
      const apiId = 'fetchOwnedGames';
      commit('apiCallStart', apiId, { root: true });

      await fetch('/api/getOwnedGames')
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          commit('setOwnedGames', data);
        })
        .catch((e) => {
          throw e;
        });
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
      })
      .then((response) => {
        commit('apiCallEnd', apiId, { root: true });
        if (!response.ok) throw new Error(response.statusText);
      })
      .catch((e) => {
        throw e;
      });
    },

    /**
     * Load Current Game
     * @param {integer} gameId 
     */
    async fetchCurrentGame({ commit }, gameId) {
      const apiId = 'getCurrentGame';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/getCurrentGame/${gameId}`)
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          if (!data || data.length !== 1) throw new Error('Invalid game setup');
          commit('setCurrentGame', data[0]);
        })
        .catch((e) => {
          throw e;
        });
    },

    /**
     * Fetch Current Game Users
     * @param {integer} gameId
     */
    async fetchCurrentGameUsers({ commit }, gameId) {
      const apiId = 'getGameUsers';
      commit('apiCallStart', apiId, { root: true });

      await fetch(`/api/getGameParticipants/${gameId}`)
        .then((response) => {
          commit('apiCallEnd', apiId, { root: true });
          if (!response.ok) throw new Error(response.statusText);
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          commit('setCurrentGameUsers', data);
        })
        .catch((e) => {
          throw e;
        });
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
      })
      .then((response) => {
        commit('apiCallEnd', apiId, { root: true });
        if (!response.ok) throw new Error(response.statusText);
      })
      .catch((e) => {
        throw e;
      });
    }
  },
};