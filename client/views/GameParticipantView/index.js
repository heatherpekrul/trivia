import { mapActions, mapGetters } from 'vuex';
import PresentationQuestion from '../../components/presentation-question/index.vue';
import PresentationRound from '../../components/presentation-round/index.vue';
import PresentationScores from '../../components/presentation-scores/index.vue';
import PresentationTitle from '../../components/presentation-title/index.vue';
import PresentationAnswer from '../../components/presentation-answer/index.vue';

export default {
  name: 'GameParticipantView',
  components: {
    PresentationAnswer,
    PresentationQuestion,
    PresentationRound,
    PresentationScores,
    PresentationTitle,
  },
  mounted() {
    console.info(this.$route.params);
    this.fetchCurrentGameUsers(this.$route.params.id);
  },
  data() {
    return {
      isShowAnswers: false,
    };
  },
  computed: {
    ...mapGetters('GamesModule', [
      'currentGame',
      'currentRound',
      'currentGameQuestionAnswers',
      'currentQuestion',
      'isCurrentGameQuestionScreen',
      'isCurrentGameRoundScreen',
      'isCurrentGameScoreScreen',
      'isCurrentGameTitleScreen',
    ])
  },
  methods: {
    ...mapActions('GamesModule', [
      'fetchCurrentGameUsers',
    ]),
  }
};