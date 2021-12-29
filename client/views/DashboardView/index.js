import { mapActions, mapGetters } from "vuex";

export default {
  name: 'DashboardView',
  mounted() {
    this.fetchJoinedGames();
    this.fetchOwnedGames();
  },
  computed: {
    ...mapGetters('GamesModule', [
      'joinedGames',
      'ownedGames',
    ]),
  },
  methods: {
    ...mapActions('GamesModule', [
      'deleteGame',
      'fetchJoinedGames',
      'fetchOwnedGames',
      'removeJoinedGame',
    ]),
    async onDeleteGameClick(gameId) {
      await this.deleteGame(gameId);
      await this.fetchOwnedGames();
    },
    async onRemoveJoinedGameClick(gameId) {
      await this.removeJoinedGame(gameId);
      await this.fetchJoinedGames();
    }
  },
};