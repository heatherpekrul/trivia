<template>
  <div class="game-presentation-view">
    <div class="game-presentation-view__wrapper">
      <ProgressBar />
      <!-- <PresentationTitle :game="currentGame" /> -->
      <PresentationRound :round="{
        name: 'Round 1',
        description: 'This is another exciting round',
      }" />
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss">
  @import './style.scss';
</style>