<template>
  <div class="footer">
    <div class="container">
      &copy; Copyright 2021 Heather Pekrul. All rights reserved.

      <nav>
        <router-link :to="{ name: 'DeleteMyDataView' } " v-if="isLoggedIn">
          Delete My Data
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>