<template>
  <div class="presentation-title">
    <h1 v-if="game.name" class="presentation-title__heading">
      {{ game.name }}
    </h1>

    <h2 v-if="game.description" class="presentation-title__subheading">
      {{ game.description }}
    </h2>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>