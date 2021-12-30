export default {
  name: 'LoginView',
  mounted() {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '329235712483-f2isifu37ih9eguiaha6aoe4hgeafkh3.apps.googleusercontent.com',
        auto_prompt: false,
        callback: this.loginCallback,
      });
      // window.google.accounts.id.prompt();
      window.google.accounts.id.renderButton(this.$refs.googlesignin, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
        text: 'sign_in_with',
        shape: 'rectangular',
        logo_alignment: 'left',
        width: 250,
        height: 50,
      });
     }
  },
  methods: {
    async loginCallback(googleRes) {
      await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(googleRes),
      })
        .then((res) => {
          window.location.replace('/');
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
