<template>
  <div class="app">
    <LoadingOverlay v-show="isLoading" />
    <Nav />
    <main class="meat">
      <transition
        name="fade-view"
        mode="out-in"
      >
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from './components/footer/index.vue';
import LoadingOverlay from './components/loading-overlay/index.vue';
import Nav from './components/nav/index.vue';
export default {
  name: 'App',
  components: {
    LoadingOverlay,
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
  computed: {
    ...mapGetters([
      'isLoading'
    ]),
  },
};
</script>

<style lang="scss">
  @import './styles/layout/index.scss';
</style>