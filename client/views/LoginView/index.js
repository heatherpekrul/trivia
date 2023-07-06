export default {
  name: 'LoginView',
  mounted() {

    this.$nextTick(() => {
      setTimeout(() => {

        if (window.google) {
          console.info(this.loginCallback);
          window.google.accounts.id.initialize({
            // client_id: process.env.GOOGLE_CLIENT_ID,
            client_id: '1013810739500-hgp5158112t7rfivrsorcgem5q8driid.apps.googleusercontent.com',
            auto_prompt: false,
            callback: this.loginCallback
          });
          // window.google.accounts.id.prompt();
          window.google.accounts.id.renderButton(this.$refs.googlesignin, {
            type: 'standard',
            theme: 'outline',
            size: 'large',
            text: 'sign_in_with',
            shape: 'rectangular',
            logo_alignment: 'left',
            /* width: 250,
            height: 50, */
          });
        } else {
          console.error('No google available');
        }
      }, 1000)
    });

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
