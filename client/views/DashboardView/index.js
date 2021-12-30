import { mapActions, mapGetters } from "vuex";

export default {
  name: 'DashboardView',
  mounted() {
    this.fetchJoinedGames()
      .catch((e) => {
        console.error(e);
      });

    this.fetchOwnedGames()
      .catch((e) => {
        console.error(e);
      });
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
      'fetchCurrentGame',
      'fetchJoinedGames',
      'fetchOwnedGames',
      'removeJoinedGame',
    ]),

    async onDeleteGameClick(gameId) {
      await this.deleteGame(gameId)
        .catch((e) => console.error(e));

      await this.fetchOwnedGames()
        .catch((e) => console.error(e));
    },

    async onRemoveJoinedGameClick(gameId) {
      await this.removeJoinedGame(gameId)
        .catch((e) => console.error(e));

      await this.fetchJoinedGames()
        .catch((e) => console.error(e));
    },

    onResumeStartGameClick(gameId) {
      this.$router.push({ name: 'GamePresentationView', params: { id: gameId } });
    },
  },
};