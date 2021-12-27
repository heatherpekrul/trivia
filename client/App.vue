<template>
  <div class="app">
    <Nav />
    <transition
      name="fade-view"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Nav from './components/nav/index.vue';
export default {
  name: 'App',
  components: {
    Nav,
  },
  mounted() {
    if (AppData && AppData.user) {
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