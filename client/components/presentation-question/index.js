export default {
  name: 'PresentationQuestion',
  props: {
    question: {
      required: true,
      type: String,
    },
    answers: {
      required: true,
      type: Array,
    },
  },
};