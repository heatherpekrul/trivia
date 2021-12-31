import { mapActions, mapGetters } from 'vuex';
import PresentationQuestion from '../../components/presentation-question/index.vue';
import PresentationRound from '../../components/presentation-round/index.vue';
import PresentationScores from '../../components/presentation-scores/index.vue';
import PresentationTitle from '../../components/presentation-title/index.vue';
import ProgressBar from '../../components/progress-bar/index.vue';
import UsersBar from '../../components/users-bar/index.vue';

export default {
  name: 'GamePresentationView',
  components: {
    PresentationQuestion,
    PresentationRound,
    PresentationScores,
    PresentationTitle,
    ProgressBar,
    UsersBar,
  },
  mounted() {
    this.fetchCurrentGameUsers(this.$route.params.id);
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  computed: {
    ...mapGetters('GamesModule', [
      'currentGame',
      'currentGameUsers',
      'currentRound',
      'isCurrentGameQuestionScreen',
      'isCurrentGameRoundScreen',
      'isCurrentGameTitleScreen',
    ]),
  },
  methods: {
    ...mapActions('GamesModule', [
      'fetchCurrentGameUsers',
      'progressGame',
    ]),

    async onNextClick() {
      await this.progressGame(this.$route.params.id)
      .catch((e) => {
        console.error(e);
      });
    },

    onToggleFullScreenClick() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
