import { mapActions } from 'vuex';

export default {
  name: 'Nav',
  methods: {
    ...mapActions('AuthModule', [
      'logout'
    ]),
    async onLogoutClick() {
      await this.logout();
    }
  },
};