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
      isShowAnswers: false,
    };
  },
  computed: {
    ...mapGetters('GamesModule', [
      'currentGame',
      'currentGameQuestionAnswers',
      'currentGameUsers',
      'currentQuestion',
      'currentRound',
      'currentScores',
      'isCurrentGameQuestionScreen',
      'isCurrentGameRoundScreen',
      'isCurrentGameScoreScreen',
      'isCurrentGameTitleScreen',
    ]),
  },
  methods: {
    ...mapActions('GamesModule', [
      'fetchCurrentGameUsers',
      'progressGame',
      'regressGame',
    ]),

    async onBackClick() {
      await this.regressGame(this.$route.params.id)
      .then(() => {
        this.isShowAnswers = false;
      })
      .catch((e) => {
        console.error(e);
      });
    },

    async onNextClick() {
      await this.progressGame(this.$route.params.id)
      .then(() => {
        this.isShowAnswers = false;
      })
      .catch((e) => {
        console.error(e);
      });
    },

    onToggleFullScreenClick() {
      this.isFullScreen = !this.isFullScreen;
    },

    onToggleShowAnswersClick() {
      this.isShowAnswers = !this.isShowAnswers;
    },
  },
};
