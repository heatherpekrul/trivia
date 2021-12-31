<template>
  <div class="progress-bar">
    <div class="progress-bar__round">
      <span>Round</span> {{currentRound}}/{{ totalRounds }}
    </div>
    
    <div class="progress-bar__question" v-if="currentQuestion && totalQuestions">
      <span>?</span> {{currentQuestion}}/{{totalQuestions}}
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>