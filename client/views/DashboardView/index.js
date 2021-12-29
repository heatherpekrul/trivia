import { mapActions, mapGetters } from "vuex";

export default {
  name: 'DashboardView',
  mounted() {
    this.fetchOwnedGames();
  },
  computed: {
    ...mapGetters('GamesModule', [
      'ownedGames',
    ]),
  },
  methods: {
    ...mapActions('GamesModule', [
      'fetchOwnedGames',
    ]),
  },
};