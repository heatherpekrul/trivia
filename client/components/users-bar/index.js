import User from '../user/index.vue';

const maxUsers = 20;

export default {
  name: 'UsersBar',
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