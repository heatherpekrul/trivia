import { mapActions } from "vuex";
import Message from '../../components/message/index.vue';

export default {
  name: 'JoinGameView',
  components: {
    Message,
  },
  data() {
    return {
      entryKey: '',
      message: false,
    };
  },
  methods: {
    ...mapActions('GamesModule', [
      'joinGame',
    ]),
    async onFormSubmit() {
      try {
        await this.joinGame(this.entryKey)
          .then((response) => {
            this.$router.push({ name: 'DashboardView' });
          })
          .catch((e) => {
            throw e;
          });
      } catch (e) {
        console.error(e);
        this.message = {
          type: 'error',
          message: 'The game code you tried was not successful.',
        };
      }
    },
  },
};