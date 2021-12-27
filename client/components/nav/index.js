import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Nav',
  computed: {
    ...mapGetters('AuthModule', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('AuthModule', [
      'logout'
    ]),
    async onLogoutClick() {
      await this.logout();
    }
  },
};