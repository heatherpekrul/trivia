import { mapActions, mapGetters } from "vuex";

export default {
  name: 'DashboardView',
  mounted() {
    this.fetchGames();
  },
  computed: {
    ...mapGetters('GamesModule', [
      'games',
    ]),
  },
  methods: {
    ...mapActions('GamesModule', [
      'fetchGames',
    ]),
  },
};