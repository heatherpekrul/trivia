import User from '../user/index.vue';

export default {
  name: 'PresentationScores',
  components: {
    User,
  },
  props: {
    scores: {
      required: true,
      type: Array,
    },
  },
};