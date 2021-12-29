import { mapGetters } from 'vuex';

import PresentationQuestion from '../../components/presentation-question/index.vue';
import PresentationRound from '../../components/presentation-round/index.vue';
import PresentationScores from '../../components/presentation-scores/index.vue';
import PresentationTitle from '../../components/presentation-title/index.vue';

export default {
  name: 'GamePresentationView',
  components: {
    PresentationQuestion,
    PresentationRound,
    PresentationScores,
    PresentationTitle,
  },
  computed: {
    ...mapGetters('GamesModule', [
      'currentGame',
    ]),
  },
};
