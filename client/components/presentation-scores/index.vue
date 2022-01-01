<template>
  <div class="presentation-scores">
    <h1>
      Scores
    </h1>

    <ol class="presentation-scores__list">
      <li
        v-for="(score, index) in scores"
        v-bind:key="index"
        class="presentation-scores__list__item"
      >
        <User 
          :name="score.name"
          :image_url="score.image_url"
        />

        <span class="presentation-scores__list__item__score">
          {{ score.score }}
        </span>
      </li>
    </ol>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>