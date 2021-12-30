export default {
  name: 'User',
  props: {
    name: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
};