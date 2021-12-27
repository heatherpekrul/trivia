<template>
  <nav class="nav">
    <router-link :to="{ name: 'DashboardView'}">
      Trivia
    </router-link>

    <a href="#" @click.prevent="onLogoutClick()" v-if="isLoggedIn">
      Logout
    </a>
  </nav>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>