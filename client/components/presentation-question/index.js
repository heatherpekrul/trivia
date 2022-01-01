export default {
  name: 'PresentationQuestion',
  props: {
    question: {
      required: true,
      type: Object,
    },
    answers: {
      required: true,
      type: Array,
    },
  },
};