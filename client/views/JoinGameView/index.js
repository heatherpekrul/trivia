import { mapActions } from "vuex";

export default {
  name: 'JoinGameView',
  data() {
    return {
      entryKey: '',
    };
  },
  methods: {
    ...mapActions('GamesModule', [
      'joinGame',
    ]),
    async onFormSubmit() {
      try {
        await this.joinGame(this.entryKey);
      } catch (e) {
        console.error(e);
      }
    },
  },
};