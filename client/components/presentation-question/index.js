import PresentationAnswer from '../presentation-answer/index.vue';

export default {
  name: 'PresentationQuestion',
  components: {
    PresentationAnswer,
  },
  props: {
    question: {
      required: true,
      type: Object,
    },
    answers: {
      required: true,
      type: Array,
    },
    showCorrectAnswer: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
};