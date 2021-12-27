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
  }
};
</script>

<style lang="scss">
  @import './styles/layout/index.scss';
</style>