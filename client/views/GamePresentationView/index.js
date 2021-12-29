import { mapGetters } from 'vuex';
import PresentationQuestion from '../../components/presentation-question/index.vue';
import PresentationRound from '../../components/presentation-round/index.vue';
import PresentationScores from '../../components/presentation-scores/index.vue';
import PresentationTitle from '../../components/presentation-title/index.vue';
import ProgressBar from '../../components/progress-bar/index.vue';

export default {
  name: 'GamePresentationView',
  components: {
    PresentationQuestion,
    PresentationRound,
    PresentationScores,
    PresentationTitle,
    ProgressBar,
  },
  computed: {
    ...mapGetters('GamesModule', [
      'currentGame',
    ]),
  },
};
