<template>
    <span class="presentation-answer" v-bind:key="answer.id" @click="onClickAnswer(answer.id)">
        {{ answer.answer }}
    </span>
</template>
  
<script src="./index.js"></script>
  
<style lang="scss">
@import './style.scss';
</style>