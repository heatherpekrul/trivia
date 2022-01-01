import User from '../user/index.vue';

export default {
  name: 'PresentationScores',
  components: {
    User,
  },
  props: {
    isFinal: {
      default: false,
    },
    scores: {
      required: true,
      type: Array,
    },
  },
};