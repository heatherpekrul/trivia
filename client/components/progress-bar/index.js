export default {
  name: 'ProgressBar',
  props: {
    currentQuestion: {
      type: Number,
    },
    currentRound: {
      required: true,
      type: Number,
    },
    totalQuestions: {
      type: Number,
    },
    totalRounds: {
      required: true,
      type: Number,
    },
  },
};