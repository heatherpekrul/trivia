import { mapActions } from 'vuex';
import Message from '../../components/message/index.vue';

export default {
  name: 'DeleteMyDataView',
  components: {
    Message,
  },
  data() {
    return {
      message: false,
    };
  },
  methods: {
    ...mapActions('AuthModule', [
      'deleteMyData',
    ]),
    onDeleteClick() {
      this.deleteMyData()
        .catch((e) => {
          console.error(e);
          this.message = {
            type: 'error',
            message: 'Your data could not be deleted. Please try again.',
          };
        });
    },
  },
};