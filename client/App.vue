<template>
  <div class="app">
    <Nav />
    <transition
      name="fade-view"
      mode="out-in"
    >
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/footer/index.vue';
import Nav from './components/nav/index.vue';
export default {
  name: 'App',
  components: {
    Footer,
    Nav,
  },
  mounted() {
    if (typeof AppData !== 'undefined' && AppData && AppData.user) {
      let userData = JSON.parse(AppData.user);
      userData = userData === {} ? null : userData;
      this.$store.commit('AuthModule/setUser', userData);
    } else {
      this.$store.commit('AuthModule/reset');
    }
  },
};
</script>

<style lang="scss">
  @import './styles/layout/index.scss';
</style>