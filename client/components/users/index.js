import User from '../user/index.vue';

export default {
  name: 'Users',
  components: {
    User,
  },
  props: {
    users: {
      required: true,
      type: Array,
    },
  },
};