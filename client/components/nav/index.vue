<template>
  <nav class="nav" aria-label="Main Navigation">
    <router-link :to="{ name: 'DashboardView' } " class="nav__logo">
      🍑 Trivia
    </router-link>

    <router-link :to="{ name: 'JoinGameView' } " v-if="isLoggedIn">
      Join Game
    </router-link>

    <a href="#" @click.prevent="onLogoutClick()" v-if="isLoggedIn">
      Logout

      <img :src="user.image_url" alt="user.name" v-if="user.image_url" class="nav__profile-pic">
    </a>
  </nav>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>