import { mapActions } from "vuex";

export default {
  name: 'DeleteMyDataView',
  methods: {
    ...mapActions('AuthModule', [
      'deleteMyData',
    ]),
    onDeleteClick() {
      this.deleteMyData();
    },
  },
};