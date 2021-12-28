<template>
  <nav class="nav">
    <router-link :to="{ name: 'DashboardView' } " class="nav__logo">
      🍑 Trivia
    </router-link>

    <router-link :to="{ name: 'JoinGameView' } " v-if="isLoggedIn">
      Join Game
    </router-link>

    <a href="#" @click.prevent="onLogoutClick()" v-if="isLoggedIn">
      Logout

      <img :src="user.image" alt="user.name" v-if="user.image" class="nav__profile-pic">
    </a>
  </nav>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>