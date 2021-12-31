<template>
  <div class="presentation-question">
    <h1>
      {{ question }}
    </h1>

    <ol type="A">
      <li v-for="(option, index) in answers" v-bind:key="index">
        {{ option.answer }}
      </li>
    </ol>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>