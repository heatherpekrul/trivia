<template>
  <div class="presentation-question">
    <h1 class="presentation-question__question">
      {{ question.question }}
    </h1>

    <ol type="A" class="presentation-question__options">
      <li
        v-for="(option, index) in answers"
        v-bind:key="index"
        class="presentation-question__options__option"
        :class="{ correct: showCorrectAnswer && option.is_correct }"
      >
        {{ option.answer }}
      </li>
    </ol>

    <img
      v-if="question.image_url"
      :src="question.image_url"
      :alt="question.question"
    >
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>