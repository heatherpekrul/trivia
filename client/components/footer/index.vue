<template>
  <footer class="footer">
    <div class="container">
      <div class="colophon">
        &copy; Copyright 2021 Heather Pekrul. All rights reserved.
      </div>

      <nav aria-label="Footer Navigation">
        <router-link :to="{ name: 'DeleteMyDataView' } " v-if="isLoggedIn">
          Delete My Data
        </router-link>
      </nav>
    </div>
  </footer>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>