<template>
  <div class="game-participant-view container">
    game participant view

    <PresentationTitle
      v-if="isCurrentGameTitleScreen"
      :game="currentGame" 
    />

    <PresentationRound
      v-if="isCurrentGameRoundScreen"
      :round="currentRound"
    />

    <PresentationScores
      v-if="isCurrentGameScoreScreen"
      :isFinal="currentGame.is_completed"
      :scores="currentScores"
    />

    <PresentationQuestion
      v-if="isCurrentGameQuestionScreen"
      :question="currentQuestion"
      :answers="currentGameQuestionAnswers"
      :showCorrectAnswer="isShowAnswers"
    />

  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
  @import './style.scss';
</style>