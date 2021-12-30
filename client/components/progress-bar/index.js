export default {
  name: 'ProgressBar',
  props: {
    currentQuestion: {
      required: true,
      type: Number,
    },
    currentRound: {
      required: true,
      type: Number,
    },
    totalQuestions: {
      required: true,
      type: Number,
    },
    totalRounds: {
      required: true,
      type: Number,
    },
  },
};