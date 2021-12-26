<template>
  <div id="app">
    <transition
      name="fade-view"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
  @import './styles/layout/index.scss';
</style>