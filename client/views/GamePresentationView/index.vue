<template>
  <div class="game-presentation-view">
    <div class="game-presentation-view__wrapper" :class="{ 'game-presentation-view__wrapper--full' : isFullScreen}">
      <ProgressBar
        :currentRound="1"
        :totalRounds="currentGame.total_rounds"
        :currentQuestion="1"
        :totalQuestions="5"
      />
      <div class="game-presentation-view__wrapper__controls">
        <button @click="onToggleFullScreenClick()">
          Toggle Full Screen
        </button>
      </div>
      <PresentationTitle :game="currentGame" />
      <!--<PresentationRound :round="{
        name: 'Round 1',
        description: 'This is another exciting round',
      }" />-->
    </div>
  </div>
</template>

<script src="./index"></script>

<style lang="scss">
  @import './style.scss';
</style>