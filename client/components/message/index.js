export default {
  name: 'Message',
  props: {
    type: {
      required: true,
      type: String,
      validator(value) {
        return ['error'].indexOf('value') !== '-1';
      },
    }
  },
};